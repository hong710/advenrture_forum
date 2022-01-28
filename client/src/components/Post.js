import React, {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import Comments from './Comments';



function Post({posts}) {
    
    const params = useParams();
    const post = posts.find(post => post.id === parseInt(params.postId));

    
    return (
    <main className="mt-5">
        <div className="container">
            <div className="row">
                <div className="row col-8">
                    <img className="object-fit-cover w-100" src={post.post_url} alt="topic"/>   
                    <h2 className="my-4">{post.post_title}</h2>
                    <p>{post.content}</p>

                    <Comments key= {post.id} postComments = {post.comments} post_params={params.postId} />
                    
                </div>
                <div className="row col-4 ">
                    <div>
                        <div className=" rounded p-0 border border-lightgreen">
                            <div className="d-flex align-items-center bg-lightgreen p-2 ">
                                <img className="rounded-circle img-user " src="https://randomuser.me/api/portraits/men/36.jpg" alt="user"/>
                                <h5 className="m-0 px-2 text-white">John Doe</h5>
                            </div>
                            <div className="p-2">
                                <p className="lead">Senior software engineer. Continuous learner. </p>
                                <h5 >More post from John Doe</h5>
                                <ul>
                                    <li>Backend Engineering Skills Are Emphasized Too Heavily for Principal Engineers</li>
                                    <li>Death to Tribal Knowledge</li>
                                    <li>AI-Assisted Coding with Tabnine</li>
                                </ul>
                            </div>
                        </div>  
                    </div>                   
                </div>
            </div>
        </div>
    </main>
        
)}

export default Post;
