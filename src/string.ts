/**
 * Normalizes a string by applying the following transformations:
 * - lowercase,
 * - replacing all whitespace with "-",
 * - removing any characters except alphanumeric and "-",
 * - replacing multiple "-" with a single "-",
 * - stripping all "-" at the beginning and the end of the result.
 * @param subject - The string to normalize.
 * @returns The normalized string.
 */
export const normalizeString = (subject: string) => {
    return subject
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace all whitespace with "-"
      .replace(/[^a-z0-9-]/g, "") // Remove any characters except alphanumeric and "-"
      .replace(/-+/g, "-") // Replace multiple "-" with a single "-"
      .replace(/^-+|-+$/g, ""); // Strip all "-" at the beginning and the end of the result
};