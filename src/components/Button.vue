<template>
  <g-link
    :to="link"
    class="text-sm inline-block rounded p-2 bg-blue-lighter text-white white md:text-base"
    >{{ text }}</g-link
  >
</template>
<script>
export default {
  props: {
    link: { type: String, required: true },
    text: { type: String, required: true },
  },
};
</script>
