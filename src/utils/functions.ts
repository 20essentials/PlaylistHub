export const $ = (el: string) => document?.querySelector(el);
export const $$ = (el: string) => document?.querySelectorAll(el);

export function baseUrl(path: string) {
  return new URL(path, import.meta.env.SITE).toString();
}

export const emitEvent = (name:string, target: any, data: any) => {
  const event = new CustomEvent(name, {
    detail: data,
    composed: true,
    bubbles: true
  });
  target.dispatchEvent(event);
  return event;
}
