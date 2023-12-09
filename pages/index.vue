<template>
  <div class="mx-auto flex h-screen w-full max-w-2xl flex-col items-center space-y-3 py-24">
    <Callout
      icon="i-lucide-badge-alert"
      title="Example callout"
      content="This is an example callout with an icon, title and content."
      color="#E9F1FC"
      :open="true"
    />

    <Callout title="Callout without icon" content="This callout does not have an icon." color="#FDF2EA" />

    <Callout title="Callout without content (icon and title)" icon="i-lucide-check" color="#EAF9F8" />

    <Callout title="Callout without content nor icon (just title)" color="#FCECEE" />
  </div>
</template>
