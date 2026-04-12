import api from '@/lib/api';
import { notFound } from 'next/navigation';

async function getPortfolio(id: string) {
  try {
    const res = await api.get(`/portfolios/${id}`);
    return res.data.data;
  } catch (error) {
    return null;
  }
}

export default async function PortfolioDetail({ params }: { params: { id: string } }) {
  const project = await getPortfolio(params.id);
  if (!project) notFound();

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      {project.image && <img src={project.image} alt={project.title} className="w-full h-80 object-cover rounded-lg mb-6" />}
      <div className="prose prose-lg max-w-none">
        {/* Render full_description yang bisa berisi HTML (paragraf, list, dll) */}
        <div dangerouslySetInnerHTML={{ __html: project.full_description }} />
      </div>
      <p className="text-sm text-gray-500 mt-4">Tanggal proyek: {new Date(project.project_date).toLocaleDateString('id-ID')}</p>
    </div>
  );
}