import { Flex } from "~/components/core/Flex";
import { Heading } from "~/components/core/Heading";
import { Text } from "~/components/core/Text";

export const PostSummaryHeader = ({
  title,
  count,
  identifier = "Posts",
}: {
  title: string;
  count: number;
  identifier?: string;
}) => {
  return (
    <Heading css={{ pb: "$6", px: "$6" }} level="h1">
      <Flex
        as="span"
        css={{
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        {title}
        <Text css={{ fontSize: "$xl", fontWeight: "normal" }}>
          {count} {identifier}
        </Text>
      </Flex>
    </Heading>
  );
};
