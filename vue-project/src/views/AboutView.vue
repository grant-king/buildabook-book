<template>
  <CoverTitle />
  <div class="text-center">
    <div class="h-32"></div>
    <div>
      About this publication
    </div>
    <div class="h-32"></div>
    <div class="font-black text-4xl font-serif">
      [[BOOK_TITLE]]
    </div>
    <div class="h-4"></div>
    <div class="font-black text-2xl font-serif">
      [[BOOK_SUBTITLE]]
    </div>
    <div class="h-16"></div>
    <div>
      published in [[COPYRIGHT_YEAR]] by
    </div>
    <div class="h-4"></div>
    <div class="text-4xl">
      <a class="text-lime-800 font-semibold" href="[[AUTHOR_WEBSITE]]">
        [[AUTHOR_NAME]]
      </a>
    </div>
  </div>
  <div class="h-32"></div>
  <div class="grid grid-cols-1 gap-8">
    [[MAIN_BLOCKS]]
  </div>
  <div class="h-32"></div>
  <div class="border-4 border-black/40 rounded">
    <div
      class="grid grid-cols-1 gap-2 font-semibold text-center font-serif bg-black/10 rounded py-16 border-16 border-double border-white/80">
      [[CREDITS_LINKS_LIST]]
    </div>
  </div>
  <div class="h-64"></div>
  <div class="h-64"></div>
  <div class="text-center">
    <div class="font-mono text-xs">
      <div>
        This static webbook was built with
      </div>
      <div class="h-2"></div>
      <div>
        <a class="text-amber-800 font-bold border-4 border-double p-1 rounded" href="https://kingbook.org">
          King Book
        </a>
      </div>
    </div>
    <div class="h-64"></div>
  </div>


</template>

<script setup>
import CoverTitle from '@/components/CoverTitle.vue';

</script>