package com.ou.helloworld.lab3.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ou.helloworld.lab3.dto.UserResponse;
import com.ou.helloworld.lab3.repository.UserRepository;

@Service
public class UserService implements IUserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<UserResponse> findAll() {
        return userRepository.findAll().stream()
            .map(UserResponse::fromEntity)
            .toList();
    }
    
}
