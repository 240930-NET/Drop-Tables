import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <div className="profile-info">
            <img className="profile-avatar" src={currentUser?.profileImageUrl} alt="User Avatar"/>
            <div className="profile-details">
                <h2>{currentUser.username}</h2>
                <p>Posts: {currentUser.posts?.length}</p>
                <p>Followers: {currentUser.followers?.length}</p>
                <p>Following: {currentUser.following?.length}</p>
            </div>
            <div className="profile-about">
                <h3>About me:</h3>
                <p>
                    Add an about me for user????
                </p>
            </div>
        </div>
    )
}

export default Profile;