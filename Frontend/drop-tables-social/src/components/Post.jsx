import FollowButton from "./FollowButton";
import UnfollowButton from "./UnfollowButton";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
import './Post.css';

export default function Post({postId, user, content}){

    return(
        <div className="post">
            <h3 className="post-header">
                <div className="post-user-info">
                    <p>{user.username}</p>
                    <img src={user.profileImageUrl}></img>
                </div>
                <UnfollowButton userId = {user.userId}/>
                <FollowButton userId = {user.userId}/>
            </h3>
            <div className="post-content">
                <h2>{content}</h2>
            </div>
            <div className="post-interactions">
                <DislikeButton postId = {postId}/>
                <LikeButton postId = {postId}/>
                <div className="heart"></div>
            </div>
        </div>
    )
}