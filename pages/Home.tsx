
import React from 'react';

interface HomeProps {
  onNavigate: (page: string, section: string | null) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50 rounded-bl-[100px]"></div>
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full font-bold mb-6">منصة المراجعة الأولى فالمغرب</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              أداة بسيطة وفعّالة للمراجعة، <br />
              <span className="text-blue-600">بلا ضغط ولا ضياع وقت</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              فهم ليدوروس ديالك بالدارجة، مراجعة سريعة بالخرائط الذهنية وتمارين محلولة باش تضمن النجاح ديالك.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <button 
                onClick={() => {
                  const el = document.getElementById('categories');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg flex items-center justify-center space-x-2 space-x-reverse"
              >
                <span>تصفح الملخصات</span>
                <i className="fas fa-arrow-left"></i>
              </button>
              <button 
                onClick={() => onNavigate('pricing', null)}
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition"
              >
                اشترك الآن
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" 
              alt="Students studying together in a library" 
              className="rounded-3xl shadow-2xl w-full object-cover h-[400px] lg:h-auto"
            />
          </div>
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
