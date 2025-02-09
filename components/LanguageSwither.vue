<template>
  <nav class="flex-1 mt-6">
    <div>
      <div class="px-8 py-4 space-y-4">
        <p class="text-sm font-semibold uppercase text-black dark:text-white">
          Language
        </p>
        <SwitchLocalePathLink
          v-for="locale in locales"
          :locale="locale.code"
          :key="locale.code"
          class="flex items-center text-sm text-neutral-500 dark:text-neutral-50 group duration-200 gap-3"
          :class="{
            'hover:text-[var(--project-color)]': hasCustomColor,
            'hover:text-blue-500': !hasCustomColor,
          }"
        >
          <Icon class="text-inherit size-4" :name="locale.icon" />
          {{ locale.name }}
        </SwitchLocalePathLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const locales: Array<{
  code: "en" | "ru";
  name: string;
  icon: string;
}> = [
  {
    code: "en",
    name: "English",
    icon: "tabler:alphabet-latin",
  },
  {
    code: "ru",
    name: "Русский",
    icon: "tabler:alphabet-cyrillic",
  },
];

const { color: customColor } = useAppColor();
const hasCustomColor = computed(() => {
  return !!customColor.value;
});
</script>
