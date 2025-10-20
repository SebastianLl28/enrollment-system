import { Outlet } from "react-router-dom";
import Breadcrumbs from "../molecules/Breadcrumbs";
import { useUiStore } from "@/store/module.store";

export default function AppLayout() {
  const { title, subtitle, icon: Icon, breadcrumbs } = useUiStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="container mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <div className="h-6 w-6 rounded bg-indigo-600" />
          <span className="font-semibold">Sistema de Inscripción</span>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-4 py-6">
        <div className="mb-4 mx-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {(title || subtitle) && (
          <div className="mb-6 flex items-center gap-3 mx-4">
            {Icon && (
              <div className="p-3 rounded-xl shadow-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                <Icon className="w-8 h-8 text-white" />
              </div>
            )}
            <div>
              {title && (
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {title}
                </h1>
              )}
              {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
            </div>
          </div>
        )}

        <Outlet />
      </main>
    </div>
  );
}
