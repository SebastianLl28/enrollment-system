import { Link } from "react-router-dom";
import {
  GraduationCap,
  Users,
  ClipboardList,
  BarChart3,
  Settings,
} from "lucide-react";
import { Card } from "@/components/ui/card";

type Item = { to: string; title: string; icon: React.ReactNode };

const items: Item[] = [
  {
    to: "/courses",
    title: "Cursos",
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    to: "/students",
    title: "Estudiantes",
    icon: <Users className="w-8 h-8" />,
  },
  {
    to: "/enrollments",
    title: "Matrículas",
    icon: <ClipboardList className="w-8 h-8" />,
  },
  {
    to: "/reports",
    title: "Reportes",
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    to: "/settings",
    title: "Configuración",
    icon: <Settings className="w-8 h-8" />,
  },
];

export default function HomeContent() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Link key={item.to} to={item.to} className="block group">
          <Card
            className="
              h-32 flex items-center justify-center gap-3
              border-2 hover:border-indigo-500 hover:shadow-xl
              transition-all bg-white
              rounded-xl
            "
          >
            <div className="p-3 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
              {item.icon}
            </div>
            <span className="text-lg font-semibold group-hover:text-indigo-600">
              {item.title}
            </span>
          </Card>
        </Link>
      ))}
    </section>
  );
}
