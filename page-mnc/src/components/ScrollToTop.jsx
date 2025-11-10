import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostra o botão quando o usuário rola para baixo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Função para rolar suavemente para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="group fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce-slow"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-200" />
        </button>
      )}
    </>
  );
}