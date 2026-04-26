import { SiInstagram, SiYoutube, SiFacebook } from 'react-icons/si'

export const COMPANY = {
  name: 'Physio Balance',
  legalName: 'Physio Balance GmbH',
  email: 'info@physio-balance.de',
  website: 'https://www.physio-balance.de',

  register: {
    court: 'Amtsgericht Freiburg',
    number: 'HRB 718392',
  },

  legal: {
    managingDirector: 'Lukas Weber',
    vatId: 'DE298374651',
  },

  phone: {
    raw: '07641927461',
    display: '07641 927 461',
  },

  address: {
    street: 'Hochburger Straße 15',
    city: 'Emmendingen',
    zip: '79312',
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
    week: '08:00 – 18:00',
    saturday: 'Geschlossen',
    sunday: 'Geschlossen',
  },
}

export const COMPANY_FULL_ADDRESS = `${COMPANY.address.street}, ${COMPANY.address.zip} ${COMPANY.address.city}`

export const COMPANY_GOOGLE_MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_FULL_ADDRESS)}`

export const COMPANY_GOOGLE_MAPS_ROUTE = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY_FULL_ADDRESS)}`

export const COMPANY_GOOGLE_MAPS_EMBED =
  'https://www.google.com/maps?q=Hochburger+Stra%C3%9Fe+15,+79312+Emmendingen&output=embed'
