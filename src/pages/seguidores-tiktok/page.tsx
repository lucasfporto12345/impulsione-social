
import { useState, useEffect } from 'react';

const packages = [
  {
    quantity: '500',
    type: 'Mundiais',
    price: 'R$27,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book Método Prime'],
    popular: false,
    link: 'https://pay.impulsionesocial.com/imp-tiktok-500-seguidores-mundiais'
  },
  {
    quantity: '1000',
    type: 'Mundiais',
    price: 'R$49,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book Método Prime'],
    popular: true,
    link: 'https://pay.impulsionesocial.com/imp-tiktok-1000-seguidores-mundiais'
  },
  {
    quantity: '2000',
    type: 'Mundiais',
    price: 'R$94,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book Método Prime'],
    popular: false,
    link: 'https://pay.impulsionesocial.com/imp-tiktok-2000-seguidores-mundiais'
  },
  {
    quantity: '3000',
    type: 'Mundiais',
    price: 'R$134,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book Método Prime'],
    popular: false,
    link: 'https://pay.impulsionesocial.com/imp-tiktok-3000-seguidores-mundiais'
  },
  {
    quantity: '5000',
    type: 'Mundiais',
    price: 'R$214,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book Método Prime'],
    popular: false,
    link: 'https://pay.impulsionesocial.com/imp-tiktok-5000-seguidores-mundiais'
  },
  {
    quantity: '10000',
    type: 'Mundiais',
    price: 'R$399,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book Método Prime'],
    popular: false,
    link: 'https://pay.impulsionesocial.com/imp-tiktok-10000-seguidores-mundiais'
  }
];

const brazilianPackages = [
  {
    quantity: '500',
    type: 'Brasileiros',
    price: 'R$49,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book Método Prime'],
    popular: false,
    link: 'https://pay.impulsionesocial.com/imp-tiktok-500-seguidores-brasileiros'
  },
  {
    quantity: '1000',
    type: 'Brasileiros',
    price: 'R$89,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book Método Prime'],
    popular: true,
    link: 'https://pay.impulsionesocial.com/imp-tiktok-1000-seguidores-brasileiros'
  },
  {
    quantity: '2000',
    type: 'Brasileiros',
    price: 'R$169,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book Método Prime'],
    popular: false,
    link: 'https://pay.impulsionesocial.com/imp-tiktok-2000-seguidores-brasileiros'
  },
  {
    quantity: '3000',
    type: 'Brasileiros',
    price: 'R$239,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book Método Prime'],
    popular: false,
    link: 'https://pay.impulsionesocial.com/imp-tiktok-3000-seguidores-brasileiros'
  },
  {
    quantity: '5000',
    type: 'Brasileiros',
    price: 'R$379,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book Método Prime'],
    popular: false,
    link: 'https://pay.impulsionesocial.com/imp-tiktok-5000-seguidores-brasileiros'
  },
  {
    quantity: '10000',
    type: 'Brasileiros',
    price: 'R$699,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book Método Prime'],
    popular: false,
    bestValue: true,
    link: 'https://pay.impulsionesocial.com/imp-tiktok-10000-seguidores-brasileiros'
  }
];

const steps = [
  {
    icon: 'ri-shopping-bag-line',
    title: 'Selecione seu pacote',
    description: 'Escolha a quantidade de seguidores que deseja adquirir'
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
    icon: 'ri-user-follow-line',
    color: 'from-cyan-500 to-pink-500',
    title: 'Melhore o alcance do seu público',
    description: 'Aumente seu conteúdo e torne-o viral para alcançar o maior número possível de usuários'
  },
  {
    icon: 'ri-star-line',
    color: 'from-yellow-500 to-yellow-400',
    title: 'Torne-se um Influenciador',
    description: 'Comprar seguidores reais fará com que suas próximas postagens e histórias tenham mais interação e alcance'
  },
  {
    icon: 'ri-money-dollar-circle-line',
    color: 'from-green-500 to-green-400',
    title: 'Economize dinheiro com seguidores baratos',
    description: 'Não se confunda, oferecer seguidores baratos não é sinônimo de qualidade, trabalhamos com o melhor sistema para entrega'
  },
  {
    icon: 'ri-shield-check-line',
    color: 'from-teal-500 to-teal-400',
    title: 'Construir segurança',
    description: 'Você tem uma marca? Ao comprar seguidores você fará com que seu cliente em potencial tenha mais confiança em seu produto'
  }
];

