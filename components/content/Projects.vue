<template>
  <div>
    <ContentSlot />
    <ul role="list" class="grid md:grid-cols-2 mt-12 gap-12 gap-y-24">
      <ContentList
        path="/projects"
        v-slot="{ list }"
        :query="{ where: { published: true }, sort: [{ sort: -1 }] }"
      >
        <li class="flow-root" v-for="proj in list" :key="proj._path">
          <a :href="proj._path" title="Lexington Themes" class="group">
            <div class="flex items-center gap-x-4">
              <div
                class="size-10 rounded-xl inline-grid place-content-center dark:border dark:border-neutral-700 bg-[var(--bg)]"
                :style="{ '--bg': proj.color }"
              >
                <Icon
                  :name="proj.icon ?? 'lucide:file'"
                  class="size-6"
                  :class="{ 'text-white': proj.color }"
                />
              </div>
              <div class="text-sm leading-6">
                <p
                  class="font-semibold text-black dark:text-white group-hover:text-blue-400 duration-200"
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
          </a>
        </li>
      </ContentList>
    </ul>
  </div>
</template>
