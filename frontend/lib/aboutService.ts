// frontend/services/aboutService.ts
import api from './api';

export interface AboutData {
  id: number;
  description: string;
  vision: string;
  mission: string;
  values: string;
  hero_title: string;
  hero_subtitle: string;
  hero_image: string;
  created_at: string;
  updated_at: string;
}

export interface AboutValue {
  title: string;
  description: string;
  icon: string;
}

export async function getAboutData(): Promise<AboutData | null> {
  try {
    const response = await api.get('/about');
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching about data:', error);
    return null;
  }
}

export async function updateAboutData(data: Partial<AboutData>): Promise<AboutData | null> {
  try {
    const response = await api.post('/about/update', data);
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.error('Error updating about data:', error);
    return null;
  }
}

export function parseValues(valuesJson: string): AboutValue[] {
  try {
    return JSON.parse(valuesJson);
  } catch {
    return [];
  }
}

export function stringifyValues(values: AboutValue[]): string {
  return JSON.stringify(values);
}

export function formatMission(mission: string): string[] {
  return mission.split('\n').filter(line => line.trim());
}

export function formatMissionString(missionList: string[]): string {
  return missionList.join('\n');
}