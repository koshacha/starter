<template>
  <aside
    class="z-50 hidden bg-white dark:bg-neutral-900 lg:flex md:w-72 md:flex-col md:fixed md:inset-y-0"
  >
    <div
      class="flex flex-col flex-1 relative min-h-0 border-r bg-white dark:bg-neutral-900 dark:border-neutral-700"
    >
      <div class="flex flex-col flex-1 pt-16 pb-4 overflow-y-auto">
        <the-header />
        <the-menu />
        <language-swither />
      </div>
      <div
        class="flex flex-shrink-0 py-4 px-6 border-t dark:border-neutral-700 items-center"
      >
        <resume-button />
      </div>
    </div>
  </aside>
</template>
