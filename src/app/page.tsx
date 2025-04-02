import { News } from "@/components";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <div>
      <div className="hero-container fixed top-0 left-0 w-screen h-screen z-[10]">
        <Hero />
      </div>
      <div className="mt-[100vh] w-screen min-h-screen bg-white z-[50]">
        <News />
      </div>
    </div>
  );
}