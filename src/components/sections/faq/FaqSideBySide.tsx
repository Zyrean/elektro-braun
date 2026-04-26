import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { faqs } from '@/data/faqs'

function FaqSideBySide() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          className="mb-16"
          title="Häufige Fragen zur Physiotherapie"
          subtitle="Antworten auf häufige Fragen zu Ablauf, Rezepten und organisatorischen Themen."
        />
        <dl className="divide-muted/20 divide-y">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-foreground text-xl font-semibold lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <Text color="muted">{faq.answer}</Text>
              </dd>
            </div>
          ))}
        </dl>
      </AppContainer>
    </AppSection>
  )
}

export default FaqSideBySide
