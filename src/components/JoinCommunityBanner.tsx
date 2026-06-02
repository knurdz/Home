import Image from "next/image";
import Link from "next/link";

export default function JoinCommunityBanner() {
  return (
    <div className="relative w-full border-b border-border overflow-hidden h-14">
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
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 h-full flex items-center justify-center sm:justify-between gap-3">
        <p className="text-sm sm:text-base text-white/90 text-center sm:text-left leading-tight">
          Join the Knurdz community —{" "}
          <span className="text-[#afca52] font-semibold">applications close soon</span>.
        </p>
        <Link
          href="/join-us"
          className="shrink-0 px-4 py-1.5 rounded bg-white text-black hover:bg-white/90 transition-colors font-extrabold text-sm mono-font"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
