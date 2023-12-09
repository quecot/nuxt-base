<script setup lang="ts">
const props = defineProps<{
  icon?: string;
  title: string;
  content?: string;
  color: string;
  open?: boolean;
}>();

const shadeColor = (color: string, percent: number) => {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = (R * (100 + percent)) / 100;
  G = (G * (100 + percent)) / 100;
  B = (B * (100 + percent)) / 100;

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  R = Math.round(R);
  G = Math.round(G);
  B = Math.round(B);

  const RR = R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16);
  const GG = G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16);
  const BB = B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
};

const darkerColor = shadeColor(props.color, -5);
</script>

<template>
  <article
    class="w-full space-y-1 rounded-md border px-3 py-2"
    :style="{ backgroundColor: color, borderColor: darkerColor }"
  >
    <details class="group" :open="open">
      <summary
        class="brightness-40 flex items-center space-x-1 saturate-[2000%]"
        :class="content ? 'cursor-pointer' : 'cursor-default'"
        :style="{ color: color }"
      >
        <div v-if="icon" :class="icon" />

        <h3 class="font-semibold">{{ title }}</h3>

        <div v-show="content" class="i-lucide-chevron-down transition-transform duration-300 group-open:rotate-180" />
      </summary>

      <p>{{ content }}</p>
    </details>
  </article>
</template>

<style scoped>
details > summary {
  list-style: none;
}

details > summary::-webkit-details-marker {
  display: none;
}

.i-lucide-chevron-down {
  transition: transform 0.3s ease;
}
</style>
