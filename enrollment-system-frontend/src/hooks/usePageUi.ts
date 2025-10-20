import { useEffect, useMemo } from "react";
import type { LucideIcon } from "lucide-react";
import { useUiStore, type Crumb } from "@/store/module.store";

export function usePageUi({
  title,
  subtitle,
  icon,
  breadcrumbs,
}: {
  title?: string;
  subtitle?: string;
  icon?: LucideIcon; // 👈 nuevo
  breadcrumbs?: Crumb[];
}) {
  const {
    title: curTitle,
    subtitle: curSubtitle,
    icon: curIcon,
    breadcrumbs: curCrumbs,
    setHeader,
    setBreadcrumbs,
  } = useUiStore();

  const nextCrumbs = useMemo(() => breadcrumbs ?? [], [breadcrumbs]);
  const nextCrumbsKey = useMemo(() => JSON.stringify(nextCrumbs), [nextCrumbs]);
  const curCrumbsKey = useMemo(() => JSON.stringify(curCrumbs), [curCrumbs]);

  useEffect(() => {
    if (title !== curTitle || subtitle !== curSubtitle || icon !== curIcon) {
      setHeader({ title, subtitle, icon });
    }
  }, [title, subtitle, icon, curTitle, curSubtitle, curIcon, setHeader]);

  useEffect(() => {
    if (nextCrumbsKey !== curCrumbsKey) {
      setBreadcrumbs(nextCrumbs);
    }
  }, [nextCrumbsKey, curCrumbsKey, nextCrumbs, setBreadcrumbs]);
}
