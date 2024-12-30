<script setup lang="ts">
const { as = "button", ...props } = defineProps<{
  as?: "button" | "link";
  class?: "string";
}>();

const BASE_STYLES =
  "inline-flex items-center gap-2 justify-center rounded-lg py-3 px-6 text-sm outline-offset-2 transition bg-white text-black font-medium hover:bg-neutral-50 dark:text-white dark:bg-neutral-800/50 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 group w-full lg:w-auto border dark:border-white/20";

const styles = computed(() => {
  return cn(BASE_STYLES, props["class"]);
});
</script>

<template>
  <a :class="styles" v-bind="props" v-if="as === 'link'">
    <slot />
  </a>
  <button :class="styles" v-bind="props" v-if="as === 'button'">
    <slot />
  </button>
</template>
