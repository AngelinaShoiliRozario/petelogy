import "./Navbar.scss";
const Navbar = () => {
  return (
    <>
      <nav className="#nav">
        <input type="checkbox" name="menu" id="menu" />

        <div className="left">
          <div className="logo">
            <img src="images/logo.png" alt="" />
            <h1>Petelogy</h1>
          </div>
        </div>

        <label className="menu-icon" htmlFor="menu">
          <img src="images/menu.png" alt="" />
        </label>

        <div htmlFor="menu" className="right">
          <ul>
            <a>Home</a>
            <a>Service</a>
            <a>Pet's Gallery</a>
            <a>Clinic</a>
            <a>Contact us</a>
            <a>Buy Now</a>
            <a>
              <img src="images/search-icon.png" alt="" />
            </a>
          </ul>
          <div className="phone">Cell +01836442</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
