import Cloth from "../components/Cloth";
import Cross from "../components/Cross";
import Enhance from "../components/Enhance";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Guide from "../components/Guide";
import Icons from "../components/Icons";
import Intro from "../components/Intro";
import Learn from "../components/Learn";
import Needs from "../components/Needs";
import Suite from "../components/Suite";
import Tagline from "../components/Tagline";
import Using from "../components/Using";

export default function Home() {
  return (
    <main className="text-black bg-white dark:bg-[#08080C] dark:text-white w-full">
      <Tagline />
      <Icons />
      <Intro />
      <Needs />
      <Enhance />
      <Guide />
      <Cloth />
      <Features />
      <Cross />
      <Learn/>
      <Using/>
      <Suite/>
      <Footer/>
    </main>
  );
}
