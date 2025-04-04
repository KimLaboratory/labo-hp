import { useEffect, useRef, useState } from "react";

type InfoItem = {
  title: string;
  date: string;
  summary: string;
  link: string;
};

const infoItems: InfoItem[] = [
  {
    title: "2025年度 シラバス",
    date: "2025-04-04",
    summary: "2025年度のシラバス概要",
    link: "pdf/syllabus2025.pdf",
  },
  {
    title: "2025年度 授業時間割",
    date: "2025-04-04",
    summary: "2025年度 文系学部の授業時間割です。",
    link: "pdf/timetable2025.pdf",
  },
  {
    title: "2024年度 シラバス",
    date: "2024-04-01",
    summary: "2024年度のシラバス概要",
    link: "pdf/syllabus2024.pdf",
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {infoItems.map((item, index) => {
        const isExternalLink = item.link.startsWith("http");
        const link = isExternalLink
          ? item.link
          : import.meta.env.BASE_URL + item.link;

        return (
          <div
            key={index}
            className={`glassmorphism p-6 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <h2 className="text-xl font-semibold mb-2 text-white">
              {item.title}
            </h2>
            <p className="text-xs text-gray-400 mb-2">{item.date}</p>
            <p className="text-sm text-gray-300 mb-4">{item.summary}</p>
            <button
              onClick={() => window.open(link, "_blank", "noopener noreferrer")}
              className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-all transform hover:scale-105 duration-300 text-sm neon-border"
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
