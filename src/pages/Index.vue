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
      <div class="p-4">
        <h1 class="text-center text-xl md:text-4xl font-bold mb-8">
          <span class="pb-3 border-b-4 border-red">
            Latest Writing
          </span>
        </h1>
      </div>
      <ul class="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <li
          class="hover:shadow-md text-text grid grid-cols-1 rounded-md inline bg-accent p-4"
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
        >
          <g-link
            :to="edge.node.path"
            class="text-sm hover:text-red text-lg font-bold transition-all duration-200 md:text-base"
          >
            {{ edge.node.title }}
          </g-link>

          <div class="text-sm py-4">
            {{ edge.node.description }}
          </div>

          <span class="block text-sm italic text-text">
            Written {{ edge.node.date }}
          </span>

          <span>
            <div v-for="tagEdge in edge.tags" :key="tagEdge.node.id">
              {{ tagEdge.node.title }}
            </div>
          </span>
          <div class="ml-auto mt-auto pt-4">
            <g-link
              :to="edge.node.path"
              class="text-sm inline-block rounded p-2 bg-blue-lighter text-white white md:text-base"
              >Read More
            </g-link>
          </div>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
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
