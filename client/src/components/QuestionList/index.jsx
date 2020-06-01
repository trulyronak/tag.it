import React, {useRef, useState, useEffect } from "react";
import './style.css';
import PostGrid from '../PostGrid/index';

const QuestionList = ({ questions, courseId, history, filters }) =>{

    // Sorts the posts by pinned first then reverse chronological order
    const orderedPosts = questions.sort((post1, post2) =>{
        if(post1.isPinned && !post2.isPinned){return -1;}
        else if(!post1.isPinned && post2.isPinned){return 1;}
        else if(post1.uuid > post2.uuid){return -1;}
        else if(post2.uuid > post1.postUUID){return 1;}
        return 0;
    }).filter(post => {
        let valid = true
        // post.tagList compare to filters.tags
        const filterTags = filters.tags.map(tag => tag.uuid)

        if (filters.tags.size > 0) {

        }
        return post.title.toLowerCase().includes(filters.search.toLowerCase()) && (filterTags.length === 0 || filterTags.some(item => post.tagList.includes(item)))
    })


    // Displays all posts that are not private
    const listBody = orderedPosts.map((post) =>{
        let link = "/courses/"+ courseId+ "/posts/"+post.uuid;
        
        return (
            !post.isPrivate &&
            <PostGrid title={post.title} history={history} link={link} />
        )
    })

    return(
        <div className="qList">
            {listBody}            
        </div>
    );
};

export default QuestionList;