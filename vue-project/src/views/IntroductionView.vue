<template>
    <CoverTitle />
    <div class="h-32"></div>
    <div class="text-black/80">
        Introduction
    </div>
    <div class="border-b-4 border-double">
    </div>
    <div class="h-16"></div>
    <div class="grid grid-cols-1 gap-8">
        <Introduction />
    </div>
    <div class="h-64"></div>
    <RouterLink to="/ch001">
        <div class="p-8 m-8 border-2 rounded font-bold shadow text-center">
            <div class="text-lime-900">
                [[FIRST_CHAPTER_TITLE]]
            </div>
        </div>
    </RouterLink>
</template>

<script setup>
import CoverTitle from '@/components/CoverTitle.vue';
import Introduction from '@/components/Introduction.vue';

</script>