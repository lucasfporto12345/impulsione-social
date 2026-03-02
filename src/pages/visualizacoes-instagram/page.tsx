import { useState, useEffect } from 'react';

const packages = [
  {
    quantity: '1.000',
    price: 'R$10,90',
    oldPrice: 'R$19,90',
    discount: 'DESCONTO DE R$9,00',
    features: ['30 dias de reposição', 'E-book Instagram Prime', 'Entrega rápida', 'Não precisa de senha'],
    popular: false,
    bestValue: false,
    link: 'https://pay.impulsionesocial.com/imp-instagram-1000-visualizacoes-instagram'
  },
  {
    quantity: '2.000',
    price: 'R$19,90',
    oldPrice: 'R$34,90',
    discount: 'DESCONTO DE R$15,00',
    features: ['30 dias de reposição', 'E-book Instagram Prime', 'Entrega rápida', 'Não precisa de senha'],
    popular: false,
    bestValue: false,
    link: 'https://pay.impulsionesocial.com/imp-instagram-2000-visualizacoes-instagram'
  },
  {
    quantity: '3.000',
    price: 'R$29,90',
    oldPrice: 'R$49,90',
    discount: 'DESCONTO DE R$20,00',
    features: ['30 dias de reposição', 'E-book Instagram Prime', 'Entrega rápida', 'Não precisa de senha'],
    popular: true,
    bestValue: false,
    link: 'https://pay.impulsionesocial.com/imp-instagram-3000-visualizacoes-instagram'
  },
  {
    quantity: '5.000',
    price: 'R$44,90',
    oldPrice: 'R$74,90',
    discount: 'DESCONTO DE R$30,00',
    features: ['30 dias de reposição', 'E-book Instagram Prime', 'Entrega rápida', 'Não precisa de senha'],
    popular: false,
    bestValue: false,
    link: 'https://pay.impulsionesocial.com/imp-instagram-5000-visualizacoes-instagram'
  },
  {
    quantity: '10.000',
    price: 'R$74,90',
    oldPrice: 'R$139,90',
    discount: 'DESCONTO DE R$65,00',
    features: ['30 dias de reposição', 'E-book Instagram Prime', 'Entrega rápida', 'Não precisa de senha'],
    popular: false,
    bestValue: false,
    link: 'https://pay.impulsionesocial.com/imp-instagram-10000-visualizacoes-instagram'
  },
  {
    quantity: '35.000',
    price: 'R$139,90',
    oldPrice: 'R$469,90',
    discount: 'DESCONTO DE R$330,00',
    features: ['30 dias de reposição', 'E-book Instagram Prime', 'Entrega rápida', 'Não precisa de senha'],
    popular: false,
    bestValue: true,
    link: 'https://pay.impulsionesocial.com/imp-instagram-10000-visualizacoes-instagram'
  }
];

const steps = [
  {
    icon: 'ri-shopping-bag-line',
    title: 'Selecione seu pacote',
    description: 'A primeira coisa é selecionar um pacote, por exemplo, comprar 1.000 visualizações'
  },
  {
    icon: 'ri-user-line',
    title: 'Digite seu nome de usuário',
    description: 'Insira o link do seu perfil ou nome de usuário'
  },
  {
    icon: 'ri-secure-payment-line',
    title: 'Efetuar pagamento',
    description: 'Efetue o pagamento do seu pedido usando um dos métodos de pagamento seguros'
  }
];

const benefits = [
  {
    icon: 'ri-eye-line',
    color: 'from-pink-500 to-rose-500',
    title: 'Melhore o alcance do seu público',
    description: 'Aumente seu conteúdo e torne-o viral para alcançar o maior número possível de usuários.'
  },
  {
    icon: 'ri-star-line',
    color: 'from-yellow-500 to-orange-500',
    title: 'Torne-se um Influenciador',
    description: 'Comprar visualizações fará com que suas próximas postagens e histórias tenham mais interação e alcance.'
  },
  {
    icon: 'ri-money-dollar-circle-line',
    color: 'from-green-500 to-emerald-500',
    title: 'Economize dinheiro',
    description: 'Não se confunda, oferecer visualizações baratas não é sinônimo de qualidade, trabalhamos com o melhor sistema para entregar.'
  },
  {
    icon: 'ri-shield-check-line',
    color: 'from-pink-600 to-rose-600',
    title: 'Construir segurança',
    description: 'Você tem uma marca? Ao comprar visualizações você fará com que seu cliente em potencial tenha mais confiança em seu produto.'
  }
];

