import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Problem from "../../components/Problem/Problem";
import Solution from "../../components/Solution/Solution";
import ColorScale from "../../components/ColorScale/ColorScale";
import AppShowcase from "../../components/AppShowcase/AppShowcase";
import Science from "../../components/Science/Science";
import Metrics from "../../components/Metrics/Metrics";
import Roadmap from "../../components/Roadmap/Roadmap";
import Audience from "../../components/Audience/Audience";
import RiskLimitations from "../../components/RiskLimitations/RiskLimitations";
import Orientation from "../../components/Orientation/Orientation";
import Footer from "../../components/Footer/Footer";
import VisionMission from "../../components/VisionMission/VisionMission";
import styles from "./Home.module.scss";

const Home = () => (
  <div className={styles.home}>
    <Header />
    <main id="top">
      <Hero />
      <VisionMission />
      <Problem />
      <Solution />
      <ColorScale />
      <AppShowcase />
      <Roadmap />
      <Metrics />
      <Science />
      <Audience />
      <RiskLimitations />
      <Orientation />
    </main>
    <Footer />
  </div>
);

export default Home;
