<template>
  <Layout>
    <div class="p-4">
      <h1 class="text-center text-4xl font-bold mb-8">
        <span class="pb-3 border-b-4 border-red">
          Blog
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
          class="hover:text-red text-lg font-bold transition-all duration-200"
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
            class="inline-block rounded p-2 bg-blue-lighter text-white white"
            >Read More
          </g-link>
        </div>
      </li>
    </ul>
  </Layout>
</template>

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
