package com.ou.springcode.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ou.springcode.dto.UserResponse;
import com.ou.springcode.entity.Role;
import com.ou.springcode.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Users", description = "CRUD User, phân trang, lọc")
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @Operation(summary = "Danh sách user")
    @GetMapping()
    public ResponseEntity<Page<UserResponse>> list(
            @RequestParam(required = false) String search,
            @RequestParam(required = false) Role role,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "username") String sort,
            @RequestParam(defaultValue = "asc") String order
    ) {
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Pageable pageable = PageRequest.of(page, Math.min(size, 100), Sort.by(direction, sort));
        Page<UserResponse> users = userService.findAll(search, role, pageable);

        return ResponseEntity.ok(users);
    }

    @Operation(summary = "Xóa user")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Cập nhật role")
    @PutMapping("/{id}/role")
    public ResponseEntity<UserResponse> updateRole(@PathVariable Long id, @RequestParam Role role){
        UserResponse updatedUser = userService.updateRole(id, role);
        return ResponseEntity.ok(updatedUser);
    }

    @Operation(summary = "Cập nhật full name")
    @PutMapping("/{id}/fullname")
    public ResponseEntity<UserResponse> updateFullName(@PathVariable Long id, @RequestParam String fullName){
        UserResponse updatedUser = userService.updateFullName(id, fullName);
        return ResponseEntity.ok(updatedUser);
    }

}
