import Navbar from "../components/Navbar";
import Information from "../components/Information";

export default function InformationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Information</h1>
        <Information />
      </div>
    </main>
  );
}
