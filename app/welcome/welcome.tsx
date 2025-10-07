import Card from "~/comp/Card";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { posts } from "~/utils/api";
import { useNavigate } from "react-router";
import HenkoPopup from "~/comp/HenkoPopup";
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

export function Welcome() {
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window !== "undefined" && mixpanel.__loaded) {
      mixpanel.track("Page View: Welcome");
    }
  }, []);
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-10 gap-10">
      <HenkoPopup />
      <header className="text-center space-y-3">
        <h1 className="text-6xl text-black md:text-7xl font-serif tracking-tight">
          Dentro del ruido
        </h1>
        <p className="text-gray-600 text-lg font-sans max-w-lg mx-auto leading-relaxed">
          Reflexiones de una mente que siente demasiado.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl w-full">
        {posts.map((post, i) => (
          <Card
            key={i}
            {...post}
            onClick={() => navigate(`/post/${post.id}`)}
          />
        ))}
      </section>
    </main>
  );
}
