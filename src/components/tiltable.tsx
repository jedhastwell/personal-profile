import React, {
  useState,
  useCallback,
  useEffect,
  ReactNode,
  MouseEvent,
  TouchEvent,
} from 'react'
import { useSpring, animated } from 'react-spring'

type TiltableProps = {
  active?: boolean
  children: ReactNode
  maxTiltDeg?: {
    x: number
    y: number
  }
}

function Tiltable({
  children,
  active = false,
  maxTiltDeg = { x: 6, y: 8 },
}: TiltableProps) {
  const [pivot, setPivot] = useState<[number, number]>([0, 0])

  useEffect(() => {
    if (!active) {
      resetPivot()
    }
  }, [active])

  const resetPivot = () => {
    setPivot([0, 0])
  }

  const handlePointerMove = useCallback(
    (e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => {
      if (active) {
        const { clientX, clientY } =
          ('changedTouches' in e && e.changedTouches[0]) || e
        const rect = e.currentTarget!.getBoundingClientRect()

        setPivot([
          (clientX - rect.x) / (rect.width / 2) - 1,
          (clientY - rect.y) / (rect.height / 2) - 1,
        ])
      }
    },
    [active],
  )

  const calc = (x: number, y: number): [number, number, number] => [
    y * -maxTiltDeg.y,
    x * maxTiltDeg.x,
    x || y ? 1.02 : 1,
  ]
  const trans = (x: number, y: number, s: number) =>
    `rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  const spring = useSpring({
    config: { mass: 1, tension: 220, friction: 24 },
    transform: trans(...calc(...pivot)),
  })

  return (
    <animated.div
      className="relative [transform-style:preserve-3d]"
      style={spring}
      onMouseMove={handlePointerMove}
      onTouchMove={handlePointerMove}
      onTouchEnd={resetPivot}
      onMouseLeave={resetPivot}
    >
      {children}
    </animated.div>
  )
}

export default Tiltable
