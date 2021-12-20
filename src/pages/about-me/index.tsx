import { PageMetaHead } from "~/components/shared/PageMeta";
import { AboutView } from "~/views/About";

const AboutMePage = () => {
  return (
    <>
      <PageMetaHead
        page={{
          title: "About Me",
        }}
      />
      <AboutView />
    </>
  );
};

export default AboutMePage;
