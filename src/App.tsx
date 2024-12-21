import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import Introduction from "./components/Introduction";
import ResearchAreas from "./components/ResearchAreas";
import AboutLab from "./components/AboutLab";
import PastResearch from "./pages/PastResearch";
import ITSupportDesk from "./pages/ITSupportDesk";
import Information from "./pages/Information";

function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ImageSlider />
      <div className="mt-8">
        <div className="container mx-auto px-4 py-8">
          <Introduction />
          <ResearchAreas />
          <AboutLab />
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/past-research" element={<PastResearch />} />
      <Route path="/it-support-desk" element={<ITSupportDesk />} />
      <Route path="/information" element={<Information />} />
    </Routes>
  );
}
