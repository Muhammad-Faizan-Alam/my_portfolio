import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full bg-white/80 dark:bg-gray-900/80 border-t border-blue-100 dark:border-emerald-900 shadow-inner backdrop-blur-md mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image width={24} height={24} src="/profile.jpeg" alt="logo" className="w-8 h-8 rounded-full border-2 border-blue-200 dark:border-emerald-700 shadow" />
          <span className="font-bold text-blue-900 dark:text-emerald-400 text-lg tracking-tight">Faizan</span>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/" className="hover:text-blue-700 dark:hover:text-emerald-400 transition">Home</Link>
          <Link href="#About" className="hover:text-blue-700 dark:hover:text-emerald-400 transition">About</Link>
          <Link href="#Projects" className="hover:text-blue-700 dark:hover:text-emerald-400 transition">Projects</Link>
          <Link href="#Services" className="hover:text-blue-700 dark:hover:text-emerald-400 transition">Services</Link>
          <Link href="#Contact" className="hover:text-blue-700 dark:hover:text-emerald-400 transition">Contact</Link>
        </nav>
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Faizan. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer