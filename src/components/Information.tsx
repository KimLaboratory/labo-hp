type InfoItem = {
  title: string;
  date: string;
  summary: string;
  link: string;
};

const infoItems: InfoItem[] = [
  {
    title: "2024年度 シラバス",
    date: "2024-04-01",
    summary: "2024年度のシラバス概要",
    link: "pdf/syllabus_2024.pdf",
  },
  {
    title: "2024年度 授業時間割",
    date: "2024-04-01",
    summary: "2024年度 文系学部の授業時間割です。",
    link: "pdf/timetable2024.pdf",
  },
  {
    title: "松蔭大学アクティブアカデミー",
    date: "2024-04-01",
    summary: "松蔭大学のアクティブアカデミーへのリンク",
    link: "https://kyomu.shoin-u.ac.jp/aa_web/",
  },
];

export default function Information() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {infoItems.map((item, index) => {
        const isExternalLink = item.link.startsWith("http");
        const link = isExternalLink
          ? item.link
          : import.meta.env.BASE_URL + item.link;

        return (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-xs text-gray-500 mb-1">{item.date}</p>
            <p className="text-sm text-gray-600 mb-3">{item.summary}</p>
            <button
              onClick={() => window.open(link, "_blank", "noopener noreferrer")}
              className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-200 text-xs"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
              Linkを開く
            </button>
          </div>
        );
      })}
    </div>
  );
}
