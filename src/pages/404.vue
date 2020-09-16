<template>
  <Layout>
    <PrimaryHeader title="Whoops! Page can't be found." />
    <div class="text-center">
      <p>
        It looks like you're trying to access a page that can't be found. <br />
        This could be because the URL used to get here is incorrect.
      </p>
      <p>
        <TwitterNotifyLink />
      </p>
    </div>
  </Layout>
</template>

<script>
import PrimaryHeader from "../components/PrimaryHeader";
import TwitterNotifyLink from "../components/TwitterNotifyLink";

export default {
  components: {
    PrimaryHeader,
    TwitterNotifyLink,
  },
  metaInfo: {
    title: "Whoops! Page can't be found",
  },
};
</script>
