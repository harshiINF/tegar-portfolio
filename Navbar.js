import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { pathname } = useRouter();
  const isEnglish = pathname.startsWith('/en');

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-950 shadow-lg">
      <h1 className="text-2xl font-bold text-purple-400">Tegar Dev</h1>
      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <Link href={isEnglish ? "/en" : "/"}>
            <span className="hover:text-purple-300">Home</span>
          </Link>
        </li>
        <li>
          <Link href={isEnglish ? "/en/about" : "/about"}>
            <span className="hover:text-purple-300">About</span>
          </Link>
        </li>
        <li>
          <Link href={isEnglish ? "/en/projects" : "/projects"}>
            <span className="hover:text-purple-300">Projects</span>
          </Link>
        </li>
        <li>
          <Link href={isEnglish ? "/en/contact" : "/contact"}>
            <span className="hover:text-purple-300">Contact</span>
          </Link>
        </li>
        <li>
          <Link href={isEnglish ? pathname.replace('/en', '') : `/en${pathname}`}>
            <span className="text-purple-300 font-bold">{isEnglish ? "ID" : "EN"}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
