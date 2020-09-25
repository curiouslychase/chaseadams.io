<template>
  <layout>
    <div class="lg:w-8/12 w-full mx-auto">
      <PrimaryHeader :title="$page.sitepage.title" />

      <div class="post-content" v-html="$page.sitepage.content" />
      <div class="text-center pb-8">
        <div class="border-b-4 border-secondary mt-16"></div>
        <div class="inline-block -mt-8 px-8 bg-primary">
          <g-image src="~/assets/logo-heart.png" immediate="true" width="50" />
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
        content: this.$page.sitepage.title,
      },
      {
        key: "og:type",
        name: "og:type",
        content: "article",
      },
      {
        key: "og:url",
        name: "og:url",
        content: `${this.$page.metadata.siteUrl}${this.$page.sitepage.path}`,
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
        content: this.$page.sitepage.title,
      },
    ];

    let image = `${this.$page.metadata.siteUrl}/img/share/default.jpeg`;

    if (this.$page.sitepage.image) {
      image = `${this.$page.metadata.siteUrl}/${this.$page.sitepage.image}`;
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

    if (this.$page.sitepage.description) {
      meta = meta.concat([
        {
          name: "description",
          content: this.$page.sitepage.description,
        },
        {
          key: "og:description",
          name: "og:description",
          content: this.$page.sitepage.description,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.sitepage.description,
        },
      ]);
    }

    return {
      title: this.$page.sitepage.title,
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
  sitepage(id: $id) {
    title
    content
    path
    description
    date(format: "YYYY/MM/DD")
  }
}
</page-query>
