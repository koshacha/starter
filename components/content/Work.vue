<script setup lang="ts">
defineProps<{
  year: string;
  title: string;
  where: string;
  whereLink?: string;
}>();

defineSlots<{
  default: (props: {}) => any;
  responsibilities?: (props: {}) => any;
}>();
</script>

<template>
  <div
    class="grid grid-cols-1 mb-4 lg:grid-cols-3 gap-12 items-start py-12 border-b last:border-0 dark:border-neutral-700"
  >
    <p
      class="text-lg font-mono font-semibold leading-6 text-neutral-900 dark:text-white group-hover:text-blue-400"
    >
      {{ year }}
    </p>
    <div
      class="text-sm text-neutral-500 dark:text-neutral-50 duration-200 lg:col-span-2"
    >
      <p
        class="text-lg font-semibold leading-6 text-neutral-900 dark:text-white"
      >
        {{ title }}
        <span> @ </span>
        <a
          v-if="whereLink"
          class="text-blue-400"
          :href="whereLink"
          target="_blank"
          :title="where"
          >{{ where }}</a
        >
        <span v-else>{{ where }}</span>
      </p>
      <p class="text-neutral-500 mt-4 dark:text-neutral-400">
        <ContentSlot />
      </p>

      <p class="text-neutral-500 mt-4 dark:text-neutral-400">
        <ContentSlot name="responsibilities" />
      </p>
    </div>
  </div>
</template>
