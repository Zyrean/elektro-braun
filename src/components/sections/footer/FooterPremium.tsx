import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { COMPANY, COMPANY_GOOGLE_MAPS } from '@/data/company'
import { YEAR } from '@/data/constants'
import { headerNavigation } from '@/data/headerNavigation'
import Link from 'next/link'

function FooterPremium() {
  const headerStyle = `mb-1 rounded-full font-semibold uppercase underline decoration-1 underline-offset-4`

  return (
    <footer className="border-border flex-none border-t pt-12 pb-6 shadow-sm">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-between sm:items-baseline md:mx-auto md:flex-row md:justify-center md:gap-20">
          <div className="mt-8 flex flex-col gap-x-6 gap-y-1 text-center text-sm font-medium sm:w-40">
            <Heading as="h5" className={headerStyle}>
              {COMPANY.name}
            </Heading>

            <div className="mx-auto flex w-35 flex-col items-center space-y-1 text-sm font-medium">
              {headerNavigation.map((nav) => (
                <Link
                  key={nav.href}
                  href={nav.href}
                  className="hover:text-primary w-20 text-center"
                >
                  {nav.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="my-8 flex flex-col gap-x-6 gap-y-1 text-center text-sm sm:w-40 md:my-0">
            <Heading as="h5" className={headerStyle}>
              Öffnungszeiten
            </Heading>

            <div className="mx-auto grid w-fit grid-cols-[auto_1fr] justify-between gap-x-2 gap-y-1.5 text-start font-medium">
              <span>Mo – Fr:</span>
              <span>{COMPANY.openingHours.week}</span>

              <span>Sa:</span>
              <span>{COMPANY.openingHours.saturday}</span>

              <span>So:</span>
              <span>{COMPANY.openingHours.sunday}</span>
            </div>

            <div className="border-border mx-auto mt-8 hidden gap-6 border-t pt-6 md:flex">
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

          <div className="flex flex-col gap-x-6 gap-y-1 text-center text-sm sm:w-40">
            <Heading as="h5" className={headerStyle}>
              Kontakt
            </Heading>

            <div className="flex flex-col space-y-1 font-medium">
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

            <div className="border-border mx-auto mt-6 flex gap-6 border-t pt-6 md:hidden">
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
        </div>

        <div className="flex flex-col items-center">
          <div className="mt-4 flex items-center gap-4 text-sm font-medium">
            <Link className="hover:text-primary" href="/impressum">
              Impressum
            </Link>
            <Link className="hover:text-primary" href="/datenschutz">
              Datenschutz
            </Link>
          </div>

          <div className="mt-4 text-center">
            <Text size="sm" className="font-medium">
              &copy; {YEAR} {COMPANY.name}. Alle Rechte vorbehalten.
            </Text>

            <Text size="xs">
              Webseite von{' '}
              <a
                href="https://www.swapp-gmbh.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary decoration-1 underline-offset-4 hover:underline"
              >
                Swapp GmbH
              </a>
            </Text>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterPremium
