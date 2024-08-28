<template>
    <div class="p-5 bg-[#f4f3f1]">
        <p class="text-sm">Top collections</p>
        <swiper class="" :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange"
            navigation :pagination="{ clickable: true }">
            <swiper-slide v-for="item in 5" class="bg-white">
                <div class="">
                    <img src=".././assets/images/necklace.jpg" class="img-fluid" />
                    <p class="text-sm text-center py-2">NECKLACE</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
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