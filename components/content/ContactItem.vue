<template>
  <li class="flow-root">
    <a :href="link" :title="title">
      <div class="flex items-center gap-x-4">
        <Icon
          :name="icon"
          class="size-10 rounded-xl dark:border dark:border-neutral-700"
        />
        <div class="text-sm leading-6">
          <p
            class="font-semibold text-black dark:text-white hover:text-blue-500"
          >
            {{ title }}
          </p>
          <p class="text-neutral-500 text-sm dark:text-neutral-400">
            @{{ handle }}
          </p>
        </div>
      </div>
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  link: string;
  icon: string;
  handle: string;
}>();
</script>
