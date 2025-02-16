package com.calhack.cookproj.models;

import com.calhack.cookproj.utils.RegisteredClassConverter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "userdata")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userid;

    @Column
    private String username;

    @Column
    private String password;

    @Column
    private int accounttype;

    @Column
    private int points;

    @Column
    @Convert(converter = RegisteredClassConverter.class)
    private List<String> signedUpClasses;

    @Column
    private String subscription;

    public long getUserid() { return userid; }

    public void setUserid(long userid) { this.userid = userid; }

    public String getUsername() { return username; }

    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }

    public void setPassword(String password) { this.password = password; }

    public int getAccounttype() { return accounttype; }

    public void setAccounttype(int accounttype) { this.accounttype = accounttype; }

    public int getPoints() { return points; }

    public void setPoints(int points) { this.points = points; }

    public List<String> getSignedUpClasses() { return signedUpClasses; }

    public void setSignedUpClasses(List<String> signedUpClasses) { this.signedUpClasses = signedUpClasses; }

    public String getSubscription() { return subscription; }

    public void setSubscription(String subscription) { this.subscription = subscription; }
}
