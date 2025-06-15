"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const conceptos = [
    {
      nombre: "Adaptación",
      descripcion: "Prepararse frente a los impactos del clima sobre la piel.",
      imagen: "/adaptacion.jpg",
    },
    {
      nombre: "Mitigación",
      descripcion: "Reducir riesgos mediante innovación ambiental y social.",
      imagen: "/mitigacion.jpg",
    },
    {
      nombre: "Prevención",
      descripcion: "Cuidado, educación y participación comunitaria.",
      imagen: "/prevencion.jpg",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-xl">
          El futuro de la salud cutánea frente al cambio climático
        </h1>
        <p className="text-lg md:text-xl text-indigo-200 max-w-3xl mb-16">
          Ciencia, tecnología y comunidad al servicio de la vida. Bienvenidos al modelo Dermasoludable.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full">
          {conceptos.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition"
            >
              <Image
                src={item.imagen}
                alt={item.nombre}
                width={600}
                height={400}
                className="object-cover w-full h-72 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                <h3 className="text-2xl font-bold mb-2">{item.nombre}</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
