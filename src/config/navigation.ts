import type { LucideIcon } from "lucide-react";
import { BookOpen, CalendarDays, Dices, Gamepad2, MessagesSquare, Monitor, Users } from "lucide-react";

export interface NavItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

// 导航分类真相源：与 /home/ubuntu/Documents/GameProjects/0_meta/invokyrwiki_top/关键词.json
// 的 categories slug 以及 articles/<lang>/ 下的文章子目录一一对应。
// key 是翻译键（en.json nav），path 是 URL；二者职责不同，不能合并。
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Dices, isContentType: true },
  { key: "multiplayer", path: "/multiplayer", icon: Users, isContentType: true },
  { key: "controls", path: "/controls", icon: Gamepad2, isContentType: true },
  { key: "release", path: "/release", icon: CalendarDays, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Monitor, isContentType: true },
  { key: "community", path: "/community", icon: MessagesSquare, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
