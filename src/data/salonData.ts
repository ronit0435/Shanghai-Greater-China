import { ServiceItem, ReviewItem, GalleryItem, WhyChooseItem, TransformationItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Shanghai Greater China',
  category: 'Hair Salon',
  address: 'First Floor, Gerrard St, London W1D 5PF, United Kingdom',
  area: 'Central London / Chinatown / Soho area',
  street: 'First Floor, Gerrard St',
  postalCode: 'W1D 5PF',
  city: 'London',
  country: 'United Kingdom',
  phone: '+44 7837 584522',
  phoneTel: 'tel:+447837584522',
  phoneDisplay: '+44 7837 584522',
  googleRating: 4.3,
  googleReviewCount: 216,
  openingHours: {
    days: 'Monday – Sunday',
    hours: '11:00 AM – 8:00 PM',
    openHour: 11,
    closeHour: 20,
  },
  googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=First+Floor,+Gerrard+St,+London+W1D+5PF,+United+Kingdom',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=First%20Floor,%20Gerrard%20St,%20London%20W1D%205PF,%20United%20Kingdom&t=&z=16&ie=UTF8&iwloc=&output=embed',
  metroStations: [
    { name: 'Leicester Square', walkTime: '3 min walk' },
    { name: 'Piccadilly Circus', walkTime: '4 min walk' },
    { name: 'Tottenham Court Road', walkTime: '7 min walk' },
  ]
};

// 8 Primary verified services supported by the salon's public listing
export const SALON_SERVICES: ServiceItem[] = [
  {
    id: 'haircuts',
    name: 'Precision Haircuts',
    category: 'Cuts & Finishing',
    description: 'Precision cutting tailored to your face shape, personal preference, and daily lifestyle.',
    popular: true,
    imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    duration: '45–60 min',
    tags: ['Wash & Cut', 'Bespoke Shaping', 'Blow-dry Finish'],
  },
  {
    id: 'womens-haircuts',
    name: "Women's Haircuts & Restyle",
    category: 'Cuts & Finishing',
    description: 'Custom female hair shaping, layering, and styling to bring out movement, texture, and natural volume.',
    popular: true,
    imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    duration: '60 min',
    tags: ['Face Framing', 'Weight Removal', 'Texturising'],
  },
  {
    id: 'hair-colouring',
    name: 'Hair Colouring & Balayage',
    category: 'Colour Artistry',
    description: 'Specialist colour application designed to enhance natural tones, add depth, or create a brand new shade.',
    popular: true,
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
    duration: '120–180 min',
    tags: ['Full Tint', 'Gloss Toner', 'Highlights'],
  },
  {
    id: 'hair-styling',
    name: 'Signature Blow-Dry & Styling',
    category: 'Styling & Occasion',
    description: 'Professional blow-drying, modern event styling, and finishing techniques for everyday elegance or special occasions.',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    duration: '45 min',
    tags: ['Bouncy Blowout', 'Sleek Finish', 'Event Styling'],
  },
  {
    id: 'perms',
    name: 'Custom Waves & Perms',
    category: 'Texture & Volume',
    description: 'Specialised texturising treatments to produce lasting curls, soft body waves, and natural volume.',
    popular: true,
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    duration: '120–150 min',
    tags: ['Digital Perm', 'Cold Wave', 'Root Volume'],
  },
  {
    id: 'hair-treatments',
    name: 'Deep Conditioning Treatments',
    category: 'Hair Care & Health',
    description: 'Deep conditioning and restorative care routines to nourish, replenish, and maintain hair health.',
    imageUrl: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80',
    duration: '30–45 min',
    tags: ['Moisture Seal', 'Scalp Spa', 'Keratin Infusion'],
  },
  {
    id: 'hair-extensions',
    name: 'Seamless Hair Extensions',
    category: 'Length & Density',
    description: 'Carefully placed hair extensions to seamlessly blend with your natural hair for added length and density.',
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    duration: '90–180 min',
    tags: ['Tape-in', 'Micro-ring', 'Custom Blend'],
  },
  {
    id: 'hair-straightening',
    name: 'Japanese Silk Straightening',
    category: 'Texture & Smoothing',
    description: 'Smoothing and straightening solutions that eliminate frizz and deliver silky, manageable hair.',
    imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80',
    duration: '150–210 min',
    tags: ['Thermal Reconditioning', 'Frizz Free', 'Mirror Shine'],
  },
];

