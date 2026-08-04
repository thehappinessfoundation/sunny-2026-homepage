import { client } from '@/sanity/lib/client';
import HomeClient from './HomeClient';

export const revalidate = 60; // Revalidate every 60 seconds

async function getFeaturedNews() {
  const query = `*[_type == "article" && isMainFeatured == true] | order(mainOrder asc) [0...3] {
    _id,
    title,
    "slug": coalesce(slug.current, _id),
    publishedAt,
    "thumbnailUrl": thumbnail.asset->url
  }`;
  
  return await client.fetch(query);
}

async function getFeaturedProjects() {
  const query = `*[_type == "project" && isMainFeatured == true] | order(mainOrder asc) [0...5] {
    _id,
    title,
    team,
    innovator,
    period,
    cardColor,
    "slug": coalesce(slug.current, _id),
    "thumbnailUrl": thumbnail.asset->url,
    "appImageUrl": appImage.asset->url
  }`;
  return await client.fetch(query);
}

export default async function Home() {
  const featuredNews = await getFeaturedNews();
  const featuredProjects = await getFeaturedProjects();

  return <HomeClient featuredNews={featuredNews} featuredProjects={featuredProjects} />;
}
