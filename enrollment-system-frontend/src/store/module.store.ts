import { create } from "zustand";
import type { LucideIcon } from "lucide-react";

export type Crumb = { label: string; to?: string };

const shallowEqualCrumbs = (a: Crumb[], b: Crumb[]) =>
  a.length === b.length &&
  a.every((x, i) => x.label === b[i].label && x.to === b[i].to);

type UiState = {
  title?: string;
  subtitle?: string;
  icon?: LucideIcon; // 👈 nuevo
  breadcrumbs: Crumb[];
  setHeader: (args: {
    title?: string;
    subtitle?: string;
    icon?: LucideIcon;
  }) => void;
  setBreadcrumbs: (items: Crumb[]) => void;
  resetUi: () => void;
};

export const useUiStore = create<UiState>((set, get) => ({
  title: undefined,
  subtitle: undefined,
  icon: undefined,
  breadcrumbs: [],
  setHeader: ({ title, subtitle, icon }) => {
    const s = get();
    const sameTitle =
      s.title === title && s.subtitle === subtitle && s.icon === icon;
    if (sameTitle) return; // no-op
    set({ title, subtitle, icon });
  },
  setBreadcrumbs: (items) => {
    const s = get();
    if (shallowEqualCrumbs(s.breadcrumbs, items)) return;
    set({ breadcrumbs: items });
  },
  resetUi: () =>
    set({
      title: undefined,
      subtitle: undefined,
      icon: undefined,
      breadcrumbs: [],
    }),
}));
