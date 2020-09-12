<template>
  <div class="p-4">
    <h1 class="text-center text-xl md:text-4xl font-bold mb-8">
      <span class="pb-3 border-b-4 border-red">
        {{ title }}
      </span>
    </h1>
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
