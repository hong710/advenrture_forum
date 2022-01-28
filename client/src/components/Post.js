import React, {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import Comments from './Comments';



function Post({posts}) {
    
    const params = useParams();
    const post = posts.find(post => post.id === parseInt(params.postId));

    const [postsUser, setPostUser] = useState("");

    useEffect(()=>{
        fetch("http://localhost:3000/users/"+post.user.id)
        .then(res => res.json())
        .then(data => setPostUser(data))
    },[])

    console.log(postsUser);
    
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
                                <img className="rounded-circle img-user " src={post.user.user_img} alt="user"/>
                                <h5 className="m-0 px-2 text-white">{post.user.f_name} {post.user.l_name}</h5>
                            </div>
                            <div className="p-2">
                                <p className="lead">{post.user.user_info} </p>
                                <h5 >More post from {post.user.f_name} {post.user.l_name}</h5>
                                <ul>
                                    {
                                        postsUser && postsUser.map(title =>
                                        <a href={"http://localhost:4000/posts/"+title.id}>   
                                            <li key = {title.id}>{title.post_title}</li>
                                        </a>
                                            
                                        )
                                    }
                                    
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
