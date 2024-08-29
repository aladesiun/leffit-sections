<template>

    <div class="w-[1250px] mx-auto flex gap-3 justify-between items-start mt-14 cartLayout">
        <div class="w-full">
            <ul class="flex gap-2">

                <li class="flex justify-start items-center">

                    <p class="text-right text-dark-text text-xs">Home page</p>

                    <span class="ml-3"><svg width="6" height="9" viewBox="0 0 7 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11L6 6L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </li>

                <li class="flex justify-start items-center">
                    <p class="text-right text-dark-text text-xs">Rings</p>

                    <span class="ml-3"><svg width="6" height="9" viewBox="0 0 7 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11L6 6L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </li>

                <li class="flex justify-start items-center">
                    <p class="text-right text-dark-text text-xs">Rings</p>

                    <span class="ml-3"><svg width="6" height="9" viewBox="0 0 7 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11L6 6L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </li>

            </ul>

            <div class="flex md:flex-row flex-col justify-between items-start w-full gap-8">

                <div id="ProductImage" class="w-full h-auto">

                    <div class="w-full md:h-[600px] sm:h-[400px] h-[300px] product_wrap">
                        <img src="../assets/images/productImg.jpg" class="h-full w-full object-contain"
                            alt="Prd-Image" />
                    </div>

                    <div class=" w-full mt-3">
                        <ul class="flex flex-wrap justify-start gap-3 items-start">

                            <li class="product_list">

                                <fwb-button @click="showModal">
                                    <div class="w-[100px] border  h-[100px] border-dark-text rounded-md py-2 px-3">
                                        <img src="../assets/images/productImg.jpg" class="h-full w-full object-contain"
                                            alt="Prd-Image" />
                                    </div>
                                </fwb-button>

                            </li>

                            <li>
                                <div class="w-[100px] border  h-[100px] border-[#d0d1d2] rounded-md py-2 px-3">
                                    <img src="../assets/images/productTwo.jpg" class="h-full w-full object-contain"
                                        alt="Prd-Image" />
                                </div>
                            </li>

                            <li>
                                <div class="w-[100px] border  h-[100px] border-[#d0d1d2] rounded-md py-2 px-3">
                                    <img src="../assets/images/productTwo.jpg" class="h-full w-full object-contain"
                                        alt="Prd-Image" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="product-details" class="w-[780px] product_details">

                    <p class=" text-dark-text md:text-[28px] text-xl font-bold mb-3">
                        Double heart sparkling ring
                    </p>

                    <p class=" text-dark-text text-base font-semibold ">
                        €119.00
                    </p>

                    <div class="flex justify-start items-center mt-2">

                        <div id="Ratings" class="flex gap-1">
                            <span>
                                <svg width="17" height="17" viewBox="0 0 6 6" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.85232 4.77358L4.23565 5.64831C4.48899 5.80862 4.79899 5.57164 4.73232 5.27193L4.36565 3.62701L5.58899 2.51878C5.81232 2.31665 5.69232 1.9333 5.39899 1.90891L3.78899 1.76602L3.15899 0.211714C3.04565 -0.0705712 2.65899 -0.0705712 2.54565 0.211714L1.91565 1.76254L0.305652 1.90542C0.0123192 1.92982 -0.107681 2.31317 0.115652 2.5153L1.33899 3.62353L0.972319 5.26845C0.905652 5.56816 1.21565 5.80514 1.46899 5.64483L2.85232 4.77358Z"
                                        fill="#FFD81D" />
                                </svg>
                            </span>
                            <span>
                                <svg width="17" height="17" viewBox="0 0 6 6" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.85232 4.77358L4.23565 5.64831C4.48899 5.80862 4.79899 5.57164 4.73232 5.27193L4.36565 3.62701L5.58899 2.51878C5.81232 2.31665 5.69232 1.9333 5.39899 1.90891L3.78899 1.76602L3.15899 0.211714C3.04565 -0.0705712 2.65899 -0.0705712 2.54565 0.211714L1.91565 1.76254L0.305652 1.90542C0.0123192 1.92982 -0.107681 2.31317 0.115652 2.5153L1.33899 3.62353L0.972319 5.26845C0.905652 5.56816 1.21565 5.80514 1.46899 5.64483L2.85232 4.77358Z"
                                        fill="#FFD81D" />
                                </svg>
                            </span>
                            <span>
                                <svg width="17" height="17" viewBox="0 0 6 6" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.85232 4.77358L4.23565 5.64831C4.48899 5.80862 4.79899 5.57164 4.73232 5.27193L4.36565 3.62701L5.58899 2.51878C5.81232 2.31665 5.69232 1.9333 5.39899 1.90891L3.78899 1.76602L3.15899 0.211714C3.04565 -0.0705712 2.65899 -0.0705712 2.54565 0.211714L1.91565 1.76254L0.305652 1.90542C0.0123192 1.92982 -0.107681 2.31317 0.115652 2.5153L1.33899 3.62353L0.972319 5.26845C0.905652 5.56816 1.21565 5.80514 1.46899 5.64483L2.85232 4.77358Z"
                                        fill="#FFD81D" />
                                </svg>
                            </span>
                            <span>
                                <svg width="17" height="17" viewBox="0 0 6 6" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.85232 4.77358L4.23565 5.64831C4.48899 5.80862 4.79899 5.57164 4.73232 5.27193L4.36565 3.62701L5.58899 2.51878C5.81232 2.31665 5.69232 1.9333 5.39899 1.90891L3.78899 1.76602L3.15899 0.211714C3.04565 -0.0705712 2.65899 -0.0705712 2.54565 0.211714L1.91565 1.76254L0.305652 1.90542C0.0123192 1.92982 -0.107681 2.31317 0.115652 2.5153L1.33899 3.62353L0.972319 5.26845C0.905652 5.56816 1.21565 5.80514 1.46899 5.64483L2.85232 4.77358Z"
                                        fill="#FFD81D" />
                                </svg>
                            </span>
                        </div>

                        <div class="flex ml-3">
                            <p class="text-dark-text font-light text-sm ml-1">
                                4.1
                            </p>
                            <p class="text-dark-text font-light text-sm">
                                (66)
                            </p>
                        </div>

                    </div>

                    <div class="mt-8">
                        <p class="text-dark-text text-base font-normal">
                            Metal: Gold plated
                        </p>

                        <div class="flex gap-3 mt-3">
                            <div class="w-[25px] h-[25px] rounded-full border-dark-text p-[1.5px]">
                                <img src='../assets/images/Silver.png' alt="sl" />
                            </div>
                            <div class="w-[25px] h-[25px] border rounded-full border-dark-text p-[1.5px]">
                                <img src='../assets/images/Gold.png' alt="sl" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between items-start mt-4">
                            <p class="text-dark-text text-xs font-normal">
                                Select Size
                            </p>

                            <p class="text-dark-text text-xs font-normal underline">
                                Need help with the size?
                            </p>
                        </div>

                        <div class=" grid md:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-3 w-[95%] mt-2.5">

                            <div
                                class="border w-[62px] h-[45px] flex_center text-xs hover:bg-darkText hover:bg-dark-bg hover:text-white">
                                24
                            </div>

                            <div class="border w-[62px] h-[45px] flex_center text-xs hover:bg-dark-bg hover:text-white">
                                24
                            </div>

                            <div class="border w-[62px] h-[45px] flex_center text-xs hover:bg-dark-bg hover:text-white">
                                24
                            </div>

                            <div class="border w-[62px] h-[45px] flex_center text-xs hover:bg-dark-bg hover:text-white">
                                24
                            </div>

                            <div class="border w-[62px] h-[45px] flex_center text-xs hover:bg-dark-bg hover:text-white">
                                24
                            </div>

                            <div class="border w-[62px] h-[45px] flex_center text-xs hover:bg-dark-bg hover:text-white">
                                24
                            </div>
                            <div class="border w-[62px] h-[45px] flex_center text-xs hover:bg-dark-bg hover:text-white">
                                24
                            </div>
                            <div class="border w-[62px] h-[45px] flex_center text-xs hover:bg-dark-bg hover:text-white">
                                24
                            </div>

                        </div>

                        <div class="mt-3">

                            <button
                                class=" tracking-widest ease-in-out duration-150 w-full h-[47px] text-sm border-dark-border border text-dark-text font-normal hover:bg-dark-text hover:text-white mb-6">
                                CLICK & COLLLECT IN STORE
                            </button>

                            <button
                                class="w-full h-[47px] ase-in-out duration-150 tracking-widest text-sm border-transparent text-white bg-dark-border border font-normal hover:bg-[#ffcad4]">
                                IN THE SHOPPING CART
                            </button>
                        </div>


                        <div class="flex gap-5">

                            <div class="flex justify-start items-center  mt-8">
                                <span class="mr-2">
                                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.77778 0C7.58667 0 6.56 0.553804 6 1.4712C5.44 0.553804 4.41333 0 3.22222 0C2.36795 0.00100678 1.54896 0.333433 0.944904 0.924362C0.340843 1.51529 0.00102915 2.31647 0 3.15217C0 4.70598 1 6.32989 2.96667 7.97771C3.87477 8.73359 4.85522 9.40208 5.89444 9.97391C5.92687 9.99103 5.96315 10 6 10C6.03685 10 6.07313 9.99103 6.10556 9.97391C7.14478 9.40208 8.12524 8.73359 9.03333 7.97771C11 6.32989 12 4.70598 12 3.15217C11.999 2.31647 11.6592 1.51529 11.0551 0.924362C10.451 0.333433 9.63205 0.00100678 8.77778 0ZM6 9.53369C5.22222 9.09891 0.444444 6.30815 0.444444 3.15217C0.445327 2.43174 0.738268 1.74106 1.25901 1.23164C1.77975 0.722218 2.48578 0.435645 3.22222 0.434782C4.395 0.434782 5.38056 1.04946 5.79444 2.03859C5.81119 2.07846 5.83967 2.11256 5.87627 2.13656C5.91287 2.16056 5.95594 2.17338 6 2.17338C6.04406 2.17338 6.08713 2.16056 6.12373 2.13656C6.16033 2.11256 6.18881 2.07846 6.20556 2.03859C6.61944 1.04946 7.605 0.434782 8.77778 0.434782C9.51422 0.435645 10.2202 0.722218 10.741 1.23164C11.2617 1.74106 11.5547 2.43174 11.5556 3.15217C11.5556 6.30435 6.77778 9.10108 6 9.53369Z"
                                            fill="black" />
                                    </svg>
                                </span>


                                <p class="text-dark-text text-xs font-medium">
                                    Opslaan op verlanglijst
                                </p>
                            </div>

                            <div class="flex justify-start items-center mt-8">

                                <span class="mr-2">
                                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.77778 0C7.58667 0 6.56 0.553804 6 1.4712C5.44 0.553804 4.41333 0 3.22222 0C2.36795 0.00100678 1.54896 0.333433 0.944904 0.924362C0.340843 1.51529 0.00102915 2.31647 0 3.15217C0 4.70598 1 6.32989 2.96667 7.97771C3.87477 8.73359 4.85522 9.40208 5.89444 9.97391C5.92687 9.99103 5.96315 10 6 10C6.03685 10 6.07313 9.99103 6.10556 9.97391C7.14478 9.40208 8.12524 8.73359 9.03333 7.97771C11 6.32989 12 4.70598 12 3.15217C11.999 2.31647 11.6592 1.51529 11.0551 0.924362C10.451 0.333433 9.63205 0.00100678 8.77778 0ZM6 9.53369C5.22222 9.09891 0.444444 6.30815 0.444444 3.15217C0.445327 2.43174 0.738268 1.74106 1.25901 1.23164C1.77975 0.722218 2.48578 0.435645 3.22222 0.434782C4.395 0.434782 5.38056 1.04946 5.79444 2.03859C5.81119 2.07846 5.83967 2.11256 5.87627 2.13656C5.91287 2.16056 5.95594 2.17338 6 2.17338C6.04406 2.17338 6.08713 2.16056 6.12373 2.13656C6.16033 2.11256 6.18881 2.07846 6.20556 2.03859C6.61944 1.04946 7.605 0.434782 8.77778 0.434782C9.51422 0.435645 10.2202 0.722218 10.741 1.23164C11.2617 1.74106 11.5547 2.43174 11.5556 3.15217C11.5556 6.30435 6.77778 9.10108 6 9.53369Z"
                                            fill="black" />
                                    </svg>
                                </span>

                                <p class="text-dark-text text-xs font-medium">
                                    Gift wrapping
                                </p>
                            </div>

                        </div>


                        <div id="Accordion" class="mt-12 accordion_wrap">
                            <fwb-accordion>
                                <fwb-accordion-panel>
                                    <fwb-accordion-header>PRODUCT DETAILS</fwb-accordion-header>
                                    <fwb-accordion-content>
                                        <div>
                                            <p class="mb-2 text-[#71706c]">
                                                The Double Heart Sparkling Ring features two heart-shaped
                                                clear cubic zirconia set at different angles to symbolize
                                                the love between a mother and her child. The ring band is
                                                accented with a half row of pavé and is attached asymmetrically
                                                to the two hearts for a more modern look. A gift that celebrates
                                                all that your mother has done for you.
                                            </p>
                                        </div>
                                    </fwb-accordion-content>
                                </fwb-accordion-panel>

                                <fwb-accordion-panel>
                                    <fwb-accordion-header>SIZE ADVICE</fwb-accordion-header>
                                    <fwb-accordion-content>
                                        <div>
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">
                                                Use the dropdown menus below to find your circumference or diameter.
                                                Then use the list to see which ring size fits your measurement result,
                                                to find your ideal size.
                                            </p>
                                            <p class="text-gray-500 dark:text-gray-400">
                                                Check out the <a href="https://flowbite.com/figma/"
                                                    class="text-blue-600 dark:text-blue-500 hover:underline">Figma
                                                    design system</a> based on
                                                the utility classes from Tailwind CSS and components from Flowbite.
                                            </p>
                                        </div>
                                    </fwb-accordion-content>
                                </fwb-accordion-panel>
                                <fwb-accordion-panel>
                                    <fwb-accordion-header>SHIPPING AND RETURNS</fwb-accordion-header>
                                    <fwb-accordion-content>
                                        <div>
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">
                                                Flowbite is first conceptualized and designed using the Figma software
                                                so everything you see in
                                                the library has a design equivalent in our Figma file.
                                            </p>
                                            <p class="text-gray-500 dark:text-gray-400">
                                                Check out the <a href="https://flowbite.com/figma/"
                                                    class="text-blue-600 dark:text-blue-500 hover:underline">Figma
                                                    design system</a> based on
                                                the utility classes from Tailwind CSS and components from Flowbite.
                                            </p>
                                        </div>
                                    </fwb-accordion-content>
                                </fwb-accordion-panel>
                            </fwb-accordion>

                        </div>

                    </div>

                </div>

            </div>
        </div>

        <!------ Product Modal --------->
        <fwb-modal v-if="isShowModal" @close="closeModal">
            <template #body>
                <div class="h-[600px]">
                    <img src="../assets/images/productImg.jpg" class="w-full h-full" alt="" />
                </div>

                <div class=" w-full mt-3">

                    <ul class="flex flex-wrap justify-start gap-3 items-start mt-3">
                        <li class="product_list">
                            <div class="w-[100px] border  h-[100px] border-dark-text rounded-md py-2 px-3">
                                <img src="../assets/images/productImg.jpg" class="h-full w-full object-contain"
                                    alt="Prd-Image" />
                            </div>

                        </li>

                        <li>
                            <div class="w-[100px] border  h-[100px] border-[#d0d1d2] rounded-md py-2 px-3">
                                <img src="../assets/images/productTwo.jpg" class="h-full w-full object-contain"
                                    alt="Prd-Image" />
                            </div>
                        </li>

                        <li>
                            <div class="w-[100px] border  h-[100px] border-[#d0d1d2] rounded-md py-2 px-3">
                                <img src="../assets/images/productTwo.jpg" class="h-full w-full object-contain"
                                    alt="Prd-Image" />
                            </div>
                        </li>
                    </ul>
                </div>
            </template>
        </fwb-modal>
    </div>



</template>
<script setup lang="ts">
import {
    FwbAccordion,
    FwbAccordionContent,
    FwbAccordionHeader,
    FwbAccordionPanel,
} from 'flowbite-vue'

import { ref } from 'vue'
import { FwbButton, FwbModal } from 'flowbite-vue';

const isShowModal = ref(false);

function closeModal() {
    isShowModal.value = false;
}
function showModal() {
    isShowModal.value = true;
}
</script>
<style scoped></style>
