import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function LikeButton({postId}){
    const { currentUser } = useContext(UserContext);

    const handleClick = async () => {
        try{
            const postLikeUrl = "http://localhost:5001/api/User/"+currentUser.userId+"/post/"+postId;
            const response = await fetch(postLikeUrl, {
                method: "POST"
            });
            console.log(response);
        }
        catch (error){
            console.log(error.message);
        }
    }
    return(
        <button onClick={handleClick}>Like</button>
    )
}