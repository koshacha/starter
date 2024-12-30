<template>
  <div class="min-h-[640px] flex flex-col">
    <sidebar />
    <the-main>
      <page-header />
      <div class="prose-styles">
        <slot />
      </div>
    </the-main>
  </div>
</template>
