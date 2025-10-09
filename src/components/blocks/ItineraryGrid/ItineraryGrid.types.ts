export type ItineraryCard = {
  id: string;
  day: number;
  title: string;
  blurb: string;
  image?: string;
  durationHrs?: number;
  costUSD?: number;
  rating?: number;
}

export type ItineraryGridProps = {
  items: ItineraryCard[];
}
