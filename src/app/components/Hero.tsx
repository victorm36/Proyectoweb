"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: "url('/aplicacion-modelo.png')"}}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Bufete Legal</h1>
        <p className="max-w-2xl mb-8 text-lg md:text-xl">Asesor\u00eda experta en inmigraci\u00f3n y defensa legal.</p>
        <Link href="#contacto" className="bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded text-white font-semibold">Cont\u00e1ctanos</Link>
      </div>
    </section>
  );
}
