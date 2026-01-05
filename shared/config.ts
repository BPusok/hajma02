/**
 * Application configuration constants
 * Shared between client and server
 */

export const COMPANY_CONFIG = {
  name: 'hajmafolia',
  displayName: 'Hajma fólia',
  tagline: 'LLumar® Partner',
  description: 'Prémium autófóliázási szolgáltatások Llumar termékekkel.',

  contact: {
    phone: '+36 1 234 5678',
    email: 'info@hajmafolia.hu',
    address: 'Budapest, Magyarország',
  },

  social: {
    website: 'https://hajmafolia.netlify.app',
  },

  businessHours: {
    mondayToFriday: '9:00 - 18:00',
    saturday: '10:00 - 16:00',
    sunday: 'Zárva',
  },

  stats: {
    experience: '8+',
    clients: '500+',
    warranty: '100%',
    cars: '1000+',
  },
} as const;

