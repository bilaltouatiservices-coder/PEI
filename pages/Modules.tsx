
import React, { useState } from 'react';
import { sectionsData } from '../data';
import { Module } from '../types';

interface ModulesProps {
  sectionId: string;
}

const Modules: React.FC<ModulesProps> = ({ sectionId }) => {
  const section = sectionsData.find(s => s.id === sectionId) || sectionsData[0];
  const [activeTab, setActiveTab] = useState<'common' | 'firstYear'>('firstYear');
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const renderModuleCard = (mod: Module) => (
    <div key={mod.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-bold text-sm font-poppins">{mod.code}</span>
          <div className="flex space-x-1 space-x-reverse">
             <i className="fas fa-star text-yellow-400 text-xs"></i>
             <i className="fas fa-star text-yellow-400 text-xs"></i>
             <i className="fas fa-star text-yellow-400 text-xs"></i>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{mod.title}</h3>
        <p className="text-gray-600 text-sm mb-6 min-h-[40px] leading-relaxed">
          {mod.description}
        </p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button className="bg-blue-600 text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition flex items-center justify-center">
             <i className="fas fa-file-alt ml-2"></i> ملخص الدروس
          </button>
          <button className="bg-green-600 text-white py-2 rounded-lg text-sm font-bold hover:bg-green-700 transition flex items-center justify-center">
             <i className="fas fa-dumbbell ml-2"></i> تمارين
          </button>
          <button 
            className="bg-purple-600 text-white py-2 rounded-lg text-sm font-bold hover:bg-purple-700 transition flex items-center justify-center"
            onClick={() => setExpandedModule(expandedModule === mod.id ? null : mod.id)}
          >
             <i className="fas fa-check-square ml-2"></i> QCM
          </button>
          <button 
            className="bg-orange-600 text-white py-2 rounded-lg text-sm font-bold hover:bg-orange-700 transition flex items-center justify-center"
            onClick={() => setExpandedModule(expandedModule === mod.id ? null : mod.id)}
          >
             <i className="fas fa-graduation-cap ml-2"></i> امتحانات
          </button>
        </div>

        {/* Content Section (Simulated Mock) */}
        {expandedModule === mod.id && (
          <div className="mt-6 pt-6 border-t border-dashed border-gray-300 animate-fadeIn">
            <div className="mb-6">
              <h4 className="font-bold text-orange-600 mb-3 flex items-center">
                <i className="fas fa-file-pdf ml-2"></i> Examens (Mock Exams)
              </h4>
              <ul className="space-y-2">
                <li className="p-3 bg-gray-50 rounded-lg flex justify-between items-center text-sm border border-gray-100">
                  <span>Examen Regional {mod.code} - 2023</span>
                  <button className="text-blue-600 hover:underline">تحميل PDF</button>
                </li>
                <li className="p-3 bg-gray-50 rounded-lg flex justify-between items-center text-sm border border-gray-100">
                  <span>Examen de Passage - 2022</span>
                  <button className="text-blue-600 hover:underline">تحميل PDF</button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-purple-600 mb-3 flex items-center">
                <i className="fas fa-list-ol ml-2"></i> QCM interactifs
              </h4>
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                <p className="text-sm font-bold mb-4">سؤال تجريبي: شنو هو الهدف من هاد الوحدة؟</p>
                <div className="space-y-2">
                   <button className="w-full text-right p-3 bg-white rounded-lg text-xs hover:bg-blue-50 transition border border-gray-200">A. الجواب الأول (اقتراح)</button>
                   <button className="w-full text-right p-3 bg-white rounded-lg text-xs hover:bg-blue-50 transition border border-gray-200">B. الجواب الثاني (اقتراح)</button>
                </div>
                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg text-xs font-bold">تحقق من الإجابة</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">{section.title}</h1>
          <h2 className="text-xl text-blue-600 font-poppins">{section.titleFr}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('firstYear')}
            className={`px-8 py-3 rounded-xl font-bold transition-all shadow-sm ${activeTab === 'firstYear' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-blue-50'}`}
          >
            الوحدات التقنية (1ère Année)
          </button>
          <button 
            onClick={() => setActiveTab('common')}
            className={`px-8 py-3 rounded-xl font-bold transition-all shadow-sm ${activeTab === 'common' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-blue-50'}`}
          >
            الوحدات العامة (EGTS)
          </button>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'firstYear' 
            ? section.firstYearModules.map(mod => renderModuleCard(mod))
            : section.commonModules.map(mod => renderModuleCard(mod))
          }
        </div>
      </div>
    </div>
  );
};

export default Modules;
