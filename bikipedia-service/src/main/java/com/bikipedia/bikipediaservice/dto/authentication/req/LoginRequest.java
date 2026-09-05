package com.bikipedia.bikipediaservice.dto.authentication.req;

import lombok.Data;

@Data
public class LoginRequest {
    private String userName;
    private String password;
}
