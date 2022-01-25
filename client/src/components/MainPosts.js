import React, {useEffect, useState} from 'react';
import PostThumbnail from './PostThumbnail';
import Search from './Search';
// const API = "http://localhost:3000/posts"
const usersAPI = "http://localhost:3000/users"

function MainPosts() {
    const [userPosts, setUserPosts] = useState([])

    // useEffect(() => {
    //     fetch(API)
    //     .then(resp => resp.json())
    //     .then(data => setPosts(data))
    // }, [])

  useEffect(() => {
      fetch(usersAPI)
      .then(resp => resp.json())
      .then(data => setUserPosts(data))

  }, [])

    const displayUserPosts = userPosts.map(userPost => {
       return <PostThumbnail key={userPost.id} userPost={userPost}/>
    })

    return (
    <main className="bg-link">
        <div className="container">
            <Search />
            <div className="row">
                {displayUserPosts}
                {/* <PostThumbnail />
                <PostThumbnail />
                <PostThumbnail />
                <PostThumbnail />
                <PostThumbnail />
                <PostThumbnail />                 */}
            </div> 
        </div>
    </main>
)}

export default MainPosts;
