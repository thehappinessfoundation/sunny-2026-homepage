import { client } from '@/sanity/lib/client'
import FaqClient from './FaqClient'

export const revalidate = 60 // Revalidate every 60 seconds

async function getFaqs() {
  const query = `*[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    category,
    order
  }`
  return client.fetch(query)
}

export default async function FAQPage() {
  const faqs = await getFaqs()
  
  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      <div className="absolute left-[40%] md:left-[65%] lg:left-[70%] top-[20%] md:top-[30%] z-0 pointer-events-none opacity-60 md:opacity-100 mix-blend-lighten">
        <img src="/faq.svg" alt="" className="h-[280px] md:h-[420px] lg:h-[560px] object-contain drop-shadow-2xl" />
      </div>
      <div className="relative z-10">
        <FaqClient initialFaqs={faqs} />
      </div>
    </div>
  )
}
