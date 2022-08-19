import { useEffect, useState, useRef } from "react";
import "./Hero.scss";
import Slide from "./Slide";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      console.log(index);
      if (index == 4) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);
    return () => clearInterval(slider);
  }, [index]);

  // };
  return (
    <div
      id="hero"
      onClick={(e) => {
        console.log(e.target);
        // if (e.target.id == "r1") {
        //   setIndex(0);
        // }
      }}
    >
      {(index === 0 || index === 4) && (
        <input
          type="radio"
          className="radio"
          id="r1"
          name="radio"
          defaultChecked={true}
        />
      )}
      {index === 1 && (
        <input
          type="radio"
          className="radio"
          id="r2"
          // checked={setIndex(2)}
          name="radio"
          defaultChecked={true}
        />
      )}
      {index === 2 && (
        <input
          type="radio"
          className="radio"
          id="r3"
          name="radio"
          // checked={setIndex(3)}
          defaultChecked={true}
        />
      )}
      {index === 3 && (
        <input
          type="radio"
          className="radio"
          id="r4"
          name="radio"
          // checked={setIndex(4)}
          defaultChecked={true}
        />
      )}
      {/* slider start */}
      <div className="slider ">
        <div className="slide-item first">
          <Slide />
        </div>
        <div className="slide-item">
          <Slide />
        </div>
        <div className="slide-item">
          <Slide />
        </div>
        <div className="slide-item">
          <Slide />
        </div>
      </div>
      {/* slider ends */}
      <div className="radio-buttons">
        <label htmlFor="r1"></label>
        <label htmlFor="r2"></label>
        <label htmlFor="r3"></label>
        <label htmlFor="r4"></label>
      </div>
      <div className="buttons">
        <div className="left-btn" style={{ backgroundColor: "blueviolet" }}>
          <b>Previous</b>
        </div>

        <div className="right-btn" style={{ backgroundColor: "violet" }}>
          <b>Next</b>
        </div>
      </div>
    </div>
  );
};

export default Hero;
