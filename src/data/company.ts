import { SiInstagram, SiYoutube, SiFacebook } from 'react-icons/si'

export const COMPANY = {
  name: 'Elektro Braun',
  legalName: 'Elektro Braun GmbH',
  email: 'info@elektro-braun.de',
  website: 'https://www.elektro-braun.de',

  register: {
    court: 'Amtsgericht Freiburg',
    number: 'HRB 723845',
  },

  legal: {
    managingDirector: 'Thomas Braun',
    vatId: 'DE312948576',
  },

  phone: {
    raw: '07641938475',
    display: '07641 938 475',
  },

  address: {
    street: 'Dorfstraße 8',
    city: 'Buchholz',
    zip: '79183',
    country: 'Deutschland',
  },

  socials: [
    {
      name: 'instagram',
      url: 'https://www.instagram.com',
      icon: SiInstagram,
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com',
      icon: SiFacebook,
    },
    {
      name: 'youtube',
      url: 'https://www.youtube.com',
      icon: SiYoutube,
    },
  ],

  openingHours: {
    week: '07:30 – 17:00',
    saturday: 'Geschlossen',
    sunday: 'Geschlossen',
  },
}

export const COMPANY_FULL_ADDRESS = `${COMPANY.address.street}, ${COMPANY.address.zip} ${COMPANY.address.city}`

export const COMPANY_GOOGLE_MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_FULL_ADDRESS)}`

export const COMPANY_GOOGLE_MAPS_ROUTE = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY_FULL_ADDRESS)}`

export const COMPANY_GOOGLE_MAPS_EMBED =
  'https://www.google.com/maps?q=Dorfstra%C3%9Fe+8,+79183+Buchholz&output=embed'
