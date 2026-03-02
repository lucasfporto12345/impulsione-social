import { useState, useEffect } from 'react';

const packages = [
  {
    quantity: '500',
    price: 'R$10,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book TikTok Prime'],
    popular: false,
    checkoutLink: 'https://pay.impulsionesocial.com/imp-tiktok-500-visualizacoes-tiktok'
  },
  {
    quantity: '1.000',
    price: 'R$14,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book TikTok Prime'],
    popular: true,
    checkoutLink: 'https://pay.impulsionesocial.com/imp-tiktok-1000-visualizacoes-tiktok'
  },
  {
    quantity: '2.000',
    price: 'R$29,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book TikTok Prime'],
    popular: false,
    checkoutLink: 'https://pay.impulsionesocial.com/imp-tiktok-2000-visualizacoes-tiktok'
  },
  {
    quantity: '3.000',
    price: 'R$44,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book TikTok Prime'],
    popular: false,
    checkoutLink: 'https://pay.impulsionesocial.com/imp-tiktok-3000-visualizacoes-tiktok'
  },
  {
    quantity: '5.000',
    price: 'R$74,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book TikTok Prime'],
    popular: false,
    checkoutLink: 'https://pay.impulsionesocial.com/imp-tiktok-5000-visualizacoes-tiktok'
  },
  {
    quantity: '10.000',
    price: 'R$149,90',
    features: ['Não precisa de senha', '30 Dias de reposição', 'Entrega rápida', 'E-book TikTok Prime'],
    popular: false,
    bestValue: true,
    checkoutLink: 'https://pay.impulsionesocial.com/imp-tiktok-10000-visualizacoes-tiktok'
  }
];

const steps = [
  {
    icon: 'ri-shopping-bag-line',
    title: 'Selecione seu pacote',
    description: 'A primeira coisa é selecionar um pacote, por exemplo, comprar 1.000 visualizações'
  },
  {
    icon: 'ri-link',
    title: 'Digite o link da publicação',
    description: 'Insira o link da publicação que deseja receber as visualizações.'
  },
  {
    icon: 'ri-secure-payment-line',
    title: 'Efetuar pagamento',
    description: 'Efetue o pagamento do seu pedido usando um dos métodos de pagamento seguros.'
  }
];

const benefits = [
  {
    icon: 'ri-eye-line',
    color: 'from-cyan-500 to-pink-500',
    title: 'Melhore o alcance do seu público',
    description: 'Aumente seu conteúdo e torne-o viral para alcançar o maior número possível de usuários.'
  },
  {
    icon: 'ri-star-line',
    color: 'from-yellow-500 to-orange-500',
    title: 'Torne-se um Influenciador',
    description: 'Comprar visualizações fará que suas próximas postagens e histórias tenham mais interação e alcance.'
  },
  {
    icon: 'ri-money-dollar-circle-line',
    color: 'from-green-500 to-emerald-500',
    title: 'Economize dinheiro com visualizações baratas',
    description: 'Não se confunda, oferecer visualizações baratas não é sinônimo de baixa qualidade, trabalhamos com o melhor sistema para entregar.'
  },
  {
    icon: 'ri-shield-check-line',
    color: 'from-cyan-600 to-pink-600',
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
    description: 'Perfis reais para um crescimento que você vê.'
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Suporte de Verdade',
    description: 'Time 24/7 via WhatsApp para te ajudar sempre.'
  }
];

