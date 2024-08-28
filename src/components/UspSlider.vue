<template>
    <div class="w-full bg-gray-50 py-8">
      <swiper  Pagination :slides-per-view="4" space-between="30" loop="true" class="mySwiper">
        <swiper-slide v-for="(item, index) in items" :key="index">
          <div class="flex flex-col items-center text-center p-4">
            <div class="mb-4">
              <img :src="item.icon" alt="" class="h-12 w-12"/>
            </div>
            <h3 class="text-lg font-semibold text-gray-800">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.description }}</p>
          </div>
        </swiper-slide>
  
        <div class="swiper-pagination"></div>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

  import 'swiper/swiper-bundle.css';
  
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
  </script>
  
  <style>
  /* Additional Swiper.js styles if necessary */
  </style>
  