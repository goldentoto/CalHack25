package com.calhack.cookproj.configs;

import com.calhack.cookproj.models.ClassInfo;
import com.calhack.cookproj.models.Location;
import com.calhack.cookproj.models.User;
import com.calhack.cookproj.repositories.LocationRepository;
import com.calhack.cookproj.repositories.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BootstrapRunner implements CommandLineRunner {

    private final UserRepository userRepository;
    private final LocationRepository locationRepository;

    @Autowired
    public BootstrapRunner(UserRepository userRepository, LocationRepository locationRepository) { this.userRepository = userRepository;
        this.locationRepository = locationRepository;
    }

    @Override
    public void run(String ... args) throws Exception {
        String adminUsername = "CookingAdmin";
        String adminPassword = "Un4tyoun8m8!";

        User user = userRepository.findByUsername(adminUsername);

        if (user == null) {
            User newUser = new User();
            newUser.setSignedUpClasses(List.of());
            newUser.setUsername(adminUsername);
            newUser.setPassword(adminPassword);
            newUser.setRole(User.UserRole.ADMIN);
            newUser.setRegistrationToken(null);
            userRepository.save(newUser);
            System.out.println("Admin user created!");
        } else if (!user.getPassword().equals(adminPassword)) {
            userRepository.delete(user);
            User newUser = new User();
            newUser.setUsername(adminUsername);
            newUser.setPassword(adminPassword);
            newUser.setRole(User.UserRole.ADMIN);
            newUser.setRegistrationToken(null);
            userRepository.save(newUser);
            System.out.println("Admin user updated!");
        } else {
            System.out.println("User already exists!");
            Location location = new Location();
            location.setName("Test Location");
            location.setAddress("1234 Test Street");
            location.setReviews(4.0);
            location.setClasses(List.of(
                    new ClassInfo("YOGA", "Monday", "5:50", 1, 6),
                    new ClassInfo("HIIT", "Tuesday", "6:30", 2, 7)
            ));
            locationRepository.save(location);
        }
    }
}
