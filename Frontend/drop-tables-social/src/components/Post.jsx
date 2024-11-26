import FollowButton from "./FollowButton";
import LikeButton from "./LikeButton";
import './Post.css';

export default function Post({content, username, profilePicture}){
    return(
        <div className="post">
            <h3 className="post-header">
                <div className="post-user-info">
                    <p>{username}</p>
                    <img src={profilePicture}></img>
                </div>
                <FollowButton/>
            </h3>
            <div className="post-content">
                <h2>{content}</h2>
            </div>
            <div className="post-interactions">
                <LikeButton/>
                <div className="heart"></div>
            </div>
        </div>
    )
}