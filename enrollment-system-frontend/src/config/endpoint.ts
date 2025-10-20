export const COURSES_BASE = "/courses";
export const GET_COURSES_ENDPOINT = `${COURSES_BASE}`;
export const COURSE_BY_ID = (id: number) => `${COURSES_BASE}/${id}`;
export const COURSE_DEACTIVATE = (id: number) =>
  `${COURSES_BASE}/${id}/deactivate`;
export const COURSE_REACTIVATE = (id: number) =>
  `${COURSES_BASE}/${id}/reactivate`;
