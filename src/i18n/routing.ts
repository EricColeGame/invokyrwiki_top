import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/config/site";

// 唯一真相源：最终支持的语言集合。
// 显式标注为 string[]，与 next-intl defineRouting 的入参类型保持一致。
export const locales: string[] = ["en", "es", "pt", "de"];

export const routing = defineRouting({
  locales,
  defaultLocale: siteConfig.defaultLocale,
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
