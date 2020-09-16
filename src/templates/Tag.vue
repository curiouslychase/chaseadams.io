<template>
  <layout>
    <PrimaryHeader
      v-bind:title="'Posts tagged with \'' + $page.tag.title + '\''"
    />

    <PostList :posts="$page.tag.belongsTo.edges" />
    <div class="text-center p-4">
      <Button link="/tags/" text="All Tags" />
    </div>
  </layout>
</template>
<script>
import PrimaryHeader from "../components/PrimaryHeader";
import PostList from "../components/PostList";
import Button from "../components/Button";

export default {
  components: {
    PrimaryHeader,
    PostList,
    Button,
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
