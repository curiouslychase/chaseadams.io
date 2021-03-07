import { createGlobalStyle } from "styled-components";

import { resetMargin, resetPadding } from "./resets";

export const GlobalStyle = createGlobalStyle`
html,
body {
  background-color: var(--color-background);
  color: var(--color-text);
  ${resetPadding};
  ${resetMargin};
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
  &:hover {
    text-decoration: underline;
  }
}

img {
  max-width: 100%;
  display: block;
}

h1, h2, h3, h4, h5, h6 {
  ${resetMargin};
  ${resetPadding};
}


pre[class*="language-"] {
  background-color: #20242d;
  color: #c7c8ff;
  direction: ltr;
  font-size: 12px;
  hyphens: none;
  line-height: 1.375;
  margin-bottom: 1rem; 
  margin-left: 0;
  margin-right: 0;
  margin-top: 1rem;
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  tab-size: 4;
  text-align: left;
  white-space: pre;
  word-break: normal;
  word-spacing: normal;
  min-width: 100px;
  width: 100%;
  max-width: 100%;
}


pre > code {
  white-space: pre;
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  display: block;
  max-width: 100%;
  min-width: 100px;
  padding-bottom: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 3rem;
  line-height: 1.5rem;
}

pre[class*="language-"]::selection,
pre[class*="language-"] ::selection {
  text-shadow: none;
  background-color: #DD92F633;
}


pre[class*="language-"]::before {
  background-color: #3c3949;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding-top: 6px ;
  padding-right: 10px;
  padding-bottom: 6px ;
  padding-left: 10px;
  font-size: 12px;
  text-align: right;
  font-weight: 700;
  text-transform: uppercase;
  overflow: hidden;
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
pre[class*="language-ts"]::before {
  content: "ts";
  background-color: #2f74bf;
}
pre[class*="language-tsx"]::before {
  content: "tsx";
  background-color: #2f74bf;
}

pre[class*="language-go"]::before {
  content: "go";
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
  outline-width: 0.4em;
  outline-style: solid;
  outline-color: #8a75f5;
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
`;
