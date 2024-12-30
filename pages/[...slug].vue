<script setup lang="ts">
const { page, layout } = useContent();
</script>

<template>
  <ContentRenderer :key="page._id" :value="page" />
</template>
