<template>
  <div class="p-4 md:p-8">
    <h1
      class="md:leading-10 text-center text-xl md:text-4xl font-bold md:mb-8"
      v-html="title"
    />
    <span class="mx-auto block w-1/12 pb-2 md:pb-0 border-b-4 border-red" />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
