<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start py-12 first:pt-6 border-b last:border-0 dark:border-neutral-700"
  >
    <p
      class="text-lg font-semibold leading-6 text-neutral-900 dark:text-white group-hover:text-blue-400"
    >
      {{ title }}
    </p>
    <ul
      role="list"
      class="grid md:grid-cols-2 gap-12 dark:border-neutral-700 lg:col-span-2"
    >
      <ContentSlot />
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