const testimonials = [
  { name: 'Serviço incrível!', rating: 5, text: 'Recebi minhas visualizações super rápido e todas são de qualidade. Recomendo muito!' },
  { name: 'Top demais!', rating: 5, text: 'Meu vídeo bombou depois de usar a Impulsione Social. Atendimento excelente!' },
  { name: 'Muito bom!', rating: 4, text: 'As visualizações chegaram certinho, só poderia ter mais opções de pacotes menores.' },
  { name: 'Resultados incríveis!', rating: 5, text: 'Aumentei minha credibilidade no TikTok e agora tenho muito mais engajamento.' },
  { name: 'Entrega super rápida!', rating: 5, text: 'Comprei e em poucos minutos já comecei a ver as visualizações chegando. Muito satisfeito!' },
  { name: 'Melhor site de visualizações!', rating: 5, text: 'Já testei vários serviços, mas a Impulsione Social foi a única que entregou tudo certinho e sem queda.' },
  { name: 'Ótimo serviço!', rating: 4, text: 'Visualizações chegaram conforme prometido. Só poderiam ter mais opções de pagamento.' },
  { name: 'Perfeito para crescer no TikTok!', rating: 5, text: 'Depois de comprar visualizações aqui, meus vídeos tiveram muito mais alcance e credibilidade.' },
  { name: 'Empresa confiável!', rating: 5, text: 'Atendimento rápido e suporte sempre pronto para ajudar. Vou comprar mais vezes!' }
];

const faqs = [
  { question: 'Em quanto tempo as visualizações chegam?', answer: 'Você receberá todas as visualizações do seu pacote em até 24 horas. Solicitamos esse prazo para garantir que todas as suas visualizações serão entregues, porém normalmente o recebimento das visualizações é de 1 – 4 horas no TikTok.' },
  { question: 'É necessário informar minha senha?', answer: 'Não! Absolutamente não é necessário informar sua senha ou e‑mail do seu perfil, somente o link da publicação.' },
  { question: 'É seguro comprar visualizações no TikTok?', answer: 'Sim, somos um site totalmente seguro. Nunca pedimos informações sensíveis e confidenciais como senha e e‑mail da conta além de nossa plataforma ser protegida por um certificado de segurança SSL.' },
  { question: 'É comum comprar visualizações?', answer: 'É muito comum, milhares de pessoas compram visualizações quando estão principalmente no começo, porque comprando você alcançará grande relevância em pouco tempo. É por isso que muitos perfis pessoais e comerciais utilizam a estratégia de comprar visualizações para crescer rapidamente.' },
  { question: 'Quantas visualizações no TikTok posso comprar?', answer: 'Você pode comprar quantas visualizações desejar, a quantidade depende exclusivamente de você, das suas condições e objetivos que deseja conquistar.' },
  { question: 'É proibido comprar visualizações?', answer: 'Não, tanto é que inúmeras personalidades como cantores, jogadores de futebol e artistas compram visualizações regularmente.' },
  { question: 'O TikTok impede marcas de comprar?', answer: 'O TikTok não remove visualizações ou impede marcas por receber muitas visualizações em pouco tempo.' },
  { question: 'Posso comprar visualizações de outro lugar?', answer: 'Não recomendamos, quando você compra visualizações em outro site a garantia de nossos serviços é perdida e não será possível repor as visualizações que desaparecerem posteriormente.' },
  { question: 'Tem possibilidade da minha conta ser bloqueada?', answer: 'Não! Você não corre nenhum risco de ter a conta bloqueada apenas por estar recebendo novas visualizações da compra.' },
  { question: 'Posso mudar o link da publicação após comprar?', answer: 'Não é recomendado. Se você mudar o link da publicação após a compra você perde a garantia de reposição, e se houver perda de visualizações não conseguiremos enviar novas.' },
  { question: 'Qual o melhor site para comprar visualizações?', answer: 'A Impulsione Social se destaca como o melhor site para comprar visualizações no TikTok, com um serviço de ótima qualidade, preços baixos e um suporte especializado, é considerado o melhor site para se comprar visualizações.' },
  { question: 'Quais são as opções de pagamento?', answer: 'Temos diversas opções de pagamento, você pode pagar por pix, cartão em até 12x e depósito bancário.' }
];

