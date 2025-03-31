import { useEffect, useRef, useState } from "react";

type SupportStaff = {
  name: string;
  role: string;
};

type SupportService = {
  title: string;
  description: string;
};

type WeeklySchedule = {
  [key: string]: string[];
};

const supportStaff: SupportStaff[] = [
  { name: "小幡優斗", role: "ITサポートスタッフ" },
  { name: "土屋翔吾", role: "ITサポートスタッフ" },
  { name: "中野渡凌輔", role: "ITサポートスタッフ" },
  { name: "山本将叶", role: "ITサポートスタッフ" },
];

const supportServices: SupportService[] = [
  {
    title: "ネットワークトラブル対応",
    description: "接続問題、設定の支援など",
  },
  {
    title: "ソフトウェア支援",
    description: "ソフトウェアの使用方法やインストール",
  },
  {
    title: "授業相談",
    description: "授業内容や課題の質問",
  },
];

const weeklySchedule: WeeklySchedule = {
  日: [],
  月: [],
  火: [],
  水: [],
  木: [],
  金: [],
  土: [],
};

export default function ITSupportDesk() {
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
    <div ref={sectionRef} className="space-y-16">
      <section
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-lg text-gray-300 mb-12 max-w-5xl mx-auto text-center">
          ITSupportDeskは、学生のIT関連の問題解決をサポートするサービスです。
          ネットワークトラブル、ソフトウェアの使用方法、授業内容の相談など、幅広いIT関連の問題に対応しています。
        </p>
      </section>

      <section
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "150ms" }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          <span className="text-gradient">受付スケジュール</span>
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-5xl mx-auto text-center">
          場所 : 2号館3階 2302室
        </p>
        <div className="glassmorphism p-6 rounded-lg overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
            {Object.entries(weeklySchedule).map(([day, slots]) => (
              <div key={day} className="text-center">
                <div className="font-medium mb-3 text-white">{day}</div>
                <div
                  className={`p-6 rounded-lg h-24 overflow-y-auto flex items-center justify-center ${
                    slots.length > 0
                      ? "bg-blue-500/20 neon-border"
                      : "bg-white/5"
                  }`}
                >
                  {slots.length > 0 ? (
                    slots.map((slot, index) => (
                      <div key={index} className="text-sm text-white">
                        {slot}
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-gray-400">-</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-gradient">サポート内容</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportServices.map((service, index) => (
            <div
              key={index}
              className="glassmorphism p-6"
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <h3 className="text-lg font-medium mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "450ms" }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-gradient">担当者</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportStaff.map((staff, index) => (
            <div
              key={index}
              className="glassmorphism p-5"
              style={{ transitionDelay: `${index * 50 + 450}ms` }}
            >
              <h3 className="text-lg font-medium text-white">{staff.name}</h3>
              <p className="text-sm text-gray-300 mt-1">{staff.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
