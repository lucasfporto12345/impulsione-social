import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CurtidasFacebookPage() {
  const [utmParams, setUtmParams] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview_pacotes',
        page_type: 'curtidas',
        page_name: 'curtidas-facebook'
      });
    }
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    const utms: string[] = [];
    
    utmKeys.forEach(key => {
      const value = urlParams.get(key);
      if (value) {
        utms.push(`${key}=${encodeURIComponent(value)}`);
      }
    });
    
    if (utms.length > 0) {
      setUtmParams('?' + utms.join('&'));
    }
  }, []);

  const handleBuyClick = (checkoutUrl: string) => {
    const finalUrl = `${checkoutUrl}${utmParams}`;
    window.location.href = finalUrl;
  };

  const pacotes = [
    {
      quantidade: '500',
      preco: 'R$14,90',
      checkoutUrl: 'https://pay.impulsionesocial.com/imp-facebook-500-curtidas-em-publicacao'
    },
    {
      quantidade: '1000',
      preco: 'R$29,90',
      checkoutUrl: 'https://pay.impulsionesocial.com/imp-facebook-1000-curtidas-em-publicacao'
    },
    {
      quantidade: '2000',
      preco: 'R$59,90',
      checkoutUrl: 'https://pay.impulsionesocial.com/imp-facebook-2000-curtidas-em-publicacao'
    },
    {
      quantidade: '3000',
      preco: 'R$89,90',
      checkoutUrl: 'https://pay.impulsionesocial.com/imp-facebook-3000-curtidas-em-publicacao'
    },
    {
      quantidade: '5000',
      preco: 'R$149,90',
      checkoutUrl: 'https://pay.impulsionesocial.com/imp-facebook-5000-curtidas-em-publicacao'
    },
    {
      quantidade: '10000',
      preco: 'R$299,90',
      checkoutUrl: 'https://pay.impulsionesocial.com/imp-facebook-10000-curtidas-em-publicacao'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <a
        href="https://whatsapp.conectaprime.com/r/compraim"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
      </a>

      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <i className="ri-facebook-fill text-white text-xl"></i>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Impulsione Social
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Compacto */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="ri-shield-check-line"></i>
              <span>Compra Segura e Entrega Rápida</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Curtidas em Publicação do Facebook
            </h1>
          </div>
        </div>
      </section>

      {/* Pacotes Section */}
      <section id="pacotes" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Escolha Seu Pacote
            </h2>
            <p className="text-gray-600">
              Selecione a quantidade de curtidas ideal para suas publicações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pacotes.map((pacote, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-300 hover:-translate-y-1 p-6"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{pacote.quantidade}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-3">CURTIDAS</div>
                  <div className="text-3xl font-bold text-gray-900">{pacote.preco}</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700 text-sm">
                    <i className="ri-check-line text-green-500 text-lg mr-2"></i>
                    <span>Não precisa de senha</span>
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <i className="ri-check-line text-green-500 text-lg mr-2"></i>
                    <span>30 dias de reposição</span>
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <i className="ri-check-line text-green-500 text-lg mr-2"></i>
                    <span>Entrega rápida</span>
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <i className="ri-check-line text-green-500 text-lg mr-2"></i>
                    <span>E-book Facebook Prime</span>
                  </li>
                </ul>
                
                <button
                  onClick={() => handleBuyClick(pacote.checkoutUrl)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                >
                  Comprar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Comprar Section */}
      <section id="como-comprar" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como comprar curtidas para Facebook
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nosso processo é muito básico e fácil, criamos o site Impulsione Social de uma forma simples e intuitiva para todos. <strong>Com 3 cliques simples</strong> você pode comprar o pacote de curtidas que quiser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-shopping-cart-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Selecione seu pacote
              </h3>
              <p className="text-gray-600 text-center">
                A primeira coisa é selecionar um pacote, por exemplo, <strong>comprar 500 curtidas</strong>
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-link text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Digite seu nome de usuário
              </h3>
              <p className="text-gray-600 text-center">
                Insira o link do seu perfil ou nome de usuário.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-secure-payment-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Efetuar pagamento
              </h3>
              <p className="text-gray-600 text-center">
                Efetue o pagamento do seu pedido usando um dos métodos de pagamento seguros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por que comprar Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Por que comprar curtidas no Facebook?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                No mundo competitivo das mídias sociais, o Facebook se tornou uma plataforma essencial para indivíduos, empresas e marcas que buscam se destacar e aumentar sua presença digital. A decisão de comprar <strong>curtidas</strong> do Facebook pode ser um passo estratégico para impulsionar sua visibilidade e alcance nesta rede social.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Por que é importante ter curtidas no Facebook?
              </h3>
              <p className="text-gray-600 mb-6">
                Na era digital de hoje, a contagem de <strong>curtidas</strong> se tornou um indicador crucial de credibilidade e sucesso. Uma conta com uma base sólida de <strong>curtidas</strong> cria maior confiança e naturalmente atrai mais atenção. Para empresas e criadores de conteúdo, isso se traduz em melhores oportunidades de negócios e colaborações.
              </p>
              <p className="text-gray-600 mb-8">
                O Facebook não é apenas mais uma plataforma de mídia social; é uma ferramenta de marketing poderosa que pode impulsionar significativamente sua presença online. Com mais de 1 bilhão de usuários ativos, a plataforma oferece alcance inigualável para se conectar com seu público-alvo.
              </p>
              <a
                href="#pacotes"
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                Comprar agora
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20smartphone%20displaying%20Facebook%20app%20interface%20with%20thumbs%20up%20like%20icons%20increasing%20and%20growing%2C%20social%20media%20engagement%20concept%20for%20business%20marketing%2C%20clean%20minimalist%20design%20with%20blue%20gradient%20colors%20matching%20Facebook%20brand%2C%20professional%20digital%20illustration%20showing%20social%20proof%20and%20credibility%2C%20high%20quality%20business%20photography%20with%20simple%20white%20background%20highlighting%20the%20phone%20screen&width=600&height=700&seq=facebook-likes-growth-why-buy&orientation=portrait"
                  alt="Por que comprar curtidas"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que somos os melhores Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Porque somos os melhores em comprar curtidas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Qualidade é o mais importante, por isso sermos líderes em qualidade é nossa meta diária.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-group-line text-white text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Melhore o alcance do seu público
              </h3>
              <p className="text-gray-600">
                Aumente seu conteúdo e torne-o viral para alcançar o maior número possível de usuários.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-star-line text-white text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Torne-se um Influenciador
              </h3>
              <p className="text-gray-600">
                Comprar curtidas fará com que suas próximas postagens e histórias tenham mais interação e alcance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-money-dollar-circle-line text-white text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Economize dinheiro com curtidas baratas
              </h3>
              <p className="text-gray-600">
                Não se confunda, oferecer curtidas baratas não é sinônimo de qualidade, trabalhamos com o melhor sistema para entregar.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-shield-check-line text-white text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Construir segurança
              </h3>
              <p className="text-gray-600">
                Você tem uma marca? Ao <strong>comprar curtidas</strong> você fará com que seu cliente em potencial tenha mais confiança em seu produto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cresça nas Redes Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cresça nas Redes com a N°1 do Brasil
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lembre-se de que também oferecemos outros serviços e que você pode <strong>comprar seguidores no Facebook e visualização em minutos.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Pode ter um impacto negativo sobre mim?
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Não, quando você faz uma compra com a Impulsione Social sua conta não corre nenhum perigo, e isso é legal. Não violamos nenhuma regra do Facebook ao realizar esse processo, por isso é 100% seguro.
              </p>
              <p className="text-gray-600">
                Milhares de grandes influenciadores do Facebook usam esses métodos. Se houvesse algum problema com isso, eles não ousariam expor suas contas a eles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Curtidas com entrega instantânea
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Geralmente todos os pedidos são entregues rapidamente após o pagamento, graças ao nosso sistema exclusivo.
              </p>
              <p className="text-gray-600 mb-4">
                Elas serão entregues de forma gradual e natural, dependendo da quantidade adquirida a velocidade irá variar.
              </p>
              <p className="text-gray-600">
                Se os pedidos sofrerem atrasos excepcionais, não se preocupe, anunciaremos em nosso site.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#pacotes"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              Comprar agora
            </a>
          </div>
        </div>
      </section>

      {/* 4 Razões Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-xl border border-blue-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">4 razões para comprar curtidas</span> na Impulsione Social
              </h2>
              <p className="text-gray-600 mb-8">
                Como uma equipe em crescimento nas redes e após anos de estudo, aprendemos esses aspectos para comprar curtidas no Facebook:
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-flashlight-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Entrega Rápida</h4>
                    <p className="text-gray-600">Seguidores e curtidas em minutos após a compra.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-shield-check-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">100% Seguro</h4>
                    <p className="text-gray-600">Sem senha, sem riscos, com 30 dias de garantia.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-user-star-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Resultados Reais</h4>
                    <p className="text-gray-600">Perfis reais para um crescimento que você vê.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-customer-service-2-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Suporte de Verdade</h4>
                    <p className="text-gray-600">Time 24/7 via WhatsApp para te ajudar sempre.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20team%20celebrating%20social%20media%20success%20with%20Facebook%20likes%20and%20engagement%20metrics%20displayed%20on%20laptop%20screen%2C%20modern%20office%20environment%20with%20blue%20gradient%20lighting%2C%20diverse%20group%20of%20happy%20marketers%20looking%20at%20growing%20statistics%20and%20charts%2C%20clean%20corporate%20photography%20style%20showing%20teamwork%20and%20digital%20marketing%20achievement%2C%20simple%20background%20with%20focus%20on%20collaboration&width=600&height=700&seq=facebook-4-reasons-team-success&orientation=portrait"
                  alt="4 razões"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Avaliações de clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Na Impulsione Social nos importamos com sua opinião, por isso disponibilizamos uma seção onde você pode nos deixar sua avaliação:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Serviço incrível!</h4>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">
                Recebi minhas curtidas super rápido e todas são reais. Recomendo muito!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Top demais!</h4>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">
                Minhas publicações bombaram depois de usar a Impulsione Social. Atendimento excelente!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Muito bom!</h4>
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                  <i className="ri-star-line"></i>
                </div>
              </div>
              <p className="text-gray-600">
                As curtidas chegaram certinho, só poderia ter mais opções de pacotes menores.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Resultados incríveis!</h4>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">
                Aumentei minha credibilidade no Facebook e agora tenho muito mais engajamento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Entrega super rápida!</h4>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">
                Comprei e em poucos minutos já comecei a ver as curtidas chegando. Muito satisfeito!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Melhor site de curtidas!</h4>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">
                Já testei vários serviços, mas a Impulsione Social foi a única que entregou tudo certinho e sem queda.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Ótimo serviço!</h4>
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                  <i className="ri-star-line"></i>
                </div>
              </div>
              <p className="text-gray-600">
                Curtidas chegaram conforme prometido. Só poderiam ter mais opções de pagamento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Perfeito para crescer!</h4>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">
                Depois de comprar curtidas aqui, minhas publicações tiveram muito mais alcance e credibilidade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Empresa confiável!</h4>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">
                Atendimento rápido e suporte sempre pronto para ajudar. Vou comprar mais vezes!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Aumentar Suas Curtidas?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a milhares de clientes satisfeitos e impulsione sua presença no Facebook hoje mesmo!
          </p>
          <a
            href="#pacotes"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            Comprar agora
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Em quanto tempo as curtidas chegam?</span>
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-gray-600 mt-4">
                Você receberá todas as curtidas do seu pacote em até 24 horas. Solicitamos esse prazo para garantir que todas as suas curtidas serão entregues, porém normalmente o recebimento das curtidas é de 1 – 4 horas no Facebook.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>É necessário informar minha senha?</span>
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-gray-600 mt-4">
                Não! Absolutamente não é necessário informar sua senha ou e-mail do seu perfil, somente o @ do usuário.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>É seguro comprar curtidas no Facebook?</span>
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-gray-600 mt-4">
                Sim, somos um site totalmente seguro. Nunca pedimos informações sensíveis e confidenciais como senha e e-mail da conta além de nossa plataforma ser protegida por um certificado de segurança SSL.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>É comum comprar curtidas?</span>
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-gray-600 mt-4">
                É muito comum, milhares de pessoas compram curtidas quando se está principalmente no começo, porque comprando você alcançará grande relevância em pouco tempo. É por isso que muitos perfis pessoais e comerciais utilizam a estratégia de comprar curtidas para crescer rapidamente.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Quantas curtidas no Facebook posso comprar?</span>
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-gray-600 mt-4">
                Você pode comprar quantas curtidas desejar, a quantidade depende exclusivamente de você, das suas condições e objetivos que deseja conquistar.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>É proibido comprar curtidas?</span>
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-gray-600 mt-4">
                Não, tanto é que inúmeras personalidades como cantores, jogadores de futebol e artistas compram curtidas regularmente.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>O Facebook impede marcas de comprar?</span>
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-gray-600 mt-4">
                O Facebook não remove curtidas ou impede marcas por receber muitas curtidas em pouco tempo.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Posso comprar curtidas de outro lugar?</span>
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-gray-600 mt-4">
                Não recomendamos, quando você compra curtidas em outro site a garantia de nossos serviços é perdida e não será possível repor as curtidas que deixarem de existir posteriormente.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Tem possibilidade da minha conta ser bloqueada?</span>
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-gray-600 mt-4">
                Não! Você não corre nenhum risco de ter a conta bloqueada apenas por estar recebendo novas curtidas da compra.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Posso mudar o @ do perfil após comprar?</span>
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-gray-600 mt-4">
                Não é recomendado. Se você mudar o @ do perfil após a compra você perde a garantia de reposição, e se houver perda de curtidas não conseguiremos enviar novas.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Qual o melhor site para comprar curtidas?</span>
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-gray-600 mt-4">
                A Impulsione Social se destaca como o melhor site para comprar curtidas no Facebook, com um serviço de ótima qualidade, preços baixos e um suporte especializado, é considerado o melhor site para se comprar curtidas.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Preciso curtir as publicações de volta?</span>
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-gray-600 mt-4">
                Não! Você não precisa curtir nada de volta. Após finalizar a compra em nosso site, você precisa apenas aguardar começar a receber as curtidas.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Meu perfil pode estar privado?</span>
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-gray-600 mt-4">
                Não, para que você comece a receber as curtidas compradas seu perfil deve estar público.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Tem risco de perder curtidas que já tenho?</span>
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-gray-600 mt-4">
                As curtidas podem deixar de existir após a compra, mas para que você não seja prejudicado temos nossa garantia de 30 dias, na qual enviaremos novas curtidas se você perder alguma, após esse período praticamente não há mais perda.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Por que devo comprar na Impulsione Social?</span>
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-gray-600 mt-4">
                Somos a maior agência do Brasil especializada em serviços de crescimento e engajamento nas redes sociais. Estamos no mercado há mais de 5 anos e temos mais de 100 mil clientes satisfeitos. Nossa empresa tem uma ótima avaliação no Reclame Aqui e trabalhamos com tecnologia de ponta para garantir sua segurança e privacidade.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Quais são as opções de pagamento?</span>
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-gray-600 mt-4">
                Temos diversas opções de pagamento, você pode pagar por pix, cartão em até 12x e depósito bancário.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <i className="ri-facebook-fill text-blue-600 text-xl"></i>
                </div>
                <span className="text-xl font-bold">Impulsione Social</span>
              </div>
              <p className="text-blue-200">
                A melhor plataforma para crescer nas redes sociais com segurança e qualidade.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link to="/seguidores-instagram" className="hover:text-white transition-colors cursor-pointer">
                    Seguidores Instagram
                  </Link>
                </li>
                <li>
                  <Link to="/seguidores-tiktok" className="hover:text-white transition-colors cursor-pointer">
                    Seguidores TikTok
                  </Link>
                </li>
                <li>
                  <Link to="/seguidores-facebook" className="hover:text-white transition-colors cursor-pointer">
                    Seguidores Facebook
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Curtidas</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link to="/curtidas-instagram" className="hover:text-white transition-colors cursor-pointer">
                    Curtidas Instagram
                  </Link>
                </li>
                <li>
                  <Link to="/curtidas-tiktok" className="hover:text-white transition-colors cursor-pointer">
                    Curtidas TikTok
                  </Link>
                </li>
                <li>
                  <Link to="/curtidas-facebook" className="hover:text-white transition-colors cursor-pointer">
                    Curtidas Facebook
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-center gap-2">
                  <i className="ri-whatsapp-line"></i>
                  <span>WhatsApp 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-mail-line"></i>
                  <span>Suporte por Email</span>
                </li>
                <li>
                  <a href="https://www.instagram.com/impulsionesocialoficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                    <i className="ri-instagram-line"></i>
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-700 pt-8 text-center text-blue-200">
            <p>&copy; 2025 Impulsione Social. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
