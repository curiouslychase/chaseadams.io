import { format, parseISO } from "date-fns";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <time
      title="Last Updated Date"
      css={{ fontSize: "0.9rem" }}
      dateTime={format(date, "yyyy-MM-dd")}
    >
      {format(date, "yyyy/MM/dd")}
    </time>
  );
}
