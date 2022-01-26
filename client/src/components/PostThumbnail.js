import React, { useEffect, useState } from "react";
import Post from "./Post";
import {Link} from "react-router-dom";

function PostThumbnail({ post }) {

//   const displayUserComments = userPost.comments.map((comment) => {
//     return <h6>{comment.comment}</h6>;
//   });

//   const displayUserPostTitle = userPost.posts.map((post) => {
//     return ( <div> 
//         <h4>{post.post_title}</h4>
//     </div>
//     )
//   });


    return (
       
        <div className="col-6 mt-4">
            <Link to = {`posts/${post.id}`} >
                <div className="card">
                <img
                    className="card-img-top object-fit-cover"
                    src={post.post_url}
                    alt="Card image cap"
                />
                <div className="card-body">
                    <div className="d-flex align-items-center">
                    <img
                        className="rounded-circle img-user"
                        src={post.user.user_img}
                    />
                    <p className="m-0 px-2">{`${post.user.f_name} ${post.user.l_name}`}</p>
                    </div>
                    <h4>{post.post_title}</h4>
                </div>                
            </div>
            </Link>
        </div>
    
    );
}

export default PostThumbnail;
