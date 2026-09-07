package com.bikipedia.bikipediaservice.service;

import com.bikipedia.bikipediaservice.dto.business.wiki.req.GetPostRequest;
import com.bikipedia.bikipediaservice.dto.business.wiki.res.PostWikiInformationResponse;

public interface PostWikiInformationService {
    PostWikiInformationResponse getPostByClick(GetPostRequest request);
}
