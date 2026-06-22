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
      <div className="join-banner-content relative container mx-auto max-w-7xl px-4 sm:px-6 py-2.5">
        <p className="join-banner-text m-0 flex-1 text-sm sm:text-base text-left leading-snug">
          Deploy Sprint -{" "} 
          <span className="join-banner-highlight inline-block font-semibold whitespace-nowrap">
            Register Now
          </span>
        </p>
        <Link
          href="https://deploysprint.knurdz.org/register"
          className="join-banner-btn shrink-0 ml-auto px-4 py-1.5 rounded font-semibold text-sm mono-font"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
