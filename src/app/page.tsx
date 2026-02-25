import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center px-6 lg:px-20 border-b border-white/10" style={{ backgroundColor: '#9F77B5' }}>
        <div className="flex items-center gap-2">
          <Image
            src="/img/logo-white.svg"
            alt="My E-class Logo"
            width={150}
            height={45}
            className="h-10 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          <a href="#" className="text-sm font-medium hover:text-brand-primary transition-colors">Cursos</a>
          <a href="#" className="text-sm font-medium hover:text-brand-primary transition-colors">Empresas</a>
          <a href="#" className="text-sm font-medium hover:text-brand-primary transition-colors">Sobre Nós</a>
          <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-primary/25">
            Começar Agora
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden hero-gradient">
          <div className="absolute top-1/4 right-0 -z-10 w-1/3 aspect-square bg-brand-primary/10 blur-[120px] rounded-full" />

          <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
                🚀 A Nova Era do Ensino
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-6 leading-[1.1]">
                Sua carreira no <br />
                <span className="gradient-text">Próximo Nível</span>
              </h1>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-10 max-w-xl mx-auto lg:mx-0">
                Capacite-se com os melhores profissionais do mercado em uma plataforma desenhada para o seu sucesso.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button className="w-full sm:w-auto bg-brand-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-brand-primary/30 transition-all hover:-translate-y-1">
                  Explorar Cursos
                </button>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-zinc-200" />
                    ))}
                  </div>
                  <span className="ml-2 text-zinc-500">+2.5k alunos ativos</span>
                </div>
              </div>
            </div>

            <div className="flex-1 relative w-full aspect-[4/3] lg:aspect-square">
              {/* Image optimization for SVG request: Using SVG mask for a premium photo feel */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 animate-float">
                <Image
                  src="/img/female-male-enterpreneurs-have-meeting-office 1.png"
                  alt="Entrepreneurs Meeting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold">Taxa de Sucesso</div>
                    <div className="text-xl font-display font-bold text-brand-primary">98.4%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features / Benefits */}
        <section className="py-24 bg-white/50">
          <div className="container mx-auto px-6 lg:px-20 text-center mb-16">
            <h2 className="text-3xl lg:text-5xl mb-4 text-brand-primary">Nossos Diferenciais</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Tecnologia, didática e suporte de ponta para sua evolução.</p>
          </div>

          <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Metodologia Ágil", img: "/img/Rectangle 7.png", color: "from-brand-primary/10" },
              { title: "Networking Real", img: "/img/Rectangle 9.png", color: "from-brand-secondary/10" },
              { title: "Certificação Int.", img: "/img/Rectangle 12.png", color: "from-brand-accent/10" },
              { title: "Suporte 24/7", img: "/img/Rectangle 14.png", color: "from-brand-primary/10" }
            ].map((card, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-zinc-100">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} to-transparent blur-3xl`} />
                <div className="relative z-10">
                  <div className="w-full aspect-video relative rounded-2xl overflow-hidden mb-6">
                    <Image src={card.img} alt={card.title} fill className="object-cover transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl mb-2">{card.title}</h3>
                  <p className="text-sm text-zinc-500">Conteúdo prático focado nas demandas reais do mercado de trabalho global.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-brand-secondary/20 rounded-[40px] rotate-3 scale-105" />
                <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden border-8 border-white dark:border-zinc-800">
                  <Image
                    src="/img/successful-female-entrepreneur-smiling 1.png"
                    alt="Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/30 rounded-full blur-[80px]" />
              </div>
              <div className="flex-1">
                <h2 className="text-4xl lg:text-6xl mb-8 leading-tight text-brand-primary">Uma jornada de <br /><span className="text-brand-secondary">Propósito.</span></h2>
                <blockquote className="text-2xl font-medium text-zinc-800 italic mb-10 leading-relaxed">
                  "Nosso objetivo não é apenas ensinar, é transformar vidas através da educação de alta qualidade acessível a todos."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 px-0 bg-brand-secondary" />
                  <span className="text-xl font-bold">Ana Silva, CEO My E-class</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team / Working Section */}
        <section className="py-24 bg-white relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#5B1F7C_0%,transparent_50%)]" />
          </div>
          <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row-reverse items-center gap-16 relative z-10">
            <div className="flex-1">
              <h2 className="text-4xl lg:text-5xl mb-6 text-brand-primary font-bold">Prepare sua <br />Equipe para o Futuro</h2>
              <p className="text-zinc-600 text-lg mb-8">Soluções corporativas completas para treinamento e desenvolvimento contínuo.</p>
              <ul className="space-y-4 mb-10">
                {['Dashboard Administrativo', 'Planos Customizados', 'Relatórios de Evolução'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center text-[10px] text-white">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-surface-900 px-8 py-3 rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all">
                Planos Corporate
              </button>
            </div>
            <div className="flex-1 w-full aspect-video relative rounded-3xl overflow-hidden shadow-2xl skew-y-2">
              <Image
                src="/img/young-business-people-office-working-with-tablet 1.png"
                alt="Working Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-24 text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="p-16 rounded-[48px] bg-gradient-to-br from-brand-primary to-brand-secondary text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-3xl -z-10" />
              <h2 className="text-4xl lg:text-6xl mb-8">Comece hoje mesmo.</h2>
              <p className="text-white/80 text-xl mb-12">Junte-se a milhares de alunos que já transformaram suas carreiras.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-white text-brand-primary px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl">
                  Matricule-se Agora
                </button>
                <button className="bg-black/20 text-white border border-white/30 backdrop-blur px-12 py-5 rounded-2xl font-bold text-xl hover:bg-black/30 transition-all">
                  Falar com Consultor
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-zinc-200 dark:border-zinc-800 text-white" style={{ backgroundColor: '#9F77B5' }}>
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/img/logo-white.svg"
                alt="My E-class Logo"
                width={150}
                height={45}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-zinc-500">Transformando educação em oportunidade real de carreira.</p>
          </div>
          {['Produto', 'Empresa', 'Legal'].map((group) => (
            <div key={group}>
              <h4 className="font-bold mb-6">{group}</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li>Link Exemplo</li>
                <li>Link Exemplo</li>
                <li>Link Exemplo</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="container mx-auto px-6 lg:px-20 mt-20 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-400">
          <p>© 2026 My E-class. Direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
