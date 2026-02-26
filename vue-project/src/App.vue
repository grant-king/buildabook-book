<template>
  <div class="max-w-2xl mx-auto text-xl p-2">
    <RouterView />
  </div>
  <div class="h-96"></div>
  <div v-for="value in 8" :key="value">
    <div class="h-2 bg-black/20"></div>
    <div class="h-2"></div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>