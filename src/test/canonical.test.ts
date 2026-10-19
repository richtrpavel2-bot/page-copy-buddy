import { describe, expect, it } from "vitest";
import { canonicalUrl } from "../components/CanonicalUrl";

describe("public canonical URLs", () => {
  it("uses the custom domain for the homepage", () => {
    expect(canonicalUrl("/")).toBe("https://galimatyas-sumperk.cz/");
  });
  it("keeps each page's own path instead of pointing to the homepage", () => {
    expect(canonicalUrl("/kontakt")).toBe("https://galimatyas-sumperk.cz/kontakt");
    expect(canonicalUrl("/fotogalerie/bylo-tu-neni-tu-2026")).toBe("https://galimatyas-sumperk.cz/fotogalerie/bylo-tu-neni-tu-2026");
  });
});