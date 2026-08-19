import FadeUp from "../FadeUp/FadeUp";
import styles from "./Orientaion.module.scss";
import orientationImg from "../../assets/orientation.png";

const Roadmap = () => {
  return (
    <section className={styles.roadmap} id="roadmap">
      <div className="wrap">

        {/* TITLE */}
        <FadeUp>
          <div className={styles.heading}>
            <h2>ĐỊNH HƯỚNG PHÁT TRIỂN TRONG TƯƠNG LAI</h2>

            <span className={styles.arrow} aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </FadeUp>

        {/* IMAGE */}
        <FadeUp>
          <div className={styles.imageWrap}>
            <img
              src={orientationImg}
              alt="Định hướng phát triển trong tương lai"
            />
          </div>
        </FadeUp>

      </div>
    </section>
  );
};

export default Roadmap;