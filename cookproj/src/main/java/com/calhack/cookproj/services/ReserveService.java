package com.calhack.cookproj.services;

import com.calhack.cookproj.repositories.LocationRepository;
import com.calhack.cookproj.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReserveService {

    @Autowired
    private LocationRepository locationRepository;

    @Autowired
    private UserRepository userRepository;

    /* reserve(String className, LocationName, username) {
       user = userRepository.findbyusername(username)
       List<ClassInfo> userlist = user.getclasses
       find class by getting location based off of parameter
       get list of classes by using getter
       itterate through list (or search for it just get and make a copy of the classinfo object that matches the name of the one in the parameter)
       insert that classinfo object into userlist
       update userlist in database by useing user.setclasslist thingy
       i think u need to use userrepo.save(user) after this idk try it out
       return a conformation string or something maybe the new obejct so we can update we will figure that out later
    } */

}