export default function VisualizacoesTiktokPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [utmParams, setUtmParams] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    try {
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
    } catch (error) {
      console.error('Failed to parse UTM parameters', error);
    }
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  const handleBuyClick = (checkoutLink: string) => {
    const finalUrl = `${checkoutLink}${utmParams}`;
    try {
      window.location.assign(finalUrl);
    } catch (error) {
      console.error('Navigation to checkout failed', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <a
        href="https://ebook.impulsionesocial.com/redirect-suporte"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center">
                <span className="text-2xl font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">Impulsione</span>{' '}Social
                </span>
              </a>
              <div className="hidden md:flex items-center gap-6">
                <a href="/#services" className="text-gray-600 hover:text-gray-900">Serviços</a>
                <a href="/#how-it-works" className="text-gray-600 hover:text-gray-900">Como Funciona</a>
                <a href="/#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
                <a href="https://seguidoresprimer.com/redirecionador-whatsapp-prime-suporte" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Contato</a>
              </div>
            </div>
            <div className="hidden md:block">
              <a href="#pacotes" className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:from-cyan-600 hover:to-pink-600 transition-all whitespace-nowrap">Ver Pacotes</a>
            </div>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(prev => !prev)}>
              <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
            <div className="flex flex-col gap-4">
              <a href="/#services" className="text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
              <a href="/#how-it-works" className="text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Como Funciona</a>
              <a href="/#faq" className="text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="https://seguidoresprimer.com/redirecionador-whatsapp-prime-suporte" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Contato</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-4 bg-gradient-to-br from-cyan-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-6">
          <div className="inline-flex items-center gap-2 bg-white border border-cyan-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <i className="ri-shield-check-line text-cyan-500"></i>
            <span className="text-gray-700">Compra Segura e Entrega Rápida</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Visualizações TikTok</h1>
        </div>
      </section>

      {/* Packages Section */}
      <section id="pacotes" className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Pacotes de Visualizações</h2>
            <p className="text-gray-600">Escolha o melhor pacote para impulsionar seus vídeos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
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
                    <span className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">MAIS POPULAR</span>
                  </div>
                )}
                {(pkg as any).bestValue && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg whitespace-nowrap">💰 MELHOR CUSTO</span>
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
                  onClick={() => handleBuyClick(pkg.checkoutLink)}
                  className={`block w-full text-center py-3 rounded-xl font-medium transition-all whitespace-nowrap cursor-pointer ${
                    pkg.popular || (pkg as any).bestValue
                      ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white hover:from-cyan-600 hover:to-pink-600 shadow-lg'
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como comprar visualizações para TikTok</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nosso processo é muito básico e fácil, criamos o site de uma forma simples e intuitiva para todos.{' '}
              <strong>Com 3 cliques simples</strong> você pode comprar o pacote de visualizações que quiser.
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Por que comprar visualizações no TikTok?</h2>
              <p className="text-gray-600 mb-6">
                No mundo competitivo das mídias sociais, o TikTok se tornou uma plataforma essencial para indivíduos, empresas e marcas que buscam se destacar e aumentar sua presença digital. A decisão de comprar <strong>visualizações</strong> do TikTok pode ser um passo estratégico para impulsionar sua visibilidade e alcance nesta rede social.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Por que é importante ter visualizações no TikTok?</h3>
              <p className="text-gray-600 mb-6">
                Na era digital de hoje, a contagem de <strong>visualizações</strong> se tornou um indicador crucial de credibilidade e sucesso. Uma publicação com uma base sólida de <strong>visualizações</strong> cria maior confiança e naturalmente atrai mais atenção. Para empresas e criadores de conteúdo, isso se traduz em melhores oportunidades de negócios e colaborações.
              </p>
              <p className="text-gray-600 mb-6">
                O TikTok não é apenas mais uma plataforma de mídia social; é uma ferramenta de marketing poderosa que pode impulsionar significativamente sua presença online. Com mais de 1 bilhão de usuários ativos, a plataforma oferece alcance inigualável para se conectar com seu público-alvo.
              </p>
              <a
                href="#pacotes"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:from-cyan-600 hover:to-pink-600 transition-all whitespace-nowrap"
              >
                Comprar agora
              </a>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20smartphone%20displaying%20TikTok%20app%20interface%20with%20video%20view%20counter%20increasing%20rapidly%20and%20play%20button%20icons%2C%20social%20media%20video%20views%20engagement%20concept%2C%20clean%20minimalist%20design%20with%20cyan%20and%20pink%20gradient%20colors%2C%20professional%20digital%20marketing%20photography%20showing%20analytics%20dashboard%20with%20rising%20view%20metrics%20and%20eye%20icons&width=600&height=800&seq=tiktok-views-growth-2025-v2&orientation=portrait"
                  alt="Visualizações TikTok crescimento"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
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
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Porque somos os melhores em comprar visualizações</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Qualidade é o mais importante, por isso sermos líderes em qualidade é nossa meta diária.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

          <div className="text-center">
            <div className="inline-flex items-center gap-8 bg-white rounded-2xl p-6 shadow-lg">
              <img
                src="https://readdy.ai/api/search-image?query=TikTok%20video%20views%20and%20engagement%20concept%20illustration%20with%20eye%20icons%20and%20play%20buttons%20and%20view%20counters%2C%20modern%20smartphone%20displaying%20social%20media%20viral%20video%20content%20metrics%2C%20professional%20digital%20marketing%20design%20with%20cyan%20and%20pink%20gradient%20colors%2C%20clean%20minimalist%20style%20showing%20growth%20success%20and%20video%20popularity&width=400&height=400&seq=tiktok-views-reasons-impulsione-2025-v2&orientation=squarish"
                alt="Por que Impulsione Social TikTok Visualizações"
                className="w-32 h-32 rounded-2xl object-cover"
                loading="lazy"
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">4 razões para comprar visualizações na Impulsione Social</h3>
                <p className="text-gray-600">
                  Como uma equipe em crescimento nas redes e após anos de estudo, aprendemos esses aspectos para comprar visualizações no TikTok
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cresça nas Redes com a N°1 do Brasil</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Lembre-se de que também oferecemos outros serviços e que você pode <strong>comprar seguidores no TikTok e curtidas em minutos.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pode ter um impacto negativo sobre mim?</h3>
              <div className="w-full h-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full mb-4"></div>
              <p className="text-gray-600 mb-4">
                Não, quando você faz uma compra com a Impulsione Social sua conta não corre nenhum perigo, e isso é legal. Não violamos nenhuma regra do TikTok ao realizar esse processo, por isso é 100% seguro.
              </p>
              <p className="text-gray-600">
                Milhares de grandes influenciadores do TikTok usam esses métodos. Se houvesse algum problema com isso, eles não ousariam expor suas contas a eles.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visualizações com entrega instantânea</h3>
              <div className="w-full h-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mb-4"></div>
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

          <div className="mt-12 text-center">
            <a
              href="#pacotes"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-cyan-600 hover:to-pink-600 transition-all shadow-lg whitespace-nowrap"
            >
              <i className="ri-shopping-cart-line"></i>
              Comprar agora
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Avaliações de clientes</h2>
            <p className="text-gray-600">Na Impulsione Social nos importamos com sua opinião, veja o que nossos clientes dizem</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`ri-star-${i < testimonial.rating ? 'fill' : 'line'} text-yellow-400`}></i>
                  ))}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#pacotes"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-cyan-600 hover:to-pink-600 transition-all shadow-lg whitespace-nowrap"
            >
              <i className="ri-shopping-cart-line"></i>
              Comprar agora
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  <i className={`ri-arrow-${openFaq === index ? 'up' : 'down'}-s-line text-xl text-gray-500`}></i>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600 border-t border-gray-100">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#pacotes"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-cyan-600 hover:to-pink-600 transition-all shadow-lg whitespace-nowrap"
            >
              <i className="ri-shopping-cart-line"></i>
              Comprar agora
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto para Bombar no TikTok?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de clientes satisfeitos e impulsione seus vídeos agora mesmo!
          </p>
          <a
            href="#pacotes"
            className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-all shadow-lg whitespace-nowrap"
          >
            <i className="ri-shopping-cart-line"></i>
            Comprar Visualizações Agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <a href="/" className="flex items-center mb-4 md:mb-0">
              <span className="text-2xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">Impulsione</span>{' '}Social
              </span>
            </a>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/impulsionesocialoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pink-100 transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-gray-600"></i>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Impulsione Social - Todos os direitos reservados</p>
            <div className="flex items-center gap-4">
              <a href="https://readdy.ai/?ref=logo" target="_blank" rel="nofollow noreferrer" className="text-gray-400 text-sm hover:text-gray-600">Web Design</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
