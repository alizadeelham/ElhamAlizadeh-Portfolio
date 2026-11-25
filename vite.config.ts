// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { ConfigEnv } from "vite";

export default (env: ConfigEnv) => {
  // Prerendering starts Vite's production preview, which must use the same base.
  const base = (env.command === "build" || env.isPreview) && env.mode !== "development"
    ? "/ElhamAlizadeh-Portfolio/"
    : "/";

  return defineConfig({
    vite: { base },
    tanstackStart: {
      // Keep Lovable's existing server entry for development and build-time rendering.
      // GitHub Pages serves only dist/client; the server bundle is not deployed.
      server: { entry: "server" },
      router: { basepath: base },
      pages: [{ path: "/" }],
      prerender: { enabled: true, autoStaticPathsDiscovery: false, crawlLinks: false },
    },
  })(env);
};
