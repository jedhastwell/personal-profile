import Link from 'next/link'

export default function Home() {
  return (
    <Link
      className="absolute flex h-full w-full cursor-pointer flex-row items-center justify-center bg-burnt-yellow"
      href="/about"
    >
      <div className="drop-shadow-orange">
        <div className="relative block h-[200px] w-[200px] bg-[#3D3D3D] [mask:url('/iconic.svg')] sm:h-[250px] sm:w-[250px]"></div>
      </div>
    </Link>
  )
}
