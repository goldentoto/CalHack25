"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center px-20 py-px mt-2 mb-4 w-full leading-none whitespace-nowrap bg-white border-b border-gray-100 max-md:px-5 max-md:max-w-full">
      <div className="px-4 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between my-4 w-full max-md:max-w-full">
          <div className="flex gap-8 max-md:max-w-full">
            <div className="grow text-xl align-center font-bold text-black">
              CookClass
            </div>
            <div className="flex gap-6 text-base text-black">
              <button type="home" onClick={() => router.push("/")}>
                Home
              </button>
              <button type="explore" onClick={() => router.push("/explore")}>
                Explore
              </button>
              <button
                type="community"
                onClick={() => router.push("/community")}
              >
                Community
              </button>
              <button type="pricing" onClick={() => router.push("/pricing")}>
                Pricing
              </button>
            </div>
          </div>
          <Link href="/signin" className="flex align-center">
            <button className="text-black">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
