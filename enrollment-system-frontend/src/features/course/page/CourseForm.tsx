import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import type { CourseResponse } from "../types/course";
import { courseSchema, type CourseFormSchema } from "../schema/course.schema";

type Props = {
  initial?: Partial<CourseResponse>;
  onSubmit: (data: CourseFormSchema) => void;
  onCancel: () => void;
};

export default function CourseForm({ initial, onSubmit, onCancel }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CourseFormSchema>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      code: initial?.code ?? "",
      name: initial?.name ?? "",
      description: initial?.description ?? "",
      credits: initial?.credits ?? 1,
      semesterLevel: initial?.semesterLevel ?? 1,
    },
  });

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="code" className="text-sm font-semibold">
            Código del Curso *
          </Label>
          <Input
            id="code"
            {...register("code")}
            placeholder="Ej: A001"
            className="mt-2"
          />
          {errors.code && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>{errors.code.message}</AlertDescription>
            </Alert>
          )}
        </div>

        <div>
          <Label htmlFor="name" className="text-sm font-semibold">
            Nombre del Curso *
          </Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Ej: Calculus I"
            className="mt-2"
          />
          {errors.name && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>{errors.name.message}</AlertDescription>
            </Alert>
          )}
        </div>

        <div>
          <Label htmlFor="description" className="text-sm font-semibold">
            Descripción
          </Label>
          <Textarea
            id="description"
            {...register("description")}
            placeholder="Describe el contenido del curso..."
            className="mt-2 min-h-[100px]"
          />
          {errors.description && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>{errors.description.message}</AlertDescription>
            </Alert>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="credits" className="text-sm font-semibold">
              Créditos *
            </Label>
            <Input
              id="credits"
              type="number"
              {...register("credits", { valueAsNumber: true })}
              placeholder="Ej: 4"
              className="mt-2"
            />
            {errors.credits && (
              <Alert variant="destructive" className="mt-2">
                <AlertDescription>{errors.credits.message}</AlertDescription>
              </Alert>
            )}
          </div>

          <div>
            <Label htmlFor="semesterLevel" className="text-sm font-semibold">
              Nivel de Semestre *
            </Label>
            <Input
              id="semesterLevel"
              type="number"
              {...register("semesterLevel", { valueAsNumber: true })}
              placeholder="Ej: 3"
              className="mt-2"
            />
            {errors.semesterLevel && (
              <Alert variant="destructive" className="mt-2">
                <AlertDescription>
                  {errors.semesterLevel.message}
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        >
          {initial?.id ? "Guardar Cambios" : "Crear Curso"}
        </Button>
      </div>
    </form>
  );
}
