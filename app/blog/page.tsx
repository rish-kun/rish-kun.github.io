const posts = [
  {
    title: "Coming soon",
    date: "2026",
    description: "Notes on systems, ML, and things I find interesting.",
    tags: ["Meta"],
    href: "#",
  },
];

export default function Blog() {
  return (
    <div className="min-h-dvh flex flex-col allow-scroll overflow-y-auto">
      <main className="flex-1 px-8 lg:px-12 py-12">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-1">
          Blog
        </h2>
        <p className="text-sm text-neutral-500 mb-10">
          Occasional writing on things I learn.
        </p>

        <div className="flex flex-col gap-3 max-w-2xl">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              className="group text-left rounded-xl px-5 py-4 border border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50/50 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold text-neutral-900 group-hover:text-accent transition-colors">
                  {post.title}
                </span>
                <span className="text-xs mt-0.5 text-neutral-400 ml-4 flex-shrink-0">
                  {post.date}
                </span>
              </div>
              <p className="text-xs mt-1.5 leading-relaxed line-clamp-1 text-neutral-500">
                {post.description}
              </p>
              <div className="flex gap-1.5 mt-3 flex-wrap">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded bg-neutral-100 text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
