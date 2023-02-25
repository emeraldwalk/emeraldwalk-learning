import * as THREE from 'three'

export async function loadScene(container: HTMLElement): Promise<() => void> {
  const camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight,
    1,
    10000,
  )

  const scene = new THREE.Scene()

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(container.clientWidth, container.clientHeight)

  container.append(renderer.domElement)

  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera)
  })

  return () => {
    renderer.setAnimationLoop(null)
    renderer.domElement.remove()
  }
}
