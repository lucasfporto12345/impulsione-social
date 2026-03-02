
import { useState, useEffect } from 'react';

export default function VisualizacoesTwitterPage() {
  const [activeTab, setActiveTab] = useState<'mundiais' | 'brasileiras'>('mundiais');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBuyClick = (checkoutUrl: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = new URLSearchParams();
    
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
      const value = urlParams.get(param);
      if (value) utmParams.append(param, value);
    });
    
    const finalUrl = utmParams.toString() 
      ? `${checkoutUrl}?${utmParams.toString()}`
      : checkoutUrl;
    
    window.open(finalUrl, '_blank');
  };

  const packages = [
    {
      quantity: '500',
      price: 'R$9,90',
      checkoutUrl: 'https://pay.impulsionesocial.com/imp-twitter-500-visualizacoes-no-twitter',
      features: ['Não precisa de senha', '30 dias de reposição', 'Entrega rápida', 'E-book Twitter Prime']
    },
    {
      quantity: '1.000',
      price: 'R$14,90',
      checkoutUrl: 'https://pay.impulsionesocial.com/imp-twitter-1000-visualizacoes-no-twitter',
      features: ['Não precisa de senha', '30 dias de reposição', 'Entrega rápida', 'E-book Twitter Prime']
    },
    {
      quantity: '2.000',
      price: 'R$27,90',
      checkoutUrl: 'https://pay.impulsionesocial.com/imp-twitter-2000-visualizacoes-no-twitter',
      features: ['Não precisa de senha', '30 dias de reposição', 'Entrega rápida', 'E-book Twitter Prime']
    },
    {
      quantity: '3.000',
      price: 'R$39,90',
      checkoutUrl: 'https://pay.impulsionesocial.com/imp-twitter-3000-visualizacoes-no-twitter',
      features: ['Não precisa de senha', '30 dias de reposição', 'Entrega rápida', 'E-book Twitter Prime']
    },
    {
      quantity: '5.000',
      price: 'R$59,90',
      checkoutUrl: 'https://pay.impulsionesocial.com/imp-twitter-5000-visualizacoes-no-twitter',
      features: ['Não precisa de senha', '30 dias de reposição', 'Entrega rápida', 'E-book Twitter Prime']
    },
    {
      quantity: '10.000',
      price: 'R$99,90',
      checkoutUrl: 'https://pay.impulsionesocial.com/imp-twitter-10000-visualizacoes-no-twitter',
      features: ['Não precisa de senha', '30 dias de reposição', 'Entrega rápida', 'E-book Twitter Prime']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
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
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visualizações no Twitter</h1>
        </div>
      </section>

      {/* Packages Section */}
      <section id="compra" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-sky-100 hover:border-sky-400"
              >
                <div className="text-center mb-6">
                  <h3 className="text-5xl font-bold text-sky-600 mb-2">{pkg.quantity}</h3>
                  <p className="text-xl font-semibold text-gray-700 mb-4">VISUALIZAÇÕES</p>
                  <p className="text-4xl font-bold text-sky-600">{pkg.price}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <i className="ri-check-line text-2xl text-green-500 mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBuyClick(pkg.checkoutUrl)}
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                >
                  Comprar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Como comprar Visualizações para Twitter</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Nosso processo é muito básico e fácil, criamos o site de uma forma simples e intuitiva para todos. <strong>Com 3 cliques simples</strong> você pode comprar o pacote de visualizações que quiser.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 text-center border-2 border-sky-200">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shopping-cart-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Selecione seu pacote</h3>
              <p className="text-gray-600">A primeira coisa é selecionar um pacote, por exemplo, <strong>comprar 500 visualizações</strong></p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 text-center border-2 border-sky-200">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Digite seu nome de usuário</h3>
              <p className="text-gray-600">Insira o link do seu perfil ou nome de usuário.</p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 text-center border-2 border-sky-200">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-secure-payment-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Efetuar pagamento</h3>
              <p className="text-gray-600">Efetue o pagamento do seu pedido usando um dos métodos de pagamento seguros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Por que comprar visualizações no Twitter?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                No mundo competitivo das mídias sociais, o Twitter se tornou uma plataforma essencial para indivíduos, empresas e marcas que buscam se destacar e aumentar sua presença digital. A decisão de comprar <strong>visualizações</strong> do Twitter pode ser um passo estratégico para impulsionar sua visibilidade e alcance nesta rede social.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Por que é importante ter visualizações no Twitter?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Na era digital de hoje, a contagem de <strong>visualizações</strong> se tornou um indicador crucial de credibilidade e sucesso. Uma conta com uma base sólida de <strong>visualizações</strong> cria maior confiança e naturalmente atrai mais atenção. Para empresas e criadores de conteúdo, isso se traduz em melhores oportunidades de negócios e colaborações.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                O Twitter não é apenas mais uma plataforma de mídia social; é uma ferramenta de marketing poderosa que pode impulsionar significativamente sua presença online. Com mais de 1 bilhão de usuários ativos, a plataforma oferece alcance inigualável para se conectar com seu público-alvo.
              </p>

              <button
                onClick={() => document.getElementById('compra')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                Comprar agora
              </button>
            </div>

            <div className="relative w-full h-[480px]">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20social%20media%20marketing%20concept%20illustration%20with%20Twitter%20bird%20logo%20theme%20in%20sky%20blue%20colors%20showing%20growth%20charts%20analytics%20dashboard%20engagement%20metrics%20notifications%20and%20digital%20connections%20on%20a%20clean%20light%20gradient%20background%20professional%20flat%20design%20style&width=600&height=480&seq=tw-viz-why-1&orientation=landscape"
                alt="Por que comprar visualizações no Twitter"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why We're the Best Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Porque somos os melhores em comprar visualizações</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Qualidade é o mais importante, por isso sermos líderes em qualidade é nossa meta diária.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 p-6 bg-sky-50 rounded-xl">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-eye-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Melhore o alcance do seu público</h3>
                <p className="text-gray-600">Aumente seu conteúdo e torne-o viral para alcançar o maior número possível de usuários.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-sky-50 rounded-xl">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-star-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Torne-se um Influenciador</h3>
                <p className="text-gray-600">Comprar visualizações fará com que suas próximas postagens tenham mais interação e alcance.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-sky-50 rounded-xl">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-money-dollar-circle-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Economize dinheiro com visualizações baratas</h3>
                <p className="text-gray-600">Não se confunda, oferecer visualizações baratas não é sinônimo de qualidade, trabalhamos com o melhor sistema para entregar.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-sky-50 rounded-xl">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Construir segurança</h3>
                <p className="text-gray-600">Você tem uma marca? Ao comprar visualizações você fará com que seu cliente em potencial tenha mais confiança em seu produto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Cresça nas Redes com a N°1 do Brasil</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lembre-se de que também oferecemos outros serviços e que você pode <strong>comprar seguidores no Twitter e curtidas em minutos.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b-4 border-sky-500 pb-2">Pode ter um impacto negativo sobre mim?</h3>
              <p className="text-gray-600 mb-4">
                Não, quando você faz uma compra com a Impulsione Social sua conta não corre nenhum perigo, e isso é legal. Não violamos nenhuma regra do Twitter ao realizar esse processo, por isso é 100% seguro.
              </p>
              <p className="text-gray-600">
                Milhares de grandes influenciadores do Twitter usam esses métodos. Se houvesse algum problema com isso, eles não ousariam expor suas contas a eles.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b-4 border-sky-500 pb-2">Visualizações com entrega instantânea</h3>
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
            <button
              onClick={() => document.getElementById('compra')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              Comprar agora
            </button>
          </div>
        </div>
      </section>

      {/* 4 Reasons Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                <span className="text-sky-600">4 razões para comprar visualizações</span> na Impulsione Social
              </h2>
              <p className="text-gray-600 mb-8">
                Como uma equipe em crescimento nas redes e após anos de estudo, aprendemos esses aspectos para comprar visualizações no Twitter:
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-flashlight-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Entrega Rápida</h3>
                    <p className="text-gray-600">Visualizações em minutos após a compra.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-shield-check-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">100% Seguro</h3>
                    <p className="text-gray-600">Sem senha, sem riscos, com 30 dias de garantia.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-user-heart-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Resultados Reais</h3>
                    <p className="text-gray-600">Perfis reais para um crescimento que você vê.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-customer-service-2-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Suporte de Verdade</h3>
                    <p className="text-gray-600">Time 24/7 via WhatsApp para te ajudar sempre.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[480px]">
              <img 
                src="https://readdy.ai/api/search-image?query=Digital%20marketing%20success%20concept%20with%20Twitter%20social%20media%20theme%20showing%20smartphone%20with%20rising%20view%20count%20statistics%20bar%20graphs%20trending%20upward%20engagement%20icons%20hearts%20retweets%20eye%20symbols%20floating%20around%20in%20sky%20blue%20and%20white%20color%20palette%20modern%20clean%20illustration%20style&width=600&height=480&seq=tw-viz-reasons-1&orientation=landscape"
                alt="4 razões para comprar visualizações"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Avaliações de clientes</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Na Impulsione Social nos importamos com sua opinião, por isso disponibilizamos uma seção onde você pode nos deixar sua avaliação:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Serviço incrível!', rating: 5, text: 'Recebi minhas visualizações super rápido e todas são reais. Recomendo muito!' },
              { name: 'Top demais!', rating: 5, text: 'Meu perfil bombou depois de usar a Impulsione Social. Atendimento excelente!' },
              { name: 'Muito bom!', rating: 4, text: 'As visualizações chegaram certinho, só poderia ter mais opções de pacotes menores.' },
              { name: 'Resultados incríveis!', rating: 5, text: 'Aumentei minha credibilidade no Twitter e agora tenho muito mais engajamento.' },
              { name: 'Entrega super rápida!', rating: 5, text: 'Comprei e em poucos minutos já comecei a ver as visualizações chegando. Muito satisfeito!' },
              { name: 'Melhor site!', rating: 5, text: 'Já testei vários serviços, mas a Impulsione Social foi a única que entregou tudo certinho.' }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`${i < review.rating ? 'ri-star-fill text-yellow-400' : 'ri-star-line text-gray-300'} text-xl`}
                    ></i>
                  ))}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{review.name}</h3>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <button
              onClick={() => document.getElementById('compra')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl mb-8 whitespace-nowrap cursor-pointer"
            >
              Comprar agora
            </button>
            <h2 className="text-4xl font-bold text-gray-800">Perguntas Frequentes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                q: 'Em quanto tempo as visualizações chegam?',
                a: 'Você receberá todas visualizações do seu pacote em até 24 horas. Solicitamos esse prazo para garantir que todas as suas visualizações serão entregues, porém normalmente o recebimento é de 1 – 4 horas.'
              },
              {
                q: 'É necessário informar minha senha?',
                a: 'Não! Absolutamente não é necessário informar sua senha ou e-mail do seu perfil, somente o @ do usuário.'
              },
              {
                q: 'É seguro comprar visualizações no Twitter?',
                a: 'Sim, somos um site totalmente seguro. Nunca pedimos informações sensíveis e confidenciais como senha e e-mail da conta além de nossa plataforma ser protegida por um certificado de segurança SSL.'
              },
              {
                q: 'É comum comprar visualizações?',
                a: 'É muito comum, milhares de pessoas compram visualizações quando estão principalmente no começo, porque comprando você alcançará grande relevância em pouco tempo.'
              },
              {
                q: 'Quantas visualizações posso comprar?',
                a: 'Você pode comprar quantas visualizações desejar, a quantidade depende exclusivamente de você, das suas condições e objetivos que deseja conquistar.'
              },
              {
                q: 'É proibido comprar visualizações?',
                a: 'Não, tanto é que inúmeras personalidades como cantores, jogadores de futebol e artistas compram visualizações regularmente.'
              },
              {
                q: 'O Twitter impede marcas de comprar?',
                a: 'O Twitter não remove visualizações ou impede marcas por receber muitas visualizações em pouco tempo.'
              },
              {
                q: 'Posso comprar visualizações de outro lugar?',
                a: 'Não recomendamos, quando você compra visualizações em outro site a garantia de nossos serviços é perdida e não será possível repor as visualizações posteriormente.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-sky-50 rounded-xl p-6 border-2 border-sky-100">
                <h3 className="font-bold text-lg mb-3 text-gray-800">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-sky-600 to-blue-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Impulsione Social</h3>
          <p className="text-sky-100 mb-6">A melhor plataforma para crescer nas redes sociais</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.instagram.com/impulsionesocialoficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <i className="ri-instagram-line text-xl"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <i className="ri-facebook-line text-xl"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <i className="ri-twitter-line text-xl"></i>
            </a>
          </div>
          <p className="text-sky-100 text-sm">
            © 2025 Impulsione Social. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
