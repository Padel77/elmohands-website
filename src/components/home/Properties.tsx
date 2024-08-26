import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "معدات المطاعم",
    description:
      "نشتري فى الأسيوطي معدات المطاعم بأفضل الأسعار",
    link: "https://stripe.com",
  },
  {
    title: "الأجهزة الكهربائية",
    description:
      "نشتري الأجهزة الكهربائية بأفضل الأسعار",
    link: "https://netflix.com",
  },
  {
    title: "مطابخ",
    description:
      "نشتري في الأسيوطي المطابخ المستعملة بأفضل الأسعار",
    link: "https://google.com",
  },
  {
    title: "غرف نوم",
    description:
      "نشتري غرف النوم بأسعار مناسبة",
    link: "https://meta.com",
  },
  {
    title: "مجالس",
    description:
      "شراء المجالس المستعملة بالأسيوطي بأفضل الأسعار",
    link: "https://amazon.com",
  },
  {
    title: "كراسي",
    description:
      "شراء الكراسي المستعملة بالسعر المناسب",
    link: "https://microsoft.com",
  },
];
