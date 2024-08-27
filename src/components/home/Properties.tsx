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
      "نشتري فى المهندس معدات المطاعم بأفضل الأسعار",
    link: "#",
  },
  {
    title: "الأجهزة الكهربائية",
    description:
      "نشتري الأجهزة الكهربائية بأفضل الأسعار",
    link: "#",
  },
  {
    title: "مطابخ",
    description:
      "نشتري في المهندس المطابخ المستعملة بأفضل الأسعار",
    link: "#",
  },
  {
    title: "غرف نوم",
    description:
      "نشتري غرف النوم بأسعار مناسبة",
    link: "#",
  },
  {
    title: "مجالس",
    description:
      "شراء المجالس المستعملة بالمهندس بأفضل الأسعار",
    link: "#",
  },
  {
    title: "كراسي",
    description:
      "شراء الكراسي المستعملة بالسعر المناسب",
    link: "#",
  },
];
