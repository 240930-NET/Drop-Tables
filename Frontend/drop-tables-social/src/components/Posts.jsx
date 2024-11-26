import { useEffect, useState } from 'react';
import FollowButton from "./FollowButton";
import LikeButton from "./LikeButton";
import './Posts.css';

export default function Posts(){
    const [posts, setPosts] = useState();
    const fetchPosts = async () => {
        try{
            const getPostsUrl = "http://localhost:5001/api/Post";
            const response = await fetch(getPostsUrl);
            const json = await response.json();
            console.log(json);
            const fetchedPosts = json.map(post =>
                <div key = {post.postId}>
                    <div className="post">
                        <h3 className="post-header">
                            <div className="post-user-info">
                                <p>User id: {post.userId}</p>
                            </div>
                            <FollowButton/>
                        </h3>
                        <div className="post-content">
                            <h2>{post.content}</h2>
                        </div>
                        <div className="post-interactions">
                            <LikeButton/>
                            <div className="heart"></div>
                        </div>
                    </div>
                </div>
            );
            console.log(json[0].content);
            setPosts(fetchedPosts);
        }
        catch (error){
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return(
        <>
        {posts}
        </>
    )
}