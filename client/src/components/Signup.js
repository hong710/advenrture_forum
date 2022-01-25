function Signup() {
  return (
    <>
      <div class="form-group">
        <label className="signup-headers" for="exampleInputEmail1">Email address</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your email address"
        />
        <small id="emailHelp" className="signup-headers">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label className="signup-headers" for="exampleInputEmail1">Username</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your username"
        />
      </div>
      <div class="form-group">
        <label className="signup-headers" for="exampleInputEmail1">First name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your first name"
        />
      </div>
      <div class="form-group">
        <label className="signup-headers" for="exampleInputEmail1">Last name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your last name"
        />
      </div>
      <button type="submit" className="btn btn-outline-lightgreen px-4 btn-sm px-5 py-2">Signup</button>
    </>
  );
}

export default Signup;
