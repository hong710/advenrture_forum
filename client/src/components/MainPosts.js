import React, {useEffect, useState} from 'react';
import PostThumbnail from './PostThumbnail';
import Search from './Search';



function MainPosts({posts}) {

    const displayPosts = posts.map(post => {
       return <PostThumbnail key={post.id} post={post}/>
    })

    return (
    <main className="bg-link">
        <div className="container">
            <Search />
            <div className="row">
                {displayPosts}
            </div> 
        </div>
    </main>
)}

export default MainPosts;
