import { client } from '@/sanity/lib/client';
import NewsArticleClient from './NewsArticleClient';
import { notFound } from 'next/navigation';

export const revalidate = 60;

async function getArticleAndRecent(slug: string) {
  // Fetch the current article
  const articleQuery = `*[_type == "article" && (slug.current == $slug || _id == $slug)][0] {
    _id,
    title,
    summary,
    "slug": coalesce(slug.current, _id),
    publishedAt,
    "thumbnailUrl": thumbnail.asset->url,
    body[]{
      ...,
      _type == "image" => {
        "url": asset->url,
        "alt": alt
      },
      _type == "slideshow" => {
        "images": images[]{
          "url": asset->url,
          "alt": alt
        }
      }
    },
    tags,
    "attachmentUrl": attachment.asset->url
  }`;
  
  const article = await client.fetch(articleQuery, { slug });
  
  if (!article) return { article: null, recent: [] };

  // Fetch 3 recent articles for the sidebar (excluding current)
  const recentQuery = `*[_type == "article" && _id != $currentId] | order(publishedAt desc) [0...3] {
    _id,
    title,
    category,
    publishedAt,
    "slug": coalesce(slug.current, _id),
    "thumbnailUrl": thumbnail.asset->url
  }`;
  
  const recent = await client.fetch(recentQuery, { currentId: article._id });
  
  return { article, recent };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug);
  const { article, recent } = await getArticleAndRecent(decodedSlug);
  
  if (!article) {
    notFound();
  }

  return <NewsArticleClient article={article} recentArticles={recent} />;
}
