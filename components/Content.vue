<template>
  <div class="relative z-0 flex flex-1 overflow-hidden">
    <div
      class="relative z-0 flex-1 overflow-y-auto focus:outline-none lg:pl-72 2xl:pl-0"
    >
      <div class="flex-1 mx-auto min-h-svh flex flex-col">
        <main class="grow"><slot /></main>
      </div>
    </div>
  </div>
</template>
