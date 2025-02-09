<template>
  <div class="flex items-center flex-shrink-0 pl-8 text-black">
    <nuxt-link-locale href="/" class="group block flex-shrink-0 cursor-pointer">
      <div class="flex items-center">
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/13609082?v=4"
            class="inline-block h-9 w-9 ring-1 ring-black dark:ring-white/10 rounded-full"
            alt=""
          />
        </div>
        <div class="ml-3">
          <p
            class="text-sm font-medium text-neutral-900 dark:text-white group-hover:opacity-80"
          >
            {{ $t("kyubey") }}
          </p>
          <p
            class="text-xs font-medium text-neutral-500 dark:text-white group-hover:opacity-80"
          >
            Frontend Developer
          </p>
        </div>
      </div>
    </nuxt-link-locale>
  </div>
</template>
