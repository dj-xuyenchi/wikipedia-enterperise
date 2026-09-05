package com.bikipedia.bikipediaservice.dto.authentication.res;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginResponse {
    private String token;
    private String userName;
    private String role;
    private String roleName;
}
