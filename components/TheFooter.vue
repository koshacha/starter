<template>
  <footer class="border-t dark:border-neutral-700">
    <div class="mx-auto max-w-3xl px-8 py-12">
      <div
        class="flex-col flex lg:flex-row lg:items-center gap-y-12 items-start justify-between pb-6 pt-16 max-w-3xl 2xl:max-w-6xl mx-auto"
      >
        <div class="flex flex-col gap-12 w-full">
          <span
            class="inline-flex items-center text-neutral-1300 dark:text-white gap-3 group-hover:opacity-80"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 mx-auto"
                viewBox="0 0 232 232"
                fill="none"
              >
                <path
                  d="M166.524 51.4683L116.367 101.625L65.5235 51.4683L116.367 0.62434L166.524 51.4683ZM231.11 116.054L180.953 166.898L130.796 116.054L180.953 65.8969L231.11 116.054ZM101.939 116.054L51.0948 166.898L0.250934 116.054L51.0948 65.8969L101.939 116.054ZM166.524 181.326L116.367 231.483L65.5235 181.326L116.367 130.482L166.524 181.326Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span class="uppercase font-bold text-xl">Portfolio</span>
          </span>
          <div
            class="leading-6 text-neutral-500 dark:text-neutral-200 text-sm flex flex-wrap justify-between w-full"
          >
            <div>
              <p class="justify-end ml-auto">
                <ClientOnly>
                  <span id="clock" class="text-sm font-mono">{{ time }}</span>
                </ClientOnly>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex-col flex border-t dark:border-white/20 pt-6 pb-12 max-w-3xl 2xl:max-w-6xl mx-auto"
      >
        <p class="text-sm text-zinc-500">
          <span x-text="year">{{ new Date().getFullYear() }}</span
          >. Designed in the Åland Islands by Michael Andreuzza.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useInterval } from "@vueuse/core";

const counter = useInterval(1000);

const time = computed(() => {
  return formatTime(counter.value);
});
</script>
