<template>
  <div class="relative z-0 flex flex-1 overflow-hidden">
    <div
      class="relative z-0 flex-1 overflow-y-auto focus:outline-none lg:pl-72 2xl:pl-0"
    >
      <div class="flex-1 mx-auto min-h-svh flex flex-col">
        <main class="grow">
          <div class="mx-auto max-w-3xl px-8 py-16">
            <slot />
          </div>
        </main>
        <the-footer />
      </div>
    </div>
  </div>
</template>
