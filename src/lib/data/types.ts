export type User = { id: number; name: string; handle: string; avatarUrl?: string };
export type Post = {
  id: number; userId: number; title: string; summary: string;
  coverUrl?: string; tags?: string[]; createdAt: string; readMins?: number;
};
export type ItineraryItem = {
  id: string; day: number; title: string; blurb: string;
  image?: string; durationHrs?: number; costUSD?: number; rating?: number;
};
