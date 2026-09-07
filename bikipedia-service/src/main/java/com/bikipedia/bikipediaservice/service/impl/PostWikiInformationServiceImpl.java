package com.bikipedia.bikipediaservice.service.impl;

import com.bikipedia.bikipediaservice.dto.business.wiki.req.GetPostRequest;
import com.bikipedia.bikipediaservice.dto.business.wiki.res.PostWikiInformationResponse;
import com.bikipedia.bikipediaservice.service.PostWikiInformationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostWikiInformationServiceImpl implements PostWikiInformationService {

    @Override
    public PostWikiInformationResponse getPostByClick(GetPostRequest request) {
        return null;
    }
}
