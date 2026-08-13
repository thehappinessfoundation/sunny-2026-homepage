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
    <div className="min-h-screen relative overflow-hidden flex flex-col justify-between">
      <div className="relative z-10">
        <FaqClient initialFaqs={faqs} />
      </div>

      {/* Megaphone Illustration: On Mobile, right-shifted off-screen bleed above footer. On Desktop, right side */}
      <div className="relative md:absolute bottom-0 md:bottom-auto flex justify-end md:block right-0 md:right-auto md:left-[65%] lg:left-[70%] md:top-[30%] z-0 pointer-events-none opacity-85 md:opacity-100 my-4 md:my-0">
        <img src="/faq.svg" alt="" className="h-[200px] sm:h-[240px] md:h-[420px] lg:h-[560px] object-contain drop-shadow-2xl translate-x-10 md:translate-x-0" />
      </div>
    </div>
  )
}
