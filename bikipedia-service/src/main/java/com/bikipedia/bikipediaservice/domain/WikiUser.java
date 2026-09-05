package com.bikipedia.bikipediaservice.domain;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table(name = "test_1")
@Entity
public class WikiUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String userName;
    private String password;
    private String role;
    private String description;
}
