export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat(undefined, { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
