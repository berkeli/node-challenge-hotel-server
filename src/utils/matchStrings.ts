/* eslint-disable arrow-body-style */
export default (searchString: string, ...strings: string[]) => {
  return strings.some((string) => {
    return string.toLowerCase().includes(searchString.toLowerCase());
  });
};
