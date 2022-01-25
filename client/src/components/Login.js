import { NavLink } from "react-router-dom";

function Login() {
    return (
        <form>
  <div class="form-group">
    <label className="login-headers" for="exampleInputEmail1">Email address</label>
    <input className="textarea" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address"/>
    <small id="emailHelp" className="login-headers">We'll never share your email with anyone else.</small>
  </div>
  <button type="submit" className="btn btn-outline-lightgreen px-4 btn-sm px-5 py-2">Login</button>
  <small id="emailHelp" className="login-headers">Don't have an account? Sign up here!</small>
  <NavLink to="/signup" exact>
  <button type="submit" className="btn btn-outline-lightgreen px-4 btn-sm px-5 py-2">Signup</button>
  </NavLink>
</form>
    )
}

export default Login;