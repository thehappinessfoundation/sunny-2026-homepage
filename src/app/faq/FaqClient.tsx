'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { PortableText } from '@portabletext/react'

type Faq = {
  _id: string;
  question: string;
  answer: any;
  category: string;
  order: number;
}

const CATEGORIES = [
  { id: 'all', label: '전체' },
  { id: 'scholar', label: 'Sunny Scholar' },
  { id: 'onsite', label: 'Sunny On-site' },
  { id: 'support', label: '지원 관련' },
  { id: 'others', label: '기타' },
]

const portableTextComponents = {
  list: {
    bullet: ({children}: any) => <ul className="list-disc pl-5 space-y-2 mb-4">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal pl-5 space-y-2 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({children}: any) => <li className="text-gray-200 text-base md:text-lg leading-relaxed">{children}</li>,
    number: ({children}: any) => <li className="text-gray-200 text-base md:text-lg leading-relaxed">{children}</li>,
  },
  block: {
    normal: ({children}: any) => <p className="mb-2 text-base md:text-lg text-gray-200 leading-relaxed">{children}</p>,
  }
}

function extractText(blocks: any): string {
  if (!Array.isArray(blocks)) return '';
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) return '';
      return block.children.map((child: any) => child.text).join('');
    })
    .join(' ');
}

export default function FaqClient({ initialFaqs }: { initialFaqs: Faq[] }) {
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // filter FAQs
  const filteredFaqs = initialFaqs.filter(faq => {
    const qMatch = faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    const aMatch = extractText(faq.answer).toLowerCase().includes(searchQuery.toLowerCase())
    return qMatch || aMatch
  })

  // group FAQs
  const groupedFaqs = CATEGORIES.slice(1).map(cat => ({
    ...cat,
    faqs: filteredFaqs.filter(f => f.category === cat.id).sort((a, b) => (a.order || 0) - (b.order || 0))
  })).filter(cat => cat.faqs.length > 0)

  const faqsToShow = activeTab === 'all' 
    ? groupedFaqs
    : groupedFaqs.filter(cat => cat.id === activeTab)

  return (
    <div className="w-full max-w-[1000px] mx-auto py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 text-left">자주 묻는 질문</h1>

      {/* Search & Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-10">
        <div className="flex flex-wrap gap-2 order-2 md:order-1">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                activeTab === cat.id 
                  ? 'bg-white text-sunny-purple' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-56 shrink-0 order-1 md:order-2">
          <input
            type="text"
            placeholder="검색"
            className="w-full pl-10 pr-4 py-1.5 rounded-full bg-white/10 text-sm text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:border-white transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 w-4 h-4" />
        </div>
      </div>

      {/* FAQ List */}
      <div className="flex flex-col gap-12">
        {faqsToShow.length === 0 ? (
          <div className="text-center text-white/70 py-10 bg-white/5 rounded-3xl">
            검색 결과가 없습니다.
          </div>
        ) : (
          faqsToShow.map(group => (
            <div key={group.id} className="flex flex-col">
              {activeTab === 'all' && (
                <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b border-white/20">
                  {group.label}
                </h2>
              )}
              <div className="flex flex-col gap-8">
                {group.faqs.map(faq => (
                  <div key={faq._id} className="flex flex-col gap-3 pb-8 border-b border-white/10 last:border-0 last:pb-0 md:pr-40 lg:pr-72 relative z-20">
                    <h3 className="text-lg md:text-xl font-bold text-white flex items-start gap-2">
                      <span className="text-sunny-yellow shrink-0">Q.</span> 
                      <span>{faq.question}</span>
                    </h3>
                    <div className="mt-1.5 leading-relaxed">
                      <PortableText value={faq.answer} components={portableTextComponents} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
