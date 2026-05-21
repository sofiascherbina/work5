import { useState, useEffect } from "react";

export default function Posts(){
  const [posts, setPosts] = useState(
      {
        posts: [],
        selectedPostId:Number(localStorage.getItem("selectedPostId")),
        selectedPost: null,
        loading: false,
        error: null,
        category:''
    }
  )
  useEffect(() => {
  setPosts(prev => ({ ...prev, loading: true, error: null }));

  const timerId = setTimeout(() => {
    const allPosts = [
      { id: 1, title: "React Basics", category: "react" },
      { id: 2, title: "JS Promises", category: "js" },
      { id: 3, title: "Hooks Guide", category: "react" },
    ];

    const filteredPosts = allPosts.filter(
      post => post.category === posts.category
    );

    setPosts(prev => ({
      ...prev,
      posts: filteredPosts,
      loading: false,
    }));
  }, 700);

  return () => clearTimeout(timerId);
}, [posts.category]);

useEffect(() => {
  if (!posts.selectedPostId) return;

  localStorage.setItem("selectedPostId", posts.selectedPostId);

  setPosts(prev => ({ ...prev, loading: true }));

  const timerId = setTimeout(() => {
    const details = {
      1: { id: 1, text: "React is a library for building UI." },
      2: { id: 2, text: "Promises help with async code." },
      3: { id: 3, text: "Hooks let you use state and effects." },
    };

    setPosts(prev => ({
      ...prev,
      selectedPost: details[prev.selectedPostId],
      loading: false,
    }));
  }, 500);

  return () => clearTimeout(timerId);
}, [posts.selectedPostId]);

  const selectPost = (id) => {
    setPosts(prev=>({ ...prev, selectedPostId: id }));
  };

  const handleChange=(evt)=>{
    setPosts(prev=>({...prev, category:evt.target.value}))
  }
  return(
    <div>
      <input type="text" name="category" value={posts.category} onChange={handleChange}/>
        <h2>Posts</h2>

        {posts.loading && <p>Loading...</p>}
        {posts.error && <p>{posts.error}</p>}

        <ul>
          {posts.posts.map(post => (
            <li key={post.id}>
              <button onClick={() => selectPost(post.id)}>
                {post.title}
              </button>
            </li>
          ))}
        </ul>

        {posts.selectedPost && (
          <div>
            <h3>Post details</h3>
            <p>{posts.selectedPost.text}</p>
          </div>
        )}
      </div>
  )
}