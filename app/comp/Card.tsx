type CardProps = {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
};

export default function Card({
  image,
  title,
  description,
  onClick,
}: CardProps) {
  const preview =
    description.length > 140
      ? description.slice(0, 140).trim() + "..."
      : description;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer flex flex-col border border-black/10 hover:border-black transition-all duration-500 bg-white"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
      />

      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <h2 className="text-2xl text-black font-serif tracking-tight">
          {title}
        </h2>
        <p className="text-gray-600 text-sm font-sans leading-relaxed">
          {preview}
        </p>
      </div>
    </div>
  );
}
