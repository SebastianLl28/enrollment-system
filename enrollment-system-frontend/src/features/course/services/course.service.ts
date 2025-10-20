import apiClient from "@/config/apiClient";
import type { CourseRequest, CourseResponse } from "../types/course";
import {
  COURSE_BY_ID,
  COURSE_DEACTIVATE,
  COURSE_REACTIVATE,
  GET_COURSES_ENDPOINT,
} from "@/config/endpoint";
import type { Page } from "@/types/Page";
import type { CourseFormSchema } from "../schema/course.schema";

let mockCourses: CourseResponse[] = [
  {
    id: 1,
    code: "A001",
    name: "Calculus I",
    description:
      "Elementary calculus course covering limits, derivatives, and integrals.",
    credits: 4,
    semesterLevel: 3,
    active: true,
    registrationDate: "2024-01-15T10:30:00",
  },
  {
    id: 2,
    code: "B002",
    name: "Linear Algebra",
    description:
      "Study of vector spaces, matrices, and linear transformations.",
    credits: 3,
    semesterLevel: 4,
    active: true,
    registrationDate: "2024-01-16T11:20:00",
  },
  {
    id: 3,
    code: "C003",
    name: "Data Structures",
    description:
      "Advanced data structures and algorithms for efficient problem solving.",
    credits: 4,
    semesterLevel: 5,
    active: false,
    registrationDate: "2024-01-17T09:15:00",
  },
];

// Simula llamadas HTTP
export const courseService = {
  list: async (): Promise<CourseResponse[]> => {
    return Promise.resolve([...mockCourses]);
  },
  create: async (payload: CourseRequest): Promise<CourseResponse> => {
    const now = new Date().toISOString();
    const item: CourseResponse = {
      id: Math.max(0, ...mockCourses.map((c) => c.id)) + 1,
      active: true,
      registrationDate: now,
      ...payload,
    };
    mockCourses = [item, ...mockCourses];
    return Promise.resolve(item);
  },
  update: async (
    id: number,
    payload: CourseRequest
  ): Promise<CourseResponse> => {
    mockCourses = mockCourses.map((c) =>
      c.id === id ? { ...c, ...payload } : c
    );
    const updated = mockCourses.find((c) => c.id === id)!;
    return Promise.resolve(updated);
  },
  toggleActive: async (id: number): Promise<CourseResponse> => {
    mockCourses = mockCourses.map((c) =>
      c.id === id ? { ...c, active: !c.active } : c
    );
    const updated = mockCourses.find((c) => c.id === id)!;
    return Promise.resolve(updated);
  },
};

export const getCourses = async (params?: {
  page?: number;
  size?: number;
  q?: string;
}) => {
  const { data } = await apiClient.get<Page<CourseResponse>>(
    GET_COURSES_ENDPOINT,
    { params }
  );
  return data;
};

export const createCourse = async (
  payload: CourseFormSchema
): Promise<CourseResponse> => {
  const { data } = await apiClient.post<CourseResponse>(
    GET_COURSES_ENDPOINT,
    payload
  );
  return data;
};

export const updateCourse = async ({
  id,
  payload,
}: {
  id: number;
  payload: CourseFormSchema;
}): Promise<CourseResponse> => {
  const { data } = await apiClient.put<CourseResponse>(
    COURSE_BY_ID(id),
    payload
  );
  return data;
};

export const deactivateCourse = async (id: number): Promise<CourseResponse> => {
  const { data } = await apiClient.patch<CourseResponse>(COURSE_DEACTIVATE(id));
  return data;
};

export const reactivateCourse = async (id: number): Promise<CourseResponse> => {
  const { data } = await apiClient.patch<CourseResponse>(COURSE_REACTIVATE(id));
  return data;
};
