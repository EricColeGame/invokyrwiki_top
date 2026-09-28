import type { LucideIcon } from "lucide-react";

export interface NavItem {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
}

// 导航暂时清空，等待后续阶段按新主题重建。
export const NAVIGATION_CONFIG: NavItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
