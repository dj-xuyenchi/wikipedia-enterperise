package com.bikipedia.bikipediaservice.repository;

import com.bikipedia.bikipediaservice.domain.PostWikiVersion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostWikiVersionRepository extends JpaRepository<PostWikiVersion, Long> {
}
