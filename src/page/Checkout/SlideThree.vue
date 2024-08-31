<script setup lang="ts">

import { ref } from 'vue';
import Ideal from '../../assets/images/pay/ideal.png';
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';


// Declare reactive references
const visibleRight = ref(false);
const billingCheckbox = ref<HTMLInputElement | null>(null);
const billingAddressDiv = ref<HTMLDivElement | null>(null);


// Define methods
function toggleBillingAddress() {
    if (billingCheckbox.value && billingAddressDiv.value) {
        billingAddressDiv.value.style.display = billingCheckbox.value.checked ? 'block' : 'none';
    }
}
// Define methods array
const methods = [
    { id: 'ideal', name: 'iDEAL', icon: '📱', img: Ideal },
    { id: 'credit-card', name: 'Credit Card', icon: '💳', img: Ideal },
    { id: 'klarna', name: 'Achteraf betalen. Klarna.', icon: '🛒', img: Ideal },
    { id: 'paypal', name: 'PayPal', icon: '💸', img: Ideal },
];

// Define selectedMethod and selection function
const selectedMethod = ref<string>('paypal');
const selectMethod = (methodId: string) => {
    selectedMethod.value = methodId;
};
</script>

<template>
    <div class="lg:w-full md:w-[700px] w-[94%] mx-auto">

        <div class="w-full h-fit relative">
            <!-- Step Indicator -->
            <div class="flex justify-between items-start w-full relative z-20">
                <span class="flex items-center bg-white pl-0">
                    <span
                        class="flex items-center justify-center h-[27px] w-[27px] rounded-full border border-[#d0d1d2] bg-transparent text-[#71706c] text-xs">1</span>
                </span>
                <span class="flex items-center bg-white px-3">
                    <span
                        class="flex items-center justify-center h-[27px] w-[27px] rounded-full border border-[#d0d1d2] text-[#71706c] text-xs">2</span>
                </span>
                <span class="flex items-center bg-white px-3">
                    <span
                        class="flex items-center justify-center h-[27px] w-[27px] rounded-full bg-dark-bg text-white text-xs">3</span>
                </span>
            </div>

            <div class="top-3 absolute border-[0.5px] border-[#d0d1d2] w-full"></div>
        </div>

        <div class="mt-9">
            <div class="border-b-[0.5px] border-b-[#d0d1d2] mb-6 flex_between !items-start">
                <h2 class="md:text-2xl text-lg font-bold text-dark-text mb-4">Shipping Information</h2>

                <p class="text-dark-text font-normal underline">
                    To process
                </p>
            </div>
        </div>

        <div class="mt-9">
            <div class="border-b-[0.5px] border-b-[#d0d1d2] mb-6 flex_between !items-start">
                <h2 class="md:text-2xl text-xl font-bold text-dark-text mb-4">Delivery method</h2>

                <p class="text-dark-text font-normal underline">
                    To process
                </p>
            </div>

            <div>
                <div class="flex">
                    <span class="mr-3">
                        <svg width="25" height="25" viewBox="0 0 200 193" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M188 56.0121H138.81C143.394 53.9868 147.65 51.2906 151.44 48.0121C154.068 45.6749 156.185 42.8199 157.658 39.6261C159.131 36.4323 159.929 32.9685 160 29.4521C160.113 25.5552 159.429 21.6763 157.99 18.0532C156.551 14.4301 154.386 11.1393 151.63 8.3826C148.873 5.62593 145.582 3.46151 141.959 2.02213C138.336 0.582749 134.457 -0.101246 130.56 0.0120996C127.044 0.0834924 123.58 0.880697 120.386 2.35371C117.192 3.82673 114.337 5.94378 112 8.5721C106.09 15.2421 102.37 23.9321 100 32.2621C97.65 23.9321 93.93 15.2621 88 8.5721C85.6628 5.94378 82.8078 3.82673 79.614 2.35371C76.4202 0.880697 72.9564 0.0834924 69.44 0.0120996C65.5431 -0.101246 61.6642 0.582749 58.0411 2.02213C54.418 3.46151 51.1272 5.62593 48.3705 8.3826C45.6138 11.1393 43.4494 14.4301 42.01 18.0532C40.5707 21.6763 39.8867 25.5552 40 29.4521C40.0714 32.9685 40.8686 36.4323 42.3416 39.6261C43.8146 42.8199 45.9317 45.6749 48.56 48.0121C52.3498 51.2906 56.6064 53.9868 61.19 56.0121H12C8.8174 56.0121 5.76516 57.2764 3.51472 59.5268C1.26428 61.7773 0 64.8295 0 68.0121V100.012C0 103.195 1.26428 106.247 3.51472 108.497C5.76516 110.748 8.8174 112.012 12 112.012H16V180.012C16 183.195 17.2643 186.247 19.5147 188.497C21.7652 190.748 24.8174 192.012 28 192.012H172C175.183 192.012 178.235 190.748 180.485 188.497C182.736 186.247 184 183.195 184 180.012V112.012H188C191.183 112.012 194.235 110.748 196.485 108.497C198.736 106.247 200 103.195 200 100.012V68.0121C200 64.8295 198.736 61.7773 196.485 59.5268C194.235 57.2764 191.183 56.0121 188 56.0121ZM118 13.8721C119.615 12.0671 121.586 10.6149 123.789 9.60659C125.991 8.59825 128.378 8.05543 130.8 8.0121H131.41C134.165 8.01502 136.891 8.56992 139.428 9.64404C141.965 10.7182 144.261 12.2897 146.18 14.2659C148.099 16.2421 149.603 18.5828 150.603 21.1499C151.602 23.717 152.077 26.4584 152 29.2121C151.957 31.6341 151.414 34.021 150.406 36.2235C149.397 38.426 147.945 40.3967 146.14 42.0121C134.05 52.7121 113.07 55.2221 104.14 55.8021C104.76 46.9421 107.26 26.0121 118 13.8721ZM48 29.2121C47.9225 26.4584 48.3976 23.717 49.3972 21.1499C50.3968 18.5828 51.9007 16.2421 53.82 14.2659C55.7394 12.2897 58.0352 10.7182 60.572 9.64404C63.1088 8.56992 65.8352 8.01502 68.59 8.0121H69.2C71.622 8.05543 74.0089 8.59825 76.2114 9.60659C78.4139 10.6149 80.3846 12.0671 82 13.8721C92.71 25.9621 95.21 46.9421 95.79 55.8721C86.9 55.2921 65.92 52.7821 53.79 42.0821C51.9891 40.4525 50.545 38.4678 49.5486 36.2528C48.5521 34.0379 48.0249 31.6407 48 29.2121ZM8 100.012V68.0121C8 66.9512 8.42143 65.9338 9.17157 65.1837C9.92172 64.4335 10.9391 64.0121 12 64.0121H96V104.012H12C10.9391 104.012 9.92172 103.591 9.17157 102.841C8.42143 102.09 8 101.073 8 100.012ZM24 180.012V112.012H96V184.012H28C26.9391 184.012 25.9217 183.591 25.1716 182.841C24.4214 182.09 24 181.073 24 180.012ZM176 180.012C176 181.073 175.579 182.09 174.828 182.841C174.078 183.591 173.061 184.012 172 184.012H104V112.012H176V180.012ZM192 100.012C192 101.073 191.579 102.09 190.828 102.841C190.078 103.591 189.061 104.012 188 104.012H104V64.0121H188C189.061 64.0121 190.078 64.4335 190.828 65.1837C191.579 65.9338 192 66.9512 192 68.0121V100.012Z"
                                fill="black" />
                        </svg>
                    </span>
                    <h3 class="md:text-lg sm:text-base text-sm font-bold text-dark-text mb-2 uppercase">Delivery of (1
                        item)</h3>
                </div>
                <p class="text-dark-text text-sm">
                    Delivery
                </p>
                <p class="text-[#71706c] text-xs">
                    Standard delivery (2-3 working days)
                </p>
            </div>

            <div class="mt-4">
                <div class="flex">
                    <span class="mr-3">
                        <svg width="25" height="25" viewBox="0 0 200 193" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M188 56.0121H138.81C143.394 53.9868 147.65 51.2906 151.44 48.0121C154.068 45.6749 156.185 42.8199 157.658 39.6261C159.131 36.4323 159.929 32.9685 160 29.4521C160.113 25.5552 159.429 21.6763 157.99 18.0532C156.551 14.4301 154.386 11.1393 151.63 8.3826C148.873 5.62593 145.582 3.46151 141.959 2.02213C138.336 0.582749 134.457 -0.101246 130.56 0.0120996C127.044 0.0834924 123.58 0.880697 120.386 2.35371C117.192 3.82673 114.337 5.94378 112 8.5721C106.09 15.2421 102.37 23.9321 100 32.2621C97.65 23.9321 93.93 15.2621 88 8.5721C85.6628 5.94378 82.8078 3.82673 79.614 2.35371C76.4202 0.880697 72.9564 0.0834924 69.44 0.0120996C65.5431 -0.101246 61.6642 0.582749 58.0411 2.02213C54.418 3.46151 51.1272 5.62593 48.3705 8.3826C45.6138 11.1393 43.4494 14.4301 42.01 18.0532C40.5707 21.6763 39.8867 25.5552 40 29.4521C40.0714 32.9685 40.8686 36.4323 42.3416 39.6261C43.8146 42.8199 45.9317 45.6749 48.56 48.0121C52.3498 51.2906 56.6064 53.9868 61.19 56.0121H12C8.8174 56.0121 5.76516 57.2764 3.51472 59.5268C1.26428 61.7773 0 64.8295 0 68.0121V100.012C0 103.195 1.26428 106.247 3.51472 108.497C5.76516 110.748 8.8174 112.012 12 112.012H16V180.012C16 183.195 17.2643 186.247 19.5147 188.497C21.7652 190.748 24.8174 192.012 28 192.012H172C175.183 192.012 178.235 190.748 180.485 188.497C182.736 186.247 184 183.195 184 180.012V112.012H188C191.183 112.012 194.235 110.748 196.485 108.497C198.736 106.247 200 103.195 200 100.012V68.0121C200 64.8295 198.736 61.7773 196.485 59.5268C194.235 57.2764 191.183 56.0121 188 56.0121ZM118 13.8721C119.615 12.0671 121.586 10.6149 123.789 9.60659C125.991 8.59825 128.378 8.05543 130.8 8.0121H131.41C134.165 8.01502 136.891 8.56992 139.428 9.64404C141.965 10.7182 144.261 12.2897 146.18 14.2659C148.099 16.2421 149.603 18.5828 150.603 21.1499C151.602 23.717 152.077 26.4584 152 29.2121C151.957 31.6341 151.414 34.021 150.406 36.2235C149.397 38.426 147.945 40.3967 146.14 42.0121C134.05 52.7121 113.07 55.2221 104.14 55.8021C104.76 46.9421 107.26 26.0121 118 13.8721ZM48 29.2121C47.9225 26.4584 48.3976 23.717 49.3972 21.1499C50.3968 18.5828 51.9007 16.2421 53.82 14.2659C55.7394 12.2897 58.0352 10.7182 60.572 9.64404C63.1088 8.56992 65.8352 8.01502 68.59 8.0121H69.2C71.622 8.05543 74.0089 8.59825 76.2114 9.60659C78.4139 10.6149 80.3846 12.0671 82 13.8721C92.71 25.9621 95.21 46.9421 95.79 55.8721C86.9 55.2921 65.92 52.7821 53.79 42.0821C51.9891 40.4525 50.545 38.4678 49.5486 36.2528C48.5521 34.0379 48.0249 31.6407 48 29.2121ZM8 100.012V68.0121C8 66.9512 8.42143 65.9338 9.17157 65.1837C9.92172 64.4335 10.9391 64.0121 12 64.0121H96V104.012H12C10.9391 104.012 9.92172 103.591 9.17157 102.841C8.42143 102.09 8 101.073 8 100.012ZM24 180.012V112.012H96V184.012H28C26.9391 184.012 25.9217 183.591 25.1716 182.841C24.4214 182.09 24 181.073 24 180.012ZM176 180.012C176 181.073 175.579 182.09 174.828 182.841C174.078 183.591 173.061 184.012 172 184.012H104V112.012H176V180.012ZM192 100.012C192 101.073 191.579 102.09 190.828 102.841C190.078 103.591 189.061 104.012 188 104.012H104V64.0121H188C189.061 64.0121 190.078 64.4335 190.828 65.1837C191.579 65.9338 192 66.9512 192 68.0121V100.012Z"
                                fill="black" />
                        </svg>
                    </span>
                    <h3 class="md:text-lg sm:text-base text-sm font-bold text-dark-text mb-2">Gift wrapping</h3>
                </div>

                <p class="text-dark-text text-sm">
                    Gift wrapping
                </p>

                <p class="text-[#71706c] text-xs">
                    No gift wrapping selected
                </p>
            </div>

            <div class="border-b-[0.5px] border-b-[#d0d1d2] mb-6 mt-7">
                <h2 class="md:text-2xl text-xl font-bold text-dark-text mb-4">Payment</h2>
            </div>


            <div class="mb-8">
                <button @click="visibleRight = true"
                    class=" bg-white border coupon_btn border-dark-border hover:bg-dark-bg hover:text-white ease-in-out duration-150 text-dark-text  font-normal text-xs h-[45px] w-full tracking-[2px] flex_center">
                    <span class="mr-3">
                        <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 7V6H6V0H7V6H13V7H7V13H6V7H0Z" fill="black" />
                        </svg>
                    </span> ADD COUPON CODE
                </button>


                <div class="coupon_code">
                    <Drawer class="bg-white p-5 z-50" v-model:visible="visibleRight" position="right">
                        <div class="border-b-[0.5px] border-b-[#d0d1d2] mb-6 flex_between !items-start pt-7">
                            <h2 class="md:text-2xl text-lg font-bold text-dark-text mb-4">Coupon Code</h2>
                        </div>

                        <div class="mb-4 relative">
                            <input id="country" class="w-full border border-[#d91f46] pl-5 placeholder:text-xs placeholder:text-[#71706c]"
                                type="text"
                            placeholder="Coupon code"    
                            >
                        </div>

                        <button
                            class="w-full bg-dark-bg hover:bg-black ease-in-out duration-150 text-white font-normal text-xs tracking-[3px] h-[45px] mt-8">
                            APPLY
                        </button>

                        <button
                            @click="visibleRight = false"
                            class=" bg-white  mt-5 border coupon_btn border-dark-border hover:bg-dark-bg hover:text-white ease-in-out duration-150 text-dark-text  font-normal text-xs h-[45px] w-full tracking-[2px] flex_center">
                            CANCEL
                        </button>
                    </Drawer>
                </div>
            </div>

            <div class="mb-5 relative">

                <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="text-dark-text h-5 w-5" id="billing-checkbox" ref="billingCheckbox"
                        @click="toggleBillingAddress">
                    <span class="ml-3 text-dark-text text-xs font-normal leading-4">
                        Billing address same as shipping address</span>
                </label>

            </div>

            <div id="billing-address" ref="billingAddressDiv" class="hidden">
                <p class="text-[18px] mb-5">
                    Billing addresss
                </p>

                <form>
                    <div class="mb-4 relative">
                        <label class="block text-[#71706c] text-[11px] font-normal mb-2 absolute left-5 top-[6px]"
                            for="first-name">First name
                            *</label>
                        <input id="first-name" class="w-full border border-[#d91f46] form_control" type="text">
                    </div>
                    <div class="mb-4 relative">
                        <label class="block text-[#71706c] text-[11px] font-normal mb-2 absolute left-5 top-[6px]"
                            for="first-name">Surname
                            *</label>
                        <input id="first-name" class="w-full border border-[#d91f46] form_control" type="text">
                    </div>
                    <div class="mb-4 relative">
                        <label class="block text-[#71706c] text-[11px] font-normal mb-2 absolute left-5 top-[6px]"
                            for="address">Street name and house number *</label>
                        <input id="address" class="w-full border border-gray-300 rounded-lg !pr-20 form_control"
                            type="text" placeholder="Start typing to find your address">
                        <span class="absolute top-3 right-4">
                            <svg width="22" height="22" viewBox="0 0 32 32" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13 26C5.8 26 0 20.2 0 13C0 5.8 5.8 0 13 0C20.2 0 26 5.8 26 13C26 20.2 20.2 26 13 26ZM13 2C6.9 2 2 6.9 2 13C2 19.1 6.9 24 13 24C19.1 24 24 19.1 24 13C24 6.9 19.1 2 13 2Z"
                                    fill="black" />
                                <path d="M22.6821 21.267L31.6621 30.247L30.2481 31.661L21.2681 22.681L22.6821 21.267Z"
                                    fill="black" />
                            </svg>
                        </span>
                    </div>
                    <div class="mb-4 relative">
                        <label class="block text-[#71706c] text-[11px] font-normal mb-2 absolute left-5 top-[6px]"
                            for="address_line2">Address Line 2</label>
                        <input id="qddress_line2" class="w-full border border-[#d91f46] form_control" type="text">
                    </div>
                    <div class="mb-4 relative">
                        <label class="block text-[#71706c] text-[11px] font-normal mb-2 absolute left-5 top-[6px]"
                            for="local_authority">Place name*</label>
                        <input id="local_authority" class="w-full border border-[#d91f46] form_control" type="text">
                    </div>
                    <div class="mb-4 relative">
                        <label class="block text-[#71706c] text-[11px] font-normal mb-2 absolute left-5 top-[6px]"
                            for="local_authority">Postal Code*</label>
                        <input id="local_authority" class="w-full border border-[#d91f46] form_control" type="text">
                    </div>
                    <div class="mb-4 relative">
                        <label class="block text-[#71706c] text-[11px] font-normal mb-2 absolute left-5 top-[6px]"
                            for="country">Country*</label>
                        <input id="country" class="w-full border border-[#d91f46] form_control disabled" type="text">
                    </div>
                </form>


            </div>

            <div id="payment-method">
                <p class="uppercase text-lg font-semibold mb-6">
                    Payment Methods
                </p>

                <div v-for="(method, index) in methods" :key="method.id"
                    class="flex flex-col p-4 border rounded-md mb-4 cursor-pointer"
                    :class="selectedMethod === method.id ? 'border-black' : 'border-gray-200'"
                    @click="selectMethod(method.id)">
                    <div class="flex items-center">
                        <input type="radio" :id="method.id" :value="method.id" v-model="selectedMethod"
                            class="mr-3 text-dark-text h-6 w-6" />
                        <label :for="method.id" class="text-lg font-medium text-dark-text sm:pl-3 pl-0">
                            <div class="flex_start sm:gap-5 gap-1">
                                <img :src="method.img" class="w-[40px] gap-10" alt="method.name" />
                                <p class="text-base"> {{ method.name }}</p>
                            </div>
                        </label>
                    </div>

                    <!-- Conditional Content Rendering -->
                    <div v-if="selectedMethod === method.id" class="mt-4">
                        <div v-if="method.id === 'ideal'" class="p-4 border flex items-center justify-center">
                            IDEAL

                        </div>
                        <div v-else-if="method.id === 'credit-card'"
                            class="p-4 border rounded-md border-black flex items-center justify-center">
                            <span class="text-lg font-bold text-dark-text">Credit Card Payment</span>
                        </div>
                        <div v-else-if="method.id === 'klarna'"
                            class="p-4 border rounded-md border-black flex items-center justify-center">
                            <span class="text-lg font-bold text-dark-text">Klarna Payment</span>
                        </div>
                        <div v-else-if="method.id === 'paypal'"
                            class="p-4 border rounded-md border-black bg-yellow-200 flex items-center justify-center">
                            <span class="text-lg font-bold text-dark-text">PayPal</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-7 pb-16">
                <p class=" text-dark-text text-xs">
                    I accept the <span><a href="#" class="underline">terms of use </a></span>. To read the privacy
                    policy click here.
                </p>
                <button
                    class="w-full bg-dark-bg hover:bg-black ease-in-out duration-150 text-white font-normal text-xs tracking-[4px] h-[45px] mt-8">PLACE
                    YOUR ORDER</button>
            </div>
        </div>
    </div>

    <div id="Order-Overview" class="lg:w-[557px] md:w-[700px] w-[94%] mx-auto border-t-[6px] border-t-[#ffcad4]">
        <div class="h-auto bg-[#f5f5f5] w-full pt-7 pb-4 px-4">
            <p class="text-black sm:text-xl text-lg font-semibold">
                ORDER OVERVIEW
            </p>

            <div class="border-b border-b-[#ccc] pb-5">
                <div class="flex justify-between items-center mt-4">
                    <span class="text-sm text-[#71706c]">Subtotal (1 item)</span>
                    <span class="font-medium text-sm text-[#71706c]">€39.00</span>
                </div>
                <div class="flex justify-between items-center mt-2">
                    <span class="text-sm text-[#71706c]">Dispatch</span>
                    <span class="font-medium text-sm text-[#71706c]">€3.80</span>
                </div>
            </div>

            <div class="flex justify-between items-center mt-5">
                <span class="text-dark-text font-medium">Total</span>
                <span class="text-dark-text font-medium text-lg">€42.80</span>
            </div>
            <span class="text-[#71706c] text-sm">Tax included</span>
        </div>

        <!-- Item Section -->
        <div class="flex justify-between items-center mb-7 mt-5 px-1 pb-4 border-b border-b-[#00000020]">
            <h3 class="text-lg font-bold text-dark-text">1 ITEM</h3>
            <a href="#" class="text-dark-text text-[14px] font-normal underline">To process</a>
        </div>


        <div class="border-t border-t-[#00000020] pt-5">

            <!-- Information Section -->
            <div class="space-y-4 text-dark-">

                <div class="flex items-center space-x-4">
                      <span>
                        <svg width="25" height="25" viewBox="0 0 232 160" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M231.71 58.52L217.71 23.52C216.816 21.2994 215.279 19.3969 213.296 18.0568C211.312 16.7168 208.974 16.0005 206.58 16H168V4C168 2.93913 167.579 1.92172 166.828 1.17157C166.078 0.421428 165.061 0 164 0H12C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76515 0 8.8174 0 12V124C0 127.183 1.26428 130.235 3.51472 132.485C5.76516 134.736 8.8174 136 12 136H32.29C33.2561 142.66 36.5884 148.749 41.6771 153.153C46.7658 157.557 53.2703 159.981 60 159.981C66.7297 159.981 73.2342 157.557 78.3229 153.153C83.4116 148.749 86.7439 142.66 87.71 136H144.29C145.256 142.66 148.588 148.749 153.677 153.153C158.766 157.557 165.27 159.981 172 159.981C178.73 159.981 185.234 157.557 190.323 153.153C195.412 148.749 198.744 142.66 199.71 136H220C223.183 136 226.235 134.736 228.485 132.485C230.736 130.235 232 127.183 232 124V60C231.998 59.4927 231.9 58.9905 231.71 58.52ZM168 24H206.58C207.38 23.9984 208.162 24.2367 208.825 24.6842C209.488 25.1316 210.002 25.7676 210.3 26.51L222.09 56H168V24ZM8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42142 10.9391 8 12 8H160V80H8V12ZM60 152C56.0444 152 52.1776 150.827 48.8886 148.629C45.5996 146.432 43.0362 143.308 41.5224 139.654C40.0087 135.999 39.6126 131.978 40.3843 128.098C41.156 124.219 43.0608 120.655 45.8579 117.858C48.6549 115.061 52.2186 113.156 56.0982 112.384C59.9778 111.613 63.9991 112.009 67.6537 113.522C71.3082 115.036 74.4318 117.6 76.6294 120.889C78.827 124.178 80 128.044 80 132C80 137.304 77.8929 142.391 74.1421 146.142C70.3914 149.893 65.3043 152 60 152ZM144.29 128H87.71C86.7439 121.34 83.4116 115.251 78.3229 110.847C73.2342 106.443 66.7297 104.019 60 104.019C53.2703 104.019 46.7658 106.443 41.6771 110.847C36.5884 115.251 33.2561 121.34 32.29 128H12C10.9391 128 9.92172 127.579 9.17157 126.828C8.42143 126.078 8 125.061 8 124V88H160V106.71C155.832 108.692 152.217 111.672 149.477 115.386C146.737 119.1 144.955 123.433 144.29 128ZM172 152C168.044 152 164.178 150.827 160.889 148.629C157.6 146.432 155.036 143.308 153.522 139.654C152.009 135.999 151.613 131.978 152.384 128.098C153.156 124.219 155.061 120.655 157.858 117.858C160.655 115.061 164.219 113.156 168.098 112.384C171.978 111.613 175.999 112.009 179.654 113.522C183.308 115.036 186.432 117.6 188.629 120.889C190.827 124.178 192 128.044 192 132C192 137.304 189.893 142.391 186.142 146.142C182.391 149.893 177.304 152 172 152ZM224 124C224 125.061 223.579 126.078 222.828 126.828C222.078 127.579 221.061 128 220 128H199.71C198.648 120.651 194.711 114.025 188.765 109.579C182.818 105.132 175.349 103.23 168 104.29V64H224V124Z"
                                fill="black" />
                        </svg>
                    </span>
                    <div>
                        <h4 class="font-normal">Free Standard Delivery</h4>
                        <p class="text-[#71706c] text-xs mt-1">Free standard delivery from €49<br>Standard
                            shipping:
                            2-3 business days<br>Express shipping: 1-2 business days</p>
                    </div>
                </div>

                <div class="flex items-center space-x-4">
                   <span>
                        <svg width="21" height="21" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 9.00002V13.5C2 13.6326 2.05268 13.7598 2.14645 13.8536C2.24021 13.9473 2.36739 14 2.5 14H12.5C12.6326 14 12.7598 13.9473 12.8536 13.8536C12.9473 13.7598 13 13.6326 13 13.5V9.00002M1 4.00002V6.00002C1 6.13263 1.05268 6.25981 1.14645 6.35358C1.24021 6.44735 1.36739 6.50002 1.5 6.50002H13.5C13.6326 6.50002 13.7598 6.44735 13.8536 6.35358C13.9473 6.25981 14 6.13263 14 6.00002V4.00002M1 4.00002L2.22 1.55002C2.30386 1.38359 2.43257 1.2439 2.59159 1.14672C2.75062 1.04954 2.93364 0.998727 3.12 1.00002H11.88C12.0664 0.998727 12.2494 1.04954 12.4084 1.14672C12.5674 1.2439 12.6961 1.38359 12.78 1.55002L14 4.00002M1 4.00002H14M8.5 9.00002V14M2 10.5H8.5"
                                stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <div>
                        <h4 class="font-normal">Click & Collect</h4>
                        <p class="text-[#71706c] text-xs mt-1">Pick up your order in the store after 2 hours</p>
                    </div>
                </div>

                <div class="flex items-center space-x-4">
                    <span>
                        <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.78 0.238708C12.7113 0.165022 12.6285 0.105919 12.5365 0.0649275C12.4445 0.0239355 12.3452 0.00189351 12.2445 0.000116721C12.1438 -0.00166006 12.0438 0.0168646 11.9504 0.0545856C11.857 0.0923066 11.7722 0.148451 11.701 0.21967C11.6297 0.290889 11.5736 0.375723 11.5359 0.469111C11.4982 0.562499 11.4796 0.662528 11.4814 0.763231C11.4832 0.863934 11.5052 0.963247 11.5462 1.05525C11.5872 1.14725 11.6463 1.23005 11.72 1.29871L15.44 5.01871H0.75C0.551088 5.01871 0.360322 5.09773 0.21967 5.23838C0.0790175 5.37903 0 5.5698 0 5.76871C0 5.96762 0.0790175 6.15839 0.21967 6.29904C0.360322 6.43969 0.551088 6.51871 0.75 6.51871H15.44L11.72 10.2387C11.6463 10.3074 11.5872 10.3902 11.5462 10.4822C11.5052 10.5742 11.4832 10.6735 11.4814 10.7742C11.4796 10.8749 11.4982 10.9749 11.5359 11.0683C11.5736 11.1617 11.6297 11.2465 11.701 11.3177C11.7722 11.389 11.857 11.4451 11.9504 11.4828C12.0438 11.5206 12.1438 11.5391 12.2445 11.5373C12.3452 11.5355 12.4445 11.5135 12.5365 11.4725C12.6285 11.4315 12.7113 11.3724 12.78 11.2987L17.78 6.29871C17.9205 6.15808 17.9993 5.96746 17.9993 5.76871C17.9993 5.56996 17.9205 5.37933 17.78 5.23871L12.78 0.238708ZM6.28 12.7987C6.35369 12.73 6.41279 12.6472 6.45378 12.5552C6.49477 12.4632 6.51682 12.3639 6.51859 12.2632C6.52037 12.1625 6.50184 12.0625 6.46412 11.9691C6.4264 11.8757 6.37026 11.7909 6.29904 11.7197C6.22782 11.6485 6.14299 11.5923 6.0496 11.5546C5.95621 11.5169 5.85618 11.4983 5.75548 11.5001C5.65478 11.5019 5.55546 11.5239 5.46346 11.5649C5.37146 11.6059 5.28866 11.665 5.22 11.7387L0.22 16.7387C0.0795493 16.8793 0.000659943 17.07 0.000659943 17.2687C0.000659943 17.4675 0.0795493 17.6581 0.22 17.7987L5.22 22.7987C5.28866 22.8724 5.37146 22.9315 5.46346 22.9725C5.55546 23.0135 5.65478 23.0355 5.75548 23.0373C5.85618 23.0391 5.95621 23.0206 6.0496 22.9828C6.14299 22.9451 6.22782 22.889 6.29904 22.8177C6.37026 22.7465 6.4264 22.6617 6.46412 22.5683C6.50184 22.4749 6.52037 22.3749 6.51859 22.2742C6.51682 22.1735 6.49477 22.0742 6.45378 21.9822C6.41279 21.8902 6.35369 21.8074 6.28 21.7387L2.56 18.0187H17.25C17.4489 18.0187 17.6397 17.9397 17.7803 17.799C17.921 17.6584 18 17.4676 18 17.2687C18 17.0698 17.921 16.879 17.7803 16.7384C17.6397 16.5977 17.4489 16.5187 17.25 16.5187H2.56L6.28 12.7987Z"
                                fill="black" />
                        </svg>
                    </span>
                    <div>
                        <h4 class="font-normal">Free returns</h4>
                        <p class="text-[#71706c] text-xs mt-1">Free and easy returns within 30 days<br>Returns
                            possible in store</p>
                    </div>
                </div>

                <div class="flex items-center space-x-4">
                     <span>
                        <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.78418 16.1867L4.78418 16.1867M1.99818 19.1867L10.5702 19.1867C11.5162 19.1867 12.2842 18.3807 12.2842 17.3867L12.2842 2.98669C12.2842 1.99269 11.5162 1.18669 10.5702 1.18669L1.99818 1.18669C1.05118 1.18669 0.28418 1.99269 0.28418 2.98669L0.28418 17.3867C0.28418 18.3807 1.05118 19.1867 1.99818 19.1867Z"
                                stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <div>
                        <h4 class="font-normal">Need more help? Call us</h4>
                        <p class="text-[#71706c] text-xs mt-1">FREE phone number 0800 022 6409*<br>Mon - Fri
                            08:00 -
                            18:00
                        </p>

                        <p class="text-[#71706c] text-xs mt-8">
                            *Calls are free from any Dutch landline. Additional charges may apply for calls from
                            Dutch mobile phones. Check with your mobile provider.
                        </p>
                    </div>
                </div>

            </div>
        </div>

        <!-- Payment Icons -->
        <div class="mt-6 flex space-x-4 justify-center">
            <img src="https://img.icons8.com/color/48/000000/paypal.png" class="h-8" alt="Paypal">
            <img src="https://img.icons8.com/color/48/000000/visa.png" class="h-8" alt="Visa">
            <img src="https://img.icons8.com/color/48/000000/mastercard.png" class="h-8" alt="Mastercard">
            <img src="https://img.icons8.com/color/48/000000/klarnalogo.png" class="h-8" alt="Klarna">
            <img src="https://img.icons8.com/color/48/000000/ideal.png" class="h-8" alt="iDeal">
            <img src="https://img.icons8.com/color/48/000000/apple-pay.png" class="h-8" alt="Apple Pay">
        </div>
    </div>



    <div class="card flex justify-center">

    </div>

</template>

<style scoped></style>
