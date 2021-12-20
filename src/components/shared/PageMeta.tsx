import Head from "next/head";

type Props = {
  page: {
    image?: string;
    title: string;
    description?: string;
  };
  shouldAppendTag?: boolean;
};

export const PageMetaHead = ({ page, shouldAppendTag = true }: Props) => {
  const imageUrl = `https://chaseadams.io${
    page.image ?? "/img/share/default.jpg"
  }`;
  return (
    <Head>
      <title>
        {page.title}
        {shouldAppendTag && ` | Chase Adams`}
      </title>

      <link rel="icon" href="/favicon.ico" />

      <meta name="og:title" content={page.title} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@chaseadamsio" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:image" content={imageUrl} />
      {page.description ? (
        <>
          <meta name="description" content={page.description} />
          <meta name="twitter:description" content={page.description} />
          <meta name="og:description" content={page.description} />
        </>
      ) : null}
    </Head>
  );
};
