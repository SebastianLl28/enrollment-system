import { useMemo, useState } from "react";
import type { CourseResponse } from "../types/course";
import {
  useCreateCourse,
  useToggleActiveCourse,
  useUpdateCourse,
} from "./query";
import type { CourseFormSchema } from "../schema/course.schema";

export function useCoursesCrud(courses: CourseResponse[] = []) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeactivateDialogOpen, setIsDeactivateDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseResponse | null>(
    null
  );
  const [courseToToggle, setCourseToToggle] = useState<CourseResponse | null>(
    null
  );

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
    );
  }, [courses, searchTerm]);

  const createMut = useCreateCourse();
  const updateMut = useUpdateCourse();
  const toggleMut = useToggleActiveCourse();

  // UI actions
  const openCreate = () => {
    setSelectedCourse(null);
    setIsModalOpen(true);
  };
  const openEdit = (course: CourseResponse) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const submitCourse = async (payload: CourseFormSchema) => {
    if (selectedCourse) {
      await updateMut.mutateAsync({ id: selectedCourse.id, payload });
    } else {
      await createMut.mutateAsync(payload);
    }
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const askToggleActive = (course: CourseResponse) => {
    setCourseToToggle(course);
    setIsDeactivateDialogOpen(true);
  };

  const confirmToggleActive = async () => {
    if (!courseToToggle) return;
    await toggleMut.mutateAsync({
      id: courseToToggle.id,
      active: courseToToggle.active,
    });
    setIsDeactivateDialogOpen(false);
    setCourseToToggle(null);
  };

  return {
    // datos derivados
    filtered,
    // ui state
    searchTerm,
    isModalOpen,
    isDeactivateDialogOpen,
    selectedCourse,
    courseToToggle,
    // setters
    setSearchTerm,
    setIsModalOpen,
    setIsDeactivateDialogOpen,
    // actions
    openCreate,
    openEdit,
    submitCourse,
    askToggleActive,
    confirmToggleActive,
    // loading flags por si quieres mostrarlos
    isSaving: createMut.isPending || updateMut.isPending,
    isToggling: toggleMut.isPending,
  };
}
