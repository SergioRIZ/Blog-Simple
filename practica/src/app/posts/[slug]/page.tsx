import { posts } from "@/data/dataPosts"

const PostPage = ({params}: {params: {slug: string}}) => {
console.log("Params recibidos:", params);

const slug = params.slug
const post = posts.find(p => p.slug === slug);
if(!post) {
    return <div>Post not found</div>
}

    return (
        <div>
        <article>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
          <p>{post.content}</p>
          <p>{post.date}</p>
          </article>
        </div>
    )
}

export default PostPage