import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Static Website</h1>
        <p className="text-xl mb-8">This site is deployed using a DevOps pipeline.</p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-blue-500 hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-500 hover:underline">About</Link>
            </li>
            <li>
              <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  )
}

