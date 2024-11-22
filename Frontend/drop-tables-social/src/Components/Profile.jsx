
const Profile = () => {
    const user = {
        Username: "fakeusername",
        Posts: ["fake", "array"],
        Followers: ["fake", "followers", "array"],
        Following: ["fake", "following", "array"],
    }
    return (
        <div className="profile-info">
            <img className="profile-avatar" src={user.ProfileImageUrl} alt="User Avatar"/>
            <div className="profile-details">
                <h2>{user.Username}</h2>
                <p>Posts: {user.Posts.length}</p>
                <p>Followers: {user.Followers.length}</p>
                <p>Following: {user.Following.length}</p>
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