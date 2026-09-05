package com.bikipedia.bikipediaservice.controller;

import com.bikipedia.bikipediaservice.dto.authentication.req.LoginRequest;
import com.bikipedia.bikipediaservice.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/authentication")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/login")
//    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authenticationService.login(request));
    }

    @PostMapping("/test")
    @PreAuthorize("hasRole('ADMINs')")
    public ResponseEntity<?> test() {
        return ResponseEntity.ok("");
    }
}
