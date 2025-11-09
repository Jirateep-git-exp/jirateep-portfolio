<template>
  <div class="relative h-screen w-full overflow-hidden">
    <img
      src="../utils/images/banner_port.png"
      alt="Banner"
      class="w-full h-full object-cover shadow-lg"
    />
    <!-- Scroll-down indicator: centered in the banner (subtle / faded) -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div class="flex flex-col items-center gap-3 text-black/70 opacity-75">
        <span class="text-lg font-medium select-none tracking-wide drop-shadow-sm">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 md:w-28 md:h-28 animate-bounce drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
</template>