const reasons = [
  {
    icon: 'ri-flashlight-line',
    title: 'Entrega Rápida',
    description: 'Seguidores e curtidas em minutos após a compra.'
  },
  {
    icon: 'ri-shield-check-line',
    title: '100% Seguro',
    description: 'Sem senha, sem riscos, com 30 dias de garantia.'
  },
  {
    icon: 'ri-line-chart-line',
    title: 'Resultados Reais',
    description: 'Perfis reais para um crescimento que você vê.'
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Suporte de Verdade',
    description: 'Time 24/7 via WhatsApp para te ajudar sempre.'
  }
];

const testimonials = [
  {
    name: 'Serviço incrível!',
    rating: 5,
    text: 'Recebi meus seguidores super rápido e todos são reais. Recomendo muito!'
  },
  {
    name: 'Top demais!',
    rating: 5,
    text: 'Meu perfil bombou depois de usar a Seguidores Prime. Atendimento excelente!'
  },
  {
    name: 'Muito bom!',
    rating: 4,
    text: 'Os seguidores chegaram certinho, só poderia ter mais opções de pacotes menores.'
  },
  {
    name: 'Resultados incríveis!',
    rating: 5,
    text: 'Aumentei minha credibilidade no TikTok e agora tenho muito mais engajamento.'
  },
  {
    name: 'Entrega super rápida!',
    rating: 5,
    text: 'Comprei e em poucos minutos já comecei a ver os seguidores chegando. Muito satisfeito!'
  },
  {
    name: 'Melhor site de seguidores!',
    rating: 5,
    text: 'Já testei vários serviços, mas a Seguidores Prime foi a única que entregou tudo certinho e sem queda.'
  },
  {
    name: 'Ótimo serviço!',
    rating: 4,
    text: 'Seguidores chegaram conforme prometido. Só poderiam ter mais opções de pagamento.'
  },
  {
    name: 'Perfeito para crescer no TikTok!',
    rating: 5,
    text: 'Depois de comprar seguidores aqui, meu perfil teve muito mais alcance e credibilidade.'
  },
  {
    name: 'Empresa confiável!',
    rating: 5,
    text: 'Atendimento rápido e suporte sempre pronto para ajudar. Vou comprar mais vezes!'
  }
];

const faqs = [
  {
    question: 'Em quanto tempo os seguidores chegam?',
    answer:
      'Você receberá todos seguidores do seu pacote em até 24 horas. Solicitamos esse prazo para garantir que todos os seus seguidores serão entregues, porém normalmente o recebimento dos seguidores é de 1 – 4 horas no TikTok.'
  },
  {
    question: 'É necessário informar minha senha?',
    answer: 'Não! Absolutamente não é necessário informar sua senha ou e‑mail do seu perfil, somente o @ do usuário.'
  },
  {
    question: 'É seguro comprar seguidores no TikTok?',
    answer:
      'Sim, como mostramos no Guia para Comprar Seguidores no TikTok, somos um site totalmente seguro. Nunca pedimos informações sensíveis e confidenciais como senha e e‑mail da conta além de nossa plataforma ser protegida por um certificado de segurança SSL.'
  },
  {
    question: 'É comum comprar seguidores?',
    answer:
      'É muito comum, milhares de pessoas compram seguidores quando se esta principalmente no começo, porque comprando você alcançará grande relevância em pouco tempo. É por isso que muitos perfis pessoais e comerciais utilizam a estratégia de comprar seguidores para crescer rapidamente.'
  },
  {
    question: 'Quantos seguidores no TikTok posso comprar?',
    answer:
      'Você pode comprar quantos seguidores desejar, a quantidade depende exclusivamente de você, das suas condições e objetivos que deseja conquistar.'
  },
  {
    question: 'É proibido comprar seguidores?',
    answer:
      'Não, tanto é que inúmeras personalidades como cantores, jogadores de futebol e artistas compram seguidores regularmente.'
  },
  {
    question: 'O TikTok impede marcas de comprar?',
    answer:
      'O TikTok não remove seguidores ou impede marcas por receber muitos seguidores em pouco tempo.'
  },
  {
    question: 'Posso comprar seguidores de outro lugar?',
    answer:
      'Não recomendamos, quando você compra seguidores em outro site a garantia de nossos serviços é perdida e não será possível repor os perfis que deixarem de te seguir posteriormente.'
  }
];

