<script setup lang="ts">
</script>

<template>
<nav class="bg-white border w-[1250px] mx-auto">
  <div class="container mx-auto flex items-center justify-between py-4">
    <!-- Logo -->
    <div class="flex items-center space-x-4">
      <a href="#" class="text-black text-2xl font-bold">
        PANDORA
      </a>
    </div>

    <!-- Navigation Menu -->
    <div class="hidden md:flex space-x-6">
      <a href="#" class="text-gray-800 hover:text-black">NIEUW BINNEN</a>
      <a href="#" class="text-gray-800 hover:text-black">BEDELS & ARMBANDEN</a>
      <a href="#" class="text-gray-800 hover:text-black">RINGEN</a>
      <a href="#" class="text-gray-800 hover:text-black">KETTINGEN</a>
      <a href="#" class="text-gray-800 hover:text-black">OORBELLEN</a>
      <a href="#" class="text-gray-800 hover:text-black">COLLECTIES</a>
      <a href="#" class="text-gray-800 hover:text-black">CADEAUS</a>
      <a href="#" class="text-gray-800 hover:text-black">DISCOVER</a>
    </div>

    <!-- Search and Icons -->
    <div class="flex items-center space-x-4">
      <!-- Search -->
      <div class="relative">
        <input type="text" placeholder="Zoeken" class="border rounded-md py-1 px-3 w-40">
        <button class="absolute right-2 top-2">
          <svg class="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M4 11a7 7 0 1014 0 7 7 0 00-14 0z" />
          </svg>
        </button>
      </div>

      <!-- Icons -->
      <div class="flex space-x-3">
        <!-- Heart Icon -->
        <button>
          <svg class="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21C12 21 8.373 17.226 5.5 14.25 4 12.746 4 11 4 9 4 6.79 5.79 5 8 5c1.497 0 2.723.83 3.503 2.044A4.472 4.472 0 0116 5c2.21 0 4 1.79 4 4 0 2-1 3.746-2.5 5.25C15.626 17.226 12 21 12 21z" />
          </svg>
        </button>

        <!-- Location Icon -->
        <button>
          <svg class="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10c0 3.866-3.582 8.865-9 13.5C6.582 18.865 3 13.866 3 10a9 9 0 1118 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3z" />
          </svg>
        </button>

        <!-- User Icon -->
        <button>
          <svg class="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A8.003 8.003 0 0112 15a8.003 8.003 0 016.879 2.804M12 12a5 5 0 100-10 5 5 0 000 10z" />
          </svg>
        </button>

        <!-- Cart Icon -->
        <button>
          <svg class="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.339 2.036a2 2 0 001.497 1.665l1.736 3.683 1.406-.352L6.898 5H18v2a1 1 0 01-.894.993L17 8H6.179l.829 1.764L17.64 15H18a2 2 0 001.994-1.852L20 13V6a2 2 0 00-1.851-1.995L18 4H6.18L4.5 2H3v1z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 22a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>

</template>

<style scoped></style>
