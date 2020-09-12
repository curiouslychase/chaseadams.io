<template>
  <layout>
    <div class="lg:w-8/12 w-full mx-auto">
      <div class="p-4 md:p-8">
        <h1
          class="md:leading-10 text-center text-xl md:text-4xl font-bold md:mb-8"
          v-html="$page.post.title"
        />
        <span class="mx-auto block w-3/12 pb-8 border-b-4 border-red" />
      </div>
      <div class="post-content" v-html="$page.post.content" />
      <div class="grid">
        <div>Published: {{ $page.post.date }}</div>
        <div class="py-8">
          Tags:
          <div
            class="inline-block px-2"
            v-for="tag in $page.post.tags"
            :key="tag.id"
          >
            <g-link
              class="border-2 border-solid border-red p-2 hover:bg-red hover:text-blue"
              :to="tag.path"
              >{{ tag.title }}</g-link
            >
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import PrimaryHeader from "../components/PrimaryHeader";
export default {
  components: {
    PrimaryHeader,
  },
};
</script>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    content
    date(format: "YYYY/MM/DD")
    tags {
        title
        path
    }
  }
}
</page-query>
