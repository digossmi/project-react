import { PostCard } from "../PostCard";
import './styles.css';

export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        key={post.id}
        tittle={post.tittle}
        cover={post.cover}
        body={post.body}
      />
    ))}
  </div>
);
