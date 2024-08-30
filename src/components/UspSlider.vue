<template>
    <div class="w-full  py-8">
            <swiper :pagination="true" :modules="modules"
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
        }" class="mySwiper bg-gray-50">
            <swiper-slide v-for="(item, index) in items" :key="index">
                <div class="flex flex-col items-center text-center p-4">
                    <div class="mb-4">
                        <img :src="item.icon" alt="" class="h-12 w-12" />
                    </div>
                    <h3 class="text-lg font-semibold text-gray-800">{{ item.title }}</h3>
                    <p class="text-gray-600">{{ item.description }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script >
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const items = [
    {
        icon: 'path-to-your-icon1.svg',
        title: 'Terugbrengen in de winkel',
        description: 'Retourneer online artikelen in een Pandora winkel'
    },
    {
        icon: 'path-to-your-icon2.svg',
        title: 'Klarna',
        description: 'Koop nu - betaal later met Klarna'
    },
    {
        icon: 'path-to-your-icon3.svg',
        title: 'Click & Collect',
        description: 'Haal je bestelling na 2 uur op in de winkel'
    },
    {
        icon: 'path-to-your-icon4.svg',
        title: 'Gratis levering',
        description: 'Vanaf € 49'
    },
    {
        icon: 'path-to-your-icon5.svg',
        title: 'Gratis retour',
        description: '30 dagen na ontvangst van de goederen'
    }
];
    return {

        items,
      modules: [Pagination],
    };
  },
};
</script>

<style>
/* Additional Swiper.js styles if necessary */
</style>