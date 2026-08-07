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
    <div className="min-h-screen pt-40 md:pt-56 pb-32">
      <div className="container-pc !max-w-[1000px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 relative">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-left">뉴스룸</h1>
            <p className="text-gray-300 text-lg">Sunny의 다양한 활동과 임팩트를 전해드립니다.</p>
          </div>
        </div>
        <NewsListClient articles={articles} />
      </div>
    </div>
  );
}
