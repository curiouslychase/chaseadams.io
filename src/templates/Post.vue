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
      <div class="text-center pb-8">
        <div class="border-b-4 border-secondary mt-16"></div>
        <div class="inline-block -mt-8 px-8 bg-primary">
          <g-image src="~/assets/logo-heart.png" immediate="true" width="50" />
        </div>
      </div>
      <div class="grid">
        <div>Published: {{ $page.post.date }}</div>
        <div class="py-8">
          <span class="block pb-3 md:inline-block md:pr-3">Tags:</span>
          <span
            class="inline-block py-3 pr-3"
            v-for="tag in $page.post.tags"
            :key="tag.id"
          >
            <g-link
              class="p-1 border-2 border-solid border-red md:p-2 hover:bg-red hover:text-blue"
              :to="tag.path"
              >{{ tag.title }}</g-link
            >
          </span>
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
  metaInfo() {
    let meta = [
      {
        key: "og:title",
        name: "og:title",
        content: this.$page.post.title,
      },
      {
        key: "og:type",
        name: "og:type",
        content: "article",
      },
      {
        key: "og:url",
        name: "og:url",
        content: `${this.$page.metadata.siteUrl}${this.$page.post.path}`,
      },
      {
        key: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        key: "twitter:creator",
        name: "twitter:creator",
        content: "https://twitter.com/chaseadamsio",
      },
      {
        key: "twitter:title",
        name: "twitter:title",
        content: this.$page.post.title,
      },
    ];

    let image = `${this.$page.metadata.siteUrl}/img/share/default.jpeg`;

    if (this.$page.post.image) {
      image = `${this.$page.metadata.siteUrl}/${this.$page.post.image}`;
    }

    meta = meta.concat([
      {
        key: "og:image",
        name: "og:image",
        content: image,
      },
      {
        key: "twitter:image",
        name: "twitter:image",
        content: image,
      },
    ]);

    if (this.$page.post.description) {
      meta = meta.concat([
        {
          name: "description",
          content: this.$page.post.description,
        },
        {
          key: "og:description",
          name: "og:description",
          content: this.$page.post.description,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.post.description,
        },
      ]);
    }

    return {
      title: this.$page.post.title,
      meta,
    };
  },
};
</script>

<page-query>
query ($id: ID!) {
  metadata {
    siteUrl
  }
  post(id: $id) {
    title
    content
    path
    description
    image
    date(format: "YYYY/MM/DD")
    tags {
        title
        path
    }
  }
}
</page-query>
