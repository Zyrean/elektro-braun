import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

export default function NotFound() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center px-6 py-24 text-center md:py-48">
      <Text color="primary" size="lg" className="font-semibold">
        404
      </Text>

      <Heading as="h1" className="mt-4">
        Seite nicht gefunden
      </Heading>

      <Text className="mt-4" color="muted">
        Die Seite existiert nicht oder wurde verschoben.
      </Text>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href="/" className="w-full sm:w-52">
          Zur Startseite
        </Button>

        <Button href="/leistungen" variant="ghost" className="w-full sm:w-52">
          Leistungen ansehen
        </Button>
      </div>
    </div>
  )
}
