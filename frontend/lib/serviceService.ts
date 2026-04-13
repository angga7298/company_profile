import api from './api';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string | null;
  image: string | null;
}

// ========== PUBLIC ==========
export async function getServices(): Promise<Service[]> {
  try {
    const res = await api.get('/services');
    return res.data.data || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getServiceById(id: number | string): Promise<Service | null> {
  try {
    const res = await api.get(`/services/${id}`);
    return res.data.data || null;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

// ========== ADMIN ==========
export async function createService(formData: FormData): Promise<Service | null> {
  try {
    const res = await api.post('/admin/services', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data.data || null;
  } catch (error) {
    console.error('Error creating service:', error);
    throw error;
  }
}

export async function updateService(id: number | string, formData: FormData): Promise<Service | null> {
  try {
    formData.append('_method', 'PUT');
    const res = await api.post(`/admin/services/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data.data || null;
  } catch (error) {
    console.error('Error updating service:', error);
    throw error;
  }
}

export async function deleteService(id: number | string): Promise<boolean> {
  try {
    await api.delete(`/admin/services/${id}`);
    return true;
  } catch (error) {
    console.error('Error deleting service:', error);
    return false;
  }
}
