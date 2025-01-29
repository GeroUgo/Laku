import { AnimatedBackground } from "@/components/animated-background";
import AudioPlayer from "@/components/audio";
import Redes from "@/components/redes";




export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative bg-[#0f1318]">


      {/* Hero Section */}
      <AnimatedBackground/>

      <AudioPlayer></AudioPlayer>

      <Redes></Redes>

    </div>
  )
}