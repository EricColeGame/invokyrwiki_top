export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Invokyr Wiki",
  shortName: "Invokyr",
  logoText: "I",
  tagline: "Fantasy Summoning RPG Guides, Characters & Mechanics",
  description: "Invokyr Wiki provides guides, character info, gameplay tips, item details, and community resources to help players explore Invokyr and master its mechanics.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://invokyrwiki.top",
  supportEmail: "support@invokyrwiki.top",
  gameUrl: "https://store.steampowered.com/app/3883570/Invokyr/",
  heroVideoId: "hJ-JsDsMrvw", // Invokyr - Official Early Access Release Date Trailer (Ludogram)
  social: {
    discord: "https://discord.gg/A2anGpvp24",
    youtube: "https://www.youtube.com/@LudogramGames",
  },
  // 与 src/i18n/routing.ts 的 locales 保持完全一致（routing.ts 是唯一真相源）。
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
};
