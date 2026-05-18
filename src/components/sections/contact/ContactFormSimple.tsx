'use client'

import Link from 'next/link'
import { Formik, Form, FormikHelpers } from 'formik'
import { toast } from 'sonner'

import { Button } from '@/components/ui/Button'
import CustomInput from '@/components/ui/CustomInput'
import CustomTextarea from '@/components/ui/CustomTextarea'
import { Text } from '@/components/ui/Text'
import { AppSection } from '@/components/ui/AppSection'
import { AppContainer } from '@/components/ui/AppContainer'
import { SectionHeader } from '@/components/ui/SectionHeader'
import {
  ContactFormData,
  contactSchema,
  fakeApiCall,
} from '@/components/sections/contact/ContactForm'
import CustomSelect from '@/components/ui/CustomSelect'

function ContactFormSimple() {
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
        <SectionHeader
          title="Ihr Projekt beginnt hier"
          subtitle="Ob Neubau, Modernisierung oder schnelle Hilfe – wir freuen uns auf Ihre Anfrage."
        />

        <Formik<ContactFormData>
          initialValues={{
            name: '',
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
              <div className="border-border/60 mx-auto max-w-xl rounded-3xl border bg-white p-6 shadow-xl shadow-black/5 lg:p-10">
                <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                  {/* <CustomInput label="Vorname" name="firstName" disabled={isSubmitting} />
                  <CustomInput label="Nachname" name="name" disabled={isSubmitting} /> */}

                  <div className="sm:col-span-2">
                    <CustomInput label="Name" name="name" disabled={isSubmitting} />
                  </div>

                  <div className="sm:col-span-1">
                    <CustomInput label="E-Mail" name="email" type="email" disabled={isSubmitting} />
                  </div>

                  <div className="sm:col-span-1">
                    <CustomInput label="Telefon" name="phone" type="tel" disabled={isSubmitting} />
                  </div>

                  <div className="sm:col-span-2">
                    <CustomSelect
                      label="Anliegen"
                      name="topic"
                      options={[
                        'Allgemeine Anfrage',
                        'Photovoltaik',
                        'Smart Home',
                        'Elektroinstallation',
                        'Wartung & Reparatur',
                        'Wallbox',
                        'Sonstiges',
                      ]}
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
                  {isSubmitting ? 'Wird gesendet...' : 'Kontakt aufnehmen'}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </AppContainer>
    </AppSection>
  )
}

export default ContactFormSimple
