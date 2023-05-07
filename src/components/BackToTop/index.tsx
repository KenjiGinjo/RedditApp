import { useState } from "react";
import "./BackToTop.css";
import { useEffect } from "react";
export default function BackToTop() {
  const [show, setShow] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (show) {
    return (
      <div className="back-to-top" onClick={backToTop}>
        Back Top
      </div>
    );
  } else {
    return <></>;
  }
}
