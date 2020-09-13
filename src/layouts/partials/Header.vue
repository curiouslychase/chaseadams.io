<template>
  <div>
    <header
      class="bg-primary fixed flex flex-wrap md:fixed md:top-0 items-center inset-x-0 md:flex-row md:py-1 md:justify-end md:w-10/12 m-auto"
    >
      <h1
        class="brand-logo w-2/5 mx-2 md:text-center md:w-auto md:text-left mr-auto"
      >
        <g-link
          class="flex flex-row items-center md:text-sm lg:text-base uppercase font-bold py-2 px-4"
          to="/"
          ><g-image
            class="inline-block"
            src="~/assets/logo.png"
            width="32"
          /><span class="hidden ml-3 md:inline-block">Chase Adams</span></g-link
        >
      </h1>
      <nav
        class="w-full order-last main-nav bg-primary md:order-none md:w-auto md:flex md:flex-none md:relative md:bg-transparent"
      >
        <ul
          class="flex items-center uppercase font-bold border-grey-400 border-b border-solid md:border-0 md:py-5"
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
              class="link text-sm block py-4 md:px-2 lg:text-base md:py-2 hover:text-blue hover:bg-red transition-all duration-200"
              :to="item.link"
              >{{ item.linkText }}</g-link
            >
          </li>
        </ul>
      </nav>
      <nav
        class="w-2/5 order-2 main-nav bg-primary md:order-none md:w-auto md:flex md:flex-none md:relative md:bg-transparent"
      >
        <ul class="flex items-center uppercase font-bold md:py-5">
          <li
            class="flex-1 text-center md:flex-initial md:mr-8 md:border-b-4 md:border-primary"
          >
            <div class="py-4 text-center md:px-2 lg:text-base md:py-2">
              <ToggleTheme />
            </div>
          </li>
          <li
            class="flex-1 text-center md:flex-initial md:mr-8 md:border-b-4 md:border-primary"
          >
            <a
              aria-label="Twitter"
              href="//twitter.com/chaseadamsio"
              rel="noopener noreferrer"
              target="_blank"
              title="Follow chaseadamsio on Twitter"
            >
              <svg
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 612 612"
              >
                <path
                  fill="currentColor"
                  d="M612 116.258a250.714 250.714 0 01-72.088 19.772c25.929-15.527 45.777-40.155 55.184-69.411-24.322 14.379-51.169 24.82-79.775 30.48-22.907-24.437-55.49-39.658-91.63-39.658-69.334 0-125.551 56.217-125.551 125.513 0 9.828 1.109 19.427 3.251 28.606-104.326-5.24-196.835-55.223-258.75-131.174-10.823 18.51-16.98 40.078-16.98 63.101 0 43.559 22.181 81.993 55.835 104.479a125.556 125.556 0 01-56.867-15.756v1.568c0 60.806 43.291 111.554 100.693 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.199 117.253 87.194-42.947 33.654-97.099 53.655-155.916 53.655-10.134 0-20.116-.612-29.944-1.721 55.567 35.681 121.536 56.485 192.438 56.485 230.948 0 357.188-191.291 357.188-357.188l-.421-16.253c24.666-17.593 46.005-39.697 62.794-64.861z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <div style="height:140px" class="md:hidden"></div>
  </div>
</template>

<script>
import ToggleTheme from "../../components/ToggleTheme";
export default {
  components: {
    ToggleTheme,
  },
  data() {
    return {
      links: [
        // {
        //   link: "/start-here/",
        //   linkText: "Start Here"
        // },
        {
          link: "/blog/",
          linkText: "Blog",
        },
        {
          link: "/about/",
          linkText: "About Me",
        },
        // { link: "/connect/", linkText: "Connect" }
      ],
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
    },
  },
};
</script>
