import React, { useState, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Types
export interface BlogPost {
  type: "local";
  title: string;
  slug: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
}

export interface MediumPost {
  type: "medium";
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  dateFormatted: string;
}

export type AnyPost = BlogPost | MediumPost;

const POSTS_PER_PAGE = 9;
const MEDIUM_USERNAME = "rahulshrivastwa1";

// Image Error Hook
function useImageError() {
  const [hidden, setHidden] = useState<Set<string>>(new Set());
  const hide = useCallback((k: string) => setHidden((p) => new Set(p).add(k)), []);
  return { hide, isHidden: (k: string) => hidden.has(k) };
}

// Pagination Component
function Pagination({
  current,
  total,
  onChange,
}: {
  current: number;
  total: number;
  onChange: (p: number) => void;
}) {
  if (total <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-1 mt-12">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronLeft className="w-4 h-4" /> Prev
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${
            p === current
              ? "bg-black text-white shadow-sm"
              : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
          }`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        Next <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// Compact Card
function BlogCard({
  title,
  category,
  image,
  imageKey,
  isImgHidden,
  onImgError,
  href,
  isExternal,
}: {
  title: string;
  category?: string;
  image: string;
  imageKey: string;
  isImgHidden: boolean;
  onImgError: (k: string) => void;
  href: string;
  isExternal?: boolean;
}) {
  const inner = (
    <div className="group cursor-pointer bg-white rounded-xl border border-zinc-100 overflow-hidden hover:shadow-md hover:border-zinc-200 transition-all duration-200 h-full flex flex-col">
      {!isImgHidden && image && (
        <div className="aspect-[16/9] overflow-hidden bg-zinc-100">
          <img
            src={image}
            alt={title}
            onError={() => onImgError(imageKey)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-4 flex flex-col flex-1">
        {category && (
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-2">
            {category}
          </span>
        )}
        <h2 className="text-sm font-bold text-zinc-900 leading-snug line-clamp-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h2>
        <div className="mt-auto pt-3 flex items-center gap-1 text-xs font-semibold text-zinc-400 group-hover:text-blue-600 transition-colors">
          {isExternal ? "Read on Medium" : "Read Article"}
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );

  return (
    <a href={href} target={isExternal ? "_blank" : "_self"} rel={isExternal ? "noopener noreferrer" : undefined}>
      {inner}
    </a>
  );
}

// Main Client Component
export default function BlogsList({
  localPosts,
  mediumPosts,
}: {
  localPosts: BlogPost[];
  mediumPosts: MediumPost[];
}) {
  const { hide, isHidden } = useImageError();
  const [activeTab, setActiveTab] = useState<"all" | "guides" | "medium">("all");
  const [currentPage, setCurrentPage] = useState(1);

  const allPosts: AnyPost[] = [
    ...(activeTab === "medium" ? [] : localPosts),
    ...(activeTab === "guides" ? [] : mediumPosts),
  ];

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const paginated = allPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleTab = (t: "all" | "guides" | "medium") => {
    setActiveTab(t);
    setCurrentPage(1);
  };

  const handlePage = (p: number) => {
    setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-10 pb-20">
      {/* Tabs */}
      <div className="mt-6 mb-10 flex items-center justify-center gap-2">
        {(
          [
            { key: "all", label: "All Posts" },
            { key: "guides", label: "Hiring Guides" },
            { key: "medium", label: "From Medium" },
          ] as { key: "all" | "guides" | "medium"; label: string }[]
        ).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => handleTab(key)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeTab === key
                ? "bg-black text-white shadow-sm"
                : "bg-zinc-100 text-zinc-500 hover:text-zinc-900"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {paginated.length === 0 && (
        <div className="text-center py-20 text-zinc-400">
          <p className="font-semibold">No posts found.</p>
        </div>
      )}

      {paginated.length > 0 && (
        <>
          <p className="text-xs text-zinc-400 mb-5">
            Showing {(currentPage - 1) * POSTS_PER_PAGE + 1}–
            {Math.min(currentPage * POSTS_PER_PAGE, allPosts.length)} of {allPosts.length} articles
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {paginated.map((post, idx) => {
              if (post.type === "local") {
                return (
                  <BlogCard
                    key={post.slug}
                    title={post.title}
                    category={post.category}
                    image={post.image}
                    imageKey={post.slug}
                    isImgHidden={isHidden(post.slug)}
                    onImgError={hide}
                    href={`/blogs/${post.slug}`}
                  />
                );
              }
              const mp = post as MediumPost;
              const k = `medium-${idx}`;
              return (
                <BlogCard
                  key={k}
                  title={mp.title}
                  category="Medium"
                  image={mp.thumbnail}
                  imageKey={k}
                  isImgHidden={isHidden(k)}
                  onImgError={hide}
                  isExternal
                  href={mp.link}
                />
              );
            })}
          </div>
        </>
      )}

      <Pagination current={currentPage} total={totalPages} onChange={handlePage} />

      {mediumPosts.length > 0 && (
        <div className="mt-14 flex items-center justify-between border-t border-zinc-200 pt-8">
          <div>
            <p className="text-sm font-bold text-zinc-900">More on Medium</p>
            <p className="text-xs text-zinc-500 mt-0.5">Quick updates from our team.</p>
          </div>
          <a
            href={`https://medium.com/@${MEDIUM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-zinc-900 text-white text-sm font-bold hover:scale-105 transition-transform shadow-md"
          >
            Follow on Medium
          </a>
        </div>
      )}
    </section>
  );
}
