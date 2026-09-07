package com.bikipedia.bikipediaservice.dto.business.wiki.res;

import lombok.Data;

import java.util.Date;

@Data
public class PostWikiInformationResponse {
    private String postId;
    private String postTitle;
    private String postContent;
    private Date createdDate;
    private Date updatedDate;
    private String createdBy;
    private String updatedBy;
    private String userStoryId;
    private String epicId;
}
