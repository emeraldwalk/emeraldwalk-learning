import React from 'react'
import ThreeScene from '@/components/ThreeScene'
import { loadScene } from '../examples/threejs/character-animation'

export interface CharacterAnimationProps {}

const CharacterAnimation: React.FC<CharacterAnimationProps> = ({}) => (
  <ThreeScene load={loadScene} />
)

export default CharacterAnimation
