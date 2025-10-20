import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import type { CourseResponse } from "../types/course";

interface Props {
  isDeactivateDialogOpen: boolean;
  setIsDeactivateDialogOpen: (open: boolean) => void;
  courseToToggle: CourseResponse | null;
  confirmToggleActive: () => void;
}

const AlertDialogConfirm = ({
  isDeactivateDialogOpen,
  setIsDeactivateDialogOpen,
  courseToToggle,
  confirmToggleActive,
}: Props) => {
  return (
    <AlertDialog
      open={isDeactivateDialogOpen}
      onOpenChange={setIsDeactivateDialogOpen}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {courseToToggle?.active
              ? "¿Desactivar curso?"
              : "¿Reactivar curso?"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {courseToToggle?.active ? (
              <>
                El curso{" "}
                <span className="font-semibold text-gray-900">
                  {courseToToggle?.name}
                </span>{" "}
                será desactivado y no estará disponible para nuevas
                inscripciones.
              </>
            ) : (
              <>
                El curso{" "}
                <span className="font-semibold text-gray-900">
                  {courseToToggle?.name}
                </span>{" "}
                será reactivado y estará disponible nuevamente para
                inscripciones.
              </>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={confirmToggleActive}
            className={
              courseToToggle?.active
                ? "bg-orange-600 hover:bg-orange-700"
                : "bg-green-600 hover:bg-green-700"
            }
          >
            {courseToToggle?.active ? "Desactivar" : "Reactivar"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogConfirm;
