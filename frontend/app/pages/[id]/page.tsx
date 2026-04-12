import api from '@/lib/api';
import { notFound } from 'next/navigation';

async function getPage(slug: string) {
  if (!slug) return null;
  try {
    // Paksa lowercase untuk amannya
    const res = await api.get(`/pages/${slug.toLowerCase()}`);
    return res.data.data;
  } catch (err) {
    console.error('Fetch error:', err);
    return null;
  }
}

export default async function PageDetail({ params }: { params: { slug: string } }) {
  const slug = params.slug?.toLowerCase(); // lowercase dari URL
  console.log('Slug yang diproses:', slug);
  const page = await getPage(slug);
  if (!page) notFound();
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">{page.title}</h1>
      {page.featured_image && <img src={page.featured_image} alt={page.title} className="w-full h-64 object-cover rounded mb-6" />}
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
}