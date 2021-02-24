import type { FC } from "react";

import { Container } from "./styles";

const TableOfContents: FC<{
  headings?: Array<{
    text: string;
    level: number;
    slug: string;
  }>;
}> = ({ headings }) => {
  if (!headings) {
    return null;
  }

  return (
    <Container>
      <h2>Table of Contents</h2>
      <ul>
        {headings.map((heading) => (
          <li>
            <a href={`#${heading.slug}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TableOfContents;
