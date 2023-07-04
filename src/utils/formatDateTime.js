import { format } from "date-fns";
import { differenceInYears } from "date-fns";
import { en } from "date-fns/locale";

export const formatDateTime = (
  date,
  dateFormat = "dd MMMM, HH:mm",
  dateFormatDifference = "dd MMMM, yyyy"
) => {
  const formattedDate = new Date(date);
  const now = Date.now();
  const options = {
    locale: en,
  };

  const yearDifference = differenceInYears(now, new Date(date));

  if (yearDifference) {
    return format(formattedDate, dateFormatDifference, options);
  }

  return format(formattedDate, dateFormat, options);
};
