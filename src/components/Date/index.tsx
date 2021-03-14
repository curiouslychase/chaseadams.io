import { format, parseISO } from "date-fns";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <time css={{ fontSize: "0.9rem" }} dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
