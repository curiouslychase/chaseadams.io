<template>
  <Layout>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 items-center py-4">
      <div>
        <g-image src="~/assets/1050-transparent-black-rg.png" width="500" />
      </div>
      <div class="text-center md:text-left">
        <h1>
          <span
            class="text-white text-2xl mb-4 inline-block md:text-4xl font-bold border-l-8 bg-blue-lighter border-red border-solid px-3 md:mb-8"
            >Hi, I'm Chase!</span
          >
          <span class="text-xl md:text-2xl font-bold block"
            >I'm Currently...</span
          >
        </h1>
        <ul class="text-sm md:pb-4 md:leading-8 md:text-base">
          <li class="py-1">
            <span class="text-base md:text-3xl md:pr-3">🧰</span> building
            software that lowers friction so that makers can turn their ideas
            into reality.
          </li>
          <li class="py-1">
            <span class="text-base md:text-3xl md:pr-3">👨‍🔬</span> learning new
            concepts and ideas.
          </li>
          <li class="py-1">
            <span class="text-base md:text-3xl md:pr-3">🚀</span> teaching
            others.
          </li>
          <li class="py-1">
            <span class="text-base md:text-3xl md:pr-3">🧠</span> exploring
            ideas on consciousness.
          </li>
        </ul>
      </div>
    </div>
    <div class="py-4 md:py-16">
      <PrimaryHeader title="Latest Writing" />
      <PostList :posts="$page.posts.edges" />
    </div>
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
  metaInfo: {
    title: "Chase Adams",
  },
};
</script>

<page-query>
query {
 posts: allPost(limit: 6, filter:  { status: { eq: "published" } }) {
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