const reasons = [
  {
    icon: 'ri-flashlight-line',
    title: 'Entrega Rápida',
    description: 'Visualizações em minutos após a compra.'
  },
  {
    icon: 'ri-shield-check-line',
    title: '100% Seguro',
    description: 'Sem senha, sem riscos, com 30 dias de garantia.'
  },
  {
    icon: 'ri-line-chart-line',
    title: 'Resultados Reais',
    description: 'Visualizações reais para um crescimento que você vê.'
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Suporte de Verdade',
    description: 'Time 24/7 via WhatsApp para te ajudar sempre.'
  }
];

const faqs = [
  {
    question: 'Em quanto tempo as visualizações chegam?',
    answer: 'Você receberá todas as visualizações do seu pacote em até 24 horas. Solicitamos esse prazo para garantir que todas as suas visualizações serão entregues, porém normalmente o recebimento é de 1 – 4 horas no Instagram.'
  },
  {
    question: 'É necessário informar minha senha?',
    answer: 'Não! Absolutamente não é necessário informar sua senha ou e‑mail do seu perfil, somente o @ do usuário.'
  },
  {
    question: 'É seguro comprar visualizações no Instagram?',
    answer: 'Sim, somos um site totalmente seguro. Nunca pedimos informações sensíveis e confidenciais como senha e‑mail da conta além de nossa plataforma ser protegida por certificado SSL.'
  },
  {
    question: 'É comum comprar visualizações?',
    answer: 'É muito comum, milhares de pessoas compram visualizações quando está principalmente no começo, porque comprando você alcançará grande relevância em pouco tempo.'
  },
  {
    question: 'Quantas visualizações no Instagram posso comprar?',
    answer: 'Você pode comprar quantas visualizações desejar, a quantidade depende exclusivamente de você, das suas condições e objetivos que deseja conquistar.'
  },
  {
    question: 'É proibido comprar visualizações?',
    answer: 'Não, inúmeras personalidades como cantores, jogadores de futebol e artistas compram visualizações regularmente.'
  },
  {
    question: 'O Instagram impede marcas de comprar?',
    answer: 'O Instagram não remove visualizações ou impede marcas por receber muitas visualizações em pouco tempo.'
  },
  {
    question: 'Tem possibilidade da minha conta ser bloqueada?',
    answer: 'Não! Você não corre nenhum risco de ter a conta bloqueada apenas por estar recebendo novas visualizações da compra.'
  },
  {
    question: 'Meu perfil pode estar privado?',
    answer: 'Não, para que você comece a receber as visualizações compradas seu perfil deve estar público.'
  },
  {
    question: 'Quais são as opções de pagamento?',
    answer: 'Temos diversas opções de pagamento, você pode pagar por pix, cartão em até 12x e depósito bancário.'
  }
];

