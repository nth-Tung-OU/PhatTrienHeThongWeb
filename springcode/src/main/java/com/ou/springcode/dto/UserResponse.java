package com.ou.springcode.dto;

import java.time.Instant;

import com.ou.springcode.entity.Role;

public record UserResponse(
    Long id,
    String username,
    String email,
    Role role,
    String fullName,
    Instant createdAt,
    Instant updatedAt
) {
    public UserResponse(
        Long id,
        String username,
        String email,
        String fullName,
        Instant createdAt,
        Instant updatedAt
    ) {
        this(id, username, email, null, fullName, createdAt, updatedAt);
    }
}
