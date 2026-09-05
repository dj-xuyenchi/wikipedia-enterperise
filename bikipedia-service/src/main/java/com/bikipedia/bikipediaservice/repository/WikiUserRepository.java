package com.bikipedia.bikipediaservice.repository;

import com.bikipedia.bikipediaservice.domain.WikiUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WikiUserRepository extends JpaRepository<WikiUser, Long> {
    WikiUser findWikiUserByUserName(String userName);
}