function getUtmString(): string {
  const urlParams = new URLSearchParams(window.location.search);
  const utms: string[] = [];
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(key => {
    const value = urlParams.get(key);
    if (value) {
      utms.push(`${key}=${encodeURIComponent(value)}`);
    }
  });
  return utms.length > 0 ? '?' + utms.join('&') : '';
}

export default function SeguidoresTiktok() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'mundial' | 'brasileiro'>('mundial');
  const [utmString, setUtmString] = useState('');

  const currentPackages = activeTab === 'mundial' ? packages : brazilianPackages;

  useEffect(() => {
    window.scrollTo(0, 0);
    setUtmString(getUtmString());
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
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
                  <span className="text-cyan-500">Impulsione</span> Social
                </span>
              </a>
              <div className="hidden md:flex items-center gap-6">
                <a href="/#services" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                  Serviços
                </a>
                <a href="/#how-it-works" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                  Como Funciona
                </a>
                <a href="/#faq" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                  FAQ
                </a>
                <a
                  href="https://seguidoresprimer.com/redirecionador-whatsapp-prime-suporte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  Contato
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <a
                href="#pacotes"
                className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:from-cyan-600 hover:to-pink-600 transition-all whitespace-nowrap cursor-pointer"
              >
                Ver Pacotes
              </a>
            </div>
            <button className="md:hidden p-2 cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
            <div className="flex flex-col gap-4">
              <a href="/#services" className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
                Serviços
              </a>
              <a href="/#how-it-works" className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
                Como Funciona
              </a>
              <a href="/#faq" className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </a>
              <a
                href="https://seguidoresprimer.com/redirecionador-whatsapp-prime-suporte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-4 bg-gradient-to-br from-cyan-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-6">
            <div className="inline-flex items-center gap-2 bg-white border border-cyan-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="ri-shield-check-line text-cyan-500"></i>
              <span className="text-gray-700">Compra 100% Segura</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Seguidores TikTok</h1>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="pacotes" className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Switcher */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('mundial')}
                className={`px-8 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'mundial'
                    ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Mundiais
              </button>
              <button
                onClick={() => setActiveTab('brasileiro')}
                className={`px-8 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'brasileiro'
                    ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Brasileiros
              </button>
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{activeTab === 'mundial' ? 'Mundiais' : 'Brasileiros'}</h2>
            <p className="text-gray-600">
              {activeTab === 'mundial' ? '(Seguidores do mundo inteiro)' : '(Seguidores apenas do Brasil)'}
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 transition-all hover:shadow-xl hover:scale-105 ${
                  pkg.popular
                    ? 'border-2 border-cyan-500 shadow-lg scale-105'
                    : 'border-2 border-gray-300 hover:border-cyan-400 shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      MAIS POPULAR
                    </span>
                  </div>
                )}

                {(pkg.quantity === '10000' || (pkg as any).bestValue) && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg whitespace-nowrap">
                      💰 MELHOR CUSTO
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-gray-900 mb-2">{pkg.quantity}</div>
                  <div className="text-gray-600 font-medium mb-4">SEGUIDORES {pkg.type.toUpperCase()}</div>

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

                <a
                  href={`${pkg.link}${utmString}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-xl font-medium transition-all whitespace-nowrap cursor-pointer ${
                    pkg.popular || pkg.quantity === '10000'
                      ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white hover:from-cyan-600 hover:to-pink-600 shadow-lg'
                      : 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-md'
                  }`}
                >
                  Comprar Agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="py-16 bg-gray-50 lazy-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como comprar seguidores para TikTok</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nosso processo é muito básico e fácil, criamos o site Seguidores Prime de uma forma simples e intuitiva para todos. Com 3 cliques simples você pode comprar o
              pacote de seguidores que quiser para o TikTok.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Por que comprar seguidores no TikTok?</h2>
              <p className="text-gray-600 mb-6">
                No mundo competitivo das mídias sociais, o TikTok se tornou uma plataforma essencial para indivíduos, empresas e marcas que buscam se destacar e
                aumentar sua presença digital. A decisão de comprar seguidores do TikTok pode ser um passo estratégico para impulsionar sua visibilidade e alcance nesta
                rede social.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Por que é importante ter seguidores no TikTok?</h3>
              <p className="text-gray-600 mb-6">
                Na era digital de hoje, a contagem de seguidores do TikTok se tornou um indicador crucial de credibilidade e sucesso. Uma conta com uma base sólida de
                seguidores cria maior confiança e naturalmente atrai mais atenção. Para empresas e criadores de conteúdo, isso se traduz em melhores oportunidades de negócios
                e colaborações.
              </p>
              <a
                href="#pacotes"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:from-cyan-600 hover:to-pink-600 transition-all whitespace-nowrap cursor-pointer"
              >
                Comprar agora
              </a>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20smartphone%20displaying%20TikTok%20app%20interface%20with%20growing%20follower%20count%20and%20engagement%20metrics%2C%20vibrant%20cyan%20and%20pink%20gradient%20background%2C%20social%20media%20growth%20concept%20with%20notification%20icons%20and%20user%20profile%20elements%20floating%20around%20the%20phone%2C%20clean%20minimalist%20digital%20illustration%20style%20with%20soft%20lighting%20and%20professional%20composition&width=600&height=400&seq=tiktok-seg-why1&orientation=landscape"
                  alt="TikTok Growth"
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
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-pink-50 to-white lazy-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Porque somos os melhores em comprar seguidores</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Qualidade é o mais importante, por isso sermos líderes em qualidade é nossa meta diária.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${reason.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white lazy-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Avaliações de clientes</h2>
            <p className="text-gray-600">
              Na Seguidores Prime nos importamos com sua opinião, por isso disponibilizamos uma seção onde você pode nos deixar sua avaliação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`ri-star-${i < testimonial.rating ? 'fill' : 'line'} text-yellow-400`}
                    ></i>
                  ))}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 lazy-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  <i className={`ri-arrow-${openFaq === index ? 'up' : 'down'}-s-line text-xl text-gray-500 flex-shrink-0`}></i>
                </button>
                {openFaq === index && <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#pacotes"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-cyan-600 hover:to-pink-600 transition-all shadow-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-shopping-cart-line"></i>
              Comprar agora
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-pink-500 lazy-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cresça nas Redes com a N°1 do Brasil</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Lembre-se de que também oferecemos outros serviços e que você pode comprar curtidas no TikTok e visualização em minutos.
          </p>
          <a
            href="/#services"
            className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-all shadow-lg whitespace-nowrap cursor-pointer"
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
                <span className="text-cyan-500">Impulsione</span> Social
              </span>
            </a>
            <div className="flex items-center gap-6">
              <a href="/" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Início
              </a>
              <a href="/#services" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Serviços
              </a>
              <a href="/#faq" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                FAQ
              </a>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Impulsione Social - Todos os direitos reservados</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/impulsionesocialoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-cyan-100 transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-gray-600"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
