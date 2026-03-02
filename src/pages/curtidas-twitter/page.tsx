import { useState, useEffect } from 'react';

export default function CurtidasTwitterPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const packages = [
    {
      amount: '500',
      price: 'R$29,90',
      link: 'https://pay.impulsionesocial.com/imp-twitter-500-curtidas-no-twitter'
    },
    {
      amount: '1.000',
      price: 'R$49,90',
      link: 'https://pay.impulsionesocial.com/imp-twitter-1000-curtidas-no-twitter'
    },
    {
      amount: '2.000',
      price: 'R$99,90',
      link: 'https://pay.impulsionesocial.com/imp-twitter-2000-curtidas-no-twitter'
    },
    {
      amount: '3.000',
      price: 'R$149,90',
      link: 'https://pay.impulsionesocial.com/imp-twitter-3000-curtidas-no-twitter'
    },
    {
      amount: '5.000',
      price: 'R$229,90',
      link: 'https://pay.impulsionesocial.com/imp-twitter-5000-curtidas-no-twitter'
    },
    {
      amount: '10.000',
      price: 'R$449,90',
      link: 'https://pay.impulsionesocial.com/imp-twitter-10000-curtidas-no-twitter'
    }
  ];

  const handleBuyClick = (link: string) => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams = new URLSearchParams();

      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
        const value = urlParams.get(param);
        if (value) utmParams.append(param, value);
      });

      const finalUrl = utmParams.toString() ? `${link}?${utmParams.toString()}` : link;
      window.open(finalUrl, '_blank');
    } catch (error) {
      console.error('Failed to open purchase link:', error);
    }
  };

  const faqs = [
    {
      question: 'Em quanto tempo as curtidas chegam?',
      answer: 'Você receberá todas as curtidas do seu pacote em até 24 horas. Solicitamos esse prazo para garantir que todas as suas curtidas serão entregues, porém normalmente o recebimento é de 1 – 4 horas.'
    },
    {
      question: 'É necessário informar minha senha?',
      answer: 'Não! Absolutamente não é necessário informar sua senha ou e‑mail do seu perfil, somente o link do tweet.'
    },
    {
      question: 'É seguro comprar curtidas no Twitter?',
      answer: 'Sim, somos um site totalmente seguro. Nunca pedimos informações sensíveis e confidenciais como senha e e‑mail da conta além de nossa plataforma ser protegida por um certificado de segurança SSL.'
    },
    {
      question: 'É comum comprar curtidas?',
      answer: 'É muito comum, milhares de pessoas compram curtidas quando estão principalmente no começo, porque comprando você alcançará grande relevância em pouco tempo.'
    },
    {
      question: 'Quantas curtidas no Twitter posso comprar?',
      answer: 'Você pode comprar quantas curtidas desejar, a quantidade depende exclusivamente de você, das suas condições e objetivos que deseja conquistar.'
    },
    {
      question: 'É proibido comprar curtidas?',
      answer: 'Não, tanto é que inúmeras personalidades como cantores, jogadores de futebol e artistas compram curtidas regularmente.'
    },
    {
      question: 'O Twitter impede marcas de comprar?',
      answer: 'O Twitter não remove curtidas ou impede marcas por receber muitas curtidas em pouco tempo.'
    },
    {
      question: 'Tem possibilidade da minha conta ser bloqueada?',
      answer: 'Não! Você não corre nenhum risco de ter a conta bloqueada apenas por estar recebendo novas curtidas da compra.'
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center shadow-lg">
                <i className="ri-twitter-x-fill text-2xl text-white"></i>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">
                Impulsione Social
              </span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#servicos" className={`font-medium transition-colors whitespace-nowrap cursor-pointer ${scrolled ? 'text-gray-700 hover:text-sky-600' : 'text-gray-800 hover:text-sky-600'}`}>
                Serviços
              </a>
              <a href="/#sobre" className={`font-medium transition-colors whitespace-nowrap cursor-pointer ${scrolled ? 'text-gray-700 hover:text-sky-600' : 'text-gray-800 hover:text-sky-600'}`}>
                Sobre
              </a>
              <a href="/#contato" className={`font-medium transition-colors whitespace-nowrap cursor-pointer ${scrolled ? 'text-gray-700 hover:text-sky-600' : 'text-gray-800 hover:text-sky-600'}`}>
                Contato
              </a>
              <a href="#pacotes" className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all whitespace-nowrap cursor-pointer">
                Comprar Agora
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-sky-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Curtidas no Tweet do Twitter
          </h1>
        </div>
      </section>

      {/* Packages Section */}
      <section id="pacotes" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-sky-50 rounded-2xl p-8 border-2 border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-5xl font-bold text-sky-600 mb-2">{pkg.amount}</h3>
                  <p className="text-lg font-semibold text-gray-700 uppercase tracking-wide">
                    Curtidas no Tweet
                  </p>
                </div>

                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-gray-900">{pkg.price}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <i className="ri-check-line text-sky-600 text-xl mr-3"></i>
                    <span>Não precisa de senha</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <i className="ri-check-line text-sky-600 text-xl mr-3"></i>
                    <span>30 dias de reposição</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <i className="ri-check-line text-sky-600 text-xl mr-3"></i>
                    <span>Entrega rápida</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <i className="ri-check-line text-sky-600 text-xl mr-3"></i>
                    <span>E‑book Twitter Prime</span>
                  </li>
                </ul>

                <button
                  onClick={() => handleBuyClick(pkg.link)}
                  className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
                >
                  Comprar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-sky-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como comprar curtidas para Twitter
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nosso processo é muito básico e fácil, criamos o site de uma forma simples e intuitiva para todos. <strong>Com 3 cliques simples</strong> você pode comprar o pacote de curtidas que quiser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-shopping-cart-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Selecione seu pacote
              </h3>
              <p className="text-gray-600 text-center">
                A primeira coisa é selecionar um pacote, por exemplo, <b>comprar 500 curtidas</b>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-link text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Digite o link do tweet
              </h3>
              <p className="text-gray-600 text-center">
                Insira o link do seu tweet do Twitter após finalizar o pagamento.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-secure-payment-line text-3xl text-white"></i>
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

      {/* Why Buy Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Por que comprar curtidas no Twitter?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                No mundo competitivo das mídias sociais, o Twitter se tornou uma plataforma essencial para indivíduos, empresas e marcas que buscam se destacar e aumentar sua presença digital. A decisão de comprar <b>curtidas</b> do Twitter pode ser um passo estratégico para impulsionar sua visibilidade e alcance nesta rede social.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Por que é importante ter curtidas no Twitter?
              </h3>
              <p className="text-gray-600 mb-6">
                Na era digital de hoje, a contagem de curtidas se tornou um indicador crucial de credibilidade e sucesso. Um tweet com uma base sólida de <b>curtidas</b> cria maior confiança e naturalmente atrai mais atenção. Para empresas e criadores de conteúdo, isso se traduz em melhores oportunidades de negócios e colaborações.
              </p>
              <p className="text-gray-600">
                O Twitter não é apenas mais uma plataforma de mídia social; é uma ferramenta de marketing poderosa que pode impulsionar significativamente sua presença online. Com milhões de usuários ativos, a plataforma oferece alcance inigualável para se conectar com seu público-alvo.
              </p>

              <a
                href="#pacotes"
                className="inline-block mt-8 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
              >
                Comprar agora
              </a>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-sky-300 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-sky-500 to-sky-600 rounded-3xl p-12 text-white">
                <i className="ri-twitter-x-fill text-9xl opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6">Benefícios Imediatos</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <i className="ri-check-double-line text-2xl mr-3 mt-1"></i>
                      <span className="text-lg">Aumento instantâneo de credibilidade</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-double-line text-2xl mr-3 mt-1"></i>
                      <span className="text-lg">Maior alcance orgânico</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-double-line text-2xl mr-3 mt-1"></i>
                      <span className="text-lg">Atração de novos seguidores</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-double-line text-2xl mr-3 mt-1"></i>
                      <span className="text-lg">Melhor posicionamento no feed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Are The Best */}
      <section className="py-20 px-4 bg-gradient-to-br from-sky-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Porque somos os melhores em comprar curtidas
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Qualidade é o mais importante, por isso sermos líderes em qualidade é nossa meta diária.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-rocket-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Melhore o alcance do seu público
              </h3>
              <p className="text-gray-600">
                Aumente seu conteúdo e torne-o viral para alcançar o maior número possível de usuários.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-star-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Torne-se um Influenciador
              </h3>
              <p className="text-gray-600">
                Comprar curtidas fará com que seus próximos tweets tenham mais interação e alcance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-money-dollar-circle-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Economize dinheiro com curtidas baratas
              </h3>
              <p className="text-gray-600">
                Não se confunda, oferecer curtidas baratas não é sinônimo de baixa qualidade, trabalhamos com o melhor sistema.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-shield-check-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Construir segurança
              </h3>
              <p className="text-gray-600">
                Você tem uma marca? Ao <b>comprar curtidas</b> você fará com que seu cliente em potencial tenha mais confiança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grow Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cresça nas Redes com a N°1 do Brasil
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lembre-se de que também oferecemos outros serviços e que você pode <strong>comprar seguidores no Instagram e visualizações em minutos.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border-2 border-sky-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Pode ter um impacto negativo sobre mim?
              </h4>
              <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-sky-600 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Não, quando você faz uma compra com a Impulsione Social sua conta não corre nenhum perigo, e isso é legal. Não violamos nenhuma regra do Twitter ao realizar esse processo, por isso é 100% seguro.
              </p>
              <p className="text-gray-600">
                Milhares de grandes influenciadores do Twitter usam esses métodos. Se houvesse algum problema com isso, eles não ousariam expor suas contas a eles.
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border-2 border-sky-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Curtidas com entrega instantânea
              </h4>
              <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-sky-600 mb-6"></div>
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
              className="inline-block bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
            >
              Comprar agora
            </a>
          </div>
        </div>
      </section>

      {/* 4 Reasons Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-sky-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-sky-600">4 razões para comprar curtidas</span> na Impulsione Social
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Como uma equipe em crescimento nas redes e após anos de estudo, aprendemos esses aspectos para comprar curtidas no Twitter:
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-flashlight-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Entrega Rápida</h4>
                    <p className="text-gray-600">Curtidas em minutos após a compra.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-shield-check-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">100% Seguro</h4>
                    <p className="text-gray-600">Sem senha, sem riscos, com 30 dias de garantia.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-line-chart-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Resultados Reais</h4>
                    <p className="text-gray-600">Perfis reais para um crescimento que você vê.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-customer-service-2-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Suporte de Verdade</h4>
                    <p className="text-gray-600">Time 24/7 via WhatsApp para te ajudar sempre.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20smartphone%20showing%20Twitter%20X%20social%20media%20app%20with%20heart%20like%20icons%20floating%20around%2C%20sky%20blue%20gradient%20background%2C%20digital%20marketing%20concept%20illustration%2C%20clean%20minimalist%20design%20with%20engagement%20metrics%20growing%2C%20professional%20high%20quality%20render%20with%20light%20blue%20and%20white%20color%20scheme&width=500&height=600&seq=twitter-likes-reasons-impulsione&orientation=portrait"
                alt="Por que escolher Impulsione Social"
                className="w-full max-w-md h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Avaliações de clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Na Impulsione Social nos importamos com sua opinião, por isso disponibilizamos uma seção onde você pode nos deixar sua avaliação:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Serviço incrível!', rating: 5, text: 'Recebi minhas curtidas super rápido e todas são reais. Recomendo muito!' },
              { name: 'Top demais!', rating: 5, text: 'Meu tweet bombou depois de usar a Impulsione Social. Atendimento excelente!' },
              { name: 'Muito bom!', rating: 4, text: 'As curtidas chegaram certinho, só poderia ter mais opções de pacotes menores.' },
              { name: 'Resultados incríveis!', rating: 5, text: 'Aumentei minha credibilidade no Twitter e agora tenho muito mais engajamento.' },
              { name: 'Entrega super rápida!', rating: 5, text: 'Comprei e em poucos minutos já comecei a ver as curtidas chegando. Muito satisfeito!' },
              { name: 'Melhor site de curtidas!', rating: 5, text: 'Já testei vários serviços, mas a Impulsione Social foi a única que entregou tudo certinho e sem queda.' }
            ].map((review, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 border-2 border-sky-100 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`${i < review.rating ? 'ri-star-fill text-yellow-400' : 'ri-star-line text-gray-300'} text-lg`}
                      ></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-sky-50 via-white to-sky-50">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="#pacotes"
            className="inline-block bg-gradient-to-r from-sky-500 to-sky-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all whitespace-nowrap cursor-pointer mb-12"
          >
            Comprar agora
          </a>

          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Perguntas Frequentes
          </h2>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {faqs.slice(0, 4).map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-sky-50 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                    <i className={`ri-arrow-${openFaq === index ? 'up' : 'down'}-s-line text-2xl text-sky-600 flex-shrink-0`}></i>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {faqs.slice(4, 8).map((faq, index) => (
                <div key={index + 4} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index + 4 ? null : index + 4)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-sky-50 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                    <i className={`ri-arrow-${openFaq === index + 4 ? 'up' : 'down'}-s-line text-2xl text-sky-600 flex-shrink-0`}></i>
                  </button>
                  {openFaq === index + 4 && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-sky-500 to-sky-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Impulsione Social</h3>
              <p className="text-sky-100">
                A melhor plataforma para crescer nas redes sociais com segurança e qualidade.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sky-100">
                <li><a href="/seguidores-instagram" className="hover:text-white transition-colors cursor-pointer">Seguidores Instagram</a></li>
                <li><a href="/curtidas-instagram" className="hover:text-white transition-colors cursor-pointer">Curtidas Instagram</a></li>
                <li><a href="/seguidores-tiktok" className="hover:text-white transition-colors cursor-pointer">Seguidores TikTok</a></li>
                <li><a href="/curtidas-twitter" className="hover:text-white transition-colors cursor-pointer">Curtidas Twitter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sky-100">
                <li><a href="/#sobre" className="hover:text-white transition-colors cursor-pointer">Sobre Nós</a></li>
                <li><a href="/#contato" className="hover:text-white transition-colors cursor-pointer">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Política de Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/impulsionesocialoficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <i className="ri-instagram-line text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-sky-400 pt-8 text-center text-sky-100">
            <p>&copy; 2025 Impulsione Social. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
