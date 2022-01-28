import React, {useState,useEffect} from "react";

function Comments({postComments, post_params}) {
    
    const [comment, setComment] = useState("");
    const [commentId, setCommentId] = useState(null);

    function handleComment (e){
        setComment(e.target.value);
    }

    function handleCancel(){
        setComment("");
    }

    function submitComment (e){
        
        const data = {
            comment: comment
        }

        e.preventDefault();
        fetch("http://localhost:3000/comments",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then (res => res.json())
        .then (data =>{
            setCommentId (data.id);
        })

        setComment("");
        
    }

    useEffect (()=>{
        let idMatch = {
            post_id: post_params,
            comment_id:commentId
        }
        fetch("http://localhost:3000/posts_comments",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(idMatch)
                })
                .then (res => res.json())
                .then (data =>{
                    //console.log(data)
            })
    },[commentId])

    
    return (
        
    <div className="container">
        <hr className="my-5"></hr>
        <h3>Discussion</h3>
        <div className="card">
            <div className="card-body">
                {
                    postComments.map (postComment =>
                    <div key = {postComment.id}> 
                        <div className="d-flex flex-start align-items-center" >
                            <img
                                className="rounded-circle shadow-1-strong me-3"
                                src="https://st2.depositphotos.com/5682790/10456/v/600/depositphotos_104564156-stock-illustration-male-user-icon.jpg"
                                alt="avatar"
                                width="60"
                                height="60"
                            />
                            <div>
                                <h6 className="fw-bold text-primary mb-1">Anonymous user</h6>
                                <p className="text-muted small mb-0">Shared publicly - Jan 2020 </p>
                            </div>
                        </div>

                        <p className="mt-3 mb-4 pb-2">
                            {postComment.comment}
                        </p>
                        <hr></hr>
                    </div>                        
                    )
                }


            </div>
            <div className="card-footer py-3 border-0 background-lightgreen">
                <div className="d-flex flex-start w-100">
                    <img
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://st2.depositphotos.com/5682790/10456/v/600/depositphotos_104564156-stock-illustration-male-user-icon.jpg"
                        alt="avatar"
                        width="60"
                        height="60"
                        />
                    <div className="form-outline w-100">
                        <textarea
                            className="form-control"
                            id="textAreaExample"
                            rows="3"
                            value ={comment}
                            onChange={handleComment}
                        ></textarea>
                        <label
                            className="form-label"
                            htmlFor="textAreaExample"
                        >
                            Message
                        </label>
                    </div>
                </div>
                <div className="float-end mt-2 pt-1">
                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={submitComment}
                    >
                        Post comment
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={handleCancel}
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
