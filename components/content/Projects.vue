<template>
  <ul role="list" class="grid md:grid-cols-2 mt-12 gap-12 gap-y-24">
    <ContentList
      :path="projectsPath"
      v-slot="{ list }"
      :query="{ where: { published: true }, sort: [{ sort: -1 }] }"
    >
      <li class="flow-root" v-for="proj in list" :key="proj._path">
        <nuxt-link-locale
          :to="proj._path"
          class="group"
          :style="{ '--bg': proj.color }"
        >
          <div class="flex items-center gap-x-4">
            <div
              class="size-10 rounded-xl inline-grid place-content-center dark:border dark:border-neutral-700 bg-[var(--bg)]"
            >
              <Icon
                :name="proj.icon ?? 'lucide:file'"
                class="size-6"
                :class="{ 'text-white': proj.color }"
              />
            </div>
            <div class="text-sm leading-6">
              <p
                class="font-semibold text-black dark:text-white group-hover:text-[var(--bg)] duration-200"
              >
                {{ proj.title }}
              </p>
              <p
                class="text-neutral-500 text-sm dark:text-neutral-400 font-mono"
              >
                {{ proj.year }}
              </p>
            </div>
          </div>
          <p class="text-neutral-500 mt-4 dark:text-neutral-400">
            {{ proj.description }}
          </p>
        </nuxt-link-locale>
      </li>
    </ContentList>
  </ul>
</template>

<script setup lang="ts">
const { page } = useContent();
const { color, set } = useAppColor();
const { locale, defaultLocale } = useI18n();

const projectsPath = computed(() => {
  if (locale.value === defaultLocale) {
    return "/projects";
  } else {
    return `/${locale.value}/projects`;
  }
});

onMounted(() => {
  set(null);
});
</script>
