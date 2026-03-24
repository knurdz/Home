import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.frontmatter.title} — Knurdz`,
    description: project.frontmatter.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { frontmatter, content } = project;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <span className="text-2xl font-bold mono-font tracking-tighter">
              <span className="text-white">K</span>
              <span className="text-gray-500">nurdz</span>
              <span className="text-green-500">_</span>
            </span>
          </Link>
          <Link
            href="/#projects"
            className="mono-font text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
          >
            ← git checkout projects
          </Link>
        </div>
      </nav>

      {/* Banner */}
      <div className="relative w-full h-[55vh] min-h-[320px] mt-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black z-10" />
        <div className="absolute inset-0 bg-gray-900">
          {/* Fallback pattern if image missing */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        {frontmatter.banner && (
          <Image
            src={frontmatter.banner}
            alt={frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Header */}
      <div className="relative -mt-24 z-20 container mx-auto max-w-4xl px-6 pb-10">
        <div className="mb-6 flex flex-wrap items-center gap-3 mono-font text-sm">
          <span className="text-green-500">●</span>
          <span className="text-gray-400">{frontmatter.branch}</span>
          <span className="text-gray-600">·</span>
          <span className="text-gray-600">commit {frontmatter.commit}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mono-font mb-4">
          {frontmatter.title}
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          {frontmatter.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {frontmatter.tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded border border-white/20 text-gray-400 text-xs mono-font"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 border-t border-white/10" />
      </div>

      {/* Markdown Content */}
      <article className="container mx-auto max-w-4xl px-6 pb-32">
        <div className="project-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <h2 className="text-2xl md:text-3xl font-bold mono-font mt-12 mb-4 text-white">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold mono-font mt-8 mb-3 text-white">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-400 leading-relaxed mb-5 text-lg">
                  {children}
                </p>
              ),
              code: ({ children, className }) => {
                const isBlock = className?.includes("language-");
                return isBlock ? (
                  <code className={`block bg-white/5 border border-white/10 rounded-lg p-4 text-green-400 mono-font text-sm overflow-x-auto mb-6 whitespace-pre ${className}`}>
                    {children}
                  </code>
                ) : (
                  <code className="bg-white/10 text-green-400 mono-font text-sm px-2 py-0.5 rounded">
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre className="bg-white/5 border border-white/10 rounded-lg p-4 overflow-x-auto mb-6 mono-font text-sm text-green-400">
                  {children}
                </pre>
              ),
              ul: ({ children }) => (
                <ul className="space-y-2 mb-6 list-none pl-0">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="text-gray-400 flex gap-3 leading-relaxed">
                  <span className="text-green-500 mt-0.5 shrink-0">▸</span>
                  <span>{children}</span>
                </li>
              ),
              strong: ({ children }) => (
                <strong className="text-white font-semibold">{children}</strong>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse mono-font text-sm">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="border-b border-white/20">{children}</thead>
              ),
              th: ({ children }) => (
                <th className="text-left py-2 px-4 text-gray-300 font-semibold">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="py-2 px-4 text-gray-400 border-b border-white/5">
                  {children}
                </td>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-green-500 pl-6 my-6 text-gray-400 italic">
                  {children}
                </blockquote>
              ),
              hr: () => <hr className="border-white/10 my-10" />,
              img: ({ src, alt }) => (
                <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={typeof src === "string" ? src : ""}
                    alt={alt || ""}
                    className="w-full h-full object-cover"
                  />
                </div>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
