package com.bikipedia.bikipediaservice.domain;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table(name = "test_4")
@Entity
public class DocumentFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long documentId;
    private String title;
    private String path;
    // cho phép null để đẩy file tài nguyên training trước
    private String postWikiId;
}
