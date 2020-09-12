<template>
  <li
    class="hover:shadow-md text-text grid grid-cols-1 rounded-md inline bg-accent p-4"
  >
    <g-link
      :to="post.path"
      class="text-sm hover:text-red text-lg font-bold transition-all duration-200 md:text-base"
    >
      {{ post.title }}
    </g-link>

    <div class="text-sm py-4">
      {{ post.description }}
    </div>

    <span class="block text-sm italic text-text">
      Written {{ post.date }}
    </span>

    <div class="ml-auto mt-auto pt-4">
      <g-link
        :to="post.path"
        class="text-sm inline-block rounded p-2 bg-blue-lighter text-white white md:text-base"
        >Read More
      </g-link>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    post: { type: Object, required: true },
  },
};
</script>
