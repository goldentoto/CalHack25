package com.calhack.cookproj.controllers;

import com.calhack.cookproj.models.JwtRequest;
import com.calhack.cookproj.models.JwtResponse;
import com.calhack.cookproj.models.User;
import com.calhack.cookproj.repositories.UserRepository;
import com.calhack.cookproj.security.JwtTokenUtil;
import com.calhack.cookproj.services.JwtUserDetailsService;
//import com.calhack.cookproj.services.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@CrossOrigin(origins = "*")
public class JwtAuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @Autowired
    private UserRepository userRepository;

//    @Autowired
//    private MailService mailService;

    //@PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value = "/auth/createUser", method = RequestMethod.POST)
    public ResponseEntity<?> createNewUser(@RequestBody Map<String, String> requestBody) throws Exception {
        String userEmail = requestBody.get("email");

        // TODO: checker for creating user with existing email, breaks website need to fix eventually
//      if(userDetailsService.loadUserByUsername(userEmail).getUsername().matches(userEmail))
//          return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("User already created using that name");

        User newUser = userDetailsService.createNewUser(userEmail);
        if(newUser == null || newUser.getUserid() == null) return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unable to create a new user");

//        try{
//            //String sendingRes = mailService.sendConfirmationMail(newUser);
        return ResponseEntity.ok(newUser);
//        }catch(Exception e){
//            e.printStackTrace();
//            // TODO: delete created new user
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unable to send confirmation email");
//        }
    }

    @RequestMapping(value = "/auth/set_user_password", method = RequestMethod.POST)
    public ResponseEntity<?> setUserPassword(@RequestBody Map<String, String> requestBody) throws Exception {

        String id = requestBody.get("id");
        String token = requestBody.get("token");
        String password = requestBody.get("password");
        String confirmedPassword = requestBody.get("confirmedPassword");

        User user = userRepository.findById(Long.valueOf(id)).get();
        if(user == null || !token.equals(user.getRegistrationToken())) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("The link is outdated or user does not exists");
        if(!password.equals(confirmedPassword)) return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Password and its confirmation must match");

        user.setPassword(password);
        user.setRole(User.UserRole.USER);
        user.setRegistrationToken(null);

        return ResponseEntity.ok(userRepository.save(user));
    }

    @RequestMapping(value = "/auth/login", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        User newUser = userRepository.findByUsername(authenticationRequest.getUsername());
        if(newUser.getRegistrationToken() != null && newUser.getPassword().equals(authenticationRequest.getPassword()))
            return ResponseEntity.ok(newUser);
        else {
            authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

            final UserDetails userDetails = userDetailsService
                    .loadUserByUsername(authenticationRequest.getUsername());

            final String token = jwtTokenUtil.generateToken(userDetails);

            return ResponseEntity.ok(new JwtResponse(token, authenticationRequest.getUsername(), userDetails.getAuthorities()));
        }
    }


//    @RequestMapping(value = "/auth/register", method = RequestMethod.POST)
//    public ResponseEntity<?> saveUser(@RequestBody Map<String, String> requestBody) throws Exception {
//        String username = requestBody.get("username");
//        String password = requestBody.get("password");
//        String confirmedPassword = requestBody.get("confirmedPassword");
//
//        if(password.equals(confirmedPassword)){
//            return ResponseEntity.ok(userDetailsService.save(username, password, User.UserRole.USER));
//        }else{
//            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Password and its confirmation must match");
//        }
//    }

    private void authenticate(String name, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(name, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}