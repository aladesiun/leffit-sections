<script setup lang="ts">
</script>

<template>

    <div>
        <div class="flex_between items-center space-x-4 border-b border-b-[#d0d1d2] px-4 py-3">
            <a href="#" class="text-black text-3xl font-semibold">
                PANDORA
            </a>
            <p class="text-black text-sm font-noraml">
                Secure checkout
            </p>
        </div>

        <div class="max_width flex justify-between gap-12 mx-auto mt-8">
            <div class="w-full">

                <div class="w-full h-fit relative">
                    <!-- Step Indicator -->
                    <div class="flex justify-between items-start w-full relative z-20">
                        <span class="flex items-center bg-white pl-0">
                            <span
                                class="flex items-center justify-center h-[27px] w-[27px] rounded-full bg-[#27251f] text-white text-xs">1</span>
                        </span>
                        <span class="flex items-center bg-white px-3">
                            <span
                                class="flex items-center justify-center h-[27px] w-[27px] rounded-full border border-[#d0d1d2] text-[#71706c] text-xs">2</span>
                        </span>
                        <span class="flex items-center bg-white px-3">
                            <span
                                class="flex items-center justify-center h-[27px] w-[27px] rounded-full border border-[#d0d1d2] text-[#71706c] text-xs">3</span>
                        </span>
                    </div>
                    <div class="top-3 absolute border-[0.5px] border-[#d0d1d2] w-full"></div>
                </div>


                <div class="mt-9">

                    <div class="border-b-[0.5px] border-b-[#d0d1d2] mb-6">
                        <h2 class="text-2xl font-bold text-dark-text mb-4">Shipping Information</h2>
                    </div>

                    <div class="bg-gray-100 p-4 rounded-lg mb-6">
                        <h3 class="text-gray-800 font-bold">PANDÒRA</h3>
                        <p class="text-gray-600 mt-1">Already a member? Log in for faster checkout.</p>
                        <a href="#" class="text-pink-600 font-medium mt-2 block">Create an account</a>
                        <button
                            class="mt-4 bg-white border border-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg">TO
                            REGISTER
                        </button>
                    </div>
                </div>

            </div>






            <div class="w-[457px] border-t-[6px] border-t-[#ffcad4]">
                <div class="h-auto bg-[#f5f5f5] w-full pt-7 pb-4 px-4">
                    <p class="text-black text-xl font-semibold">
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
                            <img src="https://img.icons8.com/ios-filled/50/000000/delivery.png" class="h-6 w-6"
                                alt="Delivery">
                            <div>
                                <h4 class="font-normal">Free Standard Delivery</h4>
                                <p class="text-[#71706c] text-xs mt-1">Free standard delivery from €49<br>Standard
                                    shipping:
                                    2-3 business days<br>Express shipping: 1-2 business days</p>
                            </div>
                        </div>

                        <div class="flex items-center space-x-4">
                            <img src="https://img.icons8.com/ios-filled/50/000000/shop.png" class="h-6 w-6"
                                alt="Click & Collect">
                            <div>
                                <h4 class="font-normal">Click & Collect</h4>
                                <p class="text-[#71706c] text-xs mt-1">Pick up your order in the store after 2 hours</p>
                            </div>
                        </div>

                        <div class="flex items-center space-x-4">
                            <img src="https://img.icons8.com/ios-filled/50/000000/return-purchase.png" class="h-6 w-6"
                                alt="Free returns">
                            <div>
                                <h4 class="font-normal">Free returns</h4>
                                <p class="text-[#71706c] text-xs mt-1">Free and easy returns within 30 days<br>Returns
                                    possible in store</p>
                            </div>
                        </div>

                        <div class="flex items-center space-x-4">
                            <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" class="h-6 w-6"
                                alt="Need more help? Call us">
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
        </div>
    </div>

</template>

<style scoped></style>