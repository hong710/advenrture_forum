import React from 'react';
import PostThumbnail from './PostThumbnail';
import Search from './Search';

function MainPosts() {
    return (
    <main className="bg-link">
        <div className="container">
            <Search />
            <div className="row">
                <PostThumbnail />
                <PostThumbnail />
                <PostThumbnail />
                <PostThumbnail />
                <PostThumbnail />
                <PostThumbnail />                
            </div> 
        </div>
    </main>
)}

export default MainPosts;
