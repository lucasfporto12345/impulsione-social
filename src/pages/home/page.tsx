import { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useUTMTracking } from '../../hooks/useUTMTracking';

const socialPlatforms = [
  {
    name: 'Instagram',
    icon: 'https://app.midiahype.com/assets/imgs/medias/instagram.png',
    color: 'from-blue-500 to-blue-400',
    bgColor: 'bg-gradient-to-b from-blue-500 to-blue-400',
    services: [
      { name: 'Seguidores Instagram', price: 'R$22,90', discount: '54% OFF', icon: 'ri-user-add-line', link: '/seguidores-instagram' },
      { name: 'Curtidas Instagram', price: 'R$10,90', discount: '20% OFF', icon: 'ri-heart-fill', link: '/curtidas-instagram' },
      { name: 'Visualizações Instagram', price: 'R$10,90', discount: '37% OFF', icon: 'ri-eye-line', link: '/visualizacoes-instagram' }
    ]
  },
  {
    name: 'Tiktok',
    icon: 'https://app.midiahype.com/assets/imgs/medias/tiktok.png',
    color: 'from-gray-900 to-gray-800',
    bgColor: 'bg-gradient-to-b from-gray-900 to-gray-800',
    services: [
      { name: 'Seguidores Tiktok', price: 'R$19,90', discount: '54% OFF', icon: 'ri-user-add-line', link: '/seguidores-tiktok' },
      { name: 'Curtidas Tiktok', price: 'R$10,90', discount: '20% OFF', icon: 'ri-heart-fill', link: '/curtidas-tiktok' },
      { name: 'Visualizações Tiktok', price: 'R$10,90', discount: '37% OFF', icon: 'ri-eye-line', link: '/visualizacoes-tiktok' }
    ]
  },
  {
    name: 'Facebook',
    icon: 'https://app.midiahype.com/assets/imgs/medias/facebook.png',
    color: 'from-blue-600 to-blue-500',
    bgColor: 'bg-gradient-to-b from-blue-600 to-blue-500',
    services: [
      { name: 'Seguidores Facebook', price: 'R$19,90', discount: '54% OFF', icon: 'ri-user-add-line', link: '/seguidores-facebook' },
      { name: 'Curtidas Facebook', price: 'R$14,90', discount: '20% OFF', icon: 'ri-heart-fill', link: '/curtidas-facebook' },
      { name: 'Visualizações Facebook', price: 'R$19,90', discount: '37% OFF', icon: 'ri-eye-line', link: '/visualizacoes-facebook' }
    ]
  },
  {
    name: 'Youtube',
    icon: 'https://app.midiahype.com/assets/imgs/medias/youtube.png',
    color: 'from-red-600 to-red-500',
    bgColor: 'bg-gradient-to-b from-red-600 to-red-500',
    services: [
      { name: 'Inscritos Youtube', price: 'R$24,90', discount: '54% OFF', icon: 'ri-user-add-line', link: '/inscritos-youtube' },
      { name: 'Curtidas Youtube', price: 'R$14,90', discount: '20% OFF', icon: 'ri-heart-fill', link: '/curtidas-youtube' },
      { name: 'Visualizações Youtube', price: 'R$14,90', discount: '37% OFF', icon: 'ri-eye-line', link: '/visualizacoes-youtube' }
    ]
  },
  {
    name: 'Twitter',
    icon: 'https://app.midiahype.com/assets/imgs/medias/x.png',
    color: 'from-sky-500 to-sky-400',
    bgColor: 'bg-gradient-to-b from-sky-500 to-sky-400',
    services: [
      { name: 'Seguidores X', price: 'R$39,90', discount: '54% OFF', icon: 'ri-user-add-line', link: '/seguidores-twitter' },
      { name: 'Curtidas X', price: 'R$29,90', discount: '20% OFF', icon: 'ri-heart-fill', link: '/curtidas-twitter' },
      { name: 'Visualizações X', price: 'R$9,90', discount: '37% OFF', icon: 'ri-eye-line', link: '/visualizacoes-twitter' }
    ]
  },
  {
    name: 'Kwai',
    icon: 'https://app.midiahype.com/assets/imgs/medias/kwai.png',
    color: 'from-orange-500 to-orange-400',
    bgColor: 'bg-gradient-to-b from-orange-500 to-orange-400',
    services: [
      { name: 'Seguidores Kwai', price: 'R$19,90', discount: '54% OFF', icon: 'ri-user-add-line', link: '/seguidores-kwai' },
      { name: 'Curtidas Kwai', price: 'R$14,90', discount: '20% OFF', icon: 'ri-heart-fill', link: '/curtidas-kwai' },
      { name: 'Visualizações Kwai', price: 'R$14,90', discount: '37% OFF', icon: 'ri-eye-line', link: '/visualizacoes-kwai' }
    ]
  }
];

