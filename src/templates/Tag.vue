<template>
  <layout>
    <div class="p-4">
      <h1 class="text-center mb-8">
        <h1 class="leading-10 text-2xl text-center">
          Posts tagged with
          <span class="block p-2 text-4xl font-bold"
            >"{{ $page.tag.title }}"</span
          >
        </h1>
        <span class="mx-auto block w-3/12 pb-8 border-b-4 border-red" />
      </h1>
    </div>

    <PostList :posts="$page.tag.belongsTo.edges" />
  </layout>
</template>
<script>
import PostList from "../components/PostList";
export default {
  components: {
    PostList,
  },
};
</script>
<page-query>
  query Tag($id: ID!) {
    tag(id: $id) {
      id
      title
      belongsTo(sortBy: "date", order: DESC) {
        edges {
          node {
            ... on Post {
              id
              title
              path
              description
              date(format: "YYYY/MM/DD")
            }
          }
        }
      }
    }
  }
</page-query>
