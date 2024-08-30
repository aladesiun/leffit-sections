<script setup lang="ts">
import SlideOne from './SlideOne.vue';
import SlideTwo from './SlideTwo.vue';
import SlideThree from './SlideThree.vue';
</script>

<template>
    <div>
        <div id="Header" class="flex_between items-center space-x-4 border-b border-b-[#d0d1d2] px-4 py-3">
            <a href="#" class="text-black text-3xl font-semibold">
                PANDORA
            </a>
            <p class="text-black text-sm font-noraml">
                Secure checkout
            </p>
        </div>

        <div id="Slide1" class="max_width flex lg:flex-row flex-col justify-between gap-12 mx-auto mt-8">
            <SlideOne />
        </div>

        <div id="slide2" class="max_width flex lg:flex-row flex-col justify-between gap-12 mx-auto mt-8">
            <SlideTwo />
        </div>

        <div id="slide3" class="max_width flex lg:flex-row flex-col justify-between gap-12 mx-auto mt-8">
            <SlideThree />
        </div>

    </div>

</template>

<style scoped></style>