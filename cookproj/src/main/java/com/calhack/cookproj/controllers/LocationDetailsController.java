package com.calhack.cookproj.controllers;

import com.calhack.cookproj.repositories.LocationRepository;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.calhack.cookproj.services.ReserveService;

@RestController
@CrossOrigin(origins = "*")
public class LocationDetailsController {

    @Autowired
    public LocationRepository locationRepository;

    @Autowired
    public ReserveService reserveService;

    @GetMapping(path = "/locations")
    public @ResponseBody ResponseEntity<?> getLocations() { return ResponseEntity.ok(locationRepository.findAll()); }

    @RequestMapping(path = "/reserve")
    public @ResponseBody String reserve(@RequestBody Map<String, String> body) {
        String className = body.get("className");
        String locationName = body.get("locationName");
        String username = body.get("username");

        return reserveService.reserve(className, locationName, username);
    }


}

