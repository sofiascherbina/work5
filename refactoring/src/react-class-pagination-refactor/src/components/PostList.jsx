import PostCard from "./PostCard.jsx";
export default function PostList({ posts, users}){
   return (
      <ul className="posts-list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} users={users} />
        ))}
      </ul>
    );
}

