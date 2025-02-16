package com.calhack.cookproj.models;

import org.springframework.validation.beanvalidation.SpringValidatorAdapter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "request_log")
public class RequestLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime timestamp;
    private String username;
    private String path;
    private int responseCode;
    private String requestMethod;

//    private String body;
//    private String queryParams;

    public Long getId() { return id;   }
    public void setId(Long id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPath() { return path; }
    public void setPath(String path) { this.path = path; }

    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }

    public int getResponseCode() { return responseCode; }
    public void setResponseCode(int responseCode) { this.responseCode = responseCode; }

    public String getRequestMethod() { return requestMethod; }
    public void setRequestMethod(String requestMethod) { this.requestMethod = requestMethod; }

    @PrePersist
    @PreUpdate
    public void onPersistOrUpdate() {
        this.timestamp = LocalDateTime.now();
    }

}