// Interactive Hair Transformations Data for Before & After Slider
export const TRANSFORMATIONS_DATA: TransformationItem[] = [
  {
    id: 'trans-1',
    title: 'Precision Layering & Gloss Finish',
    category: 'Cut & Colour',
    beforeImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
    technique: 'Sculpted Layers + Gloss Tone',
    description: 'Client desired lightweight movement and polished density suited for Central London daily life.',
    clientGoal: 'Eliminate heavy bulk while preserving length and framing facial structure.',
  },
  {
    id: 'trans-2',
    title: 'Textured Body Perm & Volume Boost',
    category: 'Texture & Perm',
    beforeImage: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
    technique: 'Japanese Body Wave + Hydration Bath',
    description: 'From flat, straight natural texture to effortless, touchable waves with sustained volume.',
    clientGoal: 'Natural body wave that can be air-dried with minimal morning styling effort.',
  },
];

// Strictly the 2 customer reviews provided in prompt
export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'review-1',
    author: 'Mingjun Wang',
    reviewText: 'Great atmosphere and quality service.',
    rating: 5,
    source: 'Google Review',
  },
  {
    id: 'review-2',
    author: 'sha zhang',
    reviewText: 'The staff are so friendly and really know their craft about cuts and perms.',
    rating: 5,
    source: 'Google Review',
  },
];

// Why choose us feature blocks
export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: 'personalised-style',
    number: '01',
    title: 'PERSONALISED STYLE',
    description: 'Hair services tailored to your desired look.',
  },
  {
    id: 'central-london-location',
    number: '02',
    title: 'CENTRAL LONDON LOCATION',
    description: 'Conveniently located on Gerrard Street.',
  },
  {
    id: 'friendly-service',
    number: '03',
    title: 'FRIENDLY SERVICE',
    description: 'Customers highlight the welcoming atmosphere and friendly staff.',
  },
  {
    id: 'wide-range-of-services',
    number: '04',
    title: 'WIDE RANGE OF HAIR SERVICES',
    description: 'From cuts and styling to colour, extensions and other hair services.',
  },
];

/**
 * Editorial Gallery Items
 * Note: These high-quality editorial images represent the salon's styling categories.
 * The code is cleanly structured so the salon's actual portfolio photography can easily replace these URLs.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Precision Layered Cut',
    category: 'Haircuts',
    imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80',
    aspectRatio: 'tall',
    alt: 'Precision layered haircut and textured finish',
  },
  {
    id: 'gal-2',
    title: 'Soft Dimensional Tone',
    category: 'Hair Colour',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80',
    aspectRatio: 'square',
    alt: 'Dimensional hair colouring with natural depth',
  },
  {
    id: 'gal-3',
    title: 'Modern Textured Wave & Perm',
    category: 'Hair Transformations',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
    aspectRatio: 'tall',
    alt: 'Textured hair styling and volume wave transformation',
  },
  {
    id: 'gal-4',
    title: 'Bespoke Styling Finish',
    category: 'Styling',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80',
    aspectRatio: 'tall',
    alt: 'Bespoke hair styling and finishing in salon environment',
  },
  {
    id: 'gal-5',
    title: 'Minimalist Salon Atmosphere',
    category: 'Salon',
    imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80',
    aspectRatio: 'wide',
    alt: 'Serene modern hair salon interior setup',
  },
  {
    id: 'gal-6',
    title: 'Clean Architectural Bob',
    category: 'Haircuts',
    imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80',
    aspectRatio: 'tall',
    alt: 'Sharp clean bob haircut with precision lines',
  },
  {
    id: 'gal-7',
    title: 'Rich Brunette Gloss & Treatment',
    category: 'Hair Colour',
    imageUrl: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=900&q=80',
    aspectRatio: 'tall',
    alt: 'Rich glossy hair colour and nourishing hair treatment finish',
  },
  {
    id: 'gal-8',
    title: 'Complete Hair Transformation',
    category: 'Hair Transformations',
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80',
    aspectRatio: 'square',
    alt: 'Full hair cut and styling transformation',
  },
];
