package com.flowledger.flowledger_backend.controller;

import com.flowledger.flowledger_backend.dto.auth.AuthResponse;
import com.flowledger.flowledger_backend.dto.auth.LoginRequest;
import com.flowledger.flowledger_backend.dto.auth.SignupRequest;
import com.flowledger.flowledger_backend.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    public AuthController(
            AuthService authService
    ) {

        this.authService = authService;
    }

    @PostMapping("/signup")
    public AuthResponse signup(
            @Valid @RequestBody SignupRequest request
    ) {

        return authService.signup(request);
    }

    @PostMapping("/login")
    public AuthResponse login(
            @Valid @RequestBody LoginRequest request
    ) {

        return authService.login(request);
    }
}