
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h1 className="text-4xl font-bold mb-6">تواصل معانا</h1>
              <p className="text-xl text-gray-600 mb-12">
                عندك شي سؤال؟ بغيتي تعرف أكثر على الملخصات ديالنا؟ حنا هنا باش نجاوبوك فدقيقة.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 space-x-reverse">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">واتساب (WhatsApp)</h3>
                    <p className="text-gray-600 mb-2">تواصل مباشر وسريع.</p>
                    <a href="https://wa.me/21277878144" target="_blank" className="text-green-600 font-bold text-lg" dir="ltr">+212 778 781 44</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 space-x-reverse">
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">البريد الإلكتروني</h3>
                    <p className="text-gray-600 mb-2">للاستفسارات الرسمية.</p>
                    <a href="mailto:T.b.21.07.2003@gmail.com" className="text-blue-600 font-bold text-lg">T.b.21.07.2003@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 space-x-reverse">
                  <div className="w-14 h-14 bg-gray-100 text-gray-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">أوقات العمل</h3>
                    <p className="text-gray-600">طيلة أيام الأسبوع من 09:00 صباحاً حتى 08:00 مساءً.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">الاسم الكامل</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition outline-none" placeholder="الاسم ديالك" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">البريد الإلكتروني</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition outline-none" placeholder="example@gmail.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">الموضوع</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition outline-none" placeholder="بخصوص اش بغيتي تهضر؟" />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">رسالتك</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition outline-none" placeholder="كتب الميساج ديالك هنا..."></textarea>
                </div>
                <button type="button" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg">إرسال الرسالة</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
