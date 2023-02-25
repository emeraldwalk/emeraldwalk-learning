import * as THREE from 'three'

export class World {
  constructor(container: HTMLElement) {
    this.camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      1,
      10000,
    )

    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(container.clientWidth, container.clientHeight)
    container.append(this.renderer.domElement)
  }

  camera: THREE.PerspectiveCamera
  scene: THREE.Scene
  renderer: THREE.WebGLRenderer

  start = () => {
    this.renderer.setAnimationLoop(() => {
      this.renderer.render(this.scene, this.camera)
    })
  }

  stop = () => {
    this.renderer.setAnimationLoop(null)
  }

  dispose = () => {
    this.renderer.setAnimationLoop(null)
    this.renderer.domElement.remove()
  }
}
