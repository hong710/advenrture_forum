import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/MainPosts";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contributors from "./components/Contributors";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NewComment from "./components/NewComment";
import NewPost from "./components/NewPost";

function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contributors">
          <Contributors />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/new-comment">
        <NewComment />
        </Route>
        <Route exact path="/new-post">
        <NewPost />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        </Switch>
        <Header />
        <Main />
      </>
    </BrowserRouter>
  );
}

export default App;
