package com.ou.helloworld.lab2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;

@RestController
public class ProfileController {
    
    @Value("${spring.profiles.active:default}")
    private String activeProfile;

    @Value("${spring.application.name}")
    private String appName;

    @Value("${server.port}")
    private String serverPort;

    @GetMapping("/profile")
    public Map<String,Object> getProfile() {
        return Map.of(
            "profile", activeProfile,
            "appName", appName,
            "appPort", serverPort
        );
    }
}
