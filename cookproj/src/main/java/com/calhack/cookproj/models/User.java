package com.calhack.cookproj.models;

import com.calhack.cookproj.utils.RegisteredClassConverter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "userdata")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userid;

    @Column
    private String username;

    @Column
    private String password;

    @Column
    private int points;

    @Column
    @Convert(converter = RegisteredClassConverter.class)
    private List<String> signedUpClasses;

    @Column
    private String subscription;

    @Enumerated(EnumType.STRING)
    private UserRole role;
    @Column
    private String registrationToken;

    public Long getUserid() { return userid; }

    public void setUserid(long userid) { this.userid = userid; }

    public String getUsername() { return username; }

    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }

    public void setPassword(String password) { this.password = password; }

    public int getPoints() { return points; }

    public void setPoints(int points) { this.points = points; }

    public List<String> getSignedUpClasses() { return signedUpClasses; }

    public void setSignedUpClasses(List<String> signedUpClasses) { this.signedUpClasses = signedUpClasses; }

    public String getSubscription() { return subscription; }

    public void setSubscription(String subscription) { this.subscription = subscription; }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    public String getRegistrationToken() {
        return registrationToken;
    }

    public void setRegistrationToken(String registrationToken) {
        this.registrationToken = registrationToken;
    }

    public enum UserRole {
        USER, ADMIN, BUSINESS
    }
}
