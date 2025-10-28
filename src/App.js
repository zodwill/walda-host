import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import NearestAttractions from "./pages/NearestAttractions";
import Hackathon from "./pages/Hackathon";
import PaperSubmission from "./pages/PaperSubmission";
import CallForPapers from "./pages/CallForPapers";
import Proceedings from "./pages/Proceedings";
import Accommodation from "./pages/Accommodation";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="Nearest-Attractions" element={<NearestAttractions />} />
        <Route path="PaperSubmission" element={<PaperSubmission />} />
        <Route path="CallForPapers" element={<CallForPapers />} />
        <Route path="Proceedings" element={<Proceedings />} />
        <Route path="Accommodation" element={<Accommodation />} />
        <Route path="hackathon" element={<Hackathon />} />
        

        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
