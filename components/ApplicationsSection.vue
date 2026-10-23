<template>
  <section id="applications" class="block">
    <div class="wrap">
      <div class="sec-head">
        <span class="label">Applications</span>
        <div>
          <h2>Where EvaPlate fits.</h2>
          <p>Industrial streams in the lower volume range, where conventional evaporators are too expensive to run.</p>
        </div>
      </div>
      <h3 class="sub">Four ways it pays off</h3>
      <div class="value">
        <div>
          <svg class="ico" viewBox="0 0 32 32" aria-hidden="true"><path d="M3 10h15v12H3zM18 14h6l4 4v4h-10" /><circle cx="8" cy="23.5" r="2.5" /><circle cx="23" cy="23.5" r="2.5" /><path d="M7 16h7" /></svg>
          <h3>Less disposal</h3>
          <p>Smaller volume to transport and treat off-site.</p>
        </div>
        <div>
          <svg class="ico" viewBox="0 0 32 32" aria-hidden="true"><ellipse cx="16" cy="7" rx="9" ry="3" /><path d="M7 7v18c0 1.7 4 3 9 3s9-1.3 9-3V7" /><path d="M19 13.5a4 4 0 1 0 0 6M11.5 15.5h5M11.5 17.5h5" /></svg>
          <h3>Concentrate to sell</h3>
          <p>Recovered nutrients or chemicals as a product.</p>
        </div>
        <div>
          <svg class="ico" viewBox="0 0 32 32" aria-hidden="true"><path d="M25 13a9.5 9.5 0 0 0-17-3.5M7 19a9.5 9.5 0 0 0 17 3.5" /><path d="M8 4.5v5h5M24 27.5v-5h-5" /></svg>
          <h3>Reuse in the process</h3>
          <p>Concentrate goes back into production, towards zero liquid discharge.</p>
        </div>
        <div>
          <svg class="ico" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4c4.5 6 8.5 10.5 8.5 15a8.5 8.5 0 0 1-17 0C7.5 14.5 11.5 10 16 4z" /><path d="M12 20a4 4 0 0 0 4 4" /></svg>
          <h3>Clean water</h3>
          <p>Distilled water for reuse, or as drinking water.</p>
        </div>
      </div>
      <h3 class="sub">Application areas</h3>
      <ul class="apps">
        <li v-for="app in areas" :key="app.name"><b>{{ app.name }}</b><span>{{ app.detail }}</span></li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const areas = [
  { name: 'Agriculture', detail: 'Digestate, liquid manure fraction, ammonium salts' },
  { name: 'Food & dairy', detail: 'Cheese brine and whey streams' },
  { name: 'Salt and brine regeneration', detail: 'Process baths and functional brines such as sulphate and chloride salts' },
  { name: 'Chemical wastewater', detail: 'Corrosive, alkaline or soap-rich streams' },
  { name: 'Fertiliser and nutrient solutions', detail: 'Final concentration step, for example after reverse osmosis' },
  { name: 'Decentralised water production', detail: 'Seawater and water-from-air systems at remote sites' },
]
</script>
