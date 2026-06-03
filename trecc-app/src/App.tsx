import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import CareersApplyPage from "./pages/CareersApplyPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/jobs" element={<CareersPage />} />
      <Route path="/careers/telegram-community-moderator/apply" element={<CareersApplyPage />} />
      <Route path="/jobs/telegram-community-moderator/apply" element={<CareersApplyPage />} />
    </Routes>
  );
}
