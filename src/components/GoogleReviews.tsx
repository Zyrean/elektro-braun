import StarRatingGroup from '@/components/StarRatingGroup'
import { COMPANY_GOOGLE_MAPS } from '@/data/company'

function GoogleReviews() {
  return (
    <div className="mb-6 flex flex-col items-center gap-2">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <StarRatingGroup />
        <span>4.9 von 5</span>
      </div>
      <p className="text-sm">
        Basierend auf 87{' '}
        <a
          href={COMPANY_GOOGLE_MAPS}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-hover text-sm font-semibold underline decoration-1 underline-offset-4 transition"
        >
          Google Bewertungen
        </a>
      </p>
    </div>
  )
}

export default GoogleReviews
