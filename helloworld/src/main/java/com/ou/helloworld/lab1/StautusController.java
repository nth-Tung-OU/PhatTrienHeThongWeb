package com.ou.helloworld.lab1;

import java.time.Instant;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Lấy thông tin hệ thống
 * Health check
 */

@RestController
public class StautusController {
    
    @GetMapping("/status")
    public Map<String, Object> status(){
        return Map.of(
            "status", "OK",
            "timestamp", Instant.now().toString()
        );
    }

    // API GET /info -> Thông tin hệ thống
    @GetMapping("/info")
    public Map<String, Object> info(){
        return Map.of(
            "application", "Spring Boot Demo",
            "java.version", System.getProperty("java.version"),
            "java.vendor", System.getProperty("java.vendor"),
            "os.name", System.getProperty("os.name")
        );
    }
}
