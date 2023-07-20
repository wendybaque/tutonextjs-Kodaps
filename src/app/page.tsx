import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-pink-500 text-2xl">Hello World ! </h1>
      <Link href="blog">Blog index</Link>
    </main>
  );
}
