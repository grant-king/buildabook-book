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
    <div class="h-64"></div>
    <div>
      This web book was produced for
    </div>
    <div>
      <a class="text-lime-800 font-semibold" href="[[SPONSOR_WEBSITE]]">
        [[SPONSOR_NAME]]
      </a>
    </div>
    <div>
      by
      <a class="text-lime-800 font-semibold" href="[[PUBLISHER_WEBSITE]]">
        [[PUBLISHER_NAME]]
      </a>
    </div>
    <div class="h-16"></div>
    <div class="grid grid-cols-1 gap-8">
      [[CREDITS_LINKS_LIST]]
    </div>
    <div class="h-16"></div>
    <div class="h-64"></div>
    <div class="font-mono text-sm">
      <div>
        This static web book was built with
      </div>
      <div class="h-2"></div>
      <div>
        <a class="text-amber-800 font-bold border-1 p-1 rounded" href="https://kingbook.org">
          King Book
        </a>
      </div>
      <div class="h-32"></div>
      <div>
        [[SIGNOFF_PHRASE]]
      </div>
    </div>
  </div>


</template>

<script setup>
import CoverTitle from '@/components/CoverTitle.vue';

</script>