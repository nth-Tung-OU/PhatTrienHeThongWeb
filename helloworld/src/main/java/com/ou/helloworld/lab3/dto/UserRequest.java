package com.ou.helloworld.lab3.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UserRequest(
    @NotBlank(message = "Username không được để trống")
    @Size(min = 3, max = 50)
    String username,
    @NotBlank(message = "Email không được để trống")
    @Size(min = 3, max = 100)
    @Email(message = "Email không hợp lệ")
    String email,
    @Size(min = 3, max = 100)
    String fullName
) {
}
