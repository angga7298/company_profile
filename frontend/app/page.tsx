// app/page.tsx (Server Component - tetap dinamis dari API)
import api from '@/lib/api';
import HomeClient from './HomeClient';

async function getData() {
  try {
    const servicesRes = await api.get('/services');
    const portfoliosRes = await api.get('/portfolios');
    const pagesRes = await api.get('/pages');
    const aboutFisheryRes = await api.get('/pages/tentang-perikanan').catch(() => ({ data: null }));

    return {
      services: servicesRes.data.data || [],
      portfolios: portfoliosRes.data.data || [],
      allPages: pagesRes.data.data || [],
      aboutFishery: aboutFisheryRes.data?.data || null,
    };
  } catch (error) {
    return { services: [], portfolios: [], allPages: [], aboutFishery: null };
  }
}

export default async function Home() {
  const data = await getData();
  return <HomeClient {...data} />;
}