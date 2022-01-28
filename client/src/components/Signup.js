import React, { useState, useEffect } from "react";
const usersAPI = "http://localhost:3000/users";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  function handleEmailOnChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordOnChange(event) {
    setPassword(event.target.value);
  }

  function handleFirstNameOnChange(event) {
      setFirstName(event.target.value)
  }

  function handleLastNameOnChange(event) {
    setLastName(event.target.value)
}

  const userCreds = {
    f_name: firstName,
    l_name: lastName,
    email: email,
    password: password,
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userCreds),
  };
  function handleSignUpSubmit(e) {
    e.preventDefault();

    fetch(usersAPI, configObj)
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }

  console.log("first name", firstName)
  console.log("last name", lastName)

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                  <p className=" mb-5">Welcome! Your adventure starts here.</p>

                  <div className="form-outline mb-4">
                    <input
                      type="first_name"
                      id="first_name"
                      className="form-control form-control-lg"
                      onChange={handleFirstNameOnChange}
                      value={firstName}
                    />
                    <label className="form-label" htmlFor="email">
                      First name
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="last_name"
                      id="last_name"
                      className="form-control form-control-lg"
                      onChange={handleLastNameOnChange}
                      value={lastName}
                    />
                    <label className="form-label" htmlFor="email">
                      Last name
                    </label>
                  </div>



                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      onChange={handleEmailOnChange}
                      value={email}
                    />
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      onChange={handlePasswordOnChange}
                      value={password}
                    />
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                  </div>

                  {/* <div className="form-outline mb-4">
                                <input type="password" id="confirm_password" className="form-control form-control-lg" />
                                <label className="form-label" htmlFor="confirm_password">Confirm Password</label>
                            </div> */}

                  <button
                    className="btn btn-outline-lightgreen btn-lg px-5"
                    type="submit"
                    onClick={handleSignUpSubmit}
                  >
                    Sign Up
                  </button>

                  {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                <a href="#!" className=""><i className="bi bi-facebook display-6"></i></a>
                                <a href="#!" className=""><i className="bi bi-twitter mx-4 px-2 display-6"></i></a>
                                <a href="#!" className=""><i className="bi bi-google display-6"></i></a>
                            </div> */}
                </div>

                <div>
                  <p className="mb-0">
                    Already have an account?{" "}
                    <a href="#!" className="fw-bold">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
