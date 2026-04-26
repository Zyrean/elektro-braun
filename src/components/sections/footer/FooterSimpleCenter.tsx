import { Text } from '@/components/ui/Text'
import { COMPANY } from '@/data/company'
import { YEAR } from '@/data/constants'
import { footerNavigation } from '@/data/footerNavigation'
import Link from 'next/link'

function FooterSimpleCenter() {
  return (
    <footer className="bg-background border-border border-t shadow-sm">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pt-10 pb-4 sm:pt-12 sm:pb-6 lg:px-8">
        <div className="-mb-6 flex justify-center gap-x-10">
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

        <nav
          aria-label="Footer"
          className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {footerNavigation.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              className="hover:text-primary w-20 text-center font-medium"
            >
              {nav.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 text-center">
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
    </footer>
  )
}

export default FooterSimpleCenter
