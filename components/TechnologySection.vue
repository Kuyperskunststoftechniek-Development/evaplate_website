<template>
  <section id="technology" class="block">
    <div class="wrap">
      <div class="sec-head">
        <span class="label">Technology</span>
        <div>
          <h2>The same vapour, used again and again.</h2>
          <p>EvaPlate is a multi-effect evaporator (MED) of the falling-film type. It runs under vacuum, so water boils at low temperatures. That is what lets us build the evaporator from plastic. The number of effects can be chosen from 1 to 6, or more if required.</p>
        </div>
      </div>

      <div class="diagram" role="img" aria-label="Process diagram. The heat pump's hot side heats the preheater, where part of the feed flashes to vapour. That vapour heats effect 1. Vapour from each effect heats the next, down to effect 4. Vapour from effect 4 condenses in the condenser, cooled by the heat pump's cold side. Condensate and concentrate leave the stack.">
        <svg viewBox="0 0 1000 330" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:var(--ink)" /></marker>
            <marker id="arm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:var(--muted)" /></marker>
            <marker id="ara" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:var(--accent)" /></marker>
          </defs>

          <!-- feed -->
          <text x="20" y="30" class="t-m">FEED IN</text>
          <path d="M70 26 H150 V66" class="flow" marker-end="url(#ar)" />

          <!-- preheater -->
          <rect x="100" y="70" width="130" height="80" rx="6" class="box" />
          <rect x="100" y="70" width="5" height="80" style="fill:var(--hot)" />
          <text x="116" y="100" class="t-b">Preheater</text>
          <text x="116" y="118" class="t-s">+ vapour separator</text>
          <text x="116" y="136" class="t-m">~10% flashes</text>
          <path d="M230 110 H282" class="vap" marker-end="url(#arm)" />

          <!-- effects -->
          <g v-for="(effect, i) in effects" :key="effect.name">
            <text :x="effect.x" y="58" class="t-b">{{ effect.name }}</text>
            <rect v-for="p in 5" :key="p" :x="effect.x + (p - 1) * 14" y="70" width="10" height="80" :style="`fill:var(${effect.color})`" />
            <text v-if="effect.note" :x="effect.x" y="172" class="t-m">{{ effect.note }}</text>
            <path v-if="i < effects.length - 1" :d="`M${effect.x + 72} 110 H${effect.x + 118}`" class="vap" marker-end="url(#arm)" />
          </g>
          <text x="414" y="172" class="t-m">vapour → next effect</text>
          <text x="290" y="40" class="t-m">EXAMPLE: 4 EFFECTS · CONFIGURABLE 1–6+</text>
          <path d="M734 110 H790" class="vap" marker-end="url(#arm)" />

          <!-- condenser -->
          <rect x="796" y="70" width="140" height="80" rx="6" class="box" />
          <rect x="931" y="70" width="5" height="80" style="fill:var(--cold)" />
          <text x="812" y="100" class="t-b">Condenser</text>
          <text x="812" y="118" class="t-s">last vapour condenses</text>

          <!-- outputs -->
          <path d="M509 196 V226" class="flow" marker-end="url(#ar)" />
          <text x="420" y="246" class="t-b">Condensate</text><text x="420" y="262" class="t-s">clean water, ~50% of feed</text>
          <path d="M620 196 V226" class="flow" marker-end="url(#ar)" />
          <text x="600" y="246" class="t-b">Concentrate</text><text x="600" y="262" class="t-s">~50% of feed</text>

          <!-- heat pump loop -->
          <path d="M900 150 C 900 300, 640 305, 500 305 S 165 300, 165 156" class="loop" marker-end="url(#ara)" />
          <rect x="390" y="290" width="236" height="28" rx="14" style="fill:var(--surface);stroke:var(--accent);stroke-width:1.5" />
          <text x="508" y="309" text-anchor="middle" style="font-size:13px;font-weight:600;fill:var(--accent)">Water-to-water heat pump</text>
          <text x="886" y="205" text-anchor="end" class="t-m">cooling</text>
          <text x="28" y="230" class="t-m">heating</text>
        </svg>
      </div>

      <div class="how">
        <div>
          <h3>Falling film on plastic</h3>
          <p>Feed liquid runs down the evaporation plates as a thin film. On the other side of a thin heat-transfer layer, vapour from the previous stage condenses and gives up its heat, which boils part of the film.</p>
        </div>
        <div>
          <h3>1 to 6 effects in one stack</h3>
          <p>Each effect runs at a lower pressure and temperature than the one before, and its vapour heats the next. More effects reuse the energy more often. Fewer effects keep the unit smaller. The choice depends on the application.</p>
        </div>
        <div>
          <h3>Heat pump closes the loop</h3>
          <p>The heat pump's hot side drives the preheater. Its cold side cools the final condenser. The heat removed at the cold end is lifted and returned to the hot end, so no steam boiler or cooling tower is needed.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Plaatgekleurde effecten in het processchema: warm (links) naar koud (rechts).
const effects = [
  { name: 'Effect 1', x: 290, color: '--hot', note: 'warmest' },
  { name: 'Effect 2', x: 414, color: '--warm', note: '' },
  { name: 'Effect 3', x: 538, color: '--mid', note: '' },
  { name: 'Effect 4', x: 662, color: '--cool', note: 'coolest' },
]
</script>
