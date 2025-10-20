import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  openCreate: () => void;
}

const Header = ({ searchTerm, setSearchTerm, openCreate }: HeaderProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Buscar por nombre o código..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 border-2 focus:border-blue-500"
          />
        </div>
        <Button
          onClick={openCreate}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-12 px-6 shadow-lg hover:shadow-xl transition-all"
        >
          <Plus className="w-5 h-5 mr-2" />
          Nuevo Curso
        </Button>
      </div>
    </div>
  );
};

export default Header;
