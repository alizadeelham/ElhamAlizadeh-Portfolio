// Vite supplies '/' in development and the repository subpath in production.
export function assetPath(filename: string, base = import.meta.env.BASE_URL): string {
  return `${base.replace(/\/?$/, "/")}${filename.replace(/^\/+/, "")}`;
}