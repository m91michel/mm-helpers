export const normalizeString = (subject: string) => {
    return subject
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace all whitespace with "-"
      .replace(/[^a-z0-9-]/g, "") // Remove any characters except alphanumeric and "-"
      .replace(/-+/g, "-"); // Replace multiple "-" with a single "-"
};