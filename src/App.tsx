import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import Introduction from "./components/Introduction";
import ResearchAreas from "./components/ResearchAreas";
import AboutLab from "./components/AboutLab";
import PastResearch from "./pages/PastResearch";
import ITSupportDesk from "./pages/ITSupportDesk";
import Information from "./pages/Information";
import ParticleBackground from "./components/ParticleBackground";

function HomePage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden flex flex-col">
      {/* パーティクル背景 */}
      <ParticleBackground />
      
      {/* 装飾的な背景グラデーション */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-5 opacity-60"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-5 opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl -z-5 opacity-60"></div>
      
      <Navbar />
      <ImageSlider />
      
      <div className="container mx-auto px-4 py-8 flex-grow relative z-1">
        <Introduction />
        <ResearchAreas />
        <AboutLab />
      </div>
      
      <footer className="py-8 nav-glassmorphism mt-auto relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400">© 2024 Kim Lab - 松蔭大学</p>
          </div>
        </div>
      </footer>
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
