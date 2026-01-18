import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ActivityList from "@/components/ActivityList";
import MapSection from "@/components/MapSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Intro />
      <ActivityList />
      <MapSection />
    </div>
  );
}
