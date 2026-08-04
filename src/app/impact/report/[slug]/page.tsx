import { client } from '@/sanity/lib/client';
import ReportArticleClient from './ReportArticleClient';
import { notFound } from 'next/navigation';

export const revalidate = 60;

async function getProjectAndRecent(slug: string) {
  // Fetch the current project
  const projectQuery = `*[_type == "project" && (slug.current == $slug || _id == $slug)][0] {
    _id,
    title,
    team,
    shortDescription,
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
  
  const project = await client.fetch(projectQuery, { slug });
  
  if (!project) return { project: null, recent: [] };

  // Fetch 3 recent projects for the sidebar (excluding current)
  const recentQuery = `*[_type == "project" && _id != $currentId] | order(publishedAt desc, _createdAt desc) [0...3] {
    _id,
    title,
    category,
    team,
    publishedAt,
    "slug": coalesce(slug.current, _id),
    "thumbnailUrl": thumbnail.asset->url
  }`;
  
  const recent = await client.fetch(recentQuery, { currentId: project._id });
  
  return { project, recent };
}

export default async function ReportArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug);
  const { project, recent } = await getProjectAndRecent(decodedSlug);
  
  if (!project) {
    notFound();
  }

  return <ReportArticleClient project={project} recentProjects={recent} />;
}
