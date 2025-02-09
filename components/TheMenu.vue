<template>
  <nav class="flex-1 mt-6">
    <div>
      <div class="px-8 py-4 space-y-4">
        <p class="text-sm font-semibold uppercase text-black dark:text-white">
          Portfolio
        </p>
        <nuxt-link-locale
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="flex items-center text-sm text-neutral-500 dark:text-neutral-50 group duration-200 gap-3"
          :class="{
            'hover:text-[var(--project-color)]': hasCustomColor,
            'hover:text-blue-500': !hasCustomColor
          }"
        >
          <Icon class="text-inherit size-4" :name="link.icon" />
          {{ link.text }}
        </nuxt-link-locale>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
interface Link {
  to: string;
  icon: string;
  text: string;
}

const links: Link[] = [
  {
    to: "/",
    text: "Home",
    icon: "lucide:home",
  },
  {
    to: "/projects",
    text: "Projects",
    icon: "lucide:briefcase-business",
  },
  {
    to: "/work",
    text: "Work",
    icon: "lucide:square-stack",
  },
  {
    to: "/contact",
    text: "Contacts",
    icon: "lucide:mail",
  },
];
const { color: customColor } = useAppColor();
const hasCustomColor = computed(() => {
  return !!customColor.value;
});
</script>
