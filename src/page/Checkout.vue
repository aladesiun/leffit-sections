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

        <div class="max_width flex lg:flex-row flex-col justify-between gap-12 mx-auto mt-8">

            <div class="lg:w-full md:w-[700px] w-[94%] mx-auto">
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

                    <div class="bg-[#f5f5f5] mt-2 px-5 pt-5 mb-6 flex sm:flex-row flex-col justify-between items-start pb-6">
                        <div class="sm:mb-0 mb-6">
                            <h3 class="text-gray-800 font-medium">PANDÒRA</h3>
                            <p class="text-dark-text text-xs mt-2">Already a member? Log in for faster checkout.</p>
                            <p class="text-dark-text text-xs mt-6">New to Pandora? <span class="underline">Create an
                                    account.</span>
                            </p>
                        </div>

                        <button
                            class=" bg-white border border-dark-border hover:bg-dark-bg hover:text-white ease-in-out duration-150 text-dark-text  font-normal text-xs h-[45px] sm:w-[250px] w-full tracking-[4px]">
                            TO REGISTER
                        </button>
                    </div>
                </div>


                <div>
                    <!-- Form Fields -->
                    <form>
                        <div class="mb-4 relative">
                            <label class="block text-[#71706c] text-[11px] font-normal mb-2 absolute left-5 top-[6px]"
                                for="first-name">First name
                                *</label>
                            <input id="first-name" class="w-full border border-[#d91f46] form_control" type="text">
                            <p class="text-[#d91f46] text-[11px] mt-1">Enter the first name</p>
                        </div>

                        <div class="mb-4 relative">
                            <label class="block text-[#71706c] text-[11px] font-normal mb-2 absolute left-5 top-[6px]"
                                for="surname">Surname *</label>
                            <input id="surname" class="w-full border border-gray-300 rounded-lg p-2 form_control"
                                type="text">
                            <p class="text-[#d91f46] text-[11px] mt-1">Voer de achternaam in</p>
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
                                    <path
                                        d="M22.6821 21.267L31.6621 30.247L30.2481 31.661L21.2681 22.681L22.6821 21.267Z"
                                        fill="black" />
                                </svg>
                            </span>
                            <a href="#" class="text-[#d91f46] text-[11px] mt-1">Enter street name and house number.</a>
                        </div>

                        <div class="mb-4 relative">
                            <label class="block text-[#71706c] text-[11px] font-normal mb-2 absolute left-5 top-[6px]"
                                for="address_line2">Address Line 2</label>
                            <input id="qddress_line2" class="w-full border border-[#d91f46] form_control" type="text">
                        </div>

                        <div class="mb-4 relative">
                            <label class="block text-[#71706c] text-[11px] font-normal mb-2 absolute left-5 top-[6px]"
                                for="local_authority">Local authority*</label>
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
                            <input id="country" class="w-full border border-[#d91f46] form_control disabled"
                                type="text">
                        </div>

                        <div class="mb-4 relative">
                            <label class="block text-[#71706c] text-[11px] font-normal mb-2 absolute left-5 top-[6px]"
                                for="phone_number">Phone number*</label>
                            <input id="phone_number" class="w-full border border-[#d91f46] form_control disabled"
                                type="text">
                        </div>

                        <div class="mb-4 relative">
                            <label class="block text-[#71706c] text-[11px] font-normal mb-2 absolute left-5 top-[6px]"
                                for="phone_number">E-mail*</label>
                            <input id="phone_number" class="w-full border border-[#d91f46] form_control disabled"
                                type="email">
                        </div>

                        <div class="mb-7 relative">
                            <label class="inline-flex items-center">
                                <input type="checkbox" class="form-checkbox text-dark-bg">
                                <span class="ml-3 text-dark-text text-xs font-normal leading-4">Yes, sign me up for the Pandora Newsletter. I confirm
                                    that I am over 16 years of age. I would like to receive digital communications
                                    (email) from Pandora about Pandora products and exclusive offers</span>
                            </label>
                        </div>

                        <button class="w-full bg-dark-bg hover:bg-black ease-in-out duration-150 text-white font-normal sm:text-sm text-xs tracking-[4px] py-3">NEXT: DELIVERY
                            METHOD
                        </button>
                    </form>
                </div>
            </div>


            <div  id="Order-Overview" class="lg:w-[557px] md:w-[700px] w-[94%] mx-auto border-t-[6px] border-t-[#ffcad4]">
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