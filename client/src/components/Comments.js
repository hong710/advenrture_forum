import React from "react";

function Comments() {
    return (
        
    <div className="container">
        <hr className="my-5"></hr>
        <h3>Discussion</h3>
        <div className="card">
            <div className="card-body">
                <div className="d-flex flex-start align-items-center">
                    <img
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                        alt="avatar"
                        width="60"
                        height="60"
                    />
                    <div>
                        <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>
                        <p className="text-muted small mb-0">Shared publicly - Jan 2020 </p>
                    </div>
                </div>

                <p className="mt-3 mb-4 pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboret dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.
                </p>

            </div>
            <div className="card-footer py-3 border-0 background-lightgreen">
                <div className="d-flex flex-start w-100">
                    <img
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                        alt="avatar"
                        width="40"
                        height="40"
                    />
                    <div className="form-outline w-100">
                        <textarea
                            className="form-control"
                            id="textAreaExample"
                            rows="4"
                        ></textarea>
                        <label
                            className="form-label"
                            for="textAreaExample"
                        >
                            Message
                        </label>
                    </div>
                </div>
                <div className="float-end mt-2 pt-1">
                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                    >
                        Post comment
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Comments;
