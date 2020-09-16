<template>
  <Layout>
    <PrimaryHeader title="About Me" />
    <div class="post-content">
      <div>
        <h2>In 30 Seconds</h2>
        <h3>I enjoy...</h3>
        <ul>
          <li>
            🧰building software that lowers friction so that makers can turn
            their ideas into reality.
          </li>
          <li>👨‍🔬learning new concepts and ideas.</li>
          <li>🚀teaching others.</li>
          <li>🧠exploring ideas on consciousness.</li>
        </ul>

        <h3>Now...</h3>

        <ul>
          <li>🦄 I build software at [Webflow](http://webflow.com/).</li>
          <li>
            🧪 I experiment with various tools, systems & processes to learn to
            live more effectively.
          </li>
          <li>↗️ My favorite shape is an arrow.</li>
          <li>🏜 I live in Las Vegas, Nevada, USA.</li>
          <li>
            📚 Currently Reading...
            <ul>
              <li>**Essentialism** by Gregory McKeown</li>
              <li>**Finite &amp; Infinite Games** by James Carse</li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h2>At Work, I'm...</h2>
        <ul>
          <li>Improving the development toolchain for developer happiness.</li>
          <li>Helping others learn &amp; use systems thinking.</li>
          <li>
            Building better continuous integration &amp; delivery pipelines for
            Webflow's software to be deployed often, quickly &amp; safely.
          </li>
          <li>
            Mentoring other individual contributors in building better software
            &amp; personal development.
          </li>
        </ul>
      </div>
      <div>
        <h2>At Home, I'm...</h2>
        <ul>
          <li>Hiking &amp; birding with my wife &amp; daughter.</li>
          <li>Hanging out with my awesome family.</li>
          <li>Walking my dogs.</li>
          <li>Building train tracks with my daughter.</li>
          <li>Making cold brew coffees &amp; Americanos.</li>
        </ul>
      </div>
      <div>
        <h2>My Interests Inclued...</h2>
        <ul>
          <li>Experimenting with productivity systems &amp; processes.</li>
          <li>Making things with my 3D printer.</li>
          <li>Hacking on software ideas.</li>
          <li>Writing about the process of building software.</li>
          <li>Reading and reviewing books.</li>
          <li>Teaching others about technology &amp; productivity.</li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script>
import PrimaryHeader from "../components/PrimaryHeader";
export default {
  components: {
    PrimaryHeader,
  },
  metaInfo: {
    title: "About Chase",
    description: "Learn about Chase Adams: Engineering and Experimentation",
  },
};
</script>
