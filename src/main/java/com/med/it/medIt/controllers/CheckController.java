package com.med.it.medIt.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller("/")
public class CheckController {

    @GetMapping
    public ResponseEntity<String> check() {
        return new ResponseEntity<>("im alive", HttpStatus.OK);
    }
}
