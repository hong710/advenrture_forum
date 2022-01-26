import React from 'react';

function Signup() {
    return( 
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card" >
                        <div className="card-body p-5 text-center">

                            <div className="mb-md-5 mt-md-4 pb-5">

                            <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                            <p className=" mb-5">Welcome! Your adventure starts here.</p>

                            <div className="form-outline mb-4">
                                <input type="email" id="email" className="form-control form-control-lg" />
                                <label className="form-label" htmlFor="email">Email</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" id="password" className="form-control form-control-lg" />
                                <label className="form-label" htmlFor="password">Password</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" id="confirm_password" className="form-control form-control-lg" />
                                <label className="form-label" htmlFor="confirm_password">Confirm Password</label>
                            </div>

                            <button className="btn btn-outline-lightgreen btn-lg px-5" type="submit">Sign Up</button>

                            {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                <a href="#!" className=""><i className="bi bi-facebook display-6"></i></a>
                                <a href="#!" className=""><i className="bi bi-twitter mx-4 px-2 display-6"></i></a>
                                <a href="#!" className=""><i className="bi bi-google display-6"></i></a>
                            </div> */}

                            </div>

                            <div>
                                <p className="mb-0">Already have an account? <a href="#!" className="fw-bold">Sign in</a></p>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )}

export default Signup;
