export const GA_TRACKING_ID = "UA-62564031-1";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  // eslint-disable-next-line
  // @ts-ignore: don't have the type for gtag
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  // eslint-disable-next-line
  // @ts-ignore: don't have the type for gtag
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
