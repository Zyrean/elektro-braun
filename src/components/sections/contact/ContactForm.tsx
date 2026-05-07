'use client'

import Link from 'next/link'
import { Formik, Form, FormikHelpers } from 'formik'
import { z } from 'zod'
import { toast } from 'sonner'

import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'
import CustomInput from '@/components/ui/CustomInput'
import CustomTextarea from '@/components/ui/CustomTextarea'
import { Text } from '@/components/ui/Text'
import { AppSection } from '@/components/ui/AppSection'
import { AppContainer } from '@/components/ui/AppContainer'
import Image from 'next/image'

export async function fakeApiCall() {
  return new Promise((resolve) => setTimeout(resolve, 1500))
}

export const contactSchema = z
  .object({
    firstName: z.string().min(2, 'Bitte geben Sie Ihren Vornamen ein.'),
    secondName: z.string().min(2, 'Bitte geben Sie Ihren Nachnamen ein.'),
    email: z
      .string()
      .trim()
      .refine(
        (val) => val === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      ),
    phone: z.string().refine(
      (val) => {
        if (!val) return false
        return /^[0-9+\s/-]{6,}$/.test(val)
      },
      {
        message: 'Bitte geben Sie eine gültige Telefonnummer ein.',
      },
    ),
    message: z.string().min(5, 'Bitte beschreiben Sie Ihr Anliegen kurz.'),
  })
  .strict()

export type ContactFormData = z.infer<typeof contactSchema>

function ContactForm() {
  // const iconStyle = 'h-5.5 w-5.5 text-muted transition-colors duration-200 group-hover:text-primary'

  // const addressStyle =
  //   'flex items-center group gap-x-4 w-fit transition-colors duration-200 hover:text-primary hover:underline hover:underline-offset-4 decoration-1'

  async function onSubmit(values: ContactFormData, actions: FormikHelpers<ContactFormData>) {
    // const sanitizedData = {
    //   firstName: sanitizeInput(values.firstName),
    //   secondName: sanitizeInput(values.secondName),
    //   email: sanitizeInput(values.email),
    //   message: sanitizeInput(values.message),
    //   anfragegrund: sanitizeInput(values.anfragegrund),
    //   toggle: values.toggle,
    // };

    // await sendEmail({
    //   to: "info@swapp-gmbh.de",
    //   subject: `Kontaktanfrage von ${sanitizedData.firstName} ${sanitizedData.secondName} *${sanitizedData.anfragegrund}*`,
    //   text: `Name: \n${sanitizedData.firstName} ${sanitizedData.secondName}\n\nE-Mail:\n${sanitizedData.email}\n\nAnfragegrund:\n${sanitizedData.anfragegrund}\n\nNachricht:\n${sanitizedData.message}`,
    // });

    // await sendEmail({
    //   to: `${sanitizedData.email}`,
    //   subject: `Bestätigung der Kontaktanfrage an Swapp GmbH`,
    //   text: `Sehr geehrte/r ${sanitizedData.firstName} ${sanitizedData.secondName},\n\nIhre Kontaktanfrage wurde erfolgreich versandt.\n\nFür weitere Fragen stehe ich Ihnen sehr gerne zur Verfügung.\n\nMit freundlichen Grüßen\n\nStephan Winzer\nSwapp GmbH\n\n\n\nIhr Kontaktformular:\n\nName: \n${sanitizedData.firstName} ${sanitizedData.secondName}\n\nE-Mail:\n${sanitizedData.email}\n\nAnfragegrund:\n${sanitizedData.anfragegrund}\n\nNachricht:\n${sanitizedData.message}`,
    // });

    // await sendEmailMongodb({
    //   name: `${sanitizedData.firstName} ${sanitizedData.secondName}`,
    //   email: sanitizedData.email,
    //   anfragegrund: sanitizedData.anfragegrund,
    //   message: sanitizedData.message,
    // });

    try {
      await toast.promise(fakeApiCall(), {
        loading: 'Wird gesendet...',
        success: 'Erfolgreich gesendet!',
        error: 'Fehler beim Senden',
      })

      actions.resetForm()
    } catch (error) {
      console.error(error)
    } finally {
      actions.setSubmitting(false)
    }
  }

  return (
    <AppSection id="contact-form" className="scroll-mt-15 lg:scroll-mt-30" top="sm">
      <AppContainer size="5xl">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-10">
          <div className="relative">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <Heading as="h2" className="mt-1">
                Termin anfragen
              </Heading>

              <Text color="muted" size="sm" className="mt-4 lg:max-w-md">
                Sie haben Fragen oder möchten einen Termin vereinbaren? Nutzen Sie einfach das
                Formular oder rufen Sie uns an – wir melden uns in der Regel innerhalb von 24
                Stunden bei Ihnen.
              </Text>

              <div className="relative mt-4 aspect-4/3 w-full max-w-3xl overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/team/team-teaser.png"
                  alt="Unser Physiotherapie Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <Formik<ContactFormData>
            initialValues={{
              firstName: '',
              secondName: '',
              email: '',
              phone: '',
              message: '',
            }}
            validate={(values) => {
              const result = contactSchema.safeParse(values)

              if (result.success) return {}

              return result.error.flatten().fieldErrors
            }}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                  <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                    <CustomInput label="Vorname" name="firstName" disabled={isSubmitting} />

                    <CustomInput label="Nachname" name="secondName" disabled={isSubmitting} />

                    <div className="sm:col-span-2">
                      <CustomInput
                        label="E-Mail"
                        name="email"
                        type="email"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <CustomInput
                        label="Telefon"
                        name="phone"
                        type="tel"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <CustomTextarea
                        label="Nachricht"
                        name="message"
                        placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <Text color="muted" size="xs" className="mt-1.5 ml-1">
                    Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{' '}
                    <Link
                      href="/datenschutz"
                      className="hover:text-primary font-semibold decoration-1 underline-offset-4 hover:underline"
                    >
                      Datenschutzerklärung
                    </Link>{' '}
                    zu. Ihre Daten behandeln wir vertraulich. In der Regel melden wir uns innerhalb
                    von 24 Stunden bei Ihnen zurück.
                  </Text>

                  <Button className="mt-6" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Wird gesendet...' : 'Termin anfragen'}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </AppContainer>
    </AppSection>
  )
}

export default ContactForm
