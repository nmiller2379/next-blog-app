import Link from "next/link";

export default async function page({ params }) {
  let data = await fetch(`https://dummyjson.com/posts/${params.id}`);
  let post = await data.json();
  return (
    <div>
      <h1>{post.title}</h1>
      <div>
        <h3>👍 {post.reactions.likes}</h3>
        <h3>👎 {post.reactions.dislikes}</h3>
      </div>
      <p>{post.body}</p>
      <hr />
      <div>
        <h4>Topics:</h4>
        {post.tags.map((tag, index) => {
          return index === post.tags.length - 1 ? (
            <span key={index}>{tag}</span>
          ) : (
            <span key={index}>{tag} | </span>
          );
        })}
      </div>

      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
