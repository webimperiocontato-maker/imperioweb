export const isPrerender =
  import.meta.env.VITE_PRERENDER === "true" ||
  // support older flag name
  (import.meta.env as any).PRERENDER === "true" ||
  import.meta.env.SSR === true;
