<template>
  <ul class="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
    <PostCard v-for="edge in posts" :key="edge.node.id" :post="edge.node" />
  </ul>
</template>

<script>
import PostCard from "./PostCard";
export default {
  components: {
    PostCard,
  },
  props: {
    posts: { type: Array, required: true },
  },
};
</script>
