<template>
    <div class="p-5 py-1 bg-primary">
        <swiper class="bg-primary"  :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }" parallax :slides-per-view="1" :space-between="50" @swiper="onSwiper"
            @slideChange="onSlideChange" :auto   :modules="modules">
            <swiper-slide v-for="item in 5">
                <div class="text-center block bg-primary">
                    <p class="fontsemi-bold text-underline text-center">]NIEUW:</p>
                    <p class="text-sm text-center py-1">Ontdek nieuwe stijlen</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
    components: {
        Swiper,
        SwiperSlide,
        Autoplay
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules:[Autoplay]
        };
    },
};
</script>