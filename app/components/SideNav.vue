<script lang="ts">
import { HubCategoryObjects } from "../constants";
export default defineComponent({
  setup() {
    const categories = ref(HubCategoryObjects);

    return { categories };
  },
});
</script>
<template>
  <div class="hidden lg:block bg-[#F7F7F7] w-72 p-4 shrink-0">
    <ul class="space-y-4 text-base sticky inset-12">
      <li v-for="(category, idx) in categories" :key="idx">
        <NuxtLink to="/">
          {{ category.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
