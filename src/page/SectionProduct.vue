

<template>
<fwb-accordion>
    <fwb-accordion-panel>
      <fwb-accordion-header>header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>another header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline" >Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>and one more header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
  </fwb-accordion>
    <!-- <div class="w-[1250px] mx-auto flex gap-3 justify-between items-start mt-14 cartLayout">
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

                    <div class="w-full md:h-[600px] sm:h-[400px] h-[300px] border border-red-500 product_wrap">
                        <img src="../assets/images/productImg.jpg" class="h-full w-full object-contain"
                            alt="Prd-Image" />
                    </div>

                    <div class=" w-full mt-3">

                        <ul class="flex flex-wrap justify-start gap-3 items-start">

                            <li>
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

                </div>

                
                <div id="product-details" class="w-[780px] product_details border ">

                    <p class=" text-dark-text text-[28px] font-bold mb-3">
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

                        <div class=" grid grid-cols-6 gap-3 w-[95%] mt-2.5">

                            <div class="border w-[62px] h-[45px] flex_center text-xs hover:bg-darkText">
                                24
                            </div>

                            <div class="border w-[62px] h-[45px] flex_center text-xs">
                                24
                            </div>

                            <div class="border w-[62px] h-[45px] flex_center text-xs">
                                24
                            </div>

                            <div class="border w-[62px] h-[45px] flex_center text-xs">
                                24
                            </div>

                            <div class="border w-[62px] h-[45px] flex_center text-xs">
                                24
                            </div>

                            <div class="border w-[62px] h-[45px] flex_center text-xs">
                                24
                            </div>
                            <div class="border w-[62px] h-[45px] flex_center text-xs">
                                24
                            </div>
                            <div class="border w-[62px] h-[45px] flex_center text-xs">
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
                                <span class="mr-3">
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
                                <span>
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



                        <div id="Accordion">

                            <div id="accordionExample">
                                <div
                                    class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
                                    <h2 class="mb-0" id="headingOne">
                                        <button
                                            class="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                                            type="button" data-twe-collapse-init data-twe-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            Accordion Item #1
                                            <span
                                                class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="!visible" data-twe-collapse-item data-twe-collapse-show
                                        aria-labelledby="headingOne" data-twe-parent="#accordionExample">
                                        <div class="px-5 py-4">
                                            <strong>This is the first item's accordion body.</strong> It is
                                            shown by default, until the collapse plugin adds the appropriate
                                            classes that we use to style each element. These classes control
                                            the overall appearance, as well as the showing and hiding via CSS
                                            transitions. You can modify any of this with custom CSS or
                                            overriding our default variables. It's also worth noting that just
                                            about any HTML can go within the <code>.accordion-body</code>,
                                            though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
                                    <h2 class="mb-0" id="headingTwo">
                                        <button
                                            class="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                                            type="button" data-twe-collapse-init data-twe-collapse-collapsed
                                            data-twe-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            Accordion Item #2
                                            <span
                                                class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="!visible hidden" data-twe-collapse-item
                                        aria-labelledby="headingTwo" data-twe-parent="#accordionExample">
                                        <div class="px-5 py-4">
                                            <strong>This is the second item's accordion body.</strong> It is
                                            hidden by default, until the collapse plugin adds the appropriate
                                            classes that we use to style each element. These classes control
                                            the overall appearance, as well as the showing and hiding via CSS
                                            transitions. You can modify any of this with custom CSS or
                                            overriding our default variables. It's also worth noting that just
                                            about any HTML can go within the <code>.accordion-body</code>,
                                            though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
                                    <h2 class="accordion-header mb-0" id="headingThree">
                                        <button
                                            class="data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                                            type="button" data-twe-collapse-init data-twe-collapse-collapsed
                                            data-twe-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            Accordion Item #3
                                            <span
                                                class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="!visible hidden" data-twe-collapse-item
                                        aria-labelledby="headingThree" data-twe-parent="#accordionExample">
                                        <div class="px-5 py-4">
                                            <strong>This is the third item's accordion body.</strong> It is
                                            hidden by default, until the collapse plugin adds the appropriate
                                            classes that we use to style each element. These classes control
                                            the overall appearance, as well as the showing and hiding via CSS
                                            transitions. You can modify any of this with custom CSS or
                                            overriding our default variables. It's also worth noting that just
                                            about any HTML can go within the <code>.accordion-body</code>,
                                            though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div> -->
</template>
<script setup lang="ts">
import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
} from 'flowbite-vue'
</script>
<style scoped></style>
