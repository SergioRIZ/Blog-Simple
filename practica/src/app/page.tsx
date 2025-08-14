import Link from "next/link";
import { posts } from "@/data/dataPosts";

export default function Home() {

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post.slug}>
          <article>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
          <p>{post.date}</p>
          </article>
        </Link>
      ))}
      </main>
    </div>
  );
}
