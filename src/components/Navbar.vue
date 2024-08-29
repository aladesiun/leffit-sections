<script setup lang="ts">
import { ref } from 'vue';
const showNewIn = ref(false);
const showCharmsAndBracelets = ref(false);
const showRings = ref(false);
const showChains = ref(false);
const showEarrings = ref(false);


const showDropdownNewIn = () => {
    showNewIn.value = true;
};
const hideDropdownNewIn = () => {
    showNewIn.value = false;
};

const showDropdownCharmsAndBracelets = () => {
    showCharmsAndBracelets.value = true;
};

const hideDropdownCharmsAndBracelets = () => {
    showCharmsAndBracelets.value = false;
};

const showDropdownRings = () => {
    showRings.value = true;
};

const showDropdownChains = () => {
    showChains.value = true;
};
const hideDropdownChains = () => {
    showChains.value = false;
};

const hideDropdownRings = () => {
    showRings.value = false;
};

const showDropdownEarrings = () => {
    showEarrings.value = true;
};

const hideDropdownEarrings = () => {
    showEarrings.value = false;
};











const hideDropdown = () => {
    showNewIn.value = false;
};
</script>

<template>
    <nav class="w-full">

        <div class="border-b-4 border-b-[#ffcad4]">
            <div class="w-[1250px] mx-auto flex items-center justify-between py-4 ">


                <div class="flex items-center space-x-4">
                    <a href="#" class="text-black text-3xl font-semibold">
                        PANDORA
                    </a>
                </div>

                <div class="flex items-center gap-8">
                    <div class="relative">
                        <input type="text" placeholder="Zoeken" class="border border-[#d0d1d2] site_search">
                        <div class="absolute right-5 top-4">
                            <svg width="23" height="23" viewBox="0 0 17 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.677 16.385L9.415 10.123C8.915 10.549 8.34 10.8787 7.69 11.112C7.04 11.3453 6.38667 11.462 5.73 11.462C4.12867 11.462 2.77333 10.9077 1.664 9.799C0.554667 8.69034 0 7.33534 0 5.734C0 4.13267 0.554 2.777 1.662 1.667C2.77 0.557002 4.12467 0.00133573 5.726 2.39808e-06C7.32733 -0.00133094 8.68333 0.553336 9.794 1.664C10.9047 2.77467 11.46 4.13034 11.46 5.731C11.46 6.42567 11.337 7.098 11.091 7.748C10.845 8.398 10.5217 8.954 10.121 9.416L16.383 15.677L15.677 16.385ZM5.731 10.461C7.05767 10.461 8.17767 10.0043 9.091 9.091C10.0043 8.17767 10.461 7.05734 10.461 5.73C10.461 4.40267 10.0043 3.28267 9.091 2.37C8.17767 1.45734 7.05767 1.00067 5.731 1C4.40433 0.999336 3.284 1.456 2.37 2.37C1.456 3.284 0.999333 4.404 1 5.73C1.00067 7.056 1.45733 8.176 2.37 9.09C3.28267 10.004 4.40267 10.4607 5.73 10.46"
                                    fill="black" />
                            </svg>
                        </div>
                    </div>

                    <div class="flex space-x-6">

                        <button>
                            <svg width="22" height="20" viewBox="0 0 16 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.7037 0C10.1156 0 8.74667 0.775326 8 2.05967C7.25333 0.775326 5.88444 0 4.2963 0C3.15727 0.00140949 2.06529 0.466806 1.25987 1.29411C0.454457 2.12141 0.00137221 3.24306 0 4.41304C0 6.58837 1.33333 8.86184 3.95556 11.1688C5.16635 12.227 6.47363 13.1629 7.85926 13.9635C7.9025 13.9874 7.95086 14 8 14C8.04914 14 8.0975 13.9874 8.14074 13.9635C9.52637 13.1629 10.8336 12.227 12.0444 11.1688C14.6667 8.86184 16 6.58837 16 4.41304C15.9986 3.24306 15.5455 2.12141 14.7401 1.29411C13.9347 0.466806 12.8427 0.00140949 11.7037 0ZM8 13.3472C6.96296 12.7385 0.592593 8.83141 0.592593 4.41304C0.593769 3.40444 0.984357 2.43749 1.67868 1.7243C2.37301 1.01111 3.31437 0.609904 4.2963 0.608695C5.86 0.608695 7.17407 1.46924 7.72593 2.85402C7.74825 2.90984 7.78622 2.95759 7.83502 2.99119C7.88383 3.02479 7.94125 3.04273 8 3.04273C8.05875 3.04273 8.11617 3.02479 8.16497 2.99119C8.21378 2.95759 8.25175 2.90984 8.27407 2.85402C8.82593 1.46924 10.14 0.608695 11.7037 0.608695C12.6856 0.609904 13.627 1.01111 14.3213 1.7243C15.0156 2.43749 15.4062 3.40444 15.4074 4.41304C15.4074 8.82608 9.03704 12.7415 8 13.3472Z"
                                    fill="black" />
                            </svg>

                        </button>

                        <button>
                            <svg width="20" height="26" viewBox="0 0 20 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.89648 14C12.1056 14 13.8965 12.2091 13.8965 10C13.8965 7.79086 12.1056 6 9.89648 6C7.68735 6 5.89648 7.79086 5.89648 10C5.89648 12.2091 7.68735 14 9.89648 14Z"
                                    stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M17.8967 14C14.8967 21 9.89673 29 9.89673 29C9.89673 29 4.89673 21 1.89673 14C-1.10327 7 3.89673 1 9.89673 1C15.8967 1 20.8967 7 17.8967 14Z"
                                    stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>

                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.7274 20.447C19.2724 19.171 18.2674 18.044 16.8704 17.24C15.4734 16.436 13.7614 16 12.0004 16C10.2394 16 8.52744 16.436 7.13044 17.24C5.73344 18.044 4.72844 19.171 4.27344 20.447"
                                    stroke="black" stroke-linecap="round" />
                                <path
                                    d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                                    stroke="black" stroke-linecap="round" />
                            </svg>
                        </button>

                        <button>
                            <svg width="18" height="24" viewBox="0 0 18 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 9V5C5 2.79 6.795 1 9 1C11.21 1 13 2.795 13 5V9M1 7H17V23H1V7Z"
                                    stroke="black" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>

        <div class="w-full border-b border-b-[#d0d1d2] h-[47px] relative">
            <div class="w-[1250px] mx-auto h-full">


                <div class=" flex justify-start items-center space-x-6 h-full relative">

                    <router-link to="/" @mouseenter="showDropdownNewIn" @mouseleave="hideDropdownNewIn"
                        class="text-gray-800 hover:text-black text-xs cursor-pointer h-full flex_center hover:border-b-4 hover:border-b-[#ffcad4] nav_links">
                        <div class="flex_start gap-1.5">
                            NEW IN
                            <span class="arrow_nav">
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 4L4 1L1 4" stroke="black" stroke-width="0.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </router-link>
                    <router-link to="/" @mouseenter="showDropdownCharmsAndBracelets"
                        @mouseleave="hideDropdownCharmsAndBracelets"
                        class="text-gray-800 hover:text-black text-xs cursor-pointer h-full flex_center hover:border-b-4 hover:border-b-[#ffcad4] nav_links">
                        <div class="flex_start gap-1.5">
                            CHARMS & BRACELETS
                            <span class="arrow_nav">
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 4L4 1L1 4" stroke="black" stroke-width="0.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </router-link>
                    <router-link to="/" @mouseenter="showDropdownRings" @mouseleave="hideDropdownRings"
                        class="text-gray-800 hover:text-black text-xs cursor-pointer h-full flex_center hover:border-b-4 hover:border-b-[#ffcad4] nav_links">
                        <div class="flex_start gap-1.5">
                            RINGS
                            <span class="arrow_nav">
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 4L4 1L1 4" stroke="black" stroke-width="0.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </router-link>
                    <router-link to="/" @mouseenter="showDropdownChains" @mouseleave="hideDropdownChains"
                        class="text-gray-800 hover:text-black text-xs cursor-pointer h-full flex_center hover:border-b-4 hover:border-b-[#ffcad4] nav_links">
                        <div class="flex_start gap-1.5">
                            CHAINS
                            <span class="arrow_nav">
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 4L4 1L1 4" stroke="black" stroke-width="0.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </router-link>
                    <router-link to="/" @mouseenter="showDropdownEarrings" @mouseleave="hideDropdownEarrings"
                        class="text-gray-800 hover:text-black text-xs cursor-pointer h-full flex_center hover:border-b-4 hover:border-b-[#ffcad4] nav_links">
                        <div class="flex_start gap-1.5">
                            EARRINGS
                            <span class="arrow_nav">
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 4L4 1L1 4" stroke="black" stroke-width="0.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </router-link>
                    <router-link to="/" @mouseenter="showDropdownCharmsAndBracelets"
                        @mouseleave="hideDropdownCharmsAndBracelets"
                        class="text-gray-800 hover:text-black text-xs cursor-pointer h-full flex_center hover:border-b-4 hover:border-b-[#ffcad4] nav_links">
                        <div class="flex_start gap-1.5">
                            COLLECTIONS
                            <span class="arrow_nav">
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 4L4 1L1 4" stroke="black" stroke-width="0.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </router-link>
                    <router-link to="/" @mouseenter="showDropdownCharmsAndBracelets"
                        @mouseleave="hideDropdownCharmsAndBracelets"
                        class="text-gray-800 hover:text-black text-xs cursor-pointer h-full flex_center hover:border-b-4 hover:border-b-[#ffcad4] nav_links">
                        <div class="flex_start gap-1.5">
                            GIFTS
                            <span class="arrow_nav">
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 4L4 1L1 4" stroke="black" stroke-width="0.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </router-link>
                    <router-link to="/" @mouseenter="showDropdownCharmsAndBracelets"
                        @mouseleave="hideDropdownCharmsAndBracelets"
                        class="text-gray-800 hover:text-black text-xs cursor-pointer h-full flex_center hover:border-b-4 hover:border-b-[#ffcad4] nav_links">
                        <div class="flex_start gap-1.5">
                            DISCOVER
                            <span class="arrow_nav">
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 4L4 1L1 4" stroke="black" stroke-width="0.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </router-link>
                    
                </div>
            </div>


            <!-- Dropdown content -->
            <div v-if="showNewIn" id="NewIN" class="w-full absolute h-[400px] top-11 border bg-white"
                @mouseenter="showDropdownNewIn" @mouseleave="hideDropdownNewIn">
                New in
            </div>

            <div v-if="showCharmsAndBracelets" id="showCharmsAndBracelets"
                class="w-full absolute h-[400px] top-11 border bg-white" @mouseenter="showDropdownCharmsAndBracelets"
                @mouseleave="hideDropdownCharmsAndBracelets">
                Charms and bracelets
            </div>

            <div v-if="showRings" id="showRings" class="w-full absolute h-[400px] top-11 border bg-white"
                @mouseenter="showDropdownRings" @mouseleave="hideDropdownRings">
                Rings
            </div>

            <div v-if="showChains" id="showCharmsAndBracelets" class="w-full absolute h-[400px] top-11 border bg-white"
                @mouseenter="showDropdownChains" @mouseleave="hideDropdownChains">
                Chains
            </div>

        </div>

    </nav>

</template>

<style scoped></style>
