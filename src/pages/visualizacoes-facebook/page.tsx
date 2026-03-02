import { useState, useEffect } from 'react';

export default function VisualizacoesFacebookPage() {
  const [activeTab, setActiveTab] = useState<'mundiais' | 'brasileiras'>('mundiais');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = (url: string) => {
    const currentUrl = new URL(window.location.href);
    const utmParams = new URLSearchParams();
    
    currentUrl.searchParams.forEach((value, key) => {
      if (key.startsWith('utm_')) {
        utmParams.append(key, value);
      }
    });
    
    const checkoutUrl = utmParams.toString() 
      ? `${url}?${utmParams.toString()}`
      : url;
    
    window.open(checkoutUrl, '_blank');
  };

  const packages = [
    {
      quantity: '500',
      price: 'R$19,90',
      link: 'https://pay.impulsionesocial.com/imp-facebook-500-visualizacoes-em-video'
    },
    {
      quantity: '1.000',
      price: 'R$34,90',
      link: 'https://pay.impulsionesocial.com/imp-facebook-1000-visualizacoes-em-video'
    },
    {
      quantity: '2.000',
      price: 'R$64,90',
      link: 'https://pay.impulsionesocial.com/imp-facebook-2000-visualizacoes-em-video'
    },
    {
      quantity: '3.000',
      price: 'R$89,90',
      link: 'https://pay.impulsionesocial.com/imp-facebook-3000-visualizacoes-em-video'
    },
    {
      quantity: '5.000',
      price: 'R$139,90',
      link: 'https://pay.impulsionesocial.com/imp-facebook-5000-visualizacoes-em-video'
    },
    {
      quantity: '10.000',
      price: 'R$249,90',
      link: 'https://pay.impulsionesocial.com/imp-facebook-10000-visualizacoes-em-video'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50">
      {/* WhatsApp Floating Button */}
      <a
        href="https://whatsapp.conectaprime.com/r/compraim"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
      </a>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visualizações em Vídeo</h1>
        </div>
      </section>

      {/* Packages Section */}
      <section id="compra" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-blue-100">
                <div className="text-center">
                  <h3 className="text-5xl font-bold text-blue-600 mb-2">{pkg.quantity}</h3>
                  <p className="text-xl font-semibold text-gray-700 mb-4">VISUALIZAÇÕES</p>
                  
                  <p className="text-4xl font-bold text-blue-600 mb-6">{pkg.price}</p>
                  
                  <ul className="text-left mb-6 space-y-2">
                    <li className="flex items-center text-gray-700">
                      <i className="ri-check-line text-green-500 mr-2 text-xl"></i>
                      <span>Não precisa de senha</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <i className="ri-check-line text-green-500 mr-2 text-xl"></i>
                      <span>Melhor preço do mercado</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <i className="ri-check-line text-green-500 mr-2 text-xl"></i>
                      <span>Entrega imediata</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <i className="ri-check-line text-green-500 mr-2 text-xl"></i>
                      <span>E-book Facebook Prime</span>
                    </li>
                  </ul>
                  
                  <button
                    onClick={() => handleCheckout(pkg.link)}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
                  >
                    Comprar Agora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Comprar */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Como comprar Visualizações para Facebook</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Nosso processo é muito básico e fácil, criamos o site Impulsione Social de uma forma simples e intuitiva para todos. <strong>Com 3 cliques simples</strong> você pode comprar o pacote de visualizações que quiser.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shopping-cart-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Selecione seu pacote</h3>
              <p className="text-gray-600">A primeira coisa é selecionar um pacote, por exemplo, <b>comprar 500 visualizações</b></p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Digite seu nome de usuário</h3>
              <p className="text-gray-600">Insira o link do seu perfil ou nome de usuário.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-secure-payment-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Efetuar pagamento</h3>
              <p className="text-gray-600">Efetue o pagamento do seu pedido usando um dos métodos de pagamento seguros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por que comprar */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Por que comprar visualizações no Facebook?</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            No mundo competitivo das mídias sociais, o Facebook se tornou uma plataforma essencial para indivíduos, empresas e marcas que buscam se destacar e aumentar sua presença digital. A decisão de comprar <b>visualizações</b> do Facebook pode ser um passo estratégico para impulsionar sua visibilidade e alcance nesta rede social.
          </p>
          
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Por que é importante ter visualizações no Facebook?</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Na era digital de hoje, a contagem de visualizações se tornou um indicador crucial de credibilidade e sucesso. Uma conta com uma base sólida de <b>visualizações</b> cria maior confiança e naturalmente atrai mais atenção. Para empresas e criadores de conteúdo, isso se traduz em melhores oportunidades de negócios e colaborações.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            O Facebook não é apenas mais uma plataforma de mídia social; é uma ferramenta de marketing poderosa que pode impulsionar significativamente sua presença online. Com mais de 1 bilhão de usuários ativos, a plataforma oferece alcance inigualável para se conectar com seu público-alvo.
          </p>
          
          <div className="text-center">
            <a 
              href="#compra"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Comprar agora
            </a>
          </div>
        </div>
      </section>

      {/* Por que somos os melhores */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Porque somos os melhores em comprar visualizações</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Qualidade é o mais importante, por isso sermos líderes em qualidade é nossa meta diária.
          </p>
        </div>
      </section>

      {/* 4 Razões */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-eye-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Melhore o alcance do seu público</h3>
                  <p className="text-gray-600">Aumente seu conteúdo e torne-o viral para alcançar o maior número possível de usuários.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-star-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Torne-se um Influenciador</h3>
                  <p className="text-gray-600">Comprar visualizações fará com que suas próximas postagens e histórias tenham mais interação e alcance.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-money-dollar-circle-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Economize dinheiro</h3>
                  <p className="text-gray-600">Não se confunda, oferecer visualizações baratas não é sinônimo de qualidade, trabalhamos com o melhor sistema para entregar.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-shield-check-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Construir segurança</h3>
                  <p className="text-gray-600">Você tem uma marca? Ao comprar visualizações você fará com que seu cliente em potencial tenha mais confiança em seu produto.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Cresça nas Redes com a N°1 do Brasil</h2>
          <p className="text-xl mb-8">
            Lembre-se de que também oferecemos outros serviços e que você pode <strong>comprar seguidores no Facebook e curtidas em minutos.</strong>
          </p>
          <a 
            href="#compra"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            Comprar agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Impulsione Social</h3>
          <p className="text-gray-400 mb-6">A melhor plataforma para crescer nas redes sociais</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.instagram.com/impulsionesocialoficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              <i className="ri-instagram-line text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              <i className="ri-facebook-line text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              <i className="ri-twitter-line text-2xl"></i>
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2025 Impulsione Social. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
