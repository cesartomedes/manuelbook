import TopBar from "./components/TopBar";
import TimerBar from "./components/TimerBar";
import Hero from "./components/Hero";
import ForYouSection from "./components/ForYouSection";
import TwoColumnSection from "./components/TwoColumnSection";
import WhySection from "./components/WhySection";
import BonosExclusivos from "./components/BonosExclusivos";
import RegalosCompra from "./components/RegalosCompra";
import BonusTallerGrabado from "./components/BonusTallerGrabado";
import BonusClaseMetaAds from "./components/BonusClaseMetaAds";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import SuperOferta from "./components/SuperOferta";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <TopBar />
      <TimerBar />
      <Hero />
      <ForYouSection />
      <TwoColumnSection />
      <WhySection />
      <BonosExclusivos />
      <RegalosCompra />
      <BonusTallerGrabado />
      <BonusClaseMetaAds />
      <SuperOferta />
      <Testimonials />
      <PreguntasFrecuentes />

      {/* Footer al final */}
      <Footer />
    </>
  );
}

export default App;
