"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-purple-800 shadow-lg text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-indigo-200">
          Dermasoludable
        </Link>

        <ul className="flex space-x-8 font-medium text-lg">
          <li>
            <Link href="/" className="hover:text-indigo-200 transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/problema" className="hover:text-indigo-200 transition">
              Problema
            </Link>
          </li>
          <li>
            <Link href="/modelo" className="hover:text-indigo-200 transition">
              Modelo
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="cursor-pointer hover:text-indigo-200 transition">
              Componentes ⌄
            </span>

            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded shadow-lg py-2 z-50">
                {/* Componentes estructurantes */}
                <li className="px-4 py-2 font-semibold text-indigo-700">Estructurantes</li>
                <Link href="/componentes/unidad-operativa" className="block px-6 py-2 hover:bg-indigo-100">
                  Unidad Operativa
                </Link>
                <Link href="/componentes/observatorio" className="block px-6 py-2 hover:bg-indigo-100">
                  Observatorio Big Data
                </Link>
                <Link href="/componentes/banco-proyectos" className="block px-6 py-2 hover:bg-indigo-100">
                  Banco de Proyectos
                </Link>
                <Link href="/componentes/sistema-alerta" className="block px-6 py-2 hover:bg-indigo-100">
                  Sistema de Alerta Temprana
                </Link>
                <Link href="/componentes/iap" className="block px-6 py-2 hover:bg-indigo-100">
                  Plataforma IAP
                </Link>

                {/* Divider */}
                <hr className="my-2" />

                {/* Componentes dinamizadores */}
                <li className="px-4 py-2 font-semibold text-purple-700">Dinamizadores</li>
                <Link href="/componentes/tecnologia" className="block px-6 py-2 hover:bg-purple-100">
                  Tecnología
                </Link>
                <Link href="/componentes/infraestructura" className="block px-6 py-2 hover:bg-purple-100">
                  Infraestructura
                </Link>
                <Link href="/componentes/logistica" className="block px-6 py-2 hover:bg-purple-100">
                  Logística
                </Link>
              </ul>
            )}
          </li>
          <li>
            <a href="#contacto" className="hover:text-indigo-200 transition">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
