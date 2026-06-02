import Image from "next/image";
import Link from "next/link";

export default function JoinCommunityBanner() {
  return (
    <div className="join-community-banner relative w-full overflow-hidden min-h-14">
      <Image
        src="/images/banner/banner.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div className="join-banner-scrim absolute inset-0" />
      <div className="join-banner-content relative container mx-auto max-w-7xl px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-3">
        <p className="join-banner-text m-0 text-sm sm:text-base text-center sm:text-left leading-snug">
          Join the Knurdz community —{" "}
          <span className="join-banner-highlight inline-block font-semibold whitespace-nowrap">
            applications close soon.
          </span>
        </p>
        <Link href="/join-us" className="join-banner-btn shrink-0 px-4 py-1.5 rounded font-bold text-sm mono-font">
          Apply Now
        </Link>
      </div>
    </div>
  );
}
