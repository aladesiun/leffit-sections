<template>
    <div class="container mx-auto p-6">
        <!-- Dropdown for Sorting -->
        <div class="flex justify-between items-center mb-6">
            <div class="flex  gap-2 items-center">
                <p class="text-sm">sort 176 Products</p>
                <img src=".././assets/images/arrow_down.svg" class="w-[10px]" />

            </div>
            <!-- Filter button (Optional) -->
            <div class="text-sm flex gap-2 items-center">
                Filter
                <img src=".././assets/images/menu2.svg" class="w-[20px]" />
            </div>
        </div>


        <!-- Products Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div class="min-w-[200px] relative" v-for="item in 5">
                <div
                    class="rounded-[50%] h-[30px] w-[30px] flex justify-center items-center border-2 border-black bg-[#feedf0] absolute top-2 left-1 text-[9px]">
                    New</div>
                <img src=".././assets/images/necklace.jpg" class="w-full" />
                <p class="text-sm font-light text-center py-2">NECKLACE</p>
                <p class="text-sm font-light text-center">$900</p>
            </div>
            <!-- Repeat the above block for each product -->
        </div>
    </div>
</template>

<script>
import { FwbDropdown } from 'flowbite-vue'

</script>

<style>
/* Custom styles if needed */
</style>