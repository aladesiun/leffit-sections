<template>
    <div class="p-5 bg-[#f4f3f1]">
        <p class="text-sm">Top collections</p>
        <swiper class="" parallax  :space-between="50" @swiper="onSwiper"
            @slideChange="onSlideChange" navigation :modules="modules"
            :breakpoints="{
            '680': {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation
            },
            '768': {
                slidesPerView: 2,
                spaceBetween: 40,
                navigation
            },
            '1024': {
                slidesPerView: 5,
                spaceBetween: 50,
                navigation
            },
        }">
            <swiper-slide v-for="item in 5" class="bg-white">
                <div class="min-w-[200px]">
                    <img src=".././assets/images/necklace.jpg" class="w-full" />
                    <p class="text-sm text-center py-2">NECKLACE</p>
                </div>
            </swiper-slide>
            <div class="parallax-slider-navigation">
                <div class="nac-"> </div>
            </div>
        </swiper>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
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
        Pagination
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
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },
};
</script>