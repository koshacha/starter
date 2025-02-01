<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start py-12 border-t dark:border-neutral-700"
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
      <li class="flow-root" v-for="item in items" :key="item.link">
        <a :href="item.link" :title="item.title">
          <div class="flex items-center gap-x-4">
            <Icon :name="item.icon" class="size-10 rounded-xl dark:border dark:border-neutral-700" />
            <div class="text-sm leading-6">
              <p
                class="font-semibold text-black dark:text-white hover:text-blue-500"
              >
                {{ item.title }}
              </p>
              <p class="text-neutral-500 text-sm dark:text-neutral-400">
                @{{ item.handle }}
              </p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  items: {
    title: string;
    link: string;
    icon: string;
    handle: string;
  }[];
}>();
</script>
