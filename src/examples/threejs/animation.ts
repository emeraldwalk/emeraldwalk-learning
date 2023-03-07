import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { World } from './World'

export async function loadScene(container: HTMLElement): Promise<() => void> {
  const world = new World(container)

  const loader = new GLTFLoader()
  const parrotData = await loader.loadAsync('/assets/threejs/Parrot.glb')
  const parrotObject = parrotData.scene.children[0]
  parrotObject.position.set(0, 0, 2.5)
  console.log('parrotData:', parrotData)

  world.scene.add(parrotObject)

  // lights
  const ambientLight = new THREE.HemisphereLight('white', 'darkslategrey', 5)
  const mainLight = new THREE.DirectionalLight('white', 4)
  mainLight.position.set(10, 10, 10)
  world.scene.add(ambientLight, mainLight)

  // grid helper
  const gridHelper = new THREE.GridHelper(20, 20)
  gridHelper.position.setX(-0.5)
  gridHelper.position.setY(-0.5)
  gridHelper.rotateX(Math.PI / 2)
  world.scene.add(gridHelper)

  // orbit controls
  const orbit = new OrbitControls(world.camera, world.renderer.domElement)
  orbit.target.copy(parrotObject.position)

  world.start()

  return world.dispose
}
