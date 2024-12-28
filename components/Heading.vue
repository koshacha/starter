<template>
  <root />
</template>

<script setup lang="ts">
const { l = 1, ...props } = defineProps<{
  l?: 1 | 2 | 3 | 4 | 5 | 6;
  class?: "string";
}>();

const slots = defineSlots<{
  default(): any;
}>();

const BASE_STYLES =
  "font-medium tracking-tight text-neutral-900 dark:text-white";
const LEVEL_STYLES = {
  "1": "text-2xl sm:text-4xl",
  "2": "text-xl sm:text-3xl",
  "3": "text-lg sm:text-2xl",
  "4": "text-base sm:text-xl",
  "5": "text-sm sm:text-lg",
  "6": "text-xs sm:text-base",
};

const styles = computed(() => {
  return cn(BASE_STYLES, LEVEL_STYLES[l], props["class"]);
});

const root = h("h" + l, { ...props, class: styles.value }, slots.default());
</script>
