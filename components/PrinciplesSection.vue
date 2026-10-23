<template>
  <section id="principles" class="block">
    <div class="wrap">
      <div class="sec-head">
        <span class="label">Design principles</span>
        <div>
          <h2>Built to be accessible.</h2>
          <p>Most evaporators are welded vessels of special alloys, hard to reach inside and prone to corrosion and fouling. EvaPlate takes a different route, borrowing from the plate-and-frame filter press. Every principle below aims at a lower cost over the lifetime of the unit.</p>
        </div>
      </div>
      <div class="principles">
        <article v-for="item in principles" :key="item.title" class="pr">
          <span class="label">{{ item.label }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const principles = [
  { label: 'Material', title: 'Polypropylene plates', text: 'The evaporator core is built from PP plates. Plastic does not corrode, so no expensive alloys or anti-corrosion chemicals are needed.' },
  { label: 'Access', title: 'Opens like a filter press', text: 'Release the clamping and slide the plates apart. The heat-transfer surfaces can be inspected, cleaned or replaced on site, by your own staff.' },
  { label: 'Capacity', title: 'Scales by plate count', text: 'Each evaporation plate is designed for about 20 L/h of condensate. Capacity is set by how many plates sit in the stack.' },
  { label: 'Energy', title: 'Electric, heat-pump driven', text: 'Heating and cooling come from one water-to-water heat pump. No steam boiler, no gas, no separate cooling supply: just a power connection.' },
  { label: 'Deployment', title: 'Containerised', text: 'Stack, heat exchangers, pumps and controls are laid out to fit a shipping container, so a unit can be delivered complete and moved between sites.' },
  { label: 'End of life', title: 'Designed for recycling', text: 'The plates are made from a single polymer type, so the evaporation core can be recycled at the end of its service life.' },
]
</script>
