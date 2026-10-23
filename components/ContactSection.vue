<template>
  <section id="contact" class="contact">
    <div class="wrap">
      <div>
        <span class="label">Contact</span>
        <h2>Do you have an application?</h2>
        <p>Whether you want to follow the pilot results, discuss a possible application or explore working together, we are happy to talk. If you have a stream in mind, it helps to share its volume and composition.</p>
      </div>
      <div class="cdetails">
        <div>
          <span class="label">Email</span>
          <div class="mail">
            <span ref="emailEl">{{ email }}</span>
            <button class="copy" type="button" @click="copyEmail">{{ copyLabel }}</button>
          </div>
        </div>
        <div>
          <span class="label">Address</span>
          <address>EvaPlate BV<br>Diamantweg 48<br>5527 LC Hapert<br>The Netherlands</address>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = 'info@evaplate.com'
const emailEl = ref<HTMLElement | null>(null)
const copyLabel = ref('Copy')

function flash(label: string) {
  copyLabel.value = label
  setTimeout(() => { copyLabel.value = 'Copy' }, 1800)
}

// Zonder clipboard-toegang selecteren we het adres, zodat de bezoeker het zelf kan kopiëren.
function selectEmail() {
  if (!emailEl.value) return
  const range = document.createRange()
  range.selectNodeContents(emailEl.value)
  const selection = getSelection()
  selection?.removeAllRanges()
  selection?.addRange(range)
  flash('Selected')
}

function copyEmail() {
  try {
    navigator.clipboard.writeText(email).then(() => flash('Copied'), selectEmail)
  }
  catch {
    selectEmail()
  }
}
</script>
