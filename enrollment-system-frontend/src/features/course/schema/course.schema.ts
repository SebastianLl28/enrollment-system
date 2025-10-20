import * as z from "zod";

export const courseSchema = z.object({
  code: z
    .string()
    .min(1, "El código es requerido")
    .max(20, "Máx. 20 caracteres"),
  name: z
    .string()
    .min(1, "El nombre es requerido")
    .max(100, "Máx. 100 caracteres"),
  description: z
    .string()
    .max(2000, "Máx. 2000 caracteres")
    .optional()
    .or(z.literal("")),
  credits: z
    .number({ error: "Debe ser un número" })
    .positive("Mayor a 0")
    .int("Debe ser entero"),
  semesterLevel: z
    .number({ error: "Debe ser un número" })
    .positive("Mayor a 0")
    .int("Debe ser entero"),
});

export type CourseFormSchema = z.infer<typeof courseSchema>;
