import { format, parseISO } from "date-fns";

import { Time } from "./styles";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return <Time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</Time>;
}
