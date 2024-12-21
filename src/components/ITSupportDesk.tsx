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
  { name: "姥貝智也", role: "ITサポートスタッフ" },
  { name: "叶家豪", role: "ITサポートスタッフ" },
  { name: "李大優", role: "ITサポートスタッフ" },
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
  火: ["昼休み(12:10~13:00)"],
  水: ["3限(13:10~14:30)"],
  木: [],
  金: ["昼休み(12:10~13:00)"],
  土: [],
};

export default function ITSupportDesk() {
  return (
    <div className="space-y-6">
      <section className="pb-6">
        <p className="text-lg text-gray-600 mb-12 max-w-5xl mx-auto text-center">
          ITSupportDeskは、学生のIT関連の問題解決をサポートするサービスです。
          ネットワークトラブル、ソフトウェアの使用方法、授業内容の相談など、幅広いIT関連の問題に対応しています。
        </p>
      </section>

      <section className="pb-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          受付スケジュール
        </h2>
        <p className="text-lg text-gray-600 mb-4 max-w-5xl mx-auto text-center">
          場所 : 2号館3階 2302室
        </p>
        <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2">
            {Object.entries(weeklySchedule).map(([day, slots]) => (
              <div key={day} className="text-center">
                <div className="font-medium mb-2">{day}</div>
                <div
                  className={`p-6 rounded h-24 overflow-y-auto flex items-center justify-center ${slots.length > 0 ? "bg-green-100" : "bg-gray-100"}`}
                >
                  {slots.length > 0 ? (
                    slots.map((slot, index) => (
                      <div key={index} className="text-sm">
                        {slot}
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-gray-500">-</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          サポート内容
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {supportServices.map((service, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-base font-medium mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          担当者
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {supportStaff.map((staff, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium">{staff.name}</h3>
              <p className="text-sm text-gray-600">{staff.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
