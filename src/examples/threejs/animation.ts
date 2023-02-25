import { World } from './World'

export async function loadScene(container: HTMLElement): Promise<() => void> {
  const world = new World(container)

  world.start()

  return world.dispose
}
