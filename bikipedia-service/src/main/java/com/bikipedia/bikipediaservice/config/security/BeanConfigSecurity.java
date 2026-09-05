package com.bikipedia.bikipediaservice.config.security;

import com.bikipedia.bikipediaservice.domain.WikiUser;
import com.bikipedia.bikipediaservice.repository.WikiUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Collections;

@Configuration
@RequiredArgsConstructor
public class BeanConfigSecurity {
    private final WikiUserRepository wikiUserRepository;

    @Bean
    public UserDetailsService userDetailsService() {
        return username -> {
            WikiUser wikiUser = wikiUserRepository.findWikiUserByUserName(username);
            if (wikiUser == null) {
                throw new UsernameNotFoundException("User not found with username: " + username);
            }

            String roleName = wikiUser.getRole().startsWith("ROLE_")
                    ? wikiUser.getRole()
                    : "ROLE_" + wikiUser.getRole();

            return new User(
                    wikiUser.getUserName(),
                    wikiUser.getPassword(),
                    Collections.singletonList(new SimpleGrantedAuthority(roleName))
            );
        };
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
