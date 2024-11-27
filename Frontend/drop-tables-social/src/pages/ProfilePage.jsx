import { useContext, useState } from "react"
import Profile from "../components/Profile";
import ProfileTab from "../components/ProfileTab";
import PostTile from "../components/PostTile";
import Post from "../components/Post";
import { UserContext } from "../context/UserContext";
import "../Styles/ProfilePage.css"
import "../Styles/Home.css"

const ProfilePage = () => {
    const [tab, setTab] = useState("posts");
    const { currentUser } = useContext(UserContext);

    const handleTabChange = (selectedTab) => {
        setTab(selectedTab);
    }

    console.log(currentUser);
    return (
        <div className="profile-page">
            <Profile />
            <ProfileTab onTabChange={handleTabChange}/>
            <div>
                {tab === "posts" &&
                    currentUser?.posts?.map((post, index) => (
                        <div key={post.postId}>
                            <Post postId = {post.postId} user = {currentUser} content ={post.content}/>
                        </div>
                    ))
                }
                {tab === "likes" && 
                    currentUser?.likes?.map((like, index) => (
                        <div key={post.postId}>
                            <Post postId = {post.postId} user = {null} content ={post.content}/>
                        </div>
                    ))    
                }
            </div>
        </div>
    )
}

export default ProfilePage;