import Image from "next/image";
import Link from "next/link";
import galleryData from "@/data/gallery.json";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  date: string;
  category: string;
  objectPosition?: string;
}

function getAllGalleryItems(): GalleryItem[] {
  return [
    ...galleryData.events,
    ...galleryData.projects,
    ...galleryData.team,
  ];
}

/** Side tiles: distinct from the hero (not the next 3 by date). */
const homeGallerySideItems: GalleryItem[] = [
  {
    id: "home-gallery-bootcamp",
    title: "Knurdz Bootcamp",
    description:
      "Hands-on workshops where our community learns, builds, and ships real projects together.",
    src: "/banner/bootcamp-group-pic.jpg",
    alt: "Knurdz bootcamp group photo",
    date: "2026-05-01",
    category: "Community",
    objectPosition: "center 52%",
  },
  {
    id: "home-gallery-community",
    title: "Knurdz Community",
    description:
      "Builders across code, hardware, and events: moments from the community in action.",
    src: "/banner/community-highlight.jpg",
    alt: "Knurdz community highlight",
    date: "2026-04-01",
    category: "Community",
    objectPosition: "center 62%",
  },
  {
    id: "home-gallery-cover",
    title: "Build. Innovate. Together.",
    description:
      "From hackathons to hardware: the people and projects that define Knurdz.",
    src: "/banner/cover-image.jpg",
    alt: "Knurdz community cover",
    date: "2026-03-01",
    category: "Highlight",
    objectPosition: "center 56%",
  },
];

function getHomeGalleryHero(): GalleryItem | undefined {
  return getAllGalleryItems()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
}

function GalleryTile({
  image,
  index,
  className = "",
}: {
  image: GalleryItem;
  index: number;
  className?: string;
}) {
  return (
    <Link
      href="/about"
      className={`group relative overflow-hidden rounded-xl border border-border bg-card hover:border-green-500/35 transition-all duration-300 ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        quality={85}
        priority={index === 0}
        loading={index === 0 ? "eager" : "lazy"}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        style={
          image.objectPosition
            ? { objectPosition: image.objectPosition }
            : undefined
        }
      />
      <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] mono-font bg-green-500/25 text-green-400 border border-green-500/40 mb-1.5">
          {image.category}
        </span>
        <h3 className="text-xs sm:text-sm font-bold mono-font text-foreground line-clamp-2">
          {image.title}
        </h3>
      </div>
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-green-500/70 z-10" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-green-500/70 z-10" />
    </Link>
  );
}

export default function HomeGalleryTeaser() {
  const hero = getHomeGalleryHero();
  const side = homeGallerySideItems;

  if (!hero) return null;

  return (
    <section className="relative py-14 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="inline-block px-3 py-1.5 rounded border border-border text-muted text-xs mono-font mb-3">
              $ ls ./gallery/ | head -4
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mono-font text-foreground">
              In the <span className="text-faded">wild</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted max-w-lg">
              Hackathons, build nights, and team moments from the community.
            </p>
          </div>
          <Link
            href="/about"
            className="mono-font text-sm text-muted hover:text-green-500 transition-colors shrink-0"
          >
            View full gallery →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 sm:gap-4 min-h-[16rem] md:min-h-[22rem]">
          <GalleryTile
            image={hero}
            index={0}
            className="col-span-2 row-span-2 min-h-[14rem] md:min-h-0"
          />
          {side.map((image, i) => (
            <GalleryTile
              key={image.id}
              image={image}
              index={i + 1}
              className="min-h-[8rem] md:min-h-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
