package com.calhack.cookproj.models;

import java.io.Serializable;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

public class JwtResponse implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;
    private final String jwttoken;
    private final String username;
    private final Collection<? extends GrantedAuthority> authorities;

    public JwtResponse(String jwttoken, String username, Collection<? extends GrantedAuthority> authorities) {
        this.jwttoken = jwttoken;
        this.username = username;
        this.authorities = authorities;
    }

    public String getToken() {
        return this.jwttoken;
    }

    public String getUsername() {
        return this.username;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }
}