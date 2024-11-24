import { useContext, useState } from "react"
import Profile from "../components/Profile";
import ProfileTab from "../components/ProfileTab";
import PostTile from "../components/PostTile";
import { UserContext } from "../context/UserContext";

const ProfilePage = () => {
    const [tab, setTab] = useState("posts");
    const { currentUser } = useContext(UserContext);

    const handleTabChange = (selectedTab) => {
        setTab(selectedTab);
    }

    console.log(currentUser);

    return (
        <div className="profile-page">
            {/* Insert header component here */}
            <Profile />
            <ProfileTab onTabChange={handleTabChange}/>
            <div className="profile-content">
                {tab === "posts" &&
                    currentUser?.posts?.map((post, index) => (
                        <PostTile key={index} {...post}/>
                    ))
                }
                {tab === "likes" && 
                    currentUser?.likes?.map((like, index) => (
                        <PostTile key={index} {...like}/>
                    ))    
                }
            </div>
        </div>
    )
}

export default ProfilePage;