import { usePageUi } from "@/hooks/usePageUi";
import HomeContent from "./HomeContent";
import { useMemo } from "react";

export default function HomePage() {
  const crumbs = useMemo(() => [{ label: "Inicio" }], []);
  usePageUi({
    title: "Sistema de Matrículas",
    subtitle: "Elige un módulo para comenzar",
    breadcrumbs: crumbs,
  });

  return <HomeContent />;
}
