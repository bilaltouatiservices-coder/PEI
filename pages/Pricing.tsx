
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">أثمنة مناسبة لكل طالب</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            كنوفرو ليك خيارات مرنة باش تستفد من الملخصات ديالنا بأقل تكلفة ممكنة. هدفنا هو المساعدة قبل كل شيء.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan 1: Single PDF */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">ملخص واحد (Unité)</h3>
              <p className="text-gray-500 text-sm">مثالي إلا كنتي محتاج مساعدة فمودول واحد فقط.</p>
            </div>
            <div className="mb-8 flex items-baseline space-x-2 space-x-reverse">
              <span className="text-5xl font-bold text-gray-900">29</span>
              <span className="text-xl text-gray-500">درهم</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow text-gray-600">
              <li className="flex items-center space-x-3 space-x-reverse">
                <i className="fas fa-check text-green-500"></i>
                <span>ملخص شامل لـ Module واحد</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <i className="fas fa-check text-green-500"></i>
                <span>خريطة ذهنية بصيغة PDF</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <i className="fas fa-check text-green-500"></i>
                <span>تمارين تطبيقية مع الحل</span>
              </li>
            </ul>
            <button className="w-full py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition">
              شراء الآن
            </button>
          </div>

          {/* Plan 2: Monthly Subscription - Popular */}
          <div className="bg-white p-8 rounded-3xl border-2 border-blue-600 shadow-xl transition flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-xl text-sm font-bold">الأكثر طلباً</div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-blue-600">اشتراك شهري</h3>
              <p className="text-gray-500 text-sm">للوصول الكامل لكلشي طول الشهر.</p>
            </div>
            <div className="mb-8 flex items-baseline space-x-2 space-x-reverse">
              <span className="text-5xl font-bold text-gray-900">99</span>
              <span className="text-xl text-gray-500">درهم / شهر</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow text-gray-600">
              <li className="flex items-center space-x-3 space-x-reverse">
                <i className="fas fa-check text-green-500 font-bold"></i>
                <span>دخول غير محدود لجميع الملخصات</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <i className="fas fa-check text-green-500 font-bold"></i>
                <span>تحديثات أسبوعية للدروس</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <i className="fas fa-check text-green-500 font-bold"></i>
                <span>QCM تفاعلي للتأكد من الفهم</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <i className="fas fa-check text-green-500 font-bold"></i>
                <span>دعم عبر WhatsApp للأسئلة</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">
              اشترك دابا
            </button>
          </div>

          {/* Plan 3: Full Year */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">اشتراك سنوي</h3>
              <p className="text-gray-500 text-sm">أفضل قيمة للفلوس باش تتهنى كاع لعام.</p>
            </div>
            <div className="mb-8 flex items-baseline space-x-2 space-x-reverse">
              <span className="text-5xl font-bold text-gray-900">799</span>
              <span className="text-xl text-gray-500">درهم / سنة</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow text-gray-600">
              <li className="flex items-center space-x-3 space-x-reverse">
                <i className="fas fa-check text-green-500"></i>
                <span>كاع مميزات الاشتراك الشهري</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <i className="fas fa-check text-green-500"></i>
                <span>تخفيض 33% على الثمن الشهري</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <i className="fas fa-check text-green-500"></i>
                <span>نماذج امتحانات الإعفاء</span>
              </li>
            </ul>
            <button className="w-full py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition">
              اشتراك سنوي
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
