<template>
  <section id="roadmap" class="block">
    <div class="wrap">
      <div class="sec-head">
        <span class="label">Development</span>
        <div>
          <h2>From first plates to commercial evaporators.</h2>
          <p>All tests use a water-to-water heat pump as the source of heat and cooling, the same setup the full-size units will use. The plates are developed and produced together with our partner Kuypers Kunststoftechniek.</p>
        </div>
      </div>
      <div class="dev">
        <ol class="road">
          <li v-for="step in steps" :key="step.title" :class="step.status">
            <span class="when">{{ step.when }}</span>
            <span class="pin"><i /></span>
            <div>
              <h3>{{ step.title }} <span class="state">{{ step.state }}</span></h3>
              <p>{{ step.text }}</p>
            </div>
          </li>
        </ol>
        <figure class="pilot">
          <img src="/images/pilot-v1.jpg" alt="The first EvaPlate pilot in a workshop: a stack of grey plastic plates clamped in an aluminium frame, with a control cabinet, pumps and piping beside it." width="960" height="1200" loading="lazy">
          <figcaption>The first EvaPlate pilot (V1), 2026.</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// status: 'done' = groene pin, 'now' = oranje pin, '' = nog gepland.
const steps = [
  { status: 'done', when: '2026', title: 'Pilot with V1 plates', state: 'Done', text: 'First generation of plates tested in a pilot setup over the past year. The results feed directly into the second plate design.' },
  { status: 'now', when: 'Now', title: 'V2 plate design', state: 'In progress', text: 'A redesigned plate with improved sealing, frame stiffness and easier replacement of the heat-transfer surfaces.' },
  { status: '', when: 'End of 2026', title: '100 L/h pilot', state: 'Next', text: 'V2 plates built into a new four-effect pilot producing 100 litres of condensate per hour.' },
  { status: '', when: '2027', title: 'EVA-500 and EVA-1000', state: 'Planned', text: 'Both full-size evaporators are built and tested: the EVA-500 (500 L/h condensate, 20 ft container) and the EVA-1000 (1,000 L/h condensate, 40 ft high-cube container).' },
  { status: '', when: 'End of 2027', title: 'Commercial availability', state: 'Target', text: 'First evaporators available to customers.' },
]
</script>
