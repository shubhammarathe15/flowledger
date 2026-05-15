package com.flowledger.flowledger_backend.service;

import com.flowledger.flowledger_backend.dto.auth.AuthResponse;
import com.flowledger.flowledger_backend.dto.auth.LoginRequest;
import com.flowledger.flowledger_backend.dto.auth.SignupRequest;
import com.flowledger.flowledger_backend.entity.User;
import com.flowledger.flowledger_backend.repository.UserRepository;
import com.flowledger.flowledger_backend.security.JwtUtil;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder;

    private final JwtUtil jwtUtil;

    public AuthService(
            UserRepository userRepository,
            BCryptPasswordEncoder passwordEncoder,
            JwtUtil jwtUtil
    ) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public AuthResponse signup(SignupRequest request) {

        if (userRepository.findByEmail(request.getEmail())
                .isPresent()) {

            throw new RuntimeException(
                    "Email already exists"
            );
        }

        User user = new User();

        user.setName(request.getName());

        user.setEmail(request.getEmail());

        user.setPassword(
                passwordEncoder.encode(
                        request.getPassword()
                )
        );

        userRepository.save(user);

        String token =
                jwtUtil.generateToken(user.getEmail());

        return new AuthResponse(token);
    }

    public AuthResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(
                        request.getEmail()
                )
                .orElseThrow(() ->
                        new RuntimeException(
                                "Invalid credentials"
                        )
                );

        boolean matches =
                passwordEncoder.matches(
                        request.getPassword(),
                        user.getPassword()
                );

        if (!matches) {

            throw new RuntimeException(
                    "Invalid credentials"
            );
        }

        String token =
                jwtUtil.generateToken(user.getEmail());

        return new AuthResponse(token);
    }
}