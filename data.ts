
import { Section } from './types';

const COMMON_MODULES = [
  { id: 'egts101', code: 'EGTS101', title: 'Arabe', description: 'اللغة العربية والتقنيات ديال التواصل بالدارجة والفصحى.' },
  { id: 'egts102', code: 'EGTS102', title: 'Français', description: 'الفرنسية التقنية باش تواصل مزيان فالدومين ديالك.' },
  { id: 'egts103', code: 'EGTS103', title: 'Anglais technique / Espagnole', description: 'اللغات الحية اللي كتحتاجها فالعالم ديال الشغل.' },
  { id: 'egts104', code: 'EGTS104', title: 'Culture entrepreneuriale – Partie 1', description: 'أساسيات المقاولة وكيفاش تبدا المشروع ديالك.' },
  { id: 'egts105', code: 'EGTS105', title: 'Compétences comportementales et sociales', description: 'Soft Skills وكيفاش تتعامل مع الناس فبيئة العمل.' },
  { id: 'egts108', code: 'EGTS108', title: 'Entrepreneuriat – PIE 1', description: 'برنامج الابتكار المقاولاتي، الخطوات الأولى.' },
  { id: 'egtsa106', code: 'EGTSA106', title: 'Culture et techniques avancées du numérique', description: 'الثقافة الرقمية والتقنيات الجديدة.' },
];

export const sectionsData: Section[] = [
  {
    id: 'infra',
    title: 'البنية التحتية الرقمية',
    titleFr: 'Infrastructure Digitale',
    commonModules: COMMON_MODULES,
    firstYearModules: [
      { id: 'm101', code: 'M101', title: 'Se situer au regard du métier', description: 'تعرف على الخدمة ديالك وكيفاش غادي تكون التكوين.' },
      { id: 'm102', code: 'M102', title: 'Enjeux d’un système d’information', description: 'فهم كيفاش خدام نظام المعلومات فالمؤسسات.' },
      { id: 'm103', code: 'M103', title: 'Concevoir un réseau informatique', description: 'كيفاش تخطط وتصاوب ريزو لانفورماتيك من الصفر.' },
      { id: 'm104', code: 'M104', title: 'Fonctionnement du système d’exploitation', description: 'كيفاش كيخدم الويندوز واللينيكس فقلب السيستيم.' },
      { id: 'm105', code: 'M105', title: 'Gérer une infrastructure virtualisée', description: 'لاديجيستيون ديال VMware والفيشياليزاسيون.' },
      { id: 'm106', code: 'M106', title: 'Automatiser les tâches d’administration', description: 'تتعلم كيفاش تخدم بالسكربت باش تسرب دغيا.' },
      { id: 'm107', code: 'M107', title: 'Sécuriser un système d’information', description: 'أساسيات السيكيريتي وكيفاش تحمي المعلومات.' },
      { id: 'm108', code: 'M108', title: 'Développer une veille technologique', description: 'كيفاش تبقى ديما متبع الجديد فالتكنلوجيا.' },
    ]
  },
  {
    id: 'dev',
    title: 'التطوير الرقمي',
    titleFr: 'Développement Digital',
    commonModules: COMMON_MODULES,
    firstYearModules: [
      { id: 'm101-dev', code: 'M101', title: 'Se situer au regard du métier', description: 'فهم مهنة المطور والمسار المهني اللي كيتسناك.' },
      { id: 'm102-dev', code: 'M102', title: 'Bases de l’algorithmique', description: 'أساسيات البرمجة والتفكير المنطقي بالألغوريثم.' },
      { id: 'm103-dev', code: 'M103', title: 'Programmer en Orienté Objet', description: 'لبروغراماسيون POO، حجر الزاوية فالتطوير.' },
      { id: 'm104-dev', code: 'M104', title: 'Développer des sites web statiques', description: 'تعلم HTML و CSS وصاوب أول موقع ديالك.' },
      { id: 'm105-dev', code: 'M105', title: 'Programmer en JavaScript', description: 'كيفاش تزيد التفاعل للمواقع ديالك باستعمال JS.' },
      { id: 'm106-dev', code: 'M106', title: 'Manipuler des bases de données', description: 'تعلم SQL وكيفاش تخزن البيانات وتنظمها.' },
      { id: 'm107-dev', code: 'M107', title: 'Développer des sites web dynamiques', description: 'صناعة مواقع كتهضر مع السيرفر والبيانات.' },
      { id: 'm108-dev', code: 'M108', title: 'Sécurité des systèmes d’information', description: 'كيفاش تحمي المواقع ديالك من الاختراقات.' },
    ]
  }
];
