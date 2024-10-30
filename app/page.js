import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-zinc-800 text-white min-h-screen p-5">
      <title>Class Assignments</title>
      <h1 className="font-mono text-3xl text-center">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="font-mono text-center pt-8 text-lg">
        <li><Link href="./week-2/">Week 2</Link></li>
        <li><Link href="./week-3/">Week 3</Link></li>
        <li><Link href="./week-4/">Week 4</Link></li>
        <li><Link href="./week-5/">Week 5</Link></li>
        <li><Link href="./week-6/">Week 6</Link></li>
        <li><Link href="./week-7/">Week 7</Link></li>
      </ul>
    </main>
  );

}
