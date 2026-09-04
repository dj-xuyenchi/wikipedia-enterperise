package com.bikipedia.bikipediaservice.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/authentication")
public class AuthenticationController {
    @GetMapping("/login")
//    @PreAuthorize("hasRole('USER')")
    public String userAccess() {
        return "Hello User!";
    }

}
