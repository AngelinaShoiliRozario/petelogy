import "./Slide.scss";
const Slide = () => {
  return (
    <section className="slide">
      <div className="information">
        {/* title container */}
        <div className="title">
          <h1>Professional</h1>
          <h2>Care Your Pet</h2>
        </div>
        {/* paragraph container */}
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>
        {/* buttons */}
        <div className="buttons">
          <div className="btn___1">Buy Now</div>
          <div className="btn___2">Contact</div>
        </div>
      </div>
      <div className="picture">
        <img src="/images/slider-img.png" alt="ddd" />
      </div>
    </section>
  );
};

export default Slide;