export default function VisualizacoesInstagramPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [utmParams, setUtmParams] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview_pacotes',
        page_type: 'visualizacoes',
        page_name: 'visualizacoes-instagram'
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleBuyClick = (checkoutLink: string) => {
    const finalUrl = `${checkoutLink}${utmParams}`;
    window.location.href = finalUrl;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <a
        href="https://whatsapp.conectaprime.com/r/compraim"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer will-change-transform"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 will-change-transform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center">
                <span className="text-2xl font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Impulsione</span> Social
                </span>
              </a>
              <div className="hidden md:flex items-center gap-6">
                <a href="/#services" className="text-gray-600 hover:text-gray-900 cursor-pointer">Serviços</a>
                <a href="/#how-it-works" className="text-gray-600 hover:text-gray-900 cursor-pointer">Como Funciona</a>
                <a href="/#faq" className="text-gray-600 hover:text-gray-900 cursor-pointer">FAQ</a>
                <a href="https://seguidoresprimer.com/redirecionador-whatsapp-prime-suporte" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 cursor-pointer">Contato</a>
              </div>
            </div>
            <div className="hidden md:block">
              <a href="#pacotes" className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full font-medium hover:from-pink-600 hover:to-rose-600 transition-all whitespace-nowrap cursor-pointer">
                Ver Pacotes
              </a>
            </div>
            <button
              className="md:hidden p-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
            <div className="flex flex-col gap-4">
              <a href="/#services" className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
              <a href="/#how-it-works" className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Como Funciona</a>
              <a href="/#faq" className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="https://seguidoresprimer.com/redirecionador-whatsapp-prime-suporte" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 cursor-pointer">Contato</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-4 bg-gradient-to-br from-pink-50 via-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-6">
            {/* Removido o aviso importante que aparecia acima do título */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Visualizações Instagram
            </h1>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="pacotes" className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Escolha seu Pacote</h2>
            <p className="text-gray-600">Selecione a quantidade ideal para o seu perfil</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 transition-all hover:shadow-xl hover:scale-105 ${
                  pkg.popular
                    ? 'border-2 border-pink-500 shadow-lg scale-105'
                    : 'border-2 border-gray-300 hover:border-pink-400 shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">
                      MAIS POPULAR
                    </span>
                  </div>
                )}
                {pkg.bestValue && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg whitespace-nowrap">
                      💰 MELHOR CUSTO
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-gray-900 mb-2">{pkg.quantity}</div>
                  <div className="text-gray-600 font-medium mb-4">VISUALIZAÇÕES</div>
                  <div className="text-4xl font-bold text-gray-900 mb-3">{pkg.price}</div>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-600">
                      <i className="ri-checkbox-circle-fill text-green-500"></i>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleBuyClick(pkg.link)}
                  className={`block w-full text-center py-3 rounded-xl font-medium transition-all whitespace-nowrap cursor-pointer ${
                    pkg.popular || pkg.bestValue
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 shadow-lg'
                      : 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-md'
                  }`}
                >
                  Comprar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="py-16 bg-gray-50 lazy-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como comprar visualizações para Instagram
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nosso processo é muito simples e intuitivo. <strong>Com apenas 3 cliques</strong> você adquire o pacote desejado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className={`${step.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy Section */}
      <section className="py-16 bg-white lazy-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Por que comprar visualizações no Instagram?
              </h2>
              <p className="text-gray-600 mb-6">
                No mundo competitivo das mídias sociais, o Instagram se tornou uma plataforma essencial para indivíduos, empresas e marcas que buscam se destacar e aumentar sua presença digital. A decisão de comprar <strong>visualizações</strong> do Instagram pode ser um passo estratégico para impulsionar sua visibilidade e alcance nesta rede social.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Por que é importante ter visualizações no Instagram?
              </h3>
              <p className="text-gray-600 mb-6">
                Na era digital de hoje, a contagem de <strong>visualizações</strong> se tornou um indicador crucial de credibilidade e sucesso. Uma conta com uma base sólida de <strong>visualizações</strong> cria maior confiança e naturalmente atrai mais atenção. Para empresas e criadores de conteúdo, isso se traduz em melhores oportunidades de negócios e colaborações.
              </p>
              <p className="text-gray-600 mb-6">
                O Instagram não é apenas mais uma plataforma de mídia social; é uma ferramenta de marketing poderosa que pode impulsionar significativamente sua presença online. Com mais de 1 bilhão de usuários ativos, a plataforma oferece alcance inigualável para se conectar com seu público-alvo.
              </p>
              <a 
                href="#pacotes" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-medium hover:from-pink-600 hover:to-rose-600 transition-all whitespace-nowrap cursor-pointer"
              >
                Comprar agora
              </a>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20smartphone%20displaying%20Instagram%20stories%20and%20reels%20with%20view%20count%20metrics%20increasing%2C%20social%20media%20engagement%20analytics%20dashboard%2C%20professional%20digital%20marketing%20concept%2C%20bright%20pink%20and%20rose%20gradient%20colors%2C%20clean%20minimalist%20design%20with%20eye%20icons%20and%20view%20statistics%2C%20high%20quality%20business%20photography%20showing%20growth%20and%20viral%20content%20success&width=600&height=800&seq=instagram-views-growth-why-buy&orientation=portrait" 
                  alt="Instagram Views Growth" 
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 flex gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center flex-shrink-0`}>
                  <i className={`${benefit.icon} text-2xl text-white`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-rose-50 to-white lazy-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Porque somos os melhores em comprar visualizações
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Qualidade é o mais importante, por isso sermos líderes em qualidade é nossa meta diária.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${reason.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-8 bg-white rounded-2xl p-6 shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=Instagram%20views%20and%20engagement%20concept%20illustration%20with%20eye%20icons%20and%20view%20count%20metrics%2C%20modern%20smartphone%20displaying%20social%20media%20analytics%2C%20professional%20digital%20marketing%20design%2C%20pink%20and%20rose%20gradient%20colors%2C%20clean%20minimalist%20style%20showing%20growth%20charts%20and%20success%20indicators%2C%20high%20quality%20business%20photography%20with%20trending%20content%20visualization&width=400&height=400&seq=instagram-views-reasons-impulsione&orientation=squarish" 
                alt="Por que Impulsione Social" 
                className="w-32 h-32 rounded-2xl object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  4 razões para comprar visualizações na Impulsione Social
                </h3>
                <p className="text-gray-600">
                  Como uma equipe em crescimento nas redes e após anos de estudo, aprendemos esses aspectos para comprar visualizações no Instagram
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-16 bg-white lazy-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cresça nas Redes com a N°1 do Brasil
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Oferecemos também seguidores e curtidas em minutos para acelerar seu crescimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Entrega Instantânea
              </h3>
              <p className="text-gray-600 mb-4">
                Pedidos são processados rapidamente após o pagamento, garantindo visualizações em tempo real.
              </p>
              <p className="text-gray-600">
                A velocidade pode variar conforme a quantidade, mas sempre priorizamos rapidez.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Segurança Total
              </h3>
              <p className="text-gray-600 mb-4">
                Nosso sistema protege sua conta, não solicita senhas e trabalha dentro das diretrizes do Instagram.
              </p>
              <p className="text-gray-600">
                Clientes satisfeitos e suporte 24/7 garantem tranquilidade durante todo o processo.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#pacotes"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-pink-600 hover:to-rose-700 transition-all shadow-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-shopping-cart-line"></i>
              Comprar agora
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white lazy-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  <i className={`ri-arrow-${openFaq === index ? 'up' : 'down'}-s-line text-xl text-gray-500 flex-shrink-0`}></i>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#pacotes"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-pink-600 hover:to-rose-700 transition-all shadow-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-shopping-cart-line"></i>
              Comprar agora
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-600 lazy-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Impulsione Social – Seu provedor nº 1 do Instagram
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Também oferecemos seguidores e curtidas em minutos para acelerar seu crescimento.
          </p>
          <a
            href="/#services"
            className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-all shadow-lg whitespace-nowrap cursor-pointer"
          >
            <i className="ri-apps-line"></i>
            Ver Todos os Serviços
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <a href="/" className="flex items-center mb-4 md:mb-0">
              <span className="text-2xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Impulsione</span> Social
              </span>
            </a>
            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/impulsionesocialoficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pink-100 transition-colors cursor-pointer">
                <i className="ri-instagram-line text-gray-600"></i>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Impulsione Social - Todos os direitos reservados
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/impulsionesocialoficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pink-100 transition-colors cursor-pointer">
                <i className="ri-instagram-line text-gray-600"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}