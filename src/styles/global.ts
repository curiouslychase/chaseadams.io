import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body {
  background: var(--color-background);
  color: var(--color-text);
  padding: 0;
  margin: 0;
  font-family: "Ringside Regular SSm A", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 16px;
}

* {
  box-sizing: border-box;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}


pre[class*="language-"] {
  font-size: 12px;
  line-height: 1.375;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  background: #20242d;
  color: #c7c8ff;
}

pre[class*="language-"]::-moz-selection,
pre[class*="language-"] ::-moz-selection {
  text-shadow: none;
  background: #20242d;
}

pre[class*="language-"]::selection,
pre[class*="language-"] ::selection {
  text-shadow: none;
  background: #20242d;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  font-style: italic;
  color: #dd92f677;
}

.token.punctuation {
  color: #c7c8ff;
}

.token.constant {
  color: #69b4f9;
}

.token.namespace {
  opacity: 0.7;
}

.token.tag,
.token.operator,
.token.number {
  color: #dd92f6;
}

.token.property,
.token.function {
  color: #9a86fd;
}

.token.tag-id,
.token.selector,
.token.atrule-id {
  color: #eeebff;
}

code.language-javascript,
.token.attr-name {
  color: #c4b9fe;
}

code.language-css,
code.language-scss,
.token.boolean,
.token.string,
.token.entity,
.token.url,
.language-css .token.string,
.language-scss .token.string,
.style .token.string {
  color: #7efdd0;
}

.token.keyword {
  font-style: italic;
  color: #dd92f6;
}

.token.attr-value,
.token.control,
.token.directive,
.token.unit,
.token.statement,
.token.regex,
.token.atrule {
  color: #0adeff;
}

.token.placeholder,
.token.variable {
  color: #ffcc99;
}

.token.deleted {
  text-decoration: line-through;
}

.token.inserted {
  border-bottom: 1px dotted #eeebff;
  text-decoration: none;
}

.token.italic {
  font-style: italic;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.important {
  color: #c4b9fe;
}

.token.entity {
  cursor: help;
}

pre > code.highlight {
  outline: 0.4em solid #8a75f5;
  outline-offset: 0.4em;
}

/* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
.line-numbers .line-numbers-rows {
  border-right-color: #2c2937;
}

.line-numbers-rows > span:before {
  color: #3c3949;
}

/* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/
.line-highlight {
  background: rgba(224, 145, 66, 0.2);
  background: -webkit-linear-gradient(
    left,
    rgba(224, 145, 66, 0.2) 70%,
    rgba(224, 145, 66, 0)
  );
  background: linear-gradient(
    to right,
    rgba(224, 145, 66, 0.2) 70%,
    rgba(224, 145, 66, 0)
  );
}


pre[class*="language-"] {
  position: relative;
  margin: 1rem 0;
  padding: 48px 24px 20px;
  border-radius: 3px;
}

pre[class*="language-"]::before {
  background: #3c3949;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 6px 10px;
  font-size: 12px;
  text-align: right;
  font-weight: 700;
  text-transform: uppercase;
}
pre[class*="language-lisp"]::before {
  content: "lisp";
}
pre[class*="language-logs"]::before {
  content: "logs";
}
pre[class*="language-javascript"]::before {
  content: "js";
}
pre[class*="language-js"]::before {
  content: "js";
}
pre[class*="language-json"]::before {
  content: "json";
}
pre[class*="language-jsx"]::before {
  content: "jsx";
}
pre[class*="language-graphql"]::before {
  content: "GraphQL";
}
pre[class*="language-html"]::before {
  content: "html";
}
pre[class*="language-css"]::before {
  content: "css";
}
pre[class*="language-shell"]::before {
  content: "shell";
}
pre[class*="language-sh"]::before {
  content: "sh";
}
pre[class*="language-bash"]::before {
  content: "bash";
}
pre[class*="language-yaml"]::before {
  content: "yaml";
}
pre[class*="language-markdown"]::before {
  content: "md";
}
pre[class*="language-json"]::before,
pre[class*="language-json5"]::before {
  content: "json";
}
pre[class*="language-diff"]::before {
  content: "diff";
}
pre[class*="language-text"]::before {
  content: "text";
}
pre[class*="language-flow"]::before {
  content: "flow";
}
pre[class*="language-asciidoc"]::before {
  content: "asciidoc";
}
`;
