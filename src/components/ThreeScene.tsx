import React from 'react'

export interface ThreeSceneProps {
  load: (container: HTMLElement) => Promise<() => void>
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ load }) => {
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    let dispose: () => void

    const timeout = setTimeout(async () => {
      dispose = await load(containerRef.current!)
    }, 0)

    return () => {
      clearTimeout(timeout)
      dispose?.()
    }
  }, [load])

  return <div ref={containerRef} style={{ width: 400, height: 400 }}></div>
}

export default ThreeScene
