import { useState } from "react"
import Profile from "../Components/Profile";
import ProfileTab from "../Components/ProfileTab";

const ProfilePage = () => {
    const [tab, setTab] = useState("posts");

    const handleTabChange = (selectedTab) => {
        setTab(selectedTab);
    }

    const fakePosts = [
        {
            username: "fetch users username",
            content: "fetch users posts content",
            likes: "fetch posts likes"
        }
    ]

    return (
        <div className="profile-page">
            {/* Insert header component here */}
            <Profile />
            <ProfileTab onTabChange={handleTabChange}/>
            <div className="profile-content">
                {tab === "posts" && <p>map user posts here</p>
                    // fakePosts.map((post, index) => (
                    //     <PostTile key={index} {...post}/>
                    // ))
                }
                {tab === "likes" && <p>map liked posts here</p>}
            </div>
        </div>
    )
}

export default ProfilePage;