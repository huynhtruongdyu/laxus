/**
 *
 * @param text
 * @param other
 * @returns
 * @author: https://stackoverflow.com/questions/2140627/how-to-do-case-insensitive-string-comparison
 */
export const equalsIgnoringCase = (text: string, other: string) => {
  return text.localeCompare(other, undefined, { sensitivity: "accent" }) === 0;
};
