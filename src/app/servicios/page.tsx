export default function Servicios() {
  const areas = [
    { title: "Inmigraci\u00f3n", description: "Visas, residencia y ciudadan\u00eda." },
    { title: "Defensa", description: "Representaci\u00f3n en procesos judiciales." },
    { title: "Consultor\u00eda", description: "Orientaci\u00f3n legal preventiva." }
  ];

  return (
    <section className="py-24 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10 text-center">Nuestros Servicios</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((a, i) => (
            <div key={i} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3">{a.title}</h3>
              <p className="text-lg leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
