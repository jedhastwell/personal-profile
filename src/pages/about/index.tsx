'use client'
import Image from 'next/image'
import { MouseEventHandler } from 'react'
import iconic from '../../../public/iconic.svg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function About() {
  const router = useRouter()

  const handleLinkClick: MouseEventHandler<
    HTMLAnchorElement | HTMLButtonElement
  > = (e) => {
    e.stopPropagation()
  }

  const handleCardClick: MouseEventHandler<HTMLDivElement> = () => {
    router.push('/')
  }

  return (
    <div
      className="absolute flex h-full w-full cursor-pointer flex-col overflow-hidden bg-white md:flex-row"
      onClick={handleCardClick}
    >
      <header className="relative h-[40%] w-full shrink-0 overflow-hidden sm:h-[44%] md:h-full md:w-[44%]">
        <Image
          className="relative right-0 top-[10%] m-auto block h-auto w-[62%] max-w-none sm:w-[70%] md:absolute md:right-[3%] md:top-[-15%] md:inline md:h-[126%] md:w-auto"
          src={iconic}
          alt="Face icon"
        />
      </header>
      <div className="flex-grow p-7 text-sm font-light text-gray-700 sm:p-10 sm:text-lg">
        <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-start">
          Jed Hastwell
        </h1>
        <h3 className="text-center text-base font-light italic text-gray-400 sm:text-lg md:text-start">
          Software Developer
        </h3>
        <p className="pt-4">
          Hi, I’m Jed. I’m Australian, but I live in Berlin. I{' '}
          <Link
            href="https://github.com/jedhastwell/"
            onClick={handleLinkClick}
            className="text-burnt-yellow hover:text-orange-yellow"
          >
            build things
          </Link>{' '}
          with computers. Sometimes I{' '}
          <Link
            href="https://www.udemy.com/course/html5-game-development-2d-platform-game-fundamentals/?referralCode=13B8F31034B83AE36DAA"
            onClick={handleLinkClick}
            className="text-burnt-yellow hover:text-orange-yellow"
          >
            make videos{' '}
          </Link>{' '}
          to teach people stuff. I’ve also been known to{' '}
          <Link
            href="https://flickr.com/photos/jedhastwell/"
            onClick={handleLinkClick}
            className="text-burnt-yellow hover:text-orange-yellow"
          >
            take photographs
          </Link>
          .
        </p>
        <form action="mailto:jed@whistlefire.com" method="GET">
          <button
            onClick={handleLinkClick}
            className="m-auto mt-4 block cursor-pointer rounded-md border-none bg-burnt-yellow px-6 py-1 text-xl text-white outline-0 drop-shadow-button transition-all hover:drop-shadow-button-highlight hover:[transform:translateY(1px)] md:ml-auto md:mr-0"
          >
            Contact me
          </button>
        </form>
      </div>
    </div>
  )
}