const steps = [
  {
    title: 'Escolha o serviço que precisa',
    description: 'Selecione a plataforma, em seguida escolha qual tipo de serviço você precisa.',
    image: 'https://app.midiahype.com/assets/imgs/info/service-select.png'
  },
  {
    title: 'Confirme e finalize seu pedido',
    description: 'Agora que você já escolheu o serviço, apenas confirme o pedido e o pagamento.',
    image: 'https://app.midiahype.com/assets/imgs/info/confirm-and-finish.png'
  },
  {
    title: 'Pronto! O serviço está iniciado',
    description: 'Acompanhe o andamento diretamente pelo seu perfil ou diretamente aqui no site.',
    image: 'https://app.midiahype.com/assets/imgs/info/start-service.png'
  }
];

const faqs = [
  {
    question: 'É seguro para minha conta?',
    answer: 'Sim, nossos serviços são 100% seguros. Utilizamos métodos aprovados pelas plataformas e nunca solicitamos sua senha. Trabalhamos apenas com engajamento orgânico e real.'
  },
  {
    question: 'Quanto tempo demora para receber?',
    answer: 'O início da entrega ocorre em até 24 horas após a confirmação do pagamento. O tempo total depende da quantidade contratada, mas geralmente é concluído em 3 a 7 dias.'
  },
  {
    question: 'Tem garantia?',
    answer: 'Sim, oferecemos garantia de reposição por 30 dias. Se houver qualquer queda no período, repomos automaticamente sem custo adicional.'
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'Aceitamos PIX (aprovação instantânea), cartão de crédito e boleto bancário. Após a confirmação do pagamento, seu pedido entra automaticamente em processamento.'
  },
  {
    question: 'Vocês atendem todas as redes sociais?',
    answer: 'Sim, atendemos Instagram, TikTok, Facebook, YouTube, Twitter (X) e Kwai. Oferecemos serviços de seguidores, curtidas, visualizações e comentários para todas essas plataformas.'
  },
  {
    question: 'Posso comprar curtidas e visualizações também?',
    answer: 'Sim! Além de seguidores, oferecemos curtidas, visualizações, comentários e saves. Você pode escolher o serviço específico que precisa para cada plataforma.'
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSocialPopup, setShowSocialPopup] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [selectedSocial, setSelectedSocial] = useState<'instagram' | 'tiktok' | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', profile: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { addUTMToUrl } = useUTMTracking();

  // Adiciona UTM tracking automaticamente
  useUTMTracking();

  // Preload de imagens críticas
  useEffect(() => {
    const criticalImages = [
      'https://app.midiahype.com/assets/imgs/medias/instagram.png',
      'https://app.midiahype.com/assets/imgs/medias/tiktok.png',
      'https://app.midiahype.com/assets/imgs/medias/facebook.png',
      'https://app.midiahype.com/assets/imgs/medias/youtube.png',
      'https://app.midiahype.com/assets/imgs/medias/x.png',
      'https://app.midiahype.com/assets/imgs/medias/kwai.png'
    ];

    let loadedCount = 0;
    criticalImages.forEach(src => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === criticalImages.length) {
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleTestClick = () => {
    setShowSocialPopup(true);
  };

  const handleSocialSelect = (social: 'instagram' | 'tiktok') => {
    setSelectedSocial(social);
    setShowSocialPopup(false);
    setShowFormPopup(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.profile || !selectedSocial) return;

    setIsSubmitting(true);

    try {
      // Enviar para Readdy Form (backup)
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('profile', formData.profile);
      formDataToSend.append('social', selectedSocial);
      formDataToSend.append('package', `Teste ${selectedSocial} - 100 Seguidores - R$5,90`);

      await fetch('https://readdy.ai/api/form/d5fo2fbgm8mddqjeln4g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString()
      });

      // Enviar para Mailchimp
      const mailchimpResponse = await fetch(`${import.meta.env.VITE_PUBLIC_SUPABASE_URL}/functions/v1/mailchimp-subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          instagram: formData.profile,
          package: `Teste ${selectedSocial} - 100 Seguidores - R$5,90`
        })
      });

      console.log('Mailchimp response:', await mailchimpResponse.json());

      // Redirecionar para checkout
      const redirectUrls = {
        instagram: 'https://seguidores-prime.pay.yampi.com.br/r/4ITAYC5YQY',
        tiktok: 'https://seguidores-prime.pay.yampi.com.br/r/G9NR5X7TOK'
      };

      const baseUrl = redirectUrls[selectedSocial];
      const urlWithUTM = addUTMToUrl(baseUrl);
      
      const separator = urlWithUTM.includes('?') ? '&' : '?';
      const finalUrl = `${urlWithUTM}${separator}name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&utm_name=${encodeURIComponent(formData.name)}&utm_email=${encodeURIComponent(formData.email)}`;
      
      window.location.href = finalUrl;
    } catch (error) {
      console.error('Erro ao processar formulário:', error);
      setIsSubmitting(false);
    }
  };

  const closePopups = () => {
    setShowSocialPopup(false);
    setShowFormPopup(false);
    setShowWhatsAppPopup(false);
    setSelectedSocial(null);
    setFormData({ name: '', email: '', phone: '', profile: '' });
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowWhatsAppPopup(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer will-change-transform"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
      </button>

      {/* WhatsApp Options Popup */}
      {showWhatsAppPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closePopups}>
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closePopups}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-whatsapp-line text-4xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Como podemos ajudar?</h3>
              <p className="text-gray-600">Escolha a opção que melhor se encaixa</p>
            </div>

            <div className="space-y-3">
              <a
                href="https://whatsapp.conectaprime.com/r/compraim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-question-line text-2xl text-blue-500"></i>
                </div>
                <div className="flex-1 text-left">
                  <div className="font-bold text-lg">Quero comprar mas tenho dúvidas</div>
                  <div className="text-sm text-white/80">Fale com nosso time de vendas</div>
                </div>
                <i className="ri-arrow-right-line text-2xl group-hover:translate-x-1 transition-transform"></i>
              </a>

              <a
                href="https://whatsapp.conectaprime.com/api/redirect/impulsione-suporte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-customer-service-2-line text-2xl text-green-500"></i>
                </div>
                <div className="flex-1 text-left">
                  <div className="font-bold text-lg">Já comprei e quero suporte</div>
                  <div className="text-sm text-white/80">Acesse nossa central de ajuda</div>
                </div>
                <i className="ri-arrow-right-line text-2xl group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                <i className="ri-time-line mr-1"></i>
                Atendimento disponível 24/7
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Social Selection Popup */}
      {showSocialPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closePopups}>
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closePopups}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Escolha a Rede Social</h3>
              <p className="text-gray-600">Selecione onde você quer receber os 100 seguidores</p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => handleSocialSelect('instagram')}
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <i className="ri-instagram-fill text-2xl text-purple-500"></i>
                </div>
                <div className="flex-1 text-left">
                  <div className="font-bold text-lg">Instagram</div>
                  <div className="text-sm text-white/80">100 Seguidores Mundiais</div>
                </div>
                <i className="ri-arrow-right-line text-2xl group-hover:translate-x-1 transition-transform"></i>
              </button>

              <button
                onClick={() => handleSocialSelect('tiktok')}
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white rounded-xl transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <i className="ri-tiktok-fill text-2xl text-gray-800"></i>
                </div>
                <div className="flex-1 text-left">
                  <div className="font-bold text-lg">TikTok</div>
                  <div className="text-sm text-white/80">100 Seguidores Mundiais</div>
                </div>
                <i className="ri-arrow-right-line text-2xl group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Form Popup */}
      {showFormPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closePopups}>
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closePopups}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-shopping-cart-line text-4xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Finalizar Compra</h3>
              <p className="text-gray-600">100 Seguidores Mundiais</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">R$5,90</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4" data-readdy-form>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-sm"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-sm"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefone/WhatsApp</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-sm"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Perfil do {selectedSocial === 'instagram' ? 'Instagram' : 'Tiktok'}
                </label>
                <input
                  type="text"
                  name="profile"
                  required
                  value={formData.profile}
                  onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-sm"
                  placeholder="@seu_usuario"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-lg font-bold text-base transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin"></i>
                    Processando...
                  </>
                ) : (
                  <>
                    <i className="ri-lock-line"></i>
                    Continuar para Pagamento
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <i className="ri-shield-check-line text-green-500"></i>
                <span>Seus dados estão seguros e protegidos</span>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center">
                <span className="text-2xl font-bold text-gray-900">
                  <span className="text-blue-500">Impulsione</span> Social
                </span>
              </a>
              <div className="hidden md:flex items-center gap-6">
                <a href="#services" className="text-gray-600 hover:text-gray-900 cursor-pointer">Serviços</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 cursor-pointer">Como Funciona</a>
                <a href="#faq" className="text-gray-600 hover:text-gray-900 cursor-pointer">FAQ</a>
                <a href="https://impulsionesocial.com/suporte" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 cursor-pointer">Contato</a>
              </div>
            </div>
            <div className="hidden md:block">
              <button onClick={scrollToServices} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all whitespace-nowrap cursor-pointer">
                Crescer Agora
              </button>
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
              <a href="#services" className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Como Funciona</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="https://impulsionesocial.com/suporte" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 cursor-pointer">Contato</a>
              <button onClick={scrollToServices} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all whitespace-nowrap cursor-pointer">
                Crescer Agora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 via-white to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center py-16 md:py-24">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-sm text-gray-600">IMPULSIONE SEU PERFIL AINDA HOJE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
              Impulsione suas redes sociais com entrega rápida e preço baixo!
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button onClick={scrollToServices} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/30 whitespace-nowrap cursor-pointer">
                <i className="ri-rocket-line mr-2"></i>
                Impulsionar agora
              </button>
              <a 
                href="https://whatsapp.conectaprime.com/r/teste02" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-orange-500 hover:to-pink-600 transition-all shadow-lg shadow-orange-500/30 whitespace-nowrap cursor-pointer inline-flex items-center"
              >
                <i className="ri-fire-fill mr-2"></i>
                Testar por R$5,90
              </a>
            </div>
            
            {/* Floating Social Icons */}
            <div className="relative mt-12 h-64 md:h-80">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-48 h-64 md:w-56 md:h-72 bg-white rounded-3xl shadow-2xl p-4 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full mb-3 overflow-hidden">
                      <img 
                        src="https://readdy.ai/api/search-image?query=Beautiful%20young%20woman%20with%20natural%20makeup%2C%20professional%20headshot%20portrait%2C%20soft%20lighting%2C%20neutral%20background%2C%20friendly%20smile%2C%20high%20quality%20portrait%20photography%2C%20clean%20and%20modern%20look&width=200&height=200&seq=profile1&orientation=squarish" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex gap-4 text-xs text-gray-500 mb-2">
                      <div className="text-center">
                        <div className="font-bold text-gray-900">86</div>
                        <div>Posts</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900">8.695</div>
                        <div>Seguidores</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900">298</div>
                        <div>Seguindo</div>
                      </div>
                    </div>
                    <div className="flex -space-x-2 mb-2">
                      <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                        <img 
                          src="https://readdy.ai/api/search-image?query=Young%20man%20professional%20headshot%20portrait%2C%20friendly%20smile%2C%20clean%20background%2C%20high%20quality%20face%20photo&width=100&height=100&seq=face1&orientation=squarish" 
                          alt="User" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                        <img 
                          src="https://readdy.ai/api/search-image?query=Young%20woman%20professional%20headshot%20portrait%2C%20natural%20makeup%2C%20friendly%20expression%2C%20clean%20background%2C%20high%20quality%20face%20photo&width=100&height=100&seq=face2&orientation=squarish" 
                          alt="User" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                        <img 
                          src="https://readdy.ai/api/search-image?query=Middle%20aged%20man%20professional%20headshot%20portrait%2C%20confident%20smile%2C%20clean%20background%2C%20high%20quality%20face%20photo&width=100&height=100&seq=face3&orientation=squarish" 
                          alt="User" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                        <img 
                          src="https://readdy.ai/api/search-image?query=Young%20woman%20with%20glasses%20professional%20headshot%20portrait%2C%20friendly%20smile%2C%20clean%20background%2C%20high%20quality%20face%20photo&width=100&height=100&seq=face4&orientation=squarish" 
                          alt="User" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                        <img 
                          src="https://readdy.ai/api/search-image?query=Young%20man%20with%20beard%20professional%20headshot%20portrait%2C%20friendly%20expression%2C%20clean%20background%2C%20high%20quality%20face%20photo&width=100&height=100&seq=face5&orientation=squarish" 
                          alt="User" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                        <img 
                          src="https://readdy.ai/api/search-image?query=Young%20woman%20professional%20headshot%20portrait%2C%20bright%20smile%2C%20clean%20background%2C%20high%20quality%20face%20photo&width=100&height=100&seq=face6&orientation=squarish" 
                          alt="User" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full h-16 bg-gray-100 rounded-lg"></div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-4 -left-8 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <i className="ri-tiktok-fill text-xl"></i>
                  </div>
                  <div className="absolute top-8 -right-8 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <i className="ri-facebook-fill text-xl text-blue-600"></i>
                  </div>
                  <div className="absolute -bottom-4 -left-6 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <i className="ri-youtube-fill text-xl text-red-600"></i>
                  </div>
                  <div className="absolute bottom-12 -right-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <i className="ri-instagram-fill text-xl text-blue-600"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white lazy-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-500 font-medium">★ Serviços</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Qual serviço você precisa?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Selecione a <strong>plataforma</strong>, em seguida escolha o <strong>serviço</strong> e a <strong>quantidade</strong> que precisa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialPlatforms.map((platform, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
                {/* Header */}
                <div className={`${platform.bgColor} p-6 text-center text-white`}>
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <img 
                      src={platform.icon} 
                      alt={platform.name} 
                      className="w-12 h-12 object-contain" 
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                  <p className="text-white/80 text-sm">Selecione o serviço que você deseja:</p>
                </div>
                
                {/* Services */}
                <div className="bg-white p-6 space-y-3">
                  {platform.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      to={addUTMToUrl(service.link)}
                      className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all cursor-pointer group"
                    >
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.price}</p>
                      </div>
                      {service.discount && (
                        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                          {service.discount}
                        </span>
                      )}
                      <i className="ri-arrow-right-line text-xl text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all"></i>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50 lazy-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-500 font-medium">● Passo a passo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Como tudo funciona
            </h2>
            <p className="text-gray-600">
              Veja como é simples e rápido você crescer suas redes sociais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center">
                <div className="w-full h-40 mb-6 flex items-center justify-center">
                  <img src={step.image} alt={step.title} className="max-h-full object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button onClick={scrollToServices} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg whitespace-nowrap cursor-pointer">
              <i className="ri-rocket-line mr-2"></i>
              Ver Serviços
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white lazy-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-500 font-medium">@ FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-gray-600">
              Confira abaixo as dúvidas mais frequentes sobre nossos serviços. Caso queira você também pode entrar em contato conosco.
            </p>
          </div>
          
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <i className={`ri-arrow-${openFaq === index ? 'up' : 'down'}-s-line text-xl text-gray-500`}></i>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button onClick={scrollToServices} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg whitespace-nowrap cursor-pointer">
              <i className="ri-shopping-cart-line mr-2"></i>
              Começar Agora
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quer utilizar nossos serviços?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Sem bots, sem truques — só público real e segmentado. Campanhas de anúncios inteligentes em todas as redes sociais. Crescimento contínuo que gera resultados agora e constrói sua marca para o futuro.
          </p>
          <button onClick={scrollToServices} className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-50 transition-all shadow-lg whitespace-nowrap cursor-pointer">
            <i className="ri-add-line mr-2"></i>
            Impulsionar agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <a href="/" className="flex items-center mb-4 md:mb-0">
              <span className="text-2xl font-bold text-gray-900">
                <span className="text-blue-500">Impulsione</span> Social
              </span>
            </a>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">Início</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">Termos</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">Privacidade</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">Cookies</a>
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
              <a href="https://readdy.ai/?origin=logo" className="text-gray-400 hover:text-gray-600 text-sm cursor-pointer">Impulsione Social</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
