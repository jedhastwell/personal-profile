import { FC, PropsWithChildren, useState } from 'react'
import { Transition, animated } from 'react-spring'
import Tiltable from './tiltable'

const Card: FC<PropsWithChildren> = ({ children }) => {
  const [config, setConfig] = useState({
    x: 1,
    y: 0,
    friction: 30,
  })

  const handleClick = (e: React.SyntheticEvent) => {
    // TODO: Try clean up this type handling
    let loc: MouseEvent | Touch | null = null
    if (e.nativeEvent instanceof TouchEvent) {
      loc = e.nativeEvent.changedTouches[0]
    } else if (e.nativeEvent instanceof MouseEvent) {
      loc = e.nativeEvent
    }

    if (loc) {
      const rect = e.currentTarget.getBoundingClientRect()
      const xDist = (loc.clientX - rect.x) / (rect.width / 2) - 1
      const yDist = (loc.clientY - rect.y) / (rect.height / 2) - 1
      const useY = Math.abs(xDist) < Math.abs(yDist)

      setConfig({
        // Set friction to a value between 30 and 45 based on distance from center
        friction: 45 - Math.abs(useY ? yDist : xDist) * 15,
        // Rotation direction (left, right, up, down) is based on the side of the card pressed
        x: !useY ? Math.sign(xDist || 1) : 0,
        y: useY ? Math.sign(yDist || 1) : 0,
      })
    }
  }

  const transform = (x: number, y: number) =>
    `rotateX(${y * -180}deg) rotateY(${x * 180}deg)`

  const { x, y, friction } = config

  return (
    <Tiltable active>
      <div
        className="relative h-[514px] w-[280px] [transform-style:preserve-3d] sm:h-[680px] sm:w-[370px] md:h-[370px] md:w-[680px]"
        onClick={handleClick}
      >
        {
          <Transition
            items={[children]}
            initial={{ transform: transform(0, 0) }}
            from={{ transform: transform(-x, -y) }}
            enter={{ transform: transform(0, 0) }}
            leave={{ transform: transform(x, y) }}
            config={{ mass: 4, tension: 200, friction: friction }}
          >
            {(style, item) => {
              return (
                <animated.div
                  className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-card drop-shadow-card [transform-style:preserve-3d] [backface-visibility:hidden]"
                  style={style}
                >
                  {item}
                </animated.div>
              )
            }}
          </Transition>
        }
      </div>
    </Tiltable>
  )
}

export default Card
