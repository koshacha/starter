<template>
  <li class="flow-root">
    <a :href="link" :title="title" class="group" :style="{ '--color': color }">
      <div class="flex items-center gap-x-4">
        <Icon
          :name="icon"
          class="size-10 group-hover:text-[var(--color)] duration-100"
        />
        <div class="text-sm leading-6">
          <p
            class="font-semibold text-black dark:text-white group-hover:text-[var(--color)] duration-100"
          >
            {{ title }}
          </p>
          <p
            class="text-neutral-500 text-sm dark:text-neutral-400 group-hover:text-neutral-300 duration-100"
          >
            {{ handle }}
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
  color?: string;
  handle: string;
}>();
</script>
