import Header from "../component/Header";
import Hero from "../component/Hero";
import { Roadmap } from "../component/Roadmap";
import { FloatingPaper } from "../ui/floatingpaper"
import { SparklesCore } from "../ui/sparkles"



export default function Home() {
  return (
    
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
    {/* Background elements */}
    <div className="absolute inset-0 z-0">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={12} />
      </div>
    </div>
  
    {/* Main content */}
    <div className="relative z-10 w-full">
      <Header/>
      <Hero/>
      <Roadmap/>
    </div>
  </div>
  )
}
