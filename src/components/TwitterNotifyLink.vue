<template>
  <a
    class="text-blue-accent p-1 border-b-4 border-solid border-blue-accent hover:bg-blue-accent hover:text-white"
    v-on:click="handleClick"
    >Let me know you stumbled onto a broken link on Twitter!</a
  >
</template>

<script>
export default {
  methods: {
    handleClick(event) {
      const url = typeof window !== `undefined` && window.location.href;
      const message = `Hey @chaseadamsio, I found a broken URL on your website. Hope this is helpful! Link: ${url}`;

      const encodedText = `&text=${encodeURIComponent(message)}`;

      const urlToOpen = `https://twitter.com/intent/tweet?${encodedText}`;

      const left = (window.screen.width - 570) / 2;
      const top = (window.screen.height - 570) / 2;
      const params =
        `menubar=no,toolbar=no,status=no,width=570,height=570,top=` +
        top +
        `,left=` +
        left;

      window.open(urlToOpen, `NewWindow`, params);
    },
  },
};
</script>
