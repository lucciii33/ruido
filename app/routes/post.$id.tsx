import { useParams, Link } from "react-router";
import { posts } from "~/utils/api";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Post no encontrado</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black px-6 py-16 max-w-3xl mx-auto">
      <Link to="/" className="underline text-sm mb-8 inline-block">
        ← Volver
      </Link>

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[400px] object-cover grayscale mb-10"
      />

      <h1 className="text-4xl font-serif tracking-tight mb-6">{post.title}</h1>

      <p className="whitespace-pre-line leading-relaxed">{post.description}</p>
    </main>
  );
}
