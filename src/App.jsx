import axios from "axios";
import { useState } from "react";

const BASE_POSTS_URL = "http://localhost:8001/posts";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    const url = BASE_POSTS_URL;
    const freeId = posts.length+1; // -- good for no delete
    const newPost = {
      id: freeId,
      title: `json-server${freeId}`,
      author: `typicode1${freeId}`,
    };
    axios
      .post(url,newPost)
      .then((res) => {
        const newPosts = [...posts].push(newPost);
        setPosts(newPosts);
      })
      .catch((err) => console.error(err));
  };

  const getPosts = () => {
    const url = BASE_POSTS_URL;
    axios
      .get(url)
      .then((res) => {
        const posts = res.data;
        setPosts(posts);
        console.log(posts);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <button onClick={addPost}>Add Post</button>
      <button onClick={getPosts}>Get Posts</button>
      <br />
      <p>num posts : {posts.length}</p>
    </div>
  );
}

export default App;
