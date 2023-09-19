"use client"
import Image from 'next/image'
import First from './first'

export default function Home() {
  const signIn = () => {
    console.log("signIn");
  }

  return (
    <div>
      <First />
    </div>
  )
}
