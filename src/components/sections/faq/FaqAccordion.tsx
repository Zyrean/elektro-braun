'use client'

import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Minus, Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Faq } from '@/types/general'

interface FaqAccordionProps {
  faqs: Faq[]
  title?: string
  subtitle?: string
}

function FaqAccordion({ faqs, title, subtitle }: FaqAccordionProps) {
  if (!faqs || faqs.length === 0) return null

  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          className="mb-16"
          title={title ?? 'Häufige Fragen zur Physiotherapie'}
          subtitle={subtitle}
        />

        <div className="mx-auto max-w-4xl">
          <dl className="divide-muted/20 divide-y">
            {faqs.map((faq) => (
              <Disclosure key={faq.id} as="div">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="group flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left">
                        <span className="text-foreground group-hover:text-primary text-[18px] font-semibold transition-colors lg:text-xl">
                          {faq.question}
                        </span>

                        {open ? (
                          <Minus
                            aria-hidden="true"
                            className="text-primary size-5 transition-transform duration-200"
                          />
                        ) : (
                          <Plus
                            aria-hidden="true"
                            className="text-muted group-hover:text-primary size-5 transition-transform duration-200"
                          />
                        )}
                      </DisclosureButton>
                    </dt>

                    <AnimatePresence initial={false}>
                      {open && (
                        <DisclosurePanel static as="dd">
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden pb-6"
                          >
                            <Text color="muted" className="max-w-3xl">
                              {faq.answer}
                            </Text>
                          </motion.div>
                        </DisclosurePanel>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </AppContainer>
    </AppSection>
  )
}

export default FaqAccordion
