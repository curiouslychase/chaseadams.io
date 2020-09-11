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

    <ul class="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      <li
        class="text-blue-lightest grid grid-cols-1 rounded-md inline bg-blue-darkest p-4"
        v-for="post in $page.tag.belongsTo.edges"
        :key="post.node.id"
      >
        <g-link
          class="hover:text-red text-lg font-bold transition-all duration-200"
          :to="post.node.path"
          >{{ post.node.title }}</g-link
        >
        <div class="text-sm py-4">
          {{ post.node.description }}
        </div>

        <span class="block text-sm italic text-blue-lightest">
          Written {{ post.node.date }}
        </span>

        <div class="ml-auto mt-auto pt-4">
          <g-link
            :to="post.node.path"
            class="inline-block rounded p-2 bg-blue-lighter white"
            >Read More
          </g-link>
        </div>
      </li>
    </ul>
  </layout>
</template>
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
