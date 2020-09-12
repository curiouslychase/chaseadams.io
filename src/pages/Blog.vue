<template>
  <Layout>
    <PrimaryHeader title="Blog" />
    <PostList :posts="$page.posts.edges" />
  </Layout>
</template>

<script>
import PrimaryHeader from "../components/PrimaryHeader";
import PostList from "../components/PostList";
export default {
  components: {
    PrimaryHeader,
    PostList,
  },
};
</script>

<page-query>
query {
 posts: allPost(filter:  { status: { eq: "published" } }) {
  totalCount
  edges {
    node {
      title
      description
      date(format:"MMM D YYYY")
      path
      tags {
          title
      }
    }
  }
}
}
</page-query>
