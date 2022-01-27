import {Link} from "react-router-dom";

function PostThumbnail({ post }) {

    return (
        <div className="col-6 mt-4">
            <Link to = {`posts/${post.id}`} >
                <div className="card">
                <img
                    className="card-img-top object-fit-cover"
                    src={post.post_url}
                    alt="Card"
                />
                <div className="card-body">
                    <div className="d-flex align-items-center">
                    <img
                        className="rounded-circle img-user"
                        src={post.user.user_img} alt="Card"
                    />
                    <p className="m-0 px-2">{`${post.user.f_name} ${post.user.l_name}`}</p>
                    </div>
                    <h4>{post.post_title}</h4>
                </div>                
            </div>
            </Link>
        </div>
    
    );
}

export default PostThumbnail;
