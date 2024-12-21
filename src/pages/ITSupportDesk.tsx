import Navbar from "../components/Navbar";
import ITSupportDesk from "../components/ITSupportDesk";

export default function ITSupportDeskPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">ITSupportDesk</h1>
        <ITSupportDesk />
      </div>
    </main>
  );
}
