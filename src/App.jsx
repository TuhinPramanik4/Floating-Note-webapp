import React from 'react'
import BackGround from './Compontents/Background'
import Foreground from './Compontents/Foreground'

export default function App() {
  return (
      <div className=' relative w-full h-screen bg-zinc-800'>          
      <BackGround />
      <Foreground />
      </div> 
  )
}

