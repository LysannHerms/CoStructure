export const publicUrl = (p: string) =>
  `${import.meta.env.BASE_URL}${p.replace(/^\/+/, "")}`;
