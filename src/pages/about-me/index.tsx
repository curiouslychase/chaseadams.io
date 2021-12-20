import { PageMetaHead } from "~/components/shared/PageMeta";
import { AboutView } from "~/views/About";

const AboutMePage = () => {
  return (
    <>
      <PageMetaHead
        page={{
          title: "About Chase Adams",
          description:
            "Creating strong, resilient teams and building human-centric software.",
        }}
      />
      <AboutView />
    </>
  );
};

export default AboutMePage;
