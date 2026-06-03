const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

/** Format YYYY-MM-DD without timezone drift between server and client. */
export function formatDate(date: string): string {
  const [year, month, day] = date.split("-").map(Number);
  if (!year || !month || !day || month < 1 || month > 12) return date;
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

/** Short feed date, e.g. "May 3" */
export function formatShortDate(date: string): string {
  const [year, month, day] = date.split("-").map(Number);
  if (!year || !month || !day || month < 1 || month > 12) return date;
  return `${MONTHS[month - 1].slice(0, 3)} ${day}`;
}
