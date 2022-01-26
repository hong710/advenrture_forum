import {useParams} from "react-router-dom";
import Comments from './Comments';


function Post({posts}) {
    const params = useParams();
    // const post = posts.find(post => post.id === parseInt(params.postId));
    console.log(params);
    return (
    <main className="mt-5">
        <div className="container">
            <div className="row">
                <div className="row col-8">
                    <img className="object-fit-cover w-100"  alt="topic"/>   

                    <h2 className="my-4">Lessons from a Tech Lead: Roles, responsibilities, and words of advice</h2>
                    <p>
                    I’ve been a tech lead for several years at a few different companies. Each role has been somewhat unique, and yet there have been commonalities between each experience. In this article I’d like to share with you what a tech lead is, what they do, and some lessons that I’ve learned along the way.
                    The first thing to know is that a tech lead is not a manager. A tech lead is still an individual contributor and is expected to be a high producer of work while also helping the team. The tech lead is usually a more senior member of the team, but they don’t always have to be. Since the tech lead doesn’t have any direct reports, they don’t have 1on1s with their team members or do performance reviews. They do, however, help mentor their teammates
                    </p>

                    <Comments/>
                    
                </div>
                <div className="row col-4 ">
                    <div>
                        <div className=" rounded p-0 border border-lightgreen">
                            <div className="d-flex align-items-center bg-lightgreen p-2 ">
                                <img className="rounded-circle img-user " src="https://randomuser.me/api/portraits/men/36.jpg" alt="user"/>
                                <h5 className="m-0 px-2 text-white">John Doe</h5>
                            </div>
                            <div className="p-2">
                                <p className="lead">Senior software engineer. Continuous learner. </p>
                                <h5 >More post from John Doe</h5>
                                <ul>
                                    <li>Backend Engineering Skills Are Emphasized Too Heavily for Principal Engineers</li>
                                    <li>Death to Tribal Knowledge</li>
                                    <li>AI-Assisted Coding with Tabnine</li>
                                </ul>
                            </div>
                        </div>  
                    </div>                   
                </div>


            </div>
            
        </div>

    </main>
        
)}

export default Post;
