export interface CourseResponse {
  id: number;
  code: string;
  name: string;
  description: string;
  credits: number;
  semesterLevel: number;
  active: boolean;
  registrationDate: string;
}

export type CourseRequest = Omit<
  CourseResponse,
  "id" | "active" | "registrationDate"
>;

export type CourseForm = {
  code: string;
  name: string;
  description?: string | "";
  credits: number;
  semesterLevel: number;
};
