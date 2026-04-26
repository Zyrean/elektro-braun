import { Text } from '@/components/ui/Text'
import { COMPANY } from '@/data/company'
import { YEAR } from '@/data/constants'

function FooterSimpleSocial() {
  return (
    <footer className="bg-background border-border border-t shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
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

        <div>
          <Text size="sm" className="mt-8 text-center font-medium md:order-1 md:mt-0">
            &copy; {YEAR} {COMPANY.name}. Alle Rechte vorbehalten.
          </Text>

          <Text size="xs" className="text-center sm:text-left">
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

export default FooterSimpleSocial
