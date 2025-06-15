export default function Problema() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      {/* Fondo animado con capas de texto */}
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

      {/* Contenido principal */}
      <main className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Título principal */}
        <section className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            ¿Cuál es el problema?
          </h1>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto drop-shadow-sm">
            El modelo Dermasoludable responde a los desafíos crecientes entre el cambio climático y la salud de la piel.
          </p>
        </section>

        {/* Descripción del problema */}
        <section className="animate-fade-in-up bg-white/10 backdrop-blur-sm rounded-xl p-10 mb-16 shadow-lg border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">El problema central</h2>
          <p className="text-indigo-100 text-lg leading-relaxed">
            El aumento de enfermedades dermatológicas relacionadas con factores climáticos como radiación UV,
            temperatura extrema, humedad y contaminación, amenaza la salud pública, especialmente en comunidades vulnerables.
          </p>
        </section>

        {/* Causas */}
        <section className="mb-16 animate-fade-in-up">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-6 text-center">Causas del problema</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Radiación UV excesiva", icon: "☀️" },
              { title: "Cambio en temperatura y humedad", icon: "🌡️" },
              { title: "Contaminación ambiental", icon: "🌫️" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl shadow-lg text-center hover:scale-105 transition-transform p-6"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Consecuencias */}
        <section className="animate-fade-in-up">
          <h3 className="text-2xl font-semibold text-pink-300 mb-6 text-center">Consecuencias principales</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Enfermedades cutáneas crónicas", icon: "🩺" },
              { title: "Afectación a población vulnerable", icon: "👨‍👩‍👧‍👦" },
              { title: "Sobrecarga del sistema de salud", icon: "🏥" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl shadow-lg text-center hover:scale-105 transition-transform p-6"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
              </div>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
}
