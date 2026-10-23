interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  interest: string
  message: string
}

interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}

export function useContactForm() {
  const form = reactive<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: 'general',
    message: '',
  })

  const errors = reactive<ContactFormErrors>({})
  const submitting = ref(false)
  const submitted = ref(false)
  const submitError = ref(false)

  function validate(): boolean {
    errors.name = form.name.trim() ? undefined : 'required'
    errors.email = form.email.trim()
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? undefined : 'invalid_email'
      : 'required'
    errors.message = form.message.trim() ? undefined : 'required'

    return !errors.name && !errors.email && !errors.message
  }

  async function submit() {
    if (!validate()) return

    submitting.value = true
    submitError.value = false

    try {
      // Formspree endpoint — replace YOUR_FORM_ID with actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xaqaywzo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          interest: form.interest,
          message: form.message,
        }),
      })

      if (response.ok) {
        submitted.value = true
      } else {
        submitError.value = true
      }
    } catch {
      submitError.value = true
    } finally {
      submitting.value = false
    }
  }

  return { form, errors, submitting, submitted, submitError, validate, submit }
}
