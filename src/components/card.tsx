'use client'
import { FC, PropsWithChildren } from 'react'
import Tiltable from './tiltable'

const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Tiltable active>
      <div className="relative h-[514px] w-[280px] [transform-style:preserve-3d] sm:h-[680px] sm:w-[370px] md:h-[370px] md:w-[680px]">
        <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-card drop-shadow-card [transform-style:preserve-3d] [backface-visibility:hidden]">
          {children}
        </div>
      </div>
    </Tiltable>
  )
}

export default Card
