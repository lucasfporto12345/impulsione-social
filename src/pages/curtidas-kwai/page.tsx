
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CurtidasKwaiPage() {
  const [activeTab, setActiveTab] = useState<'mundiais' | 'brasileiras'>('mundiais');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pacotes = [
    {
      quantidade: '500',
      preco: 'R$14,90',
      link: 'https://pay.impulsionesocial.com/imp-kwai-500-curtidas-brasileiras',
    },
    {
      quantidade: '1.000',
      preco: 'R$29,90',
      link: 'https://pay.impulsionesocial.com/imp-kwai-1000-curtidas-brasileiras',
    },
    {
      quantidade: '2.000',
      preco: 'R$59,90',
      link: 'https://pay.impulsionesocial.com/imp-kwai-2000-curtidas-brasileiras',
    },
    {
      quantidade: '3.000',
      preco: 'R$89,90',
      link: 'https://pay.impulsionesocial.com/imp-kwai-3000-curtidas-brasileiras',
    },
    {
      quantidade: '5.000',
      preco: 'R$149,90',
      link: 'https://pay.impulsionesocial.com/imp-kwai-5000-curtidas-brasileiras',
    },
    {
      quantidade: '10.000',
      preco: 'R$279,90',
      link: 'https://pay.impulsionesocial.com/imp-kwai-10000-curtidas-brasileiras',
    },
  ];

  /** 
   * Opens the purchase link in a new tab preserving any UTM parameters
   * present in the current URL.
   */
  const handleComprar = (link: string) => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams = new URLSearchParams();

      urlParams.forEach((value, key) => {
        if (key.startsWith('utm_')) {
          utmParams.append(key, value);
        }
      });

      const finalUrl = utmParams.toString()
        ? `${link}?${utmParams.toString()}`
        : link;

      window.open(finalUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erro ao processar link de compra:', error);
      // Fallback – open the plain link
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                <i className="ri-video-fill text-white text-xl"></i>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Impulsione Social
              </span>
            </Link>
            <div className="flex items-center space-x-1 bg-gradient-to-r from-orange-500/10 to-red-500/10 px-4 py-2 rounded-full">
              <i className="ri-shield-check-fill text-orange-500"></i>
              <span className="text-sm font-semibold text-gray-700">
                COMPRA 100% SEGURA
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* WhatsApp Floating Button */}
      <a
        href="https://whatsapp.conectaprime.com/r/compraim"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
      </a>

      {/* Hero Section - Compacto */}
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-orange-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="ri-shield-check-line text-orange-500"></i>
              <span className="text-gray-700">Compra Segura e Entrega Rápida</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Curtidas Kwai
            </h1>
          </div>
        </div>
      </section>

      {/* Pacotes Section */}
      <section id="compra" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid de Pacotes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pacotes.map((pacote, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-red-300 p-6"
              >
                <div className="text-center mb-4">
                  <h3 className="text-4xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                    {pacote.quantidade}
                  </h3>
                  <p className="text-lg font-bold text-gray-700 mb-3">
                    Curtidas Brasileiras
                  </p>
                  <p className="text-3xl font-black text-gray-900">{pacote.preco}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700 text-sm">
                    <i className="ri-check-line text-orange-500 text-lg mr-2"></i>
                    <span>Não precisa de senha</span>
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <i className="ri-check-line text-orange-500 text-lg mr-2"></i>
                    <span>Entrega imediata</span>
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <i className="ri-check-line text-orange-500 text-lg mr-2"></i>
                    <span>E-book Kwai Prime</span>
                  </li>
                </ul>

                <button
                  onClick={() => handleComprar(pacote.link)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                >
                  Comprar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Comprar Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Como comprar curtidas para kwai
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso processo é muito básico e fácil, criamos o site Impulsione de uma forma simples e intuitiva para todos. <strong>Com 3 cliques simples</strong> você pode comprar o pacote de seguidores que quiser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shopping-cart-line text-white text-3xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Selecione seu pacote</h4>
              <p className="text-gray-600">
                A primeira coisa é selecionar um pacote, por exemplo, <b>comprar 500 curtidas</b>
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-link text-white text-3xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Digite seu nome de usuário</h4>
              <p className="text-gray-600">
                Insira o link do seu perfil ou nome de usuário.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-secure-payment-line text-white text-3xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Efetuar pagamento</h4>
              <p className="text-gray-600">
                Efetue o pagamento do seu pedido usando um dos métodos de pagamento seguros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por que comprar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Por que comprar curtidas no Kwai?
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                No mundo competitivo das mídias sociais, o Kwai se tornou uma plataforma essencial para indivíduos, empresas e marcas que buscam se destacar e aumentar sua presença digital. A decisão de comprar <b>curtidas</b> do Kwai pode ser um passo estratégico para impulsionar sua visibilidade e alcance nesta rede social.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Por que é importante ter curtidas no Kwai?</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Na era digital de hoje, a contagem de <b>curtidas</b> se tornou um indicador crucial de credibilidade e sucesso. Uma conta com uma base sólida de <b>curtidas</b> cria maior confiança e naturalmente atrai mais atenção. Para empresas e criadores de conteúdo, isso se traduz em melhores oportunidades de negócios e colaborações.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                O Kwai não é apenas mais uma plataforma de mídia social; é uma ferramenta de marketing poderosa que pode impulsionar significativamente sua presença online. Com mais de 1 bilhão de usuários ativos, a plataforma oferece alcance inigualável para se conectar com seu público-alvo.
              </p>

              <div className="mt-8">
                <a
                  href="#compra"
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-4 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                >
                  Comprar agora
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-full bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20smartphone%20displaying%20Kwai%20short%20video%20app%20interface%20with%20heart%20like%20icons%20floating%20upward%2C%20orange%20and%20red%20gradient%20colors%2C%20social%20media%20engagement%20growth%20concept%2C%20clean%20minimalist%20professional%20design%2C%20digital%20marketing%20illustration%20with%20warm%20tones%2C%20high%20quality%20render&width=600&height=600&seq=kwai-curtidas-porque-comprar&orientation=squarish"
                  alt="Por que comprar curtidas Kwai"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que somos os melhores Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Porque somos os melhores em comprar curtidas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Qualidade é o mais importante, por isso sermos líderes em qualidade é nossa meta diária.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-add-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Melhore o alcance do seu público</h3>
                  <p className="text-gray-600">
                    Aumente seu conteúdo e torne-o viral para alcançar o maior número possível de usuários. Aprenda <b>a fazer um reel viral</b>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-star-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Torne-se um Influenciador</h3>
                  <p className="text-gray-600">
                    Comprar curtidas fará com que suas próximas postagens e histórias tenham mais interação e alcance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-money-dollar-circle-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Economize dinheiro com seguidores baratos</h3>
                  <p className="text-gray-600">
                    Não se confunda, oferecer seguidores baratos não é sinônimo de qualidade, trabalhamos com o melhor sistema para entregar.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Construir segurança</h3>
                  <p className="text-gray-600">
                    Você tem uma marca? Ao <b>comprar curtidas</b> você fará com que seu cliente em potencial tenha mais confiança em seu produto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cresça nas Redes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Cresça nas Redes com a N°1 do Brasil
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Lembre-se de que também oferecemos outros serviços e que você pode <strong>comprar seguidores no Kwai e visualização em minutos.</strong>
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Pode ter um impacto negativo sobre mim?</h4>
                <div className="w-full h-px bg-gradient-to-r from-orange-300 to-red-300 mb-3"></div>
                <p className="text-gray-600">
                  Não, quando você faz uma compra com a Impulsione Social sua conta não corre nenhum perigo, e isso é legal. Não violamos nenhuma regra do Kwai ao realizar esse processo, por isso é 100% seguro.
                </p>
                <p className="text-gray-600 mt-3">
                  Milhares de grandes influenciadores do Kwai usam esses métodos. Se houvesse algum problema com isso, eles não ousariam expor suas contas a eles.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Curtidas com entrega instantânea</h4>
                <div className="w-full h-px bg-gradient-to-r from-orange-300 to-red-300 mb-3"></div>
                <p className="text-gray-600 mb-3">
                  Geralmente todos os pedidos são entregues rapidamente após o pagamento, graças ao nosso sistema exclusivo.
                </p>
                <p className="text-gray-600 mb-3">
                  Elas serão entregues de forma gradual e natural, dependendo da quantidade adquirida a velocidade irá variar.
                </p>
                <p className="text-gray-600">
                  Se os pedidos sofrerem atrasos excepcionais, não se preocupe, anunciaremos em nosso site.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#compra"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-4 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              Comprar agora
            </a>
          </div>
        </div>
      </section>

      {/* 4 Razões Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-3xl shadow-2xl p-10">
              <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                <span>4 razões para comprar curtidas </span>conosco a Impulsione Social
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Como uma equipe em crescimento nas redes e após anos de estudo, aprendemos esses aspectos para comprar seguidores no Instagram:
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-flashlight-fill text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Entrega Rápida</h4>
                    <p className="text-gray-600">Seguidores e curtidas em minutos após a compra.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-shield-check-fill text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">100% Seguro</h4>
                    <p className="text-gray-600">Sem senha, sem riscos, com 30 dias de garantia.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-user-heart-fill text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Resultados</h4>
                    <p className="text-gray-600">Perfis gerados para um crescimento que você vê.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-customer-service-2-fill text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Suporte de Verdade</h4>
                    <p className="text-gray-600">Time 24/7 via WhatsApp para te ajudar sempre.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 flex items-center justify-center">
              <img
                src="https://readdy.ai/api/search-image?query=Happy%20diverse%20team%20celebrating%20social%20media%20success%20with%20Kwai%20app%20on%20large%20screen%20showing%20growing%20engagement%20metrics%20and%20heart%20like%20icons%2C%20warm%20orange%20and%20red%20color%20palette%2C%20modern%20office%20environment%20professional%20digital%20marketing%20team%2C%20high%20quality%20illustration%20with%20vibrant%20warm%20tones&width=600&height=600&seq=kwai-curtidas-4razoes-equipe&orientation=squarish"
                alt="Impulsione Social Kwai"
                className="w-full max-w-md h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Avaliações de clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Na Impulsione Social nos importamos com sua opinião, por isso disponibilizamos uma seção onde você pode nos deixar sua avaliação:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { nome: 'Serviço incrível!', texto: 'Recebi meus seguidores super rápido e todos são reais. Recomendo muito!', estrelas: 5 },
              { nome: 'Top demais!', texto: 'Meu perfil bombou depois de usar a Impulsione Social. Atendimento excelente!', estrelas: 5 },
              { nome: 'Muito bom!', texto: 'Os seguidores chegaram certinho, só poderia ter mais opções de pacotes menores.', estrelas: 4 },
              { nome: 'Resultados incríveis!', texto: 'Aumentei minha credibilidade no Kwai e agora tenho muito mais engajamento.', estrelas: 5 },
              { nome: 'Entrega super rápida!', texto: 'Comprei e em poucos minutos já comecei a ver os seguidores chegando. Muito satisfeito!', estrelas: 5 },
              { nome: 'Melhor site de seguidores!', texto: 'Já testei vários serviços, mas a Impulsione Social foi a única que entregou tudo certinho e sem queda.', estrelas: 5 },
              { nome: 'Ótimo serviço!', texto: 'Seguidores chegaram conforme prometido. Só poderiam ter mais opções de pagamento.', estrelas: 4 },
              { nome: 'Perfeito para crescer no Kwai!', texto: 'Depois de comprar seguidores aqui, meu perfil teve muito mais alcance e credibilidade.', estrelas: 5 },
              { nome: 'Empresa confiável!', texto: 'Atendimento rápido e suporte sempre pronto para ajudar. Vou comprar mais vezes!', estrelas: 5 },
            ].map((avaliacao, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-orange-100"
              >
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`${
                        i < avaliacao.estrelas ? 'ri-star-fill text-yellow-400' : 'ri-star-line text-gray-300'
                      } text-lg`}
                    ></i>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{avaliacao.nome}</h3>
                <p className="text-gray-600">{avaliacao.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <a
              href="#compra"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-4 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl mb-8 whitespace-nowrap cursor-pointer"
            >
              Comprar agora
            </a>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                pergunta: 'Em quanto tempo os seguidores chegam ?',
                resposta:
                  'Você receberá todos seguidores do seu pacote em até 24 horas. Solicitamos esse prazo para garantir que todos os seus seguidores serão entregues, porém normalmente o recebimento dos seguidores é de 1 – 4 horas no instagram.',
              },
              {
                pergunta: 'É necessário informar minha senha ?',
                resposta: 'Não! Absolutamente não é necessário informar sua senha ou e-mail do seu perfil, somente o @ do usuário.',
              },
              {
                pergunta: 'É seguro comprar seguidores no instagram ?',
                resposta:
                  'Sim, como mostramos no  Guia para Comprar Seguidores no Instagram, somos um site totalmente seguro. Nunca pedimos informações sensíveis e confidenciais como senha e e-mail da conta além de nossa plataforma ser protegida por um certificado de segurança SSL.',
              },
              {
                pergunta: 'É comum comprar seguidores ?',
                resposta:
                  'É muito comum, milhares de pessoas compram seguidores quando se esta principalmente no começo, porque comprando você alcançará grande relevância em pouco tempo. É por isso que muitos perfis pessoais e comerciais utilizam a estratégia de comprar seguidores para crescer rapidamente.',
              },
              {
                pergunta: 'Quantos seguidores no instagram posso comprar ?',
                resposta:
                  'Você pode comprar quantos seguidores desejar, a quantidade depende exclusivamente de você, das suas condições e objetivos que deseja conquistar.',
              },
              {
                pergunta: 'É proibido comprar seguidores ?',
                resposta:
                  'Não, tanto é que inúmeras personalidades como cantores, jogadores de futebol e artistas compram seguidores regularmente.',
              },
              {
                pergunta: 'O instagram impede marcas de comprar ?',
                resposta:
                  'O instagram não remove seguidores ou impede marcas por receber muitos seguidores em pouco tempo.',
              },
              {
                pergunta: 'Posso comprar seguidores de outro lugar ?',
                resposta:
                  'Não recomendamos, quando você compra seguidores em outro site a garantia de nossos serviços é perdida e não será possível repor os perfis que deixarem de te seguir posteriormente.',
              },
              {
                pergunta: 'Tem possibilidade da minha conta ser bloqueada ?',
                resposta:
                  'Não! Você não corre nenhum risco de ter a conta bloqueada apenas por estar recebendo novos seguidores da compra.',
              },
              {
                pergunta: 'Posso mudar o @ do perfil após comprar ?',
                resposta:
                  'Não é recomendado. Se você mudar o @ do perfil após a compra você perde a garantia de reposição, e se houver perda de seguidores não conseguiremos enviar novos.',
              },
              {
                pergunta: 'Qual o melhor site para comprar seguidores ?',
                resposta:
                  'A Impulsione Social se destaca como o melhor site para comprar seguidores no instagram, com um serviço de ótima qualidade, preços baixos e um suporte especializado, é considerado o melhor site para se comprar seguidores.',
              },
              {
                pergunta: 'Preciso seguir os seguidores de volta ?',
                resposta:
                  'Não! Você não precisa seguir ninguém de volta. Após finalizar a compra em nosso site, você precisa apenas aguardar a começar a receber os seguidores.',
              },
              {
                pergunta: 'Meu perfil pode estar privado ?',
                resposta: 'Não, para que você comece a receber os seguidores comprados seu perfil deve estar público.',
              },
              {
                pergunta: 'Tem risco de perder seguidores que já tenho?',
                resposta:
                  'Os seguidores podem deixar de te seguir após a compra, mas para que você não seja prejudicado temos nossa garantia de 30 dias, na qual enviaremos novos seguidores se você perder algum, após esse período praticamente não há mais perda.',
              },
              {
                pergunta: 'Por que devo comprar na Impulsione Social ?',
                resposta:
                  'Somos a maior agência do Brasil especializada em serviços de crescimento e engajamento nas redes sociais. Estamos no mercado há mais de 5 anos e temos mais de 100 mil clientes satisfeitos. Nossa empresa tem uma ótima avaliação no Reclame Aqui e trabalhamos com tecnologia de ponta para garantir sua segurança e privacidade.',
              },
              {
                pergunta: 'Quais são as opções de pagamento ?',
                resposta: 'Temos diversas opções de pagamento, você pode pagar por pix, cartão em até 12x e depósito bancário.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <summary className="cursor-pointer p-6 font-bold text-gray-800 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 flex items-center justify-between">
                  <span>{faq.pergunta}</span>
                  <i className="ri-arrow-down-s-line text-2xl text-orange-500 group-open:rotate-180 transition-transform duration-300"></i>
                </summary>
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">{faq.resposta}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Pronto para Bombar no Kwai?</h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a milhares de clientes satisfeitos e impulsione seu perfil agora mesmo!
          </p>
          <a
            href="#compra"
            className="inline-block bg-white text-orange-600 font-bold px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg whitespace-nowrap cursor-pointer"
          >
            Comprar Curtidas Agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <i className="ri-video-fill text-white text-xl"></i>
                </div>
                <span className="text-xl font-bold">Impulsione Social</span>
              </div>
              <p className="text-gray-400">
                A melhor plataforma para crescer suas redes sociais com segurança e qualidade.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <a href="#compra" className="text-gray-400 hover:text-white transition-colors">
                    Comprar Curtidas
                  </a>
                </li>
                <li>
                  <Link to="/seguidores-kwai" className="text-gray-400 hover:text-white transition-colors">
                    Seguidores Kwai
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <i className="ri-whatsapp-line mr-2"></i>
                  WhatsApp 24/7
                </p>
                <p className="flex items-center">
                  <i className="ri-mail-line mr-2"></i>
                  Suporte via Email
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="https://www.instagram.com/impulsionesocialoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <i className="ri-instagram-line text-white"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Impulsione Social. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
