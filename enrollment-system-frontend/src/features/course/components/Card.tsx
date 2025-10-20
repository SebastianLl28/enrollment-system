import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Pencil, Power, PowerOff } from "lucide-react";
import type { CourseResponse } from "../types/course";

interface CardProps {
  course: CourseResponse;
  openEdit: (course: CourseResponse) => void;
  askToggleActive: (course: CourseResponse) => void;
  handleClick?: (course: CourseResponse) => void;
}

const Card = ({
  course,
  openEdit,
  askToggleActive,
  handleClick,
}: CardProps) => {
  return (
    <div
      key={course.id}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
        !course.active ? "opacity-60" : ""
      }`}
    >
      <div
        className={`h-2 ${
          course.active
            ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
            : "bg-gradient-to-r from-gray-400 to-gray-500"
        }`}
      />
      <div className="p-6">
        <div
          className="flex items-start justify-between mb-4 cursor-pointer"
          onClick={() => handleClick?.(course)}
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div
                className={`inline-block px-3 py-1 ${
                  course.active
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-600"
                } rounded-lg text-sm font-semibold`}
              >
                {course.code}
              </div>
              {!course.active && (
                <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-semibold">
                  <PowerOff className="w-3 h-3 mr-1" /> Inactivo
                </span>
              )}
            </div>
            <h3
              className={`text-xl font-bold mb-2 transition-colors ${
                course.active
                  ? "text-gray-800 group-hover:text-blue-600"
                  : "text-gray-500"
              }`}
            >
              {course.name}
            </h3>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {course.description}
        </p>

        <div className="flex items-center gap-4 mb-6 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <BookOpen className="w-4 h-4" />
            <span className="font-medium">{course.credits} créditos</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="font-medium">Nivel {course.semesterLevel}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => openEdit(course)}
            className="flex-1 border-2 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
          >
            <Pencil className="w-4 h-4 mr-2" /> Editar
          </Button>
          <Button
            variant="outline"
            onClick={() => askToggleActive(course)}
            className={`flex-1 border-2 ${
              course.active
                ? "hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50"
                : "hover:border-green-500 hover:text-green-600 hover:bg-green-50"
            }`}
          >
            {course.active ? (
              <>
                <PowerOff className="w-4 h-4 mr-2" /> Desactivar
              </>
            ) : (
              <>
                <Power className="w-4 h-4 mr-2" /> Activar
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
