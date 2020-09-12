<template>
  <div class="layout">
    <header
      class="bg-primary md:fixed md:top-0 inset-x-0 md:flex md:flex-row md:py-4 md:justify-between md:w-10/12 m-auto"
    >
      <h1 class="my-5 text-center md:text-left">
        <g-link
          class="inline-block text-sm lg:text-base border-solid border-4 border-border uppercase font-bold py-2 px-4"
          to="/"
          >{{ $static.metadata.siteName }}</g-link
        >
      </h1>
      <nav
        class="main-nav fixed bottom-0 inset-x-0 bg-primary md:flex md:justify-end md:relative md:bg-transparent"
      >
        <ul
          class="flex items-center uppercase font-bold border-grey-400 border-t border-solid md:border-0 md:py-5"
        >
          <!-- <li class="flex-1 text-center md:flex-initial md:mr-8">
            <g-link
              class="start-here text-sm block py-4 px-4 md:px-1 lg:text-base md:border-solid md:border-4 md:border-red md:px-4 md:py-2 hover:bg-red hover:text-blue transition-all duration-200"
              to="/start-here/"
              >Start Here</g-link
            >
          </li> -->
          <li
            v-for="item in links"
            :key="item.linkText"
            class="flex-1 text-center md:flex-initial md:mr-8"
          >
            <g-link
              class="link text-sm block py-4 md:px-2 lg:text-base md:py-2 md:border-b-4 md:border-primary md:hover:border-solid md:hover:border-red transition-all duration-200"
              :to="item.link"
              >{{ item.linkText }}</g-link
            >
          </li>
        </ul>
        <ul
          class="flex items-center uppercase font-bold border-grey-400 border-t border-solid md:border-0 md:py-5"
        >
          <li
            class="flex-1 text-center md:flex-initial md:mr-8 md:border-b-4 md:border-primary"
          >
            <div class="py-4 text-center md:px-2 lg:text-base md:py-2">
              <ToggleTheme />
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="w-11/12 py4 md:pt-48 md:pb-24 md:w-10/12 m-auto">
      <slot />
    </div>
    <div class="footer">
      <h4>Pages</h4>
      <ul>
        <li>
          <g-link to="/blog/">Blog</g-link>
        </li>
        <li>
          <g-link to="/style-guide/">Style Guide</g-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import tailwindCfg from "../../tailwind.config";
import ToggleTheme from "../components/ToggleTheme";

const {
  theme: {
    colors: {
      blue: { default: primary },
      white: secondary
    }
  }
} = tailwindCfg;
export default {
  data() {
    return {
      links: [
        // {
        //   link: "/start-here/",
        //   linkText: "Start Here"
        // },
        {
          link: "/blog/",
          linkText: "Blog"
        },
        {
          link: "/about/",
          linkText: "About Me"
        }
        // { link: "/connect/", linkText: "Connect" }
      ]
    };
  },
  methods: {
    switchTheme() {
      // incomplete implementation. It doesn't check on load for which mode
      // it should render so on a page refresh it will always load the dark mode
      const mode = localStorage.getItem("color-mode");
      const root = document.documentElement;

      root.style.setProperty(
        "--color-primary",
        mode === "dark" ? secondary : primary
      );

      root.style.setProperty(
        "--color-secondary",
        mode === "dark" ? primary : secondary
      );

      localStorage.setItem("color-mode", mode === "dark" ? "light" : "dark");
    }
  },
  components: {
    ToggleTheme
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.main-nav .link.active {
  @apply text-red border-b-4 border-primary;
}

.main-nav .start-here.active {
  @apply text-blue bg-red;
}
</style>
