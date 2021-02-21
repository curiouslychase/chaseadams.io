import type { FC, SyntheticEvent } from "react";

import { Container } from "./styles";
import type { Props } from "./types";

const ShareLink: FC<Props> = ({ siteUrl, permalink, title, tags }) => {
  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const left = (window.screen.width - 570) / 2;
    const top = (window.screen.height - 570) / 2;
    const params =
      `menubar=no,toolbar=no,status=no,width=570,height=570,top=` +
      top +
      `,left=` +
      left;

    /* eslint-disable indent */
    let hashtags = tags
      ? tags
          .map((t) => t.toLowerCase())
          .map((t) => t.replace(/\s/g, ``))
          .join(`,`)
      : ``;
    /* eslint-enable indent */

    const encodedURL = `url=${encodeURIComponent(url)}`;
    const encodedTitle = `&text=${encodeURIComponent(`"${title}"`)}`;
    hashtags = hashtags !== `` ? `&hashtags=${hashtags}` : ``;

    window.open(
      `https://twitter.com/intent/tweet?${encodedURL}${encodedTitle}${hashtags}&via=chaseadamsio`,
      `NewWindow`,
      params
    );
  };

  const url = `${siteUrl}${permalink}`;
  return (
    <Container>
      <img src={`/assets/twitter-white.png`} />
      <div>
        Was this article useful?{` `}
        <a
          onClick={handleClick}
          href={`https://twitter.com/intent/tweet?=${url}&text=${title}`}
        >
          Share it on Twitter!
        </a>
      </div>
    </Container>
  );
};

export default ShareLink;
