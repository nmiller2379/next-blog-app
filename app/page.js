import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { truncateText } from "./utils/utils";

export default async function Home() {
  let data = await fetch("https://dummyjson.com/posts?limit=5");
  let posts = await data.json();

  return (
    <div className={styles.container}>
      <h1>Latest Posts</h1>
      <div className={styles.posts}>
        {posts.posts.map((post) => (
          <div key={post.id} className={styles.post}>
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
    </div>
  );
}
