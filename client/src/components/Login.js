import React from 'react';

function Login() {
    return( 
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card" >
                        <div className="card-body p-5 text-center">

                            <div className="mb-md-5 mt-md-4 pb-5">

                            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                            <p className=" mb-5">Please enter your login and password!</p>

                            <div className="form-outline mb-4">
                                <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                <label className="form-label" htmlFor="typeEmailX">Email</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                                <label className="form-label" htmlFor="typePasswordX">Password</label>
                            </div>

                            <p className="small mb-5 pb-lg-2"><a className="" href="#!">Forgot password?</a></p>

                            <button className="btn btn-outline-lightgreen btn-lg px-5" type="submit">Login</button>

                            {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                <a href="#!" className=""><i className="bi bi-facebook display-6"></i></a>
                                <a href="#!" className=""><i className="bi bi-twitter mx-4 px-2 display-6"></i></a>
                                <a href="#!" className=""><i className="bi bi-google display-6"></i></a>
                            </div> */}

                            </div>

                            <div>
                            <p className="mb-0">Don't have an account? <a href="#!" className="fw-bold">Sign Up</a></p>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )}

export default Login;
