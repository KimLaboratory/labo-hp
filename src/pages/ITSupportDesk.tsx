import Navbar from "../components/Navbar";
import ITSupportDesk from "../components/ITSupportDesk";

export default function ITSupportDeskPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden flex flex-col">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">IT Support Desk</span>
        </h1>
        <ITSupportDesk />
      </div>
      
      <footer className="py-8 nav-glassmorphism mt-auto">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400">© 2024 Kim Lab - 松蔭大学</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
