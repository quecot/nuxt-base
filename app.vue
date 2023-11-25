<script setup lang="ts">
import '@unocss/reset/tailwind.css';
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  background-color: #fff;
  color: #000;
}

.dark body {
  background-color: #000;
  color: #fff;
}
</style>
