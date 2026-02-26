<template>
  <CoverTitle />
  <BookIndex />
  <div class="h-64"></div>
  <div class="h-8"></div>
  <div class="text-black/80">
    Introduction
  </div>
  <div class="border-b-4 border-double">
  </div>
  <div class="h-16"></div>
  <div class="grid grid-cols-1 gap-8">
    <Introduction />
  </div>
  <div class="h-128"></div>
  <div class="text-black/80">
    [[CHAPTER_TITLE]]
  </div>
  <div class="border-b-4 border-double">
  </div>
  <div class="h-16"></div>
  <div class="grid grid-cols-1 gap-8">
    <Chapter001 />
  </div>
  <div class="h-64"></div>
  <RouterLink to="/ch02">
    <div class="p-8 m-8 border-2 rounded font-bold shadow text-center">
      <div class="text-lime-900">
        II
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import BookIndex from '@/components/BookIndex.vue';
import Chapter001 from '@/components/chapters/Chapter001.vue';
import CoverTitle from '@/components/CoverTitle.vue';
import Introduction from '@/components/Introduction.vue';

</script>