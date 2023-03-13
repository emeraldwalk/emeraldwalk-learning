import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export type DeltaHandler = (delta: number) => void

export function addGridHelper(scene: THREE.Scene) {
  const gridHelper = new THREE.GridHelper(20, 20)
  gridHelper.position.setX(-0.5)
  gridHelper.position.setY(-0.5)
  gridHelper.rotateX(Math.PI / 2)
  scene.add(gridHelper)
}

export function addLights(scene: THREE.Scene) {
  const ambientLight = new THREE.HemisphereLight('white', 'darkslategrey', 5)
  const mainLight = new THREE.DirectionalLight('white', 4)
  mainLight.position.set(10, 10, 10)
  scene.add(ambientLight, mainLight)
}

export function addOrbitControls(
  camera: THREE.Camera,
  domElement: HTMLElement,
  target?: THREE.Vector3,
) {
  const orbit = new OrbitControls(camera, domElement)
  if (target) {
    orbit.target.copy(target)
  }
}

export function createTickers(
  ...updaters: { update: DeltaHandler }[]
): { tick: DeltaHandler }[] {
  return updaters.map((u) => ({ tick: (delta) => u.update(delta) }))
}
