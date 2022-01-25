import React, { useEffect, useState } from "react";

function PostThumbnail({ userPost }) {

  const displayUserComments = userPost.comments.map((comment) => {
    return <h6>{comment.comment}</h6>;
  });

  const displayUserPostTitleAndContent = userPost.posts.map((post) => {
    return ( <div> 
        <h4>{post.post_title}</h4>
    <h5 className="py-3">{post.content}</h5>
    </div>
    )
  });

  return (
    <div className="col-6 mt-4">
      <div className="card">
        <img
          className="card-img-top object-fit-cover"
          src="https://images.unsplash.com/reserve/91JuTaUSKaMh2yjB1C4A_IMG_9284.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Card image cap"
        />
        <div className="card-body">
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle img-user"
              src="https://randomuser.me/api/portraits/men/36.jpg"
            />
            <p className="m-0 px-2">{`${userPost.f_name} ${userPost.l_name}`}</p>
          </div>
          {displayUserPostTitleAndContent}
          Comments:
          {displayUserComments}
        </div>
      </div>
    </div>
  );
}

export default PostThumbnail;
