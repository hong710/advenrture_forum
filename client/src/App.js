import React,{useEffect,useState} from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/MainPosts";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contributors from "./components/Contributors";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NewComment from "./components/NewComment";
import NewPost from "./components/NewPost";
import Post from "./components/Post";
import axios from "axios";

const API = "http://localhost:3000/posts"

function App() {

  const [posts, setPosts] = useState(null)

    useEffect(() => {
      axios.get(API).then((response) => {
        setPosts(response.data);
      });
    }, []);

  return (
    <BrowserRouter>
      <>
        {/* <Switch> */}
        <Route exact path="/about">
          <Nav />
          <About />
        </Route>
        <Route exact path="/contributors">
          <Nav />
          <Contributors />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route path="/posts/:postId">
          <Nav />
          {posts && <Post posts={posts}/>}
        </Route>
        {/* <Route exact path="/new-post">
            <NewPost />
          </Route> */}
        <Route exact path="/">
          <Nav />
          <Header />
          {posts && <Main posts = {posts}/>}
        </Route>
      </>
    </BrowserRouter>
  );
}

export default App;
