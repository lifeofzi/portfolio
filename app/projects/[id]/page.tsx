import { notFound } from 'next/navigation';
import { Navigation } from '@/components/molecules/Navigation';
import { ProjectDetail } from '@/components/organisms/ProjectDetail';
import { getProjectById } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <ProjectDetail project={project} />
    </main>
  );
}

