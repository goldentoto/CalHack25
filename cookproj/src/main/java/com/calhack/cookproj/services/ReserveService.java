package com.calhack.cookproj.services;

import com.calhack.cookproj.models.ClassInfo;
import com.calhack.cookproj.models.Location;
import com.calhack.cookproj.models.User;
import com.calhack.cookproj.repositories.LocationRepository;
import com.calhack.cookproj.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReserveService {

    @Autowired
    private LocationRepository locationRepository;

    @Autowired
    private UserRepository userRepository;

    public String reserve(String className, String locationName, String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return "User not found";
        }

        List<ClassInfo> userClasses = user.getSignedUpClasses();
        Location location = locationRepository.findByName(locationName);
        if (location == null) {
            return "Location not found";
        }

        List<ClassInfo> locationClasses = location.getClasses();
        ClassInfo classToReserve = locationClasses.stream()
                .filter(classInfo -> classInfo.getName().equals(className))
                .findFirst()
                .orElse(null);

        if (classToReserve == null) {
            return "Class not found";
        }

        userClasses.add(classToReserve);
        user.setSignedUpClasses(userClasses);
        userRepository.save(user);

        return "Class reserved successfully";
    }
}