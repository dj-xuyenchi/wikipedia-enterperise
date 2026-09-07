package com.bikipedia.bikipediaservice.repository;

import com.bikipedia.bikipediaservice.domain.PostWiki;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostWikiRepository extends JpaRepository<PostWiki, Long> {
}
