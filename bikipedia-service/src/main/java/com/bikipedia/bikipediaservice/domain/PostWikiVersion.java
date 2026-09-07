package com.bikipedia.bikipediaservice.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Table(name = "test_3")
@Entity
public class PostWikiVersion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postWikiId;
    private String postTitle;
    private String createdBy;
    private Date createdDate;
}
