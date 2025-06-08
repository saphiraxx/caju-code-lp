
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">Caju Code</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-600 hover:text-orange-600 transition-colors">Serviços</a>
          <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors">Sobre</a>
          <a href="#portfolio" className="text-gray-600 hover:text-orange-600 transition-colors">Portfólio</a>
          <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">Contato</a>
        </nav>
        <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
          Começar Projeto
        </button>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-none mb-6">
            Do conceito ao
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              código
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Transformamos suas ideias em soluções digitais incríveis. 
            Desenvolvimento web moderno, rápido e eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors">
              Iniciar Projeto
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-orange-500 hover:text-orange-600 transition-colors">
              Ver Portfólio
            </button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300 rounded-full opacity-60 animate-bounce delay-1000"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">
            O que fazemos?
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Oferecemos soluções completas para transformar sua visão em realidade digital.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-3xl">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Desenvolvimento Web</h3>
              <p className="text-gray-600">
                Sites e aplicações web modernas, responsivas e otimizadas para performance.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-3xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Apps Mobile</h3>
              <p className="text-gray-600">
                Aplicativos nativos e híbridos para iOS e Android com experiência única.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-3xl">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultoria Tech</h3>
              <p className="text-gray-600">
                Estratégias tecnológicas para acelerar o crescimento do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-16">
            Nosso processo é simples
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-white">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Descoberta</h3>
              <p className="opacity-90">Entendemos sua visão e objetivos</p>
            </div>
            
            <div className="text-white">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Planejamento</h3>
              <p className="opacity-90">Criamos a estratégia perfeita</p>
            </div>
            
            <div className="text-white">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Desenvolvimento</h3>
              <p className="opacity-90">Transformamos ideias em código</p>
            </div>
            
            <div className="text-white">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Entrega</h3>
              <p className="opacity-90">Lançamos seu projeto no mundo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Vamos conversar sobre seu projeto e como podemos ajudar a torná-lo realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all">
              Falar com nossa equipe
            </button>
            <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors">
              Ver nossos casos
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="text-xl font-bold text-white">Caju Code</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-orange-500 transition-colors">GitHub</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Email</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 Caju Code. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
