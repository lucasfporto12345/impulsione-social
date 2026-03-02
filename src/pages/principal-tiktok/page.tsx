import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUTMTracking } from '../../hooks/useUTMTracking';

export default function PrincipalTikTok() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [utmParams, setUtmParams] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Adiciona UTM tracking automaticamente
  useUTMTracking();

  const services = [
    {
      icon: 'ri-user-add-line',
      title: 'SEGUIDORES',
      description: 'Exploda seu perfil com milhares de seguidores',
      link: '/seguidores-tiktok',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: 'ri-heart-line',
      title: 'CURTIDAS',
      description: 'Bomba seus vídeos com curtidas massivas',
      link: '/curtidas-tiktok',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      icon: 'ri-eye-line',
      title: 'VISUALIZAÇÕES',
      description: 'Viraliza com milhões de visualizações',
      link: '/visualizacoes-tiktok',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '100K+', label: 'Clientes Satisfeitos' },
    { number: '50M+', label: 'Seguidores Entregues' },
    { number: '24/7', label: 'Suporte Disponível' },
    { number: '99%', label: 'Taxa de Sucesso' }
  ];

  const benefits = [
    {
      icon: 'ri-rocket-line',
      title: 'CRESCIMENTO EXPLOSIVO',
      description: 'Seu perfil vai decolar em questão de horas. Sem enrolação, sem espera.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'SEGURANÇA TOTAL',
      description: 'Sem senha, sem risco. Sua conta está 100% protegida com nossa garantia.'
    },
    {
      icon: 'ri-flashlight-line',
      title: 'ENTREGA INSTANTÂNEA',
      description: 'Comprou? Recebe na hora. Não perde tempo, não perde oportunidade.'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'PREÇO IMBATÍVEL',
      description: 'O melhor custo-benefício do Brasil. Qualidade premium sem pesar no bolso.'
    },
    {
      icon: 'ri-trophy-line',
      title: 'VIRE REFERÊNCIA',
      description: 'Seja o perfil que todo mundo segue. Domine seu nicho e vire autoridade.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'SUPORTE NINJA',
      description: 'Time especializado 24/7 no WhatsApp. Qualquer dúvida, a gente resolve.'
    }
  ];

  const proofs = [
    {
      name: 'Explodi meu perfil! 🚀',
      text: 'Comprei 5k de seguidores e em 2 dias meu vídeo viralizou com 2M de views. Melhor investimento que fiz!',
      stars: 5
    },
    {
      name: 'Virei influencer! 💎',
      text: 'Antes tinha 200 seguidores, hoje tenho 50k. Marcas me procurando todo dia. Mudou minha vida!',
      stars: 5
    },
    {
      name: 'Resultado absurdo! ⚡',
      text: 'Meus vídeos não passavam de 100 views. Comprei visualizações e agora tudo que posto bomba!',
      stars: 5
    },
    {
      name: 'Melhor site! 🔥',
      text: 'Já testei vários, mas só aqui entrega rápido e não cai. Compro toda semana!',
      stars: 5
    },
    {
      name: 'Crescimento insano! 💪',
      text: 'Em 1 mês saí de 0 para 30k seguidores. Agora vivo de TikTok. Obrigado!',
      stars: 5
    },
    {
      name: 'Recomendo demais! ⭐',
      text: 'Atendimento top, entrega rápida, preço justo. Não tem como não recomendar!',
      stars: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* WhatsApp Floating Button */}
      <a
        href="https://ebook.impulsionesocial.com/redirect-suporte"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer hover:scale-110"
      >
        <i className="ri-whatsapp-line text-3xl"></i>
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-xl flex items-center justify-center">
                <i className="ri-tiktok-fill text-white text-2xl"></i>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                IMPULSIONE SOCIAL
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#servicos" className="text-gray-300 hover:text-white font-medium transition-colors cursor-pointer">
                Serviços
              </a>
              <a href="#beneficios" className="text-gray-300 hover:text-white font-medium transition-colors cursor-pointer">
                Benefícios
              </a>
              <a href="#provas" className="text-gray-300 hover:text-white font-medium transition-colors cursor-pointer">
                Provas
              </a>
              <a
                href="#servicos"
                className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold hover:from-cyan-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-cyan-500/50 whitespace-nowrap cursor-pointer"
              >
                COMEÇAR AGORA
              </a>
            </div>

            <button
              className="md:hidden p-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-3xl text-white`}></i>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-cyan-500/20 py-4 px-4">
            <div className="flex flex-col gap-4">
              <a href="#servicos" className="text-gray-300 hover:text-white font-medium cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
                Serviços
              </a>
              <a href="#beneficios" className="text-gray-300 hover:text-white font-medium cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
                Benefícios
              </a>
              <a href="#provas" className="text-gray-300 hover:text-white font-medium cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
                Provas
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-pink-500/10 to-purple-500/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/30 px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
              <i className="ri-fire-fill text-red-500 text-xl animate-pulse"></i>
              <span className="text-white font-bold">+100.000 CLIENTES JÁ BOMBARAM SEUS PERFIS</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                DOMINE O TIKTOK
              </span>
              <br />
              <span className="text-white">E VIRE REFERÊNCIA</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
              Seguidores, Curtidas e Visualizações que fazem seu perfil
            </p>
            <p className="text-3xl md:text-4xl font-black mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                EXPLODIR EM HORAS
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="#servicos"
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-10 py-5 rounded-full font-black text-lg hover:from-cyan-600 hover:to-pink-600 transition-all shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-rocket-line mr-2"></i>
                COMEÇAR AGORA
              </a>
              <a
                href="https://seguidoresprimer.com/redirecionador-whatsapp-prime-suporte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/20 transition-all whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-line mr-2"></i>
                FALAR NO WHATSAPP
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-400">
              <i className="ri-shield-check-fill text-green-500 text-xl"></i>
              <span className="font-medium">Compra 100% Segura • Entrega Instantânea • Garantia de 30 Dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border-y border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                ESCOLHA SEU PODER
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Seguidores, curtidas ou visualizações? Por que não os três? Turbine seu TikTok do jeito que você quiser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${service.icon} text-4xl text-white`}></i>
                  </div>

                  <h3 className="text-3xl font-black mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 text-lg">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-cyan-400 font-bold">
                    <span>VER PACOTES</span>
                    <i className="ri-arrow-right-line group-hover:translate-x-2 transition-transform"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-white">POR QUE SOMOS OS</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                MELHORES DO BRASIL?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Não é só sobre números. É sobre transformar seu perfil em uma máquina de fazer sucesso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${benefit.icon} text-3xl text-white`}></i>
                </div>

                <h3 className="text-xl font-black text-white mb-3">
                  {benefit.title}
                </h3>

                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="provas" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                QUEM USA, APROVA
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mais de 100 mil pessoas já transformaram seus perfis. Veja o que elas dizem:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proofs.map((proof, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(proof.stars)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {proof.name}
                </h3>

                <p className="text-gray-400">
                  {proof.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            PRONTO PARA DOMINAR O TIKTOK?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Não perde mais tempo. Enquanto você espera, seus concorrentes estão crescendo. Comece agora!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#servicos"
              className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full font-black text-lg hover:bg-gray-900 transition-all shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-rocket-line mr-2"></i>
              COMEÇAR AGORA
            </a>
            <a
              href="https://seguidoresprimer.com/redirecionador-whatsapp-prime-suporte"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/20 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/30 transition-all whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              FALAR NO WHATSAPP
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
            <i className="ri-shield-check-fill text-2xl"></i>
            <span className="font-medium">Garantia de 30 Dias • Suporte 24/7 • Entrega Instantânea</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <i className="ri-tiktok-fill text-white text-xl"></i>
                </div>
                <span className="text-xl font-black text-white">IMPULSIONE SOCIAL</span>
              </div>
              <p className="text-gray-400">
                A melhor plataforma para crescer no TikTok com segurança e qualidade.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/seguidores-tiktok" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Seguidores TikTok
                  </Link>
                </li>
                <li>
                  <Link to="/curtidas-tiktok" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Curtidas TikTok
                  </Link>
                </li>
                <li>
                  <Link to="/visualizacoes-tiktok" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Visualizações TikTok
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <i className="ri-whatsapp-line text-green-500"></i>
                  WhatsApp 24/7
                </p>
                <p className="flex items-center gap-2">
                  <i className="ri-mail-line"></i>
                  Suporte via Email
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Impulsione Social. Todos os direitos reservados.
            </p>
            <a
              href="https://readdy.ai/?origin=logo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
