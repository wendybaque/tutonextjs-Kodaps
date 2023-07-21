"use client"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className='font-bold text-pink-500 text-5xl'>HELLO WORLD !</h1>
     <Link href="/">Home</Link>
     <Link href="blog">Blog</Link>
    </main>
  )
}
