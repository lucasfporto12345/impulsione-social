import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Suporte() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Carregar o script do widget apenas nesta página
    const script = document.createElement('script');
    script.src = 'https://talk-widget.umbler.com/widget.umd.js?token=YuyLHC-pJomz5rFuRQQDEukV';
    script.async = true;
    document.head.appendChild(script);

    // Limpar o script quando sair da página
    return () => {
      document.head.removeChild(script);
      // Remover o widget do DOM se existir
      const widget = document.querySelector('[data-talk-widget]');
      if (widget) {
        widget.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-gray-900">
                  <span className="text-blue-500">Impulsione</span> Social
                </span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-gray-600 hover:text-gray-900 cursor-pointer">Início</Link>
                <Link to="/suporte" className="text-blue-500 font-medium cursor-pointer">Suporte</Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Link to="/" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all whitespace-nowrap cursor-pointer">
                Voltar ao Início
              </Link>
            </div>
            <button 
              className="md:hidden p-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Início</Link>
              <Link to="/suporte" className="text-blue-500 font-medium cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Suporte</Link>
              <Link to="/" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all whitespace-nowrap cursor-pointer text-center">
                Voltar ao Início
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Banner */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://impulsionesocial.notion.site/image/attachment%3A089d0f0a-d295-4983-b027-5834e94c75f1%3AChatGPT_Image_6_de_jan._de_2026_15_19_11.png?table=block&id=2d12b25b-93eb-8025-928f-f5a6150d2934&spaceId=cc42b25b-93eb-81a5-915c-000315b32eb9&width=2000&userId=&cache=v2" 
              alt="Manual do Cliente - Impulsione Social" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Manual do Cliente
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Site Oficial Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              Site Oficial 
              <span className="text-4xl">👇</span>
            </h2>
            <div className="w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <a href="/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <img 
                  src="https://impulsionesocial.notion.site/image/attachment%3A70782bcb-7e75-430c-bba1-f16c0520cf34%3Aimage.png?table=block&id=2e02b25b-93eb-803c-91fb-fb529c41085e&spaceId=cc42b25b-93eb-81a5-915c-000315b32eb9&width=1420&userId=&cache=v2" 
                  alt="Site Oficial - Impulsione Social" 
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-12"></div>

          {/* Principais Informações Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              Principais informações 
              <span className="text-4xl">👇</span>
            </h2>
            
            <div className="space-y-6">
              {/* Banner 1 - Área do Cliente */}
              <div className="w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <img 
                  src="https://impulsionesocial.notion.site/image/attachment%3A551e771b-4d47-4096-9341-82881ee30f9c%3Aimage.png?table=block&id=2e22b25b-93eb-80aa-8ef9-fd7ba07146b3&spaceId=cc42b25b-93eb-81a5-915c-000315b32eb9&width=1420&userId=&cache=v2" 
                  alt="Área do Cliente" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Banner 2 - Informações Importantes */}
              <div className="w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <img 
                  src="https://impulsionesocial.notion.site/image/attachment%3A89016085-d638-4c08-b132-62974b45a543%3Aimage.png?table=block&id=2e02b25b-93eb-800a-b59d-ce17985871cd&spaceId=cc42b25b-93eb-81a5-915c-000315b32eb9&width=1420&userId=&cache=v2" 
                  alt="Informações Importantes" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Banner 3 - Como Funciona */}
              <div className="w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <img 
                  src="https://impulsionesocial.notion.site/image/attachment%3A5b09cb62-a44b-4a92-a986-a5f1549da90a%3Aimage.png?table=block&id=2e02b25b-93eb-80d7-8e2d-dd11afe6a666&spaceId=cc42b25b-93eb-81a5-915c-000315b32eb9&width=1420&userId=&cache=v2" 
                  alt="Como Funciona" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Banner 4 - Garantias */}
              <div className="w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <img 
                  src="https://impulsionesocial.notion.site/image/attachment%3Ae793acfe-b9ea-427f-b7a6-4c5d157c13ff%3Aimage.png?table=block&id=2e02b25b-93eb-8014-964a-f27a834078b0&spaceId=cc42b25b-93eb-81a5-915c-000315b32eb9&width=1420&userId=&cache=v2" 
                  alt="Garantias" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-12"></div>

          {/* Termos & Políticas Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Termos & Políticas
            </h2>
            
            <div className="space-y-4">
              {/* Prazo de Entrega */}
              <a 
                href="https://impulsionesocial.notion.site/Prazo-de-Entrega-Impulsione-Social-2d12b25b93eb80e9a5d7d2f534263a32" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-500 transition-colors">
                    Prazo de Entrega | Impulsione Social
                  </h3>
                </div>
                <i className="ri-arrow-right-line text-2xl text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"></i>
              </a>

              {/* Reposição */}
              <a 
                href="https://impulsionesocial.notion.site/Reposi-o-Impulsione-Social-2d12b25b93eb80c2be2cf0f493061524" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center text-2xl">
                  🔰
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-500 transition-colors">
                    Reposição | Impulsione Social
                  </h3>
                </div>
                <i className="ri-arrow-right-line text-2xl text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <Link to="/" className="flex items-center mb-4 md:mb-0">
              <span className="text-2xl font-bold text-gray-900">
                <span className="text-blue-500">Impulsione</span> Social
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-gray-600 hover:text-gray-900 cursor-pointer">Início</Link>
              <Link to="/suporte" className="text-gray-600 hover:text-gray-900 cursor-pointer">Suporte</Link>
              <a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">Termos</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">Privacidade</a>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Impulsione Social - Todos os direitos reservados
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/midiahype_ofc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors cursor-pointer">
                <i className="ri-instagram-line text-gray-600"></i>
              </a>
              <a href="https://readdy.ai/?ref=logo" className="text-gray-400 hover:text-gray-600 text-sm cursor-pointer">Powered by Readdy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
