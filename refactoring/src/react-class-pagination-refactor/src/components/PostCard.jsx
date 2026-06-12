import { getUserNameById } from "../utils/postHelpers.js";
export default function PostCard({ post, users}){
    const userName = getUserNameById(users, post.userId);
  return (
      <li className="post-card">
        <div className="post-card__meta">
          <span>Post #{post.id}</span>
          <span>{userName}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </li>
    );
}
