import Link from "next/link";
import { truncateText } from "../../utils/utils";

export default async function page({ params }) {
  let data = await fetch(`https://dummyjson.com/posts?search=${params.search}`);
  let posts = await data.json();
  return posts.posts.length === 0 ? (
    <h1>No posts found</h1>
  ) : (
    <div>
      <h1>Search results for "{params.search}"</h1>
      {posts.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>
            {truncateText(post.body, 100)}{" "}
            <Link href={`/posts/${post.id}`}>
              <strong>MORE</strong>
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
}
