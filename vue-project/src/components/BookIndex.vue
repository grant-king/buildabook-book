<template>
    <div class="text-lg text-violet-950/80 text-center">
        <RouterLink to="/intro">
            <div class="p-4 m-8 border-2 rounded font-bold shadow-md shadow-black/40">
                <div class="">
                    Introduction
                </div>
            </div>
        </RouterLink>
        [[CHAPTER_LINKS]]
        <RouterLink to="/about">
            <div class="p-4 m-8 border-2 rounded font-bold shadow-md shadow-black/40">
                <div class="">
                    Additional Information
                </div>
            </div>
        </RouterLink>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';

</script>