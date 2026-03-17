package com.ou.helloworld.lab3.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Repository;

import com.ou.helloworld.lab3.model.User;

import jakarta.annotation.PostConstruct;

@Repository
public class UserRepository {
    private final Map<Long, User> store = new ConcurrentHashMap<>();
    private final AtomicLong idGenerator = new AtomicLong(1);


    public List<User> findAll() {
        return new ArrayList<>(store.values());
    }

    public User findById(Long id) {
        return store.get(id);
    }

    @PostConstruct
    public void init(){
        save(new User(null, "Nguyễn", "a@gmail.com","", java.time.LocalDateTime.now()));
        save(new User(null, "Thanh", "b@gmail.com","", java.time.LocalDateTime.now()));
        save(new User(null, "Tùng", "c@gmail.com","", java.time.LocalDateTime.now() ));
    }

    public User save(User user) {
        if (user.getId() == null) {
            user.setId(idGenerator.getAndIncrement());
            user.setCreatedAt(java.time.LocalDateTime.now());
        }
        store.put(user.getId(), user);
        return user;
    }
}
