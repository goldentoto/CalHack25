package com.calhack.cookproj.configs;

import com.calhack.cookproj.models.User;
import com.calhack.cookproj.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BootstrapRunner implements CommandLineRunner {

    private final UserRepository userRepository;
    @Autowired
    public BootstrapRunner(UserRepository userRepository) { this.userRepository = userRepository; }

    @Override
    public void run(String ... args) throws Exception {
        String adminUsername = "CookingAdmin";
        String adminPassword = "Un4tyoun8m8!";

        User user = userRepository.findByUsername(adminUsername);

        if (user == null) {
            User newUser = new User();
            newUser.setUsername(adminUsername);
            newUser.setPassword(adminPassword);
            newUser.setAccounttype(3);
            userRepository.save(newUser);
            System.out.println("Admin user created!");
        } else if (!user.getPassword().equals(adminPassword)) {
            userRepository.delete(user);
            User newUser = new User();
            newUser.setUsername(adminUsername);
            newUser.setPassword(adminPassword);
            newUser.setAccounttype(3);
            userRepository.save(newUser);
            System.out.println("Admin user updated!");
        } else {
            System.out.println("User already exists!");
        }
    }
}
