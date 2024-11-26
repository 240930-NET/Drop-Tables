import { useContext } from "react";
import { useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { getPosts } from "../functions/post";

function Feed() {
  const { currentUser } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const userIds = currentUser.following.map((user) => user.id);
      const posts = await getPosts(userIds);
      const filteredPosts = posts.filter((post) => post.userId !== currentUser.id);
      setPosts(filteredPosts);
    };

    fetchPosts();
  }, [currentUser.following]);

  return (
    <div>
      <h1>Feed</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {post.imageURL && (
              <img src={post.imageURL} alt="Post Image" />
            )}
            {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feed;