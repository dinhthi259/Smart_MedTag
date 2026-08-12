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
import Safety from "../../components/Safety/Safety";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.scss";

const Home = () => (
  <div className={styles.home}>
    <Header />
    <main id="top">
      <Hero />
      <Problem />
      <Solution />
      <ColorScale />
      <AppShowcase />
      <Science />
      <Metrics />
      <Roadmap />
      <Audience />
      <Safety />
      <FAQ />
    </main>
    <Footer />
  </div>
);

export default Home;
