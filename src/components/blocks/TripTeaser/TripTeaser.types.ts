export type TripTeaserProps = {
  title: string;
  summary: string;
  coverUrl?: string;
  tags?: string[];
  author?: { name: string; avatarUrl?: string };
  createdAt?: string;
  readMins?: number;
  primaryCta?: { label: string; onClick?: () => void; href?: string };
  secondaryCta?: { label: string; onClick?: () => void; href?: string };
};
