import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUTMTracking } from '../../hooks/useUTMTracking';

export default function HomeTesteABPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSocialPopup, setShowSocialPopup] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [selectedSocial, setSelectedSocial] = useState<'instagram' | 'tiktok' | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', profile: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showServicePopup, setShowServicePopup] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { addUTMToUrl } = useUTMTracking();

  // Adiciona UTM tracking automaticamente
  useUTMTracking();

  // Preload de imagens críticas
  useEffect(() => {
    const criticalImages = [
      '/images/medias/instagram.png',
      '/images/medias/tiktok.png',
      '/images/medias/facebook.png',
      '/images/medias/youtube.png',
      '/images/medias/x.png',
      '/images/medias/kwai.png'
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

  const socialPlatforms = [
    {
      name: 'Instagram',
      icon: '/images/medias/instagram.png',
      color: 'from-pink-500 to-purple-500',
      bgColor: 'bg-gradient-to-b from-pink-500 to-purple-500',
      iconColor: 'text-pink-500',
      services: [
        { name: 'Seguidores Instagram', price: 'R$22,90', discount: '54% OFF', icon: 'ri-user-add-line', link: '/seguidores-instagram' },
        { name: 'Curtidas Instagram', price: 'R$10,90', discount: '20% OFF', icon: 'ri-heart-fill', link: '/curtidas-instagram' },
        { name: 'Visualizações Instagram', price: 'R$10,90', discount: '37% OFF', icon: 'ri-eye-line', link: '/visualizacoes-instagram' }
      ]
    },
    {
      name: 'Tiktok',
      icon: '/images/medias/tiktok.png',
      color: 'from-gray-900 to-gray-800',
      bgColor: 'bg-gradient-to-b from-gray-900 to-gray-800',
      iconColor: 'text-gray-900',
      services: [
        { name: 'Seguidores Tiktok', price: 'R$19,90', discount: '54% OFF', icon: 'ri-user-add-line', link: '/seguidores-tiktok' },
        { name: 'Curtidas Tiktok', price: 'R$10,90', discount: '20% OFF', icon: 'ri-heart-fill', link: '/curtidas-tiktok' },
        { name: 'Visualizações Tiktok', price: 'R$10,90', discount: '37% OFF', icon: 'ri-eye-line', link: '/visualizacoes-tiktok' }
      ]
    },
    {
      name: 'Facebook',
      icon: '/images/medias/facebook.png',
      color: 'from-blue-600 to-blue-500',
      bgColor: 'bg-gradient-to-b from-blue-600 to-blue-500',
      iconColor: 'text-blue-600',
      services: [
        { name: 'Seguidores Facebook', price: 'R$19,90', discount: '54% OFF', icon: 'ri-user-add-line', link: '/seguidores-facebook' },
        { name: 'Curtidas Facebook', price: 'R$14,90', discount: '20% OFF', icon: 'ri-heart-fill', link: '/curtidas-facebook' },
        { name: 'Visualizações Facebook', price: 'R$19,90', discount: '37% OFF', icon: 'ri-eye-line', link: '/visualizacoes-facebook' }
      ]
    },
    {
      name: 'Youtube',
      icon: '/images/medias/youtube.png',
      color: 'from-red-600 to-red-500',
      bgColor: 'bg-gradient-to-b from-red-600 to-red-500',
      iconColor: 'text-red-600',
      services: [
        { name: 'Inscritos Youtube', price: 'R$24,90', discount: '54% OFF', icon: 'ri-user-add-line', link: '/inscritos-youtube' },
        { name: 'Curtidas Youtube', price: 'R$14,90', discount: '20% OFF', icon: 'ri-heart-fill', link: '/curtidas-youtube' },
        { name: 'Visualizações Youtube', price: 'R$14,90', discount: '37% OFF', icon: 'ri-eye-line', link: '/visualizacoes-youtube' }
      ]
    },
    {
      name: 'Twitter',
      icon: '/images/medias/x.png',
      color: 'from-sky-500 to-sky-400',
      bgColor: 'bg-gradient-to-b from-sky-500 to-sky-400',
      iconColor: 'text-sky-500',
      services: [
        { name: 'Seguidores X', price: 'R$39,90', discount: '54% OFF', icon: 'ri-user-add-line', link: '/seguidores-twitter' },
        { name: 'Curtidas X', price: 'R$29,90', discount: '20% OFF', icon: 'ri-heart-fill', link: '/curtidas-twitter' },
        { name: 'Visualizações X', price: 'R$9,90', discount: '37% OFF', icon: 'ri-eye-line', link: '/visualizacoes-twitter' }
      ]
    },
    {
      name: 'Kwai',
      icon: '/images/medias/kwai.png',
      color: 'from-orange-500 to-orange-400',
      bgColor: 'bg-gradient-to-b from-orange-500 to-orange-400',
      iconColor: 'text-orange-500',
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
      image: '/images/info/service-select.png'
    },
    {
      title: 'Confirme e finalize seu pedido',
      description: 'Agora que você já escolheu o serviço, apenas confirme o pedido e o pagamento.',
      image: '/images/info/confirm-and-finish.png'
    },
    {
      title: 'Pronto! O serviço está iniciado',
      description: 'Acompanhe o andamento diretamente pelo seu perfil ou diretamente aqui no site.',
      image: '/images/info/start-service.png'
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

  const testimonials = [
    {
      name: "Ana S.",
      package: "5.000 visualizações",
      time: "há 5 min",
      image: "https://readdy.ai/api/search-image?query=Professional%20young%20Brazilian%20woman%20with%20dark%20hair%20smiling%20headshot%20portrait%20natural%20lighting%20friendly%20expression%20high%20quality%20professional%20photo&width=120&height=120&seq=testimonial_ana&orientation=squarish"
    },
    {
      name: "Carlos M.",
      package: "10.000 seguidores",
      time: "há 12 min",
      image: "https://readdy.ai/api/search-image?query=Professional%20young%20Brazilian%20man%20with%20short%20black%20hair%20smiling%20headshot%20portrait%20natural%20lighting%20confident%20expression%20high%20quality%20professional%20photo&width=120&height=120&seq=testimonial_carlos&orientation=squarish"
    },
    {
      name: "Juliana P.",
      package: "3.000 curtidas",
      time: "há 18 min",
      image: "https://readdy.ai/api/search-image?query=Professional%20Brazilian%20woman%20entrepreneur%20with%20blonde%20hair%20smiling%20headshot%20portrait%20natural%20lighting%20happy%20expression%20high%20quality%20professional%20photo&width=120&height=120&seq=testimonial_juliana&orientation=squarish"
    },
    {
      name: "Rafael T.",
      package: "7.500 visualizações",
      time: "há 25 min",
      image: "https://readdy.ai/api/search-image?query=Professional%20Brazilian%20businessman%20with%20beard%20smiling%20headshot%20portrait%20natural%20lighting%20friendly%20expression%20high%20quality%20professional%20photo&width=120&height=120&seq=testimonial_rafael&orientation=squarish"
    },
    {
      name: "Beatriz L.",
      package: "15.000 seguidores",
      time: "há 32 min",
      image: "https://readdy.ai/api/search-image?query=Professional%20young%20Brazilian%20woman%20influencer%20with%20long%20brown%20hair%20smiling%20headshot%20portrait%20natural%20lighting%20confident%20expression%20high%20quality%20professional%20photo&width=120&height=120&seq=testimonial_beatriz&orientation=squarish"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToPlatform = (platformName: string) => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Aguardar scroll para destacar a plataforma
      setTimeout(() => {
        const platformCard = document.querySelector(`[data-platform="${platformName}"]`);
        if (platformCard) {
          platformCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          platformCard.classList.add('ring-4', 'ring-blue-500');
          setTimeout(() => {
            platformCard.classList.remove('ring-4', 'ring-blue-500');
          }, 2000);
        }
      }, 500);
    }
  };

  const handleTestClick = () => {
    setShowSocialPopup(true);
  };

  const handleSocialSelect = (social) => {
    setSelectedSocial(social);
    setShowSocialPopup(false);
    setShowFormPopup(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.profile || !selectedSocial) return;

    setIsSubmitting(true);

    try {
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

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    setShowWhatsAppPopup(true);
  };

  const handlePlatformClick = (platformName: string) => {
    setSelectedPlatform(platformName);
    setShowServicePopup(true);
  };

  const closeServicePopup = () => {
    setShowServicePopup(false);
    setSelectedPlatform(null);
  };

  const currentPlatform = socialPlatforms.find(p => p.name === selectedPlatform);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Service Selection Popup */}
      {showServicePopup && currentPlatform && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeServicePopup}>
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 relative fade-in" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeServicePopup}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            
            <div className="text-center mb-6">
              <div className={`w-20 h-20 bg-gradient-to-br ${currentPlatform.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <i className={`ri-${currentPlatform.name.toLowerCase() === 'twitter' ? 'twitter-x' : currentPlatform.name.toLowerCase()}-${currentPlatform.name === 'Instagram' ? 'fill' : 'line'} text-4xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentPlatform.name}</h3>
              <p className="text-gray-600">Escolha o serviço que você precisa</p>
            </div>

            <div className="space-y-3">
              {currentPlatform.services.map((service, index) => (
                <Link
                  key={index}
                  to={addUTMToUrl(service.link)}
                  className="w-full flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all cursor-pointer group"
                  onClick={closeServicePopup}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${currentPlatform.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-base text-gray-900">{service.name}</div>
                    <div className="text-sm text-gray-600">{service.price}</div>
                  </div>
                  {service.discount && (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {service.discount}
                    </span>
                  )}
                  <i className="ri-arrow-right-line text-xl text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all"></i>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

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
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative fade-in" onClick={(e) => e.stopPropagation()}>
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
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative fade-in" onClick={(e) => e.stopPropagation()}>
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
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative fade-in" onClick={(e) => e.stopPropagation()}>
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 will-change-transform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center">
                <span className="text-xl sm:text-2xl font-bold text-gray-900">
                  <span className="text-blue-500">Impulsione</span> Social
                </span>
              </a>
              <div className="hidden md:flex items-center gap-6">
                <a href="#services" className="text-gray-600 hover:text-gray-900 cursor-pointer">Serviços</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 cursor-pointer">Como Funciona</a>
                <a href="#faq" className="text-gray-600 hover:text-gray-900 cursor-pointer">FAQ</a>
                <a href="https://seguidoresprimer.com/redirecionador-whatsapp-prime-suporte" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 cursor-pointer">Contato</a>
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
              <a href="https://seguidoresprimer.com/redirecionador-whatsapp-prime-suporte" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 cursor-pointer">Contato</a>
              <button onClick={scrollToServices} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all whitespace-nowrap cursor-pointer">
                Crescer Agora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Trust Badges - Compact on Mobile - 2x2 Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto mb-6 sm:mb-12 pt-4 sm:pt-8">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 justify-center">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-lock-line text-green-600 text-xs"></i>
              </div>
              <span>Seguro SSL</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 justify-center">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-shield-check-line text-blue-600 text-xs"></i>
              </div>
              <span>Garantia 30d</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 justify-center">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-teal-100 rounded-full flex items-center justify-center">
                <i className="ri-customer-service-2-line text-teal-600 text-xs"></i>
              </div>
              <span>Suporte 24h</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 justify-center">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-100 rounded-full flex items-center justify-center">
                <i className="ri-user-star-line text-orange-600 text-xs"></i>
              </div>
              <span>+50K Pedidos</span>
            </div>
          </div>

          {/* Main Content - Compact */}
          <div className="text-center mb-6 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-6 leading-tight px-2">
              Impulsione seu perfil de forma<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600"> Rápida e Segura</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 max-w-3xl mx-auto px-4">
              Cresça suas redes sociais com a melhor plataforma do Brasil. Entrega rápida, segura e com garantia.
            </p>
          </div>

          {/* CTA acima dos ícones */}
          <div className="mb-6 sm:mb-8">
            <p className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
              👇 Escolha a rede social que deseja impulsionar
            </p>
            <a 
              href="https://whatsapp.conectaprime.com/r/teste02" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:from-orange-500 hover:to-pink-600 transition-all shadow-lg shadow-orange-500/30 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-fire-fill"></i>
              Testar 100 Seguidores por R$5,90
            </a>
          </div>

          {/* Service Platform Cards - Compact Grid for Mobile */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 mb-6 sm:mb-12 max-w-4xl mx-auto">
            <button
              onClick={() => handlePlatformClick('Instagram')}
              className="bg-white p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="bg-gradient-to-br from-pink-500 to-purple-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2">
                <i className="ri-instagram-fill text-white text-xl sm:text-2xl"></i>
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-900">Instagram</div>
            </button>

            <button
              onClick={() => handlePlatformClick('Tiktok')}
              className="bg-white p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2">
                <i className="ri-tiktok-line text-white text-xl sm:text-2xl"></i>
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-900">TikTok</div>
            </button>

            <button
              onClick={() => handlePlatformClick('Facebook')}
              className="bg-white p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2">
                <i className="ri-facebook-line text-white text-xl sm:text-2xl"></i>
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-900">Facebook</div>
            </button>

            <button
              onClick={() => handlePlatformClick('Youtube')}
              className="bg-white p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="bg-gradient-to-br from-red-600 to-red-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2">
                <i className="ri-youtube-line text-white text-xl sm:text-2xl"></i>
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-900">YouTube</div>
            </button>

            <button
              onClick={() => handlePlatformClick('Twitter')}
              className="bg-white p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="bg-gradient-to-br from-sky-500 to-sky-400 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2">
                <i className="ri-twitter-x-line text-white text-xl sm:text-2xl"></i>
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-900">Twitter</div>
            </button>

            <button
              onClick={() => handlePlatformClick('Kwai')}
              className="bg-white p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-400 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2">
                <i className="ri-app-store-line text-white text-xl sm:text-2xl"></i>
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-900">Kwai</div>
            </button>
          </div>

          {/* Testimonial Carousel - Compact on Mobile */}
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 relative overflow-hidden">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-gray-200">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-sm sm:text-base text-gray-900">{testimonials[currentTestimonial].name}</h4>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-yellow-400 text-xs sm:text-sm"></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">
                    comprou <strong>{testimonials[currentTestimonial].package}</strong>
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-gray-500">{testimonials[currentTestimonial].time}</span>
                    <span className="flex items-center gap-1 text-xs text-green-600 font-semibold">
                      <i className="ri-shield-check-fill"></i>
                      Pagamento Seguro
                    </span>
                  </div>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-1.5 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      index === currentTestimonial 
                        ? 'w-6 bg-gradient-to-r from-purple-500 to-pink-500' 
                        : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ver depoimento ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 bg-white lazy-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-blue-500 font-medium">★ Serviços</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Qual serviço você precisa?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Selecione a <strong>plataforma</strong>, em seguida escolha o <strong>serviço</strong> e a <strong>quantidade</strong> que precisa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {socialPlatforms.map((platform, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg transition-all" data-platform={platform.name}>
                <div className={`${platform.bgColor} p-4 sm:p-6 text-center text-white`}>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <i className={`ri-${platform.name.toLowerCase() === 'twitter' ? 'twitter-x' : platform.name.toLowerCase()}-${platform.name === 'Instagram' ? 'fill' : 'line'} text-4xl sm:text-5xl ${platform.iconColor}`}></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{platform.name}</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Selecione o serviço que você deseja:</p>
                </div>
                
                <div className="bg-white p-4 sm:p-6 space-y-3">
                  {platform.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      to={addUTMToUrl(service.link)}
                      className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all cursor-pointer group"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm sm:text-base text-gray-900 mb-1 truncate">{service.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{service.price}</p>
                      </div>
                      {service.discount && (
                        <span className="bg-red-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full mr-2 sm:mr-3 flex-shrink-0">
                          {service.discount}
                        </span>
                      )}
                      <i className="ri-arrow-right-line text-lg sm:text-xl text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all flex-shrink-0"></i>
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
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 lazy-section">
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
              <span className="text-xl sm:text-2xl font-bold text-gray-900">
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
              <a href="https://readdy.ai/?ref=logo" className="text-gray-400 hover:text-gray-600 text-sm cursor-pointer">Web Design</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
