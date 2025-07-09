import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { infoItems } from "../data/informationData";

export default function InformationDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const itemIndex = parseInt(id || "0");
  const item = infoItems[itemIndex];

  if (!item) {
    return (
      <main className="min-h-screen relative overflow-x-hidden flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex-grow">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8 text-white">
              情報が見つかりません
            </h1>
            <button
              onClick={() => navigate("/information")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105 duration-300"
            >
              戻る
            </button>
          </div>
        </div>
      </main>
    );
  }

  const isExternalLink = item.link.startsWith("http");
  const link = isExternalLink
    ? item.link
    : import.meta.env.BASE_URL + item.link;

  return (
    <main className="min-h-screen relative overflow-x-hidden flex flex-col">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate("/information")}
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            一覧に戻る
          </button>

          <div className="py-8">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-3xl font-bold text-white flex-1">
                {item.title}
              </h1>
              <p className="text-gray-400 ml-6 whitespace-nowrap">
                {item.date}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                {item.summary}
              </p>
            </div>

            {item.link && (
              <div className="pt-6 border-t border-gray-700">
                <button
                  onClick={() => window.open(link, "_blank", "noopener noreferrer")}
                  className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105 duration-300 neon-border"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  関連リンクを開く
                </button>
              </div>
            )}
          </div>
        </div>
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