import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/features/home/page/HomePage";
import CoursesPage from "@/features/course/page/CoursesPage";
import AppLayout from "./components/layouts/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
