import { useEffect, useState, useContext } from 'react';
import { UserContext } from "../context/UserContext";
import Post from '../components/Post.jsx';

function PostPopulator({page}){
    const[posts, setPosts] = useState([]);
    const[loaded, setLoaded] = useState(5);
    const[users, setUsers] = useState({});
    const { currentUser } = useContext(UserContext);
    function loadMorePosts()
    {
        setLoaded(loaded + 10);
    }
    useEffect(() => {
        async function loadPosts()  {
        fetch("http://localhost:5001/api/Post")
        .then(response => response.json())
        .then(data => setPosts(data))
      };
      loadPosts();}
      , []);
    useEffect(() => {
        posts.slice(0, loaded).forEach(post => {
          if (!users[post.userId]) {
            getUser(post.userId);
          }
        });
      }, [posts, loaded]);
    async function getUser(id)
      {
        if (users[id]) {
          return;
        }
        try {
          const response = await fetch(`http://localhost:5001/api/User/${id}`);
          const userData = await response.json();
          setUsers(prevUsers => ({ ...prevUsers, [id]: userData }));
        } catch (error) {
          console.error(`Error fetching user ${id}:`, error);
        }
      }
    return (
        <div>
            <div id="post-list">
                {posts.slice(0, loaded).map(post => 
                {
                    const user = users[post.userId];
                    return(
                        <div key={post.postId}>
                        {user ?(
                                <Post content ={post.content} username ={user.username} profilePicture={user.profileImageUrl}/>
                        ) : (
                            <p>Loading post...</p> 
                          )}
                        </div>
                    );
                }
            )}
            </div>
            <button id="load-more" type="button" onClick={loadMorePosts}>
                Load More
            </button>
                
        </div>
    )
}

export default PostPopulator;
