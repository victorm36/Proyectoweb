'use client'

export default function UnidadOperativa() {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] min-h-screen text-white font-sans overflow-x-hidden">
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">

        {/* Hero Section */}
        <section className="text-center space-y-6 animate-fade-in">
          <h1 className="text-6xl font-extrabold text-cyan-100 tracking-tight drop-shadow-lg transition-transform duration-300 hover:scale-105">
            Unidad Operativa
          </h1>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
            Núcleo articulador del Modelo Dermasaludable. Integra, gestiona y proyecta acciones en salud y cambio climático.
          </p>
        </section>

        {/* Funciones Interactivas */}
        <section>
          <h2 className="text-3xl font-bold text-center text-lime-300 mb-12 tracking-wide animate-slide-up">
            Funciones Clave
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Coordinación estratégica",
                icon: "🗂️",
                description: "Articula los componentes del modelo para una implementación efectiva."
              },
              {
                title: "Soporte técnico territorial",
                icon: "🛠️",
                description: "Acompaña técnicamente a los territorios en la ejecución del modelo."
              },
              {
                title: "Gestión documental",
                icon: "📁",
                description: "Organiza y sistematiza la información clave del proceso."
              },
              {
                title: "Sistematización de procesos",
                icon: "🧠",
                description: "Analiza y mejora continuamente los procesos operativos."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/10 border border-white/20 rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:bg-white/20 flex items-center space-x-6 overflow-hidden shadow-lg backdrop-blur-sm"
              >
                <div className="text-5xl animate-bounce-slow group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="transition-all duration-500 max-w-xs group-hover:max-w-md">
                  <h3 className="text-xl font-semibold text-white mb-1 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visión */}
        <section className="text-center space-y-6 animate-fade-in">
          <div className="text-6xl animate-spin-slow transition-transform duration-1000 ease-in-out hover:rotate-180">
            🌐
          </div>
          <h2 className="text-3xl font-bold text-emerald-300 tracking-tight">Proyección del componente</h2>
          <p className="text-lg text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Se proyecta como eje de gobernanza técnica, promoviendo eficiencia, innovación y escalabilidad con decisiones basadas en datos.
          </p>
        </section>

      </main>
    </section>
  );
}
