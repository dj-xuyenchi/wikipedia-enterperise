package com.bikipedia.bikipediaservice.service;

import com.bikipedia.bikipediaservice.dto.authentication.req.LoginRequest;
import com.bikipedia.bikipediaservice.dto.authentication.res.LoginResponse;

public interface AuthenticationService {
    LoginResponse login(LoginRequest request) throws Exception;
}
