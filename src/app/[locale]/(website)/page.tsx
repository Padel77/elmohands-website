import { Background } from "@/components/background/Background";
import BeAmbassador from "@/components/home/BeAmbassador";
import OurPartners from "@/components/home/OurPartners";
import Properties from "@/components/home/Properties";
import RealAdversting from "@/components/home/RealAdversting";
import RecentlyAdded from "@/components/home/RecentlyAdded";
import CustomerService from "@/components/socialapp/customerService";
import logo from "@../../../public/assets/background.png";
import { TimelineDemo } from "@/components/home/PropertyCard";
export default async function Home() {
  return (
    <>
      <CustomerService />
      <Background />
      <div className="container mx-auto ">
        <TimelineDemo />
        {/* <Properties properties={fetchedData?.properties} />
        <RealAdversting />
        <RecentlyAdded recentlyAdded={fetchedData?.recently_added} />
        <BeAmbassador />
        <OurPartners partners={fetchedData?.partners} />
         */}
      </div>
    </>
  );
}
