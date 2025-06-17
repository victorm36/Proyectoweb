"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-200">
          Bufete Legal
        </Link>
        <ul className="flex space-x-8 font-medium text-lg">
          <li>
            <Link href="/" className="hover:text-blue-200 transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/nosotros" className="hover:text-blue-200 transition">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/servicios" className="hover:text-blue-200 transition">
              Servicios
            </Link>
          </li>
          <li>
            <a href="#contacto" className="hover:text-blue-200 transition">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
