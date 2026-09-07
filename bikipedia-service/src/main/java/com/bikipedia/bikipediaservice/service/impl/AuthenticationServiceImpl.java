package com.bikipedia.bikipediaservice.service.impl;

import com.bikipedia.bikipediaservice.config.security.JwtTokenProvider;
import com.bikipedia.bikipediaservice.domain.WikiUser;
import com.bikipedia.bikipediaservice.dto.authentication.req.LoginRequest;
import com.bikipedia.bikipediaservice.dto.authentication.res.LoginResponse;
import com.bikipedia.bikipediaservice.repository.WikiUserRepository;
import com.bikipedia.bikipediaservice.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final WikiUserRepository wikiUserRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public LoginResponse login(LoginRequest request) throws Exception {
        WikiUser check = wikiUserRepository.findWikiUserByUserName(request.getUserName());
        if (check == null) {
            return null;
        }
        if(!check.getPassword().equals(request.getPassword())){
            throw new Exception("Sai password");
        }
        Authentication authentication = new UsernamePasswordAuthenticationToken(
                check,
                null,
                Collections.singletonList(new SimpleGrantedAuthority(check.getRole()))
        );

        // 4. Gen JWT token
        String token = jwtTokenProvider.generateToken(authentication);
        return LoginResponse.builder()
                .role(check.getRole())
                .userName(check.getUserName())
                .token(token)
                .build();
    }
}
