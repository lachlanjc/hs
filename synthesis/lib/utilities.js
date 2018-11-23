export const convertToSnakeCase = string =>
  string
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[?!]/g, '')
