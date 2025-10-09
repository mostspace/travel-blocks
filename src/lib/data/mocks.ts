import type { User, Post, ItineraryItem } from './types'

export const users: User[] = [
  { id: 1, name: 'Ava Patel', handle: 'avatravels', avatarUrl: 'https://i.pravatar.cc/96?img=5' },
  { id: 2, name: 'Lucas Chen', handle: 'wanderlucas', avatarUrl: 'https://i.pravatar.cc/96?img=15' },
];

export const posts: Post[] = [
  {
    id: 1,
    userId: 1,
    title: '7 Days in Kyoto: Temples, Tea, and Trains',
    summary: 'A breezy itinerary balancing classic sights with quiet neighborhoods and tea experiences.',
    coverUrl: 'https://picsum.photos/1600/1000?random=1',
    tags: ['Family', 'Budget', 'Japan'],
    createdAt: '2025-06-10T09:00:00.000Z',
    readMins: 8
  },
  {
    id: 2,
    userId: 2,
    title: 'Lisbon Long Weekend Guide',
    summary: 'Tiles, trams, and tascas: a compact 3‑day plan with miradouros for golden hour.',
    coverUrl: 'https://picsum.photos/1600/1000?random=2',
    tags: ['City', 'Foodie', 'Portugal'],
    createdAt: '2025-05-02T10:15:00.000Z',
    readMins: 6
  }
];

export const itinerary: ItineraryItem[] = [
  { 
    id: 'd1', 
    day: 1, 
    title: 'Fushimi Inari & Southern Higashiyama', 
    blurb: 'Start your journey with an early morning hike through thousands of vermillion torii gates at Fushimi Inari. Experience a traditional tea ceremony in Gion, then catch the sunset at the iconic Kiyomizu-dera temple with panoramic city views.', 
    image: 'https://picsum.photos/800/600?random=3', 
    durationHrs: 8, 
    costUSD: 35, 
    rating: 4.7 
  },
  { 
    id: 'd2', 
    day: 2, 
    title: 'Arashiyama Bamboo Grove & River Walk', 
    blurb: 'Explore the enchanting Arashiyama bamboo forest, visit the monkey park for stunning views, and enjoy authentic tofu kaiseki lunch by the Hozu River.', 
    image: 'https://picsum.photos/800/600?random=4', 
    durationHrs: 7, 
    costUSD: 28, 
    rating: 4.6 
  },
  { 
    id: 'd3', 
    day: 3, 
    title: 'Gion District & Nishiki Market', 
    blurb: 'Wander through historic Gion, visit Yasaka shrine, sample local delicacies at Nishiki market, and enjoy a specialty coffee crawl through hidden cafes.', 
    image: 'https://picsum.photos/800/600?random=5', 
    durationHrs: 6, 
    costUSD: 25, 
    rating: 4.5 
  },
  { 
    id: 'd4', 
    day: 4, 
    title: 'Philosopher\'s Path & Temples', 
    blurb: 'Walk the scenic Philosopher\'s Path lined with cherry trees, visit Ginkaku-ji (Silver Pavilion), and explore lesser-known temples tucked in the eastern hills.', 
    image: 'https://picsum.photos/800/600?random=6', 
    durationHrs: 5, 
    costUSD: 20, 
    rating: 4.8 
  },
  { 
    id: 'd5', 
    day: 5, 
    title: 'Kyoto Imperial Palace & Gardens', 
    blurb: 'Tour the former residence of the Imperial family, stroll through meticulously maintained gardens, and learn about Japanese imperial history.', 
    durationHrs: 4, 
    costUSD: 15, 
    rating: 4.4 
  },
  { 
    id: 'd6', 
    day: 6, 
    title: 'Day Trip to Nara', 
    blurb: 'Take a short train ride to Nara to meet friendly deer at Nara Park, visit the massive Todai-ji temple with its giant Buddha statue, and explore Kasuga Taisha shrine.', 
    image: 'https://picsum.photos/800/600?random=7', 
    durationHrs: 9, 
    costUSD: 45, 
    rating: 4.9 
  }
];
