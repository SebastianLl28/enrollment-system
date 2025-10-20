import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { COURSES_QUERY_KEY } from "@/config/keys";
import {
  createCourse,
  deactivateCourse,
  getCourses,
  reactivateCourse,
  updateCourse,
} from "../services/course.service";
import type { CourseFormSchema } from "../schema/course.schema";

export const useGetCourses = (page = 0, size = 20, q?: string) =>
  useQuery({
    queryKey: [...COURSES_QUERY_KEY, page, size, q],
    queryFn: () => getCourses({ page, size, q }),
    gcTime: 1000 * 60 * 2,
    staleTime: 10_000,
  });

export const useCreateCourse = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: CourseFormSchema) => createCourse(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: COURSES_QUERY_KEY }),
  });
};

export const useUpdateCourse = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: CourseFormSchema }) =>
      updateCourse({ id, payload }),
    onSuccess: () => qc.invalidateQueries({ queryKey: COURSES_QUERY_KEY }),
  });
};

export const useToggleActiveCourse = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, active }: { id: number; active: boolean }) =>
      active ? deactivateCourse(id) : reactivateCourse(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: COURSES_QUERY_KEY }),
  });
};
