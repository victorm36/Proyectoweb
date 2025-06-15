"use client";
import Image from "next/image";

export default function Modelo() {
  return (
    <section className="relative bg-gradient-to-tr from-purple-900 via-indigo-900 to-blue-900 overflow-hidden py-24 text-white">
      {/* Fondo animado tipo "DERMASOLUDABLE" */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="whitespace-nowrap animate-slide text-[120px] font-extrabold opacity-5 text-pink-300 mix-blend-overlay">
          {Array(20).fill("DERMASOLUDABLE ").join('')}
        </div>
        <div className="whitespace-nowrap animate-slide-slower absolute top-1/3 left-0 text-[100px] font-bold opacity-10 text-purple-400 mix-blend-overlay">
          {Array(20).fill("DERMASOLUDABLE ").join('')}
        </div>
        <div className="whitespace-nowrap animate-slide-fast absolute bottom-1/4 left-0 text-[90px] font-bold opacity-5 text-blue-300 mix-blend-overlay">
          {Array(20).fill("DERMASOLUDABLE ").join('')}
        </div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-24">
        {/* Sección 1 - Estructura del Modelo */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <Image
              src="/estructura-modelo.png"
              alt="Estructura del modelo"
              width={500}
              height={500}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-white">¿Qué es el Modelo Dermasoludable?</h2>
            <p className="text-lg text-indigo-100 leading-relaxed">
              Es una estrategia integral que articula innovación, salud y cambio climático en un marco de prevención,
              mitigación y adaptación, estructurada por componentes técnicos, territoriales y operativos.
            </p>
          </div>
        </section>

        {/* Sección 2 - Enfoque */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="w-full md:w-1/2">
            <Image
              src="/enfoque-modelo.png"
              alt="Enfoque del modelo"
              width={500}
              height={500}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-white">Un enfoque interdisciplinario</h2>
            <p className="text-lg text-indigo-100 leading-relaxed">
              El modelo vincula el conocimiento científico, tecnológico y social, promoviendo soluciones participativas
              para la gestión del riesgo en salud cutánea asociada al cambio climático.
            </p>
          </div>
        </section>

        {/* Sección 3 - Aplicación */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <Image
              src="/aplicacion-modelo.png"
              alt="Aplicación territorial"
              width={500}
              height={500}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-white">Aplicación territorial</h2>
            <p className="text-lg text-indigo-100 leading-relaxed">
              Se implementa por fases en comunidades vulnerables, integrando observatorios climáticos, sistemas de alerta,
              educación comunitaria, tecnologías y diagnóstico participativo.
            </p>
          </div>
        </section>
      </main>
    </section>
  );
}
