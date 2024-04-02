import Navigation from "@/components/navigation";
import Slider from "@/components/slider";
import QuickLink from "@/components/quickLink";
import MissionVision from "@/components/mission";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className="flex flex-col ">
      <Navigation></Navigation>
      <Slider />
      <QuickLink></QuickLink>
      <MissionVision></MissionVision>
      <Footer></Footer>
    </main>
  );
}
