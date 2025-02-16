package com.calhack.cookproj.models;


import com.calhack.cookproj.utils.ClassListConverter;

import javax.persistence.*;
import java.util.List;
@Entity
@Table(name = "locationdata")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long locationid;

    @Column
    private String name;

    @Column
    private String address;

    @Column
    private double reviews;

    @Column
    @Convert(converter = ClassListConverter.class)
    private List<ClassInfo> classes;

    public long getLocationid() {
        return locationid;
    }

    public void setLocationid(long locationid) {
        this.locationid = locationid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getReviews() {
        return reviews;
    }

    public void setReviews(double reviews) {
        this.reviews = reviews;
    }

    public List<ClassInfo> getClasses() {
        return classes;
    }

    public void setClasses(List<ClassInfo> classes) {
        this.classes = classes;
    }
}
