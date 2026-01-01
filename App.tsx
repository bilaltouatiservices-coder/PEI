
import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Modules from './pages/Modules';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const navigateTo = (page: string, section: string | null = null) => {
    setCurrentPage(page);
    setSelectedSection(section);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'about':
        return <About />;
      case 'modules':
        return <Modules sectionId={selectedSection || 'infra'} />;
      case 'pricing':
        return <Pricing />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div 
            className="flex items-center space-x-2 space-x-reverse cursor-pointer"
            onClick={() => navigateTo('home')}
          >
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <i className="fas fa-graduation-cap text-xl"></i>
            </div>
            <span className="text-2xl font-bold text-blue-800">Darija<span className="text-green-600">Revision</span></span>
          </div>
          
          <ul className="hidden md:flex items-center space-x-8 space-x-reverse font-semibold text-gray-600">
            <li className="cursor-pointer hover:text-blue-600 transition" onClick={() => navigateTo('home')}>الرئيسية</li>
            <li className="cursor-pointer hover:text-blue-600 transition" onClick={() => navigateTo('about')}>من نحن</li>
            <li className="cursor-pointer hover:text-blue-600 transition" onClick={() => navigateTo('pricing')}>الأسعار</li>
            <li className="cursor-pointer hover:text-blue-600 transition" onClick={() => navigateTo('contact')}>اتصل بنا</li>
          </ul>

          <button 
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition shadow-md"
            onClick={() => navigateTo('pricing')}
          >
            اشترك الآن
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-blue-900">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <span className="text-xl font-bold">DarijaRevision</span>
              </div>
              <p className="text-blue-100 leading-relaxed mb-6">
                منصة مغربية كتهدف تبسط القراية لطلبة التكوين المهني والمجال الرقمي. ملخصات بالدارجة باش تفهم دغيا وتنجح فامتحاناتك.
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <a href="#" className="w-10 h-10 rounded-full border border-blue-700 flex items-center justify-center hover:bg-white hover:text-blue-900 transition"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="w-10 h-10 rounded-full border border-blue-700 flex items-center justify-center hover:bg-white hover:text-blue-900 transition"><i className="fab fa-instagram"></i></a>
                <a href="https://wa.me/21277878144" target="_blank" className="w-10 h-10 rounded-full border border-blue-700 flex items-center justify-center hover:bg-white hover:text-blue-900 transition"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
              <ul className="space-y-4 text-blue-100">
                <li className="cursor-pointer hover:translate-x-[-5px] transition" onClick={() => navigateTo('home')}>الرئيسية</li>
                <li className="cursor-pointer hover:translate-x-[-5px] transition" onClick={() => navigateTo('about')}>من نحن</li>
                <li className="cursor-pointer hover:translate-x-[-5px] transition" onClick={() => navigateTo('pricing')}>الأسعار</li>
                <li className="cursor-pointer hover:translate-x-[-5px] transition" onClick={() => navigateTo('contact')}>اتصل بنا</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">تواصل معنا</h4>
              <ul className="space-y-4 text-blue-100">
                <li className="flex items-center space-x-3 space-x-reverse">
                  <i className="fas fa-phone-alt text-green-400"></i>
                  <span dir="ltr">+212 778 781 44</span>
                </li>
                <li className="flex items-center space-x-3 space-x-reverse">
                  <i className="fas fa-envelope text-green-400"></i>
                  <span>T.b.21.07.2003@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3 space-x-reverse">
                  <i className="fas fa-map-marker-alt text-green-400"></i>
                  <span>الدار البيضاء، المغرب</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
            <p>© {new Date().getFullYear()} DarijaRevision. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
