import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
//note to use react-use u must use npm i react-use first 
export default function MyConfetti () {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}
