'use client';
import { useState } from 'react';
import { Search, Heart, Monitor, Edit3, Palette, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  { label: '사회혁신가', count: 24, icon: Heart, color: 'text-pink-500' },
  { label: '개발자', count: 81, icon: Monitor, color: 'text-blue-500' },
  { label: '기획자', count: 22, icon: Edit3, color: 'text-orange-500' },
  { label: '디자이너', count: 10, icon: Palette, color: 'text-purple-500' },
  { label: '교수(CAMPUS)', count: 7, icon: GraduationCap, color: 'text-indigo-500' },
];

const dummyAlumni = [
  { id: 1, name: '황민호', role: '개발자', team: '카카오', type: 'CAMPUS' },
  { id: 2, name: '김도연', role: '디자이너', team: 'B-peach LAB', type: 'LAB' },
  { id: 3, name: 'Kangbeen Ko', role: '학생', team: 'GIST', type: 'LAB' },
  { id: 4, name: '이지원', role: '기획자/PM', team: '다온 LAB', type: 'LAB' },
  { id: 5, name: '박정환', role: '사회혁신가', team: 'Caring Note LAB', type: 'LAB' },
];

export default function AlumniPage() {
  const [activeRole, setActiveRole] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAlumni = dummyAlumni.filter(a => {
    const matchRole = activeRole === '전체' || a.role.includes(activeRole);
    const matchSearch = a.name.includes(searchQuery) || a.team.includes(searchQuery);
    return matchRole && matchSearch;
  });

  return (
    <div className="container-pc py-12">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between relative">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-sunny-yellow rounded-xl mb-4">
            <span className="text-2xl">👥</span>
          </div>
          <h1 className="text-4xl font-bold text-sunny-black mb-4">함께하는 사람들</h1>
          <p className="text-lg text-gray-500">돕는 기술을 만드는 다양한 전문가들</p>
        </div>
        <div className="absolute right-0 bottom-0 pointer-events-none opacity-80 md:opacity-100">
          <img src="/alumni_internal.png" alt="" className="h-24 md:h-32 lg:h-40 object-contain drop-shadow-xl opacity-90" />
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
        {stats.map(stat => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.label} 
              onClick={() => setActiveRole(activeRole === stat.label ? '전체' : stat.label)}
              className={`bg-white border rounded-2xl p-6 flex flex-col items-start cursor-pointer transition-all ${
                activeRole === stat.label ? 'border-sunny-purple shadow-sm ring-1 ring-sunny-purple' : 'border-sunny-border hover:border-gray-300'
              }`}
            >
              <Icon className={`w-8 h-8 mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold text-sunny-black">{stat.count}<span className="text-lg">명</span></div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          )
        })}
      </div>

      <div className="flex justify-end mb-8">
        <div className="relative w-full md:w-64">
          <input 
            type="text" 
            placeholder="이름이나 소속 검색..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-sunny-border rounded-full focus:outline-none focus:border-sunny-purple"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence>
          {filteredAlumni.map(a => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={a.id}
              className="bg-sunny-gray rounded-3xl p-8 flex flex-col items-center text-center hover:bg-gray-200 transition-colors"
            >
              <div className="w-24 h-24 bg-white rounded-full mb-4 shadow-sm"></div>
              <span className="px-3 py-1 bg-white text-xs font-semibold rounded-full text-gray-600 mb-4">{a.role}</span>
              <h3 className="text-xl font-bold text-sunny-black mb-1">{a.name}</h3>
              <p className="text-sm text-gray-500 mb-6">{a.team}</p>
              
              <div className="w-full flex justify-between items-center mt-auto pt-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                </div>
                <span className="text-xs font-bold text-gray-400">{a.type}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
