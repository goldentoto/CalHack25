'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Header() {

  const router = useRouter()

  return (
    <div className="flex flex-col justify-center px-20 py-px w-full leading-none whitespace-nowrap bg-white border-b border-gray-100 max-md:px-5 max-md:max-w-full">
      <div className="px-4 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between py-4 w-full max-md:max-w-full">
          <div className="flex gap-8 py-0.5 my-auto max-md:max-w-full">
            <div className="grow text-xl font-bold text-black">CookClass</div>
            <div className="flex flex-auto gap-6 py-1.5 text-base text-black">
              <div className="grow self-start">
                <button type="home" onClick={() => router.push('/')}>
                  Home
                </button>
              </div>
              <button type="explore" onClick={() => router.push('/explore')}>
                Explore
              </button>
              <button type="community" onClick={() => router.push('/community')}>
                Community
              </button>
              <button type="pricing" onClick={() => router.push('/pricing')}>
                Pricing
              </button>
            </div>
          </div>
          <Image
            src="file.svg"
            alt="Profile"
            width={65}
            height={32}
            className="object-contain shrink-0 aspect-[2.03]"
          />
        </div>
      </div>
    </div>
  );
}
