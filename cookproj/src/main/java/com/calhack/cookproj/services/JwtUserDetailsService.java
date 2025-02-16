package com.calhack.cookproj.services;

import com.calhack.cookproj.models.User;
import com.calhack.cookproj.repositories.UserRepository;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        GrantedAuthority authority = new SimpleGrantedAuthority(user.getRole().name());

        return new org.springframework.security.core.userdetails.User(user.getUsername(),
                new BCryptPasswordEncoder().encode(user.getPassword()), Collections.singletonList(authority));
    }

    public User createNewUser(String username) {
        User newUser = new User();
        newUser.setUsername(username);
        newUser.setRegistrationToken(generateRegToken());
        newUser.setPassword(generateRandomPassword());
        return userRepository.save(newUser);
    }

    public User save(String username, String password, User.UserRole role) {
       User newUser = new User();
        newUser.setUsername(username);
        newUser.setPassword(password);
        newUser.setRole(role);
        // TODO: set the other user parameters
        return userRepository.save(newUser);
    }

    private String generateRegToken(){
        String token ="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm1234567890";
        List<Character> characters = new ArrayList<Character>();
        for(char c: token.toCharArray()){
            characters.add(c);
        }
        StringBuilder output = new StringBuilder(token.length());

        while(characters.size()!=0){
            int randPicker = (int)(Math.random()*characters.size());
            output.append(characters.remove(randPicker));
        }
        return output.toString();
    }
    private String generateRandomPassword() {
        char[] possibleCharacters = (new String("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$()?")).toCharArray();
        String randomPassword = RandomStringUtils.random(15, 0, possibleCharacters.length-1, false, false, possibleCharacters, new SecureRandom());
        return randomPassword;
    }
}
