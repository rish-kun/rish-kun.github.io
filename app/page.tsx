import Hero from "@/components/Hero";
import WireframeMeshClient from "@/components/WireframeMeshClient";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden" style={{ height: "calc(100dvh - 65px)" }}>
      {/* Main hero: left text + right 3D */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left: hero content */}
        <div className="flex-1 flex items-stretch">
          <Hero />
        </div>

        {/* Right: 3D wireframe mesh */}
        <div className="w-full h-48 md:h-auto md:w-1/2 lg:w-[55%] flex-shrink-0">
          <WireframeMeshClient />
        </div>
      </main>
    </div>
  );
}
