<script lang="ts">
export default defineComponent({
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    img: { type: String, required: true },
  },
  setup(props: {
    title: string;
    description: string;
    link: string;
    img: string;
  }) {
    return {
      title: props.title,
      description: props.description,
      link: props.link,
      img: props.img,
    };
  },
});
</script>
<template>
  <NuxtLink
    :to="link"
    class="border lg:border-0 w-full lg:w-[280px] space-y-2 flex flex-row lg:flex-col gap-2"
  >
    <div class="w-32 lg:w-[280px] shrink-0 p-2 lg:p-0">
      <img
        width="100"
        height="100"
        class="w-full h-full object-cover"
        :src="img"
      />
    </div>
    <div>
      <p class="text-sm lg:text-base font-bold capitalize">{{ title }}</p>
      <p class="text-sm">{{ description }}</p>
    </div>
  </NuxtLink>
</template>
