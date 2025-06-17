import Hero from "./components/Hero";

export default function Home() {
  const features = [
    {title: "Experiencia", text: "A\u00f1os de trayectoria defendiendo los derechos de nuestros clientes."},
    {title: "Compromiso", text: "Atenci\u00f3n personalizada en cada etapa del proceso."},
    {title: "Resultados", text: "Trabajamos para lograr los mejores beneficios posibles."}
  ];

  return (
    <main>
      <Hero />
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center p-6 bg-white shadow rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
              <p className="text-lg">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
