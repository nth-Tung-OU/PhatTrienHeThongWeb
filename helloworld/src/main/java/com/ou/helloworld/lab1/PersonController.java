package com.ou.helloworld.lab1;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class PersonController {
    
    public record Person(String name, int age){};

    @GetMapping("/person/list")
    public List<Person> getPersonList(){
        return List.of(
            new Person("Nguyễn", 20),
            new Person("Thanh", 21),
            new Person("Tùng", 22)
        );
    }
}
