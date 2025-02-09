<template>
  <nuxt-link
    to="/projects/"
    type="button"
    class="text-sm text-neutral-500 hover:text-[var(--project-color)] dark:text-neutral-50 duration-200"
  >
    ← Back
  </nuxt-link>
  <div class="flex mt-12 flex-col items-start gap-4 lg:flex-row">
    <div
      class="size-10 shrink-0 lg:size-28 inline-grid place-content-center rounded-xl lg:rounded-2xl dark:border dark:border-neutral-700 bg-[var(--bg)]"
      :style="{ '--bg': page?.color }"
    >
      <Icon
        :name="page?.icon ?? 'lucide:file'"
        class="size-10"
        :class="{ 'text-white': page?.color }"
      />
    </div>
    <div class="leading-6">
      <h1
        class="text-2xl font-medium text-pretty tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
      >
        {{ page.title }}
      </h1>
      <p class="text-neutral-500 mt-2 dark:text-neutral-400">
        {{ page.description }}
      </p>
    </div>
  </div>
  <div
    class="flex items-center justify-between text-xs mt-24 pt-0 py-2 border-b dark:border-neutral-700"
  >
    <p class="text-neutral-400 text-base" v-if="page?.year">
      Launched on:
      <time :datetime="page?.year" class="font-mono"> {{ page?.year }} </time>
    </p>
    <client-only>
      <a
        v-if="page?.link"
        :href="page?.link"
        target="_blank"
        nopener
        rel="noopener noreferrer"
        class="text-sm text-neutral-500 hover:text-[var(--project-color)] dark:text-neutral-50 duration-200"
        >See it live →
      </a>
    </client-only>
  </div>
</template>

<script setup lang="ts">
const { page } = useContent();
</script>
