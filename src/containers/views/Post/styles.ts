import styled from "styled-components";
export const Container = styled.div`
  & .post {
    display: block;

    @media (min-width: 1084px) {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
    }

    & aside {
      max-width: 20rem;
      position: sticky;
      top: 5rem;
      max-height: calc(100vh - 5rem);
      display: none;

      @media (min-width: 1084px) {
        display: block;
      }
    }

    & article {
      width: 100%;
      @media (min-width: 1084px) {
        max-width: 45rem;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      scroll-margin-top: 1rem;
    }
  }
`;

export const MetaWrapper = styled.div`
  margin: 0.5rem 0 2rem;
  color: var(--color-muted);
`;

export const PostWrapper = styled.div`
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

  table {
    width: 100%;
    th {
      text-align: left;
    }
  }
`;
