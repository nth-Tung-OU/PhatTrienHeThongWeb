package com.ou.helloworld.lab3.service;

import java.util.List;

import com.ou.helloworld.lab3.dto.UserResponse;

public interface IUserService {
    
    List<UserResponse> findAll();
}