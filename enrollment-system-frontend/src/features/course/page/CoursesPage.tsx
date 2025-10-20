import { BookOpen, GraduationCap } from "lucide-react";
import { useGetCourses } from "../hooks/query";
import { useCoursesCrud } from "../hooks/useCoursesCrud";
import { usePageUi } from "@/hooks/usePageUi";
import { useMemo } from "react";
import Card from "../components/Card";
import AlertDialogConfirm from "../components/AlertDialogConfirm";
import ModalForm from "../components/ModalForm";
import Header from "../components/Header";
import type { CourseResponse } from "../types/course";

export default function CoursesPage() {
  const crumbs = useMemo(
    () => [{ label: "Inicio", to: "/" }, { label: "Cursos" }],
    []
  );
  usePageUi({
    title: "Gestión de Cursos",
    subtitle: "Administra el catálogo académico",
    breadcrumbs: crumbs,
    icon: GraduationCap,
  });

  const { data: pageData, isLoading } = useGetCourses();

  const courses = pageData?.content ?? [];

  const {
    filtered,
    searchTerm,
    isModalOpen,
    isDeactivateDialogOpen,
    selectedCourse,
    courseToToggle,
    setSearchTerm,
    setIsModalOpen,
    setIsDeactivateDialogOpen,
    openCreate,
    openEdit,
    submitCourse,
    askToggleActive,
    confirmToggleActive,
  } = useCoursesCrud(courses);

  const handleCardClick = (course: CourseResponse) => {
    console.log(course);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Barra de acciones */}
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          openCreate={openCreate}
        />

        {/* Grid */}
        {isLoading ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            Cargando…
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No se encontraron cursos
            </h3>
            <p className="text-gray-400">
              Intenta con otro término de búsqueda
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course) => (
              <Card
                key={course.id}
                course={course}
                openEdit={openEdit}
                askToggleActive={askToggleActive}
                handleClick={() => handleCardClick(course)}
              />
            ))}
          </div>
        )}

        {/* Modal Crear/Editar */}
        <ModalForm
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedCourse={selectedCourse}
          submitCourse={submitCourse}
        />

        {/* Confirmación Activar/Desactivar */}
        <AlertDialogConfirm
          isDeactivateDialogOpen={isDeactivateDialogOpen}
          setIsDeactivateDialogOpen={setIsDeactivateDialogOpen}
          courseToToggle={courseToToggle}
          confirmToggleActive={confirmToggleActive}
        />
      </div>
    </div>
  );
}
