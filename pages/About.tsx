
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl font-bold mb-6">قصتنا ورؤيتنا</h1>
          <p className="text-xl text-gray-600 leading-relaxed italic">
            "حلمنا هو نسهلو الطريق على كل طالب مغربي باغي ينجح فمجال التكنلوجيا، بلا ما يحس بالضغط ديال اللغة أو صعوبة ليدوروس."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-600 underline decoration-green-500 decoration-4 underline-offset-8">رؤيتنا (Notre Vision)</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              كنطمحو نكونو المنصة الرقمية الأولى فالمغرب اللي كتوفر محتوى تعليمي بالدارجة المغربية مخصص لطلبة التكوين المهني. رؤيتنا هي أن المعلومة التقنية خاصها تكون متاحة ومفهومة للجميع، ماشي فقط للي كيتقنو اللغات الأجنبية.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              المستقبل رقمي، والمغرب محتاج لكفاءات شابة فاهمة وواعرة، وحنا هنا باش نكونو داك الجسر اللي غيوصلكم لهاد الهدف.
            </p>
          </div>
          <div className="bg-blue-100 p-8 rounded-[40px] rotate-2">
            <img src="https://picsum.photos/seed/vision/600/400" alt="Vision" className="rounded-3xl shadow-xl -rotate-2 w-full object-cover h-[300px]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 md:order-1 bg-green-100 p-8 rounded-[40px] -rotate-2">
            <img src="https://picsum.photos/seed/mission/600/400" alt="Mission" className="rounded-3xl shadow-xl rotate-2 w-full object-cover h-[300px]" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-green-600 underline decoration-blue-500 decoration-4 underline-offset-8">رسالتنا (Notre Mission)</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              مهمتنا هي تبسيط المعقد. كنخدمو ليل ونهار باش نلخصو الكتوبة والدروس الطويلة فخرائط ذهنية وملخصات مركزة. كنركزو على:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 space-x-reverse">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <span>إنتاج ملخصات PDF عالية الجودة.</span>
              </li>
              <li className="flex items-start space-x-3 space-x-reverse">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <span>توفير تمارين تطبيقية مع الحلول المفصلة.</span>
              </li>
              <li className="flex items-start space-x-3 space-x-reverse">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <span>مواكبة الطلبة نفسيا وتقنيا ففترة الامتحانات.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-900 text-white p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">الأثر الاجتماعي والتعليمي</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            DarijaRevision ماشي مجرد بيزنس، هي مبادرة باش نقصو من الهدر المدرسي فالتكوين المهني ونعاونو الشباب يلقاو بلاصتهم فسوق الشغل بكفاءة عالية. ملي كتفهم، كتنجح، وملي كتنجح، كتبني مستقبلك.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
