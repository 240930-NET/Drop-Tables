import { useEffect, useState } from "react";
import { getUsernameById } from "../functions/user";

const PostTile = ( post ) => {
    const [ postUsername, setPostUsername ] = useState("loading...");

    useEffect(() => {
        if(post?.userId) {
            getUsernameById(post?.userId).then((username) => {
                setPostUsername(username);
            });
        }
    }, [post?.userId]);

    return (
        <div>
            <h3>{postUsername}</h3>
            <p>{post?.content}</p>
        </div>
    )
}

export default PostTile;