export const convertInValidSlug = text =>
  text.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-');
