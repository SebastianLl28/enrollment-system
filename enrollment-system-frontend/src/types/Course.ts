export type Course = {
  id: number;
  code: string;
  name: string;
  description: string;
  credits: number;
  semesterLevel: number;
  registrationDate?: Date;
  active: boolean;
};
