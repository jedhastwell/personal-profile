'use client'
import Image from 'next/image'
import { MouseEventHandler } from 'react'
import iconic from '../../public/iconic.svg'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Custom404() {
  const router = useRouter()
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    router.replace('/')
  }
  const handleLinkClick: MouseEventHandler<
    HTMLAnchorElement | HTMLButtonElement
  > = (e) => {
    e.stopPropagation()
  }

  return (
    <div
      className="absolute flex h-full w-full cursor-pointer flex-col overflow-hidden bg-white md:flex-row"
      onClick={handleClick}
    >
      <header className="relative h-[40%] w-full shrink-0 overflow-hidden sm:order-1 sm:h-[44%] md:h-full md:w-[44%]">
        <Image
          className="relative right-0 top-[10%] m-auto block h-auto w-[62%] max-w-none sm:w-[70%] md:absolute md:left-[3%] md:top-[-15%] md:inline md:h-[126%] md:w-auto"
          src={iconic}
          alt="Face icon"
        />
      </header>
      <div className="flex-grow p-7 text-sm font-light text-gray-700 sm:p-10 sm:text-lg">
        <h1 className="text-start text-4xl font-semibold sm:text-6xl">404</h1>
        <h2 className="mb-2 italic">Page not found</h2>
        <p>
          Lost?{' '}
          <Link
            href="/"
            replace={true}
            onClick={handleLinkClick}
            className="text-burnt-yellow hover:text-orange-yellow"
            prefetch
          >
            Flippity flip...
          </Link>
        </p>
      </div>
    </div>
  )
}
