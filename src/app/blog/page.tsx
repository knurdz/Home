import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import BlogPostList from "@/components/BlogPostList";
import BlogFontSelector, { BlogFontRoot } from "@/components/BlogFontSelector";
import { getAllBlogPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllBlogPosts("newest");

  return (
    <>
      <Navbar activePage="blog" />
      <ScrollIndicator />

      <BlogFontRoot className="pt-site-header md:pt-site-header-md pb-12 sm:pb-16 md:pb-20 overflow-x-hidden">
        <section className="relative px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-6 sm:mb-10 md:mb-12">
              <div className="relative mx-auto max-w-5xl min-w-0 grid grid-cols-[1fr_auto_1fr] items-center gap-3 mb-5 sm:mb-6">
                <span aria-hidden className="justify-self-start" />
                <span className="justify-self-center inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded border border-border text-muted text-xs sm:text-sm mono-font whitespace-nowrap">
                  $ ls blog/
                </span>
                <div className="justify-self-end">
                  <BlogFontSelector />
                </div>
              </div>

              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-foreground leading-tight text-balance">
                  Community <span className="text-faded">Blog</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-1 leading-relaxed text-balance">
                  Tutorials, guides, and technical writing from Knurdz members.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl min-w-0">
              <BlogPostList posts={posts} />
            </div>
          </div>
        </section>
      </BlogFontRoot>

      <Footer />
    </>
  );
}
