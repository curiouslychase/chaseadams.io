import styled from "styled-components";

export const MetaWrapper = styled.div`
  margin: 0.5rem 0 2rem;
  color: var(--color-muted);
`;

export const PostWrapper = styled.div`
  pre {
    border: 1px solid var(--color-muted);
  }

  p > code {
    padding: 3px;
    border: 1px solid var(--color-muted);
    background: var(--color-accent);
    border-radius: 3px;
  }

  a {
    transition: box-shadow 400ms ease 0s;
    box-shadow: 0px 1px 0px var(--color-primary);
    text-shadow: -1px 2px 0px var(--color-background);

    &:hover {
      text-decoration: none;
      transition: box-shadow 100ms ease 0s;
      box-shadow: 0px 3px 0px var(--color-primary);
    }
  }
`;
