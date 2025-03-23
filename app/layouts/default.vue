<script setup lang="ts"></script>
<template>
  <div>
    <TopNav />
    <Header />

    <div class="relative py-4 lg:py-4">
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
