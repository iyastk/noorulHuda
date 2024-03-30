import Navigation from "@/components/navigation";
import Slider from "@/components/slider";
import QuickLink from "@/components/quickLink";
export default function Home() {
  return (
    <main className="flex flex-col ">
      <Navigation></Navigation>
      <Slider />
      <QuickLink></QuickLink>
    </main>
  );
}
