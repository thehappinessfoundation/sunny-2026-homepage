import { client } from '@/sanity/lib/client';
import NewsListClient from './NewsListClient';

export const revalidate = 60;

async function getArticles() {
  const query = `*[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    summary,
    category,
    "slug": coalesce(slug.current, _id),
    publishedAt,
    "thumbnailUrl": thumbnail.asset->url,
    tags
  }`;
  return client.fetch(query);
}

export default async function NewsPage() {
  const articles = await getArticles();

  return (
    <div className="w-full max-w-[1000px] mx-auto pt-12 pb-6 md:py-32 px-4 min-h-[70vh] flex flex-col">
      <div className="w-full">
        <div className="relative mb-8 md:mb-16">
          {/* Title & Subtitle */}
          <div className="relative z-10 w-full max-w-[240px] sm:max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-left">뉴스룸</h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Sunny의 다양한 활동과<br className="block sm:hidden" /> 임팩트를 전해드립니다.
            </p>
          </div>

          {/* Illustration: 40% larger, positioned on the right on PC without affecting title top alignment */}
          <div className="mt-4 md:mt-0 md:absolute md:right-0 md:-top-4 z-0 pointer-events-none flex justify-start md:justify-end">
            <img src="/newsroom.svg" alt="" className="h-[140px] sm:h-[180px] md:h-[290px] lg:h-[320px] object-contain drop-shadow-xl" />
          </div>
        </div>

        <NewsListClient articles={articles} />
      </div>
    </div>
  );
}
