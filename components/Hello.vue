<script setup lang="ts">
const { x, y } = useMouse();
const color = useColorMode();

const toggleDark = () => {
  color.value = color.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <main class="flex h-screen flex-col items-center justify-center space-y-4">
    <h1 class="text-3xl font-semibold">Hello, Sailor!</h1>

    <p>{{ x }}, {{ y }}</p>

    <button class="rounded-lg border border-gray-300 px-2 py-1 dark:border-gray-700" @click="toggleDark">
      {{ color.value.charAt(0).toUpperCase() + color.value.slice(1) }}
    </button>
  </main>
</template>
