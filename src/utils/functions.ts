export const $ = (el: string) => document.querySelector(el);
export const $$ = (el: string) => document.querySelectorAll(el);

export function baseUrl(path: string) {
  return new URL(path, import.meta.env.SITE).toString();
}