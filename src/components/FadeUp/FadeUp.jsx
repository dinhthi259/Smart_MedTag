import { useEffect, useRef, useState } from "react";
import styles from "./FadeUp.module.scss";

const FadeUp = ({ children, className = "", as: Tag = "div", ...props }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${styles.fadeUp} ${shown ? styles.show : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default FadeUp;
