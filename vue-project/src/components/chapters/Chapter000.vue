<template>
    <div class="text-center text-4xl font-black font-serif">
        [[CHAPTER_TITLE]]
    </div>
    <div v-if="show_subtext" class="text-center text-2xl font-bold font-serif">
        <div class="h-4"></div>
        [[CHAPTER_SUBTITLE]]
    </div>
    <div class="h-16"></div>
    [[TEXT_BLOCKS]]
</template>

<script setup>

const show_subtext = true

</script>
