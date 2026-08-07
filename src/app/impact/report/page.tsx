import { Suspense } from 'react';
import { client } from '../../../sanity/lib/client';
import ReportClient from './ReportClient';

export const revalidate = 60; // revalidate every 60 seconds

export default async function ReportPage() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    category,
    team,
    shortDescription,
    isMainFeatured,
    "slug": coalesce(slug.current, _id),
    "thumbnailUrl": thumbnail.asset->url,
    teamMembers,
    problemDetail,
    researchTarget,
    researchTopic,
    problemCauses,
    solution,
    vision,
    "visionSlideshow": visionSlideshow[].asset->url,
    "additionalImages": additionalImages[].asset->url,
    reportLink,
    "reportPdfUrl": reportPdf.asset->url
  }`;
  
  const projects = await client.fetch(query);

  return (
    <main className="min-h-screen pt-20">
      <Suspense fallback={<div>Loading...</div>}>
        <ReportClient initialProjects={projects} />
      </Suspense>
    </main>
  );
}
