<script lang="ts">
import { HubCategoryObjects } from "~/constants";

export default defineComponent({
  setup() {
    const categories = ref(HubCategoryObjects);

    return { categories };
  },
});
</script>
<template>
  <div>
    <p class="font-semibold">Select Category</p>

    <div
      class="flex flex-wrap flex-col lg:flex-row gap-4 justify-center lg:justify-between"
    >
      <Card
        v-for="(category, idx) in categories"
        :key="idx"
        :title="category.title"
        :description="category.description"
        :link="category.link"
        :img="category.img"
      />
    </div>
  </div>
</template>

<style scoped>
div {
  font-family: Source Sans 3, sans-serif;
}
</style>
