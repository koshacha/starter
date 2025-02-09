<template>
  <footer class="border-t dark:border-neutral-700">
    <div class="mx-auto max-w-3xl px-8 py-12">
      <div
        class="flex-col flex dark:border-white/20 pt-6 pb-12 max-w-3xl 2xl:max-w-6xl mx-auto"
      >
        <p class="text-sm text-zinc-500">
          <span x-text="year">{{ new Date().getFullYear() }}</span
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useInterval } from "@vueuse/core";

const counter = useInterval(1000);

const time = computed(() => {
  return formatTime(counter.value);
});
</script>
