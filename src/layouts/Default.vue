<template>
  <div class="layout">
    <Header />
    <div class="w-11/12 py4 md:pt-48 md:pb-24 md:w-10/12 m-auto">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import tailwindCfg from "../../tailwind.config";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

const {
  theme: {
    colors: {
      blue: { default: primary },
      white: secondary,
    },
  },
} = tailwindCfg;

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.brand-logo .active--exact {
  @apply text-red border-red;
}

.main-nav .link.active {
  @apply text-blue bg-red;
}

.main-nav .start-here.active {
  @apply text-blue bg-red;
}
</style>
