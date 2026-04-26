import Logo from '@/components/Logo'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { COMPANY, COMPANY_GOOGLE_MAPS } from '@/data/company'
import { YEAR } from '@/data/constants'
import { footerNavigation } from '@/data/footerNavigation'
import Link from 'next/link'

function FooterGrid() {
  const headerStyle = 'mb-3 font-semibold uppercase'

  return (
    <footer className="bg-background border-border border-t shadow-sm">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        <div className="w-full lg:flex lg:justify-between">
          <div className="mb-8 flex flex-col items-center space-y-6 lg:mb-0 lg:items-start">
            <Logo />
            <Text className="max-w-60 text-center lg:text-start">
              Individuelle Therapie für mehr Beweglichkeit, Gesundheit und Lebensqualität.
            </Text>
            <div className="flex gap-x-6">
              {COMPANY.socials.map((item) => (
                <a target="_blank" rel="noopener noreferrer" key={item.name} href={item.url}>
                  <span className="sr-only">{item.name}</span>
                  <item.icon
                    aria-hidden="true"
                    className="text-muted hover:text-primary size-5 transition"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-8 sm:items-baseline md:flex-row md:justify-center md:gap-16 lg:items-start lg:pr-10">
            <div className="mt-8 flex flex-col gap-x-6 gap-y-1 text-center sm:w-40 lg:mt-0">
              <Heading as="h5" className={headerStyle}>
                {COMPANY.name}
              </Heading>

              <div className="flex flex-col items-center space-y-3 text-sm font-normal">
                {footerNavigation.map((nav) => (
                  <Link key={nav.href} href={nav.href} className="hover:text-primary">
                    {nav.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="my-8 flex flex-col gap-x-6 gap-y-1 text-center text-sm sm:w-40 md:my-0">
              <Heading as="h5" className={headerStyle}>
                Öffnungszeiten
              </Heading>

              <div className="mx-auto flex w-full flex-col gap-y-1.5 text-start font-normal">
                <div className="flex justify-between">
                  <p>Mo – Fr:</p>
                  <p>{COMPANY.openingHours.week}</p>
                </div>

                <div className="flex justify-between">
                  <span>Sa:</span>
                  <span>{COMPANY.openingHours.saturday}</span>
                </div>

                <div className="flex justify-between">
                  <span>So:</span>
                  <span>{COMPANY.openingHours.sunday}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-x-6 gap-y-1 text-center sm:w-40">
              <Heading as="h5" className={headerStyle}>
                Kontakt
              </Heading>

              <div className="flex flex-col space-y-3 text-sm font-normal">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                  href={COMPANY_GOOGLE_MAPS}
                >
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.zip} {COMPANY.address.city}
                </a>
                <a href={`tel:${COMPANY.phone.raw}`} className="hover:text-primary">
                  {COMPANY.phone.display}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-primary">
                  E-Mail: {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-border mt-16 border-t pt-8 text-center sm:text-left">
          <Text size="sm" className="font-medium">
            &copy; {YEAR} {COMPANY.name}. Alle Rechte vorbehalten.
          </Text>

          <Text size="xs">
            Webseite von{' '}
            <a
              href="https://www.swapp-gmbh.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary font-medium underline decoration-1 underline-offset-4"
            >
              Swapp GmbH
            </a>
          </Text>
        </div>
      </div>
    </footer>
  )
}

export default FooterGrid
