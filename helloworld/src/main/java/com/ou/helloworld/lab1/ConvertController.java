package com.ou.helloworld.lab1;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class ConvertController {
    
    record Convert(double usd, double vnd){};

    @GetMapping("/convert")
    public Convert convert(@RequestParam double usd) {
        double rate = 26000; 
        double vnd = usd * rate;
        return new Convert(usd, vnd);}
    
}
