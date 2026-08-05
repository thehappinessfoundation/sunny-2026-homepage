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
      <div className="absolute right-0 top-[10%] md:top-[20%] z-0 pointer-events-none opacity-80 mix-blend-lighten translate-x-[10%]">
        <img src="/faq.png" alt="" className="h-[200px] md:h-[300px] lg:h-[400px] object-contain drop-shadow-2xl" />
      </div>
      <div className="relative z-10">
        <FaqClient initialFaqs={faqs} />
      </div>
    </div>
  )
}
