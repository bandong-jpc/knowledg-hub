<script setup lang="ts"></script>
<template>
  <div>
    <TopNav />
    <Header />

    <div class="relative py-4 lg:py-4">
      <div
        class="hidden lg:block min-w-72 lg:w-[calc(50%-327px)] h-full absolute bg-[#F7F7F7] left-0 -top-0"
      ></div>
      <div class="w-full lg:max-w-[1230px] mx-auto relative z-10">
        <div class="flex gap-4">
          <SideNav />
          <div class="w-full p-4 space-y-4">
            <slot />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
