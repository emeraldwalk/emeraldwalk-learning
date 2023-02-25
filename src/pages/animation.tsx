import React from 'react'
import ThreeScene from '../components/ThreeScene'
import { loadScene } from '../examples/threeAnimation'

export interface AnimationProps {}

const Animation: React.FC<AnimationProps> = () => {
  return <ThreeScene load={loadScene} />
}

export default Animation
