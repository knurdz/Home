import type { Element } from "hast";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  BlogBlockCode,
  BlogCodeBlock,
  BlogInlineCode,
} from "@/components/BlogCodeBlock";
import BlogFigure from "@/components/BlogFigure";

function isElement(node: unknown): node is Element {
  return (
    typeof node === "object" &&
    node !== null &&
    "type" in node &&
    (node as Element).type === "element"
  );
}

function paragraphShouldUnwrap(node: unknown) {
  if (!isElement(node) || node.tagName !== "p") return false;
  const child = node.children[0];
  return (
    node.children.length === 1 &&
    isElement(child) &&
    (child.tagName === "img" || child.tagName === "pre")
  );
}

interface BlogMarkdownContentProps {
  content: string;
}

export default function BlogMarkdownContent({ content }: BlogMarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => (
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 sm:mt-12 mb-3 sm:mb-4 text-foreground first:mt-0 text-pretty">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-lg sm:text-xl font-semibold mt-6 sm:mt-8 mb-2 sm:mb-3 text-foreground text-pretty">
            {children}
          </h3>
        ),
        p: ({ node, children }) => {
          if (paragraphShouldUnwrap(node)) {
            return <>{children}</>;
          }
          return (
            <p className="text-muted leading-relaxed mb-4 text-sm sm:text-base md:text-lg text-pretty break-words">
              {children}
            </p>
          );
        },
        ul: ({ children }) => (
          <ul className="list-disc list-outside text-muted space-y-2 mb-4 ml-4 sm:ml-5 pl-1">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-outside text-muted space-y-2 mb-4 ml-4 sm:ml-5 pl-1">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="leading-relaxed text-sm sm:text-base break-words">
            {children}
          </li>
        ),
        strong: ({ children }) => (
          <strong className="text-foreground font-semibold">{children}</strong>
        ),
        code: ({ children, className }) => {
          if (!className) {
            return <BlogInlineCode>{children}</BlogInlineCode>;
          }
          return (
            <BlogBlockCode className={className}>{children}</BlogBlockCode>
          );
        },
        pre: ({ children }) => <BlogCodeBlock>{children}</BlogCodeBlock>,
        img: ({ src, alt }) => <BlogFigure src={src} alt={alt} />,
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-green-500 hover:text-green-400 underline-offset-4 hover:underline transition-colors break-words"
            target={href?.startsWith("/") ? undefined : "_blank"}
            rel={href?.startsWith("/") ? undefined : "noopener noreferrer"}
          >
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
