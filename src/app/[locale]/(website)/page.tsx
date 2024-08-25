import { Background } from "@/components/background/Background";
import CustomerService from "@/components/socialapp/customerService";
import { TimelineDemo } from "@/components/home/PropertyCard";
import { CardHoverEffectDemo } from "@/components/home/Properties";
import RealAdversting from "@/components/home/RealAdversting";
export default async function Home() {
  return (
    <>
      <CustomerService />
      <Background />
      <div className="container mx-auto ">
        <RealAdversting />
        <CardHoverEffectDemo />
        <TimelineDemo />
        {/*<RecentlyAdded recentlyAdded={fetchedData?.recently_added} />
        <BeAmbassador />
        <OurPartners partners={fetchedData?.partners} />
         */}
      </div>
    </>
  );
}
