
import React, { useEffect, useRef, useState } from 'react';

interface HomeProps {
  onNavigate: (page: string, section: string | null) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entry animation
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate smooth parallax offset for centered text (very subtle)
      const moveX = (clientX - innerWidth / 2) / 60;
      const moveY = (clientY - innerHeight / 2) / 60;
      
      setOffset({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      {/* Hero Section - Centered with Animations */}
      <section 
        className="relative py-24 lg:py-40 overflow-hidden bg-gradient-to-b from-blue-50 to-white text-center" 
        ref={containerRef}
      >
        {/* Decorative Floating Elements (Parallax) */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl -z-10 transition-transform duration-500 ease-out"
          style={{ transform: `translate(${offset.x * -1.5}px, ${offset.y * -1.5}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-green-200/30 rounded-full blur-3xl -z-10 transition-transform duration-700 ease-out"
          style={{ transform: `translate(${offset.x * 2}px, ${offset.y * 2}px)` }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div 
            className={`max-w-4xl mx-auto transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ 
              transform: `translate(${offset.x}px, ${offset.y}px)` 
            }}
          >
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full font-bold mb-8 animate-pulse">
              منصة المراجعة الأولى فالمغرب
            </span>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              أداة بسيطة وفعّالة للمراجعة، <br />
              <span className="text-blue-600">بلا ضغط ولا ضياع وقت</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              فهم ليدوروس ديالك بالدارجة، مراجعة سريعة بالخرائط الذهنية وتمارين محلولة باش تضمن النجاح ديالك فكاع ليمودول.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 sm:space-x-reverse">
              <button 
                onClick={() => {
                  const el = document.getElementById('categories');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition shadow-xl flex items-center justify-center group"
              >
                <span>تصفح الملخصات</span>
                <i className="fas fa-arrow-left mr-3 group-hover:translate-x-[-5px] transition-transform"></i>
              </button>
              
              <button 
                onClick={() => onNavigate('pricing', null)}
                className="w-full sm:w-auto bg-white text-blue-600 border-2 border-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition"
              >
                اشترك الآن
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
          <i className="fas fa-chevron-down text-2xl text-blue-300"></i>
        </div>
      </section>

      {/* Main Categories Section */}
      <section id="categories" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">اختر تخصصك للدخول للملخصات</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            حدد الشعبة ديالك باش تشوف جميع الوحدات (Modules) والدروس اللي كنوفروها.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Category 1: Infrastructure */}
            <div 
              className="group relative bg-white border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer overflow-hidden text-right"
              onClick={() => onNavigate('modules', 'infra')}
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-50 rounded-full group-hover:scale-150 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto md:mx-0">
                  <i className="fas fa-server"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Infrastructure Digitale</h3>
                <h4 className="text-blue-600 font-bold text-lg mb-4">البنية التحتية الرقمية</h4>
                <p className="text-gray-600 mb-8">
                  هنا غادي تلقى كاع ليمودول المتعلقة بالريزو، اللينيكس، VMware، والسيكيريتي.
                </p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold group-hover:bg-blue-700 transition">
                  دخول القسم <i className="fas fa-chevron-left mr-2"></i>
                </button>
              </div>
            </div>

            {/* Category 2: Dev */}
            <div 
              className="group relative bg-white border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-green-300 transition-all cursor-pointer overflow-hidden text-right"
              onClick={() => onNavigate('modules', 'dev')}
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-50 rounded-full group-hover:scale-150 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto md:mx-0">
                  <i className="fas fa-code"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Développement Digital</h3>
                <h4 className="text-green-600 font-bold text-lg mb-4">التطوير الرقمي</h4>
                <p className="text-gray-600 mb-8">
                  خاص للمطورين: الألغوريثم، JavaScript، قواعد البيانات، وتطوير المواقع.
                </p>
                <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold group-hover:bg-green-700 transition">
                  دخول القسم <i className="fas fa-chevron-left mr-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 italic">علاش تختار DarijaRevision؟</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition">
              <div className="text-blue-600 text-4xl mb-4"><i className="fas fa-brain"></i></div>
              <h3 className="text-xl font-bold mb-4">خرائط ذهنية (Mind Maps)</h3>
              <p className="text-gray-600">لخص لدروس الطويلة فصفحة وحدة، كتعاونك تعقل على كاع التفاصيل بلا جهد.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition">
              <div className="text-blue-600 text-4xl mb-4"><i className="fas fa-language"></i></div>
              <h3 className="text-xl font-bold mb-4">شرح بالدارجة</h3>
              <p className="text-gray-600">كنشرحو المصطلحات الصعبة بلغة بسيطة كنفهموها كاملين باش ماتبقاش حاشل فاللغة.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition">
              <div className="text-blue-600 text-4xl mb-4"><i className="fas fa-tasks"></i></div>
              <h3 className="text-xl font-bold mb-4">تمارين وامتحانات</h3>
              <p className="text-gray-600">أمثلة للامتحانات السابقة مع التصحيح باش توجد راسك مزيان وتعرف شنو كيتسناك.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
