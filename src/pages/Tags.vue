<template>
  <Layout>
    <PrimaryHeader title="All Tags" />
    <ul class="block">
      <li
        class="inline-block p-2"
        v-for="tag in $page.tags.edges"
        :key="tag.node.id"
      >
        <Button :link="tag.node.path" :text="tag.node.title" />
      </li>
    </ul>
  </Layout>
</template>

<script>
import PrimaryHeader from "../components/PrimaryHeader";
import Button from "../components/Button";

export default {
  components: {
    PrimaryHeader,
    Button,
  },
  metaInfo: {
    title: "All Tags",
  },
};
</script>

<page-query>
query {
  tags: allTag(sortBy: "title", order: ASC) {
    edges {
      node {
        title
        path
        belongsTo {
          totalCount
        }
        id
      }
    }
  }
}
</page-query>
