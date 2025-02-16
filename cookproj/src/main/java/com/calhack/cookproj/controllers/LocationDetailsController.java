package com.calhack.cookproj.controllers;

import com.calhack.cookproj.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class LocationDetailsController {

    @Autowired
    public LocationRepository locationRepository;

    @GetMapping(path = "/locations")
    public @ResponseBody ResponseEntity<?> getLocations() { return ResponseEntity.ok(locationRepository.findAll()); }

}

