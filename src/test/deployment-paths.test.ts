import { describe, expect, it } from "vitest";
import { assetPath } from "@/lib/asset-path";
import { getRouter } from "@/router";

describe("Deployment paths", () => {
  for (const filename of ["photo_2026-09-07_11-36-05.jpg", "Elham_Alizadeh.pdf", "favicon.ico"]) {
    it(`serves ${filename} under the GitHub repository subpath`, () => {
      expect(assetPath(filename, "/ElhamAlizadeh-Portfolio/")).toBe(`/ElhamAlizadeh-Portfolio/${filename}`);
    });
    it(`keeps ${filename} at the root for local development`, () => {
      expect(assetPath(filename, "/")).toBe(`/${filename}`);
    });
  }

  it("generates portfolio links under its repository basepath", () => {
    const router = getRouter("/ElhamAlizadeh-Portfolio/");
    expect(router.buildLocation({ to: "/" }).href).toBe("/ElhamAlizadeh-Portfolio/");
  });
});