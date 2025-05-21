import Link from 'next/link';
import SmoothScrollLink from './SmoothScrollLink';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="hidden sm:block text-2xl font-bold text-white">
          <Link href="/">
            Giordano
          </Link>
        </div>
        <nav className="space-x-4">
          <SmoothScrollLink href="#hero" className="text-gray-300 hover:text-white transition-colors">
            Início
          </SmoothScrollLink>
          <SmoothScrollLink href="#sobre" className="text-gray-300 hover:text-white transition-colors">
            Sobre
          </SmoothScrollLink>
          <SmoothScrollLink href="#services" className="text-gray-300 hover:text-white transition-colors">
            Serviços
          </SmoothScrollLink>
          <SmoothScrollLink href="#alterdata" className="text-gray-300 hover:text-white transition-colors">
            Alterdata
          </SmoothScrollLink>
          {/* Adicione mais links conforme necessário */}
        </nav>
      </div>
    </header>
  );
};

export default Header; 