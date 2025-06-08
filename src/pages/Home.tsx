import Header from "../component/Header";
import Hero from "../component/Hero";
import { Roadmap } from "../component/Roadmap";
import { FloatingPaper } from "../ui/floatingpaper"
import Footer from "../component/footer"; 

// import { SparklesCore } from "../ui/sparkles"



export default function Home() {
  return (
    
    <div className="relative z-10 w-full flex flex-col min-h-screen">
      <Header/>
      <Hero/>
      <Roadmap/>
      <Footer/>

    </div>
  
  )
}
