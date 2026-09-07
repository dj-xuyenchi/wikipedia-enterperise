package com.bikipedia.bikipediaservice.dto.business.wiki.req;

import lombok.Data;

@Data
public class GetPostRequest {
    private String postId;
    private String postKeyWord;
    private String postCategory;
}
