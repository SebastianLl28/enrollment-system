import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CourseForm from "../page/CourseForm";
import type { CourseRequest } from "../types/course";
import type { CourseFormSchema } from "../schema/course.schema";

interface ModalFormProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  selectedCourse: CourseRequest | null;
  submitCourse: (data: CourseFormSchema) => void;
}

const ModalForm = ({
  isModalOpen,
  setIsModalOpen,
  selectedCourse,
  submitCourse,
}: ModalFormProps) => {
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {selectedCourse ? "Editar Curso" : "Crear Nuevo Curso"}
          </DialogTitle>
          <DialogDescription>
            {selectedCourse
              ? "Modifica los datos del curso existente"
              : "Completa la información del nuevo curso"}
          </DialogDescription>
        </DialogHeader>
        <CourseForm
          initial={selectedCourse ?? undefined}
          onCancel={() => setIsModalOpen(false)}
          onSubmit={submitCourse}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalForm;
