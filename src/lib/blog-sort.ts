export type BlogSortOption = "newest" | "oldest" | "title-asc" | "title-desc";

type SortablePost = {
  frontmatter: { title: string; date: string };
};

function parsePostDate(date: string): number {
  const t = Date.parse(date);
  return Number.isNaN(t) ? 0 : t;
}

export function sortBlogPosts<T extends SortablePost>(
  posts: T[],
  sortBy: BlogSortOption = "newest"
): T[] {
  const sorted = [...posts];
  switch (sortBy) {
    case "oldest":
      return sorted.sort(
        (a, b) => parsePostDate(a.frontmatter.date) - parsePostDate(b.frontmatter.date)
      );
    case "title-asc":
      return sorted.sort((a, b) =>
        a.frontmatter.title.localeCompare(b.frontmatter.title, undefined, {
          sensitivity: "base",
        })
      );
    case "title-desc":
      return sorted.sort((a, b) =>
        b.frontmatter.title.localeCompare(a.frontmatter.title, undefined, {
          sensitivity: "base",
        })
      );
    case "newest":
    default:
      return sorted.sort(
        (a, b) => parsePostDate(b.frontmatter.date) - parsePostDate(a.frontmatter.date)
      );
  }
}
