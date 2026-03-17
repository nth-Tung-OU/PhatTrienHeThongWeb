package com.ou.helloworld.lab1;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;




@RestController
public class HelloController {
    
    // API GET /hello -> "Hello World!"
    @GetMapping("/hello")
    public String getMethodName() {
        return "Hello World!";
    }

    // API GET /hello/param?name=Nam -> "Hello Nam!"
    @GetMapping("/hello/param")
    public String getMethodName(@RequestParam( defaultValue = "Guest") String name) {
        return "Hello " + name + "!";
    }

    // Map HTTP GET request tới method
    @GetMapping("/hello/json")
    public Greeting getGreeting() {
        return new Greeting("Hello world");
    }

    // Cú pháp compact để tạo immutable DTO (Data Transfer Object)
    // Tự động có constructor, getter, setter, equals, hashCode, toString
    // Phù hợp với dữ liệu truyền qua API
    record Greeting(String message) {};
    
    @GetMapping("/greet")
    public Greeting getGreeting(@RequestParam(defaultValue = "en") String lang, @RequestParam(defaultValue = "Guest") String name) {
        if(lang.equals("en")){
            return new Greeting("Hello " + name);
        } else if(lang.equals("vi")){
            return new Greeting("Xin chào " + name);
        } else {
            return new Greeting("Hello " + name);
        }
    }
    
    
}
