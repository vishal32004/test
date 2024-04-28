
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid custom-container">
          <a className="navbar-brand" href="#">
            <img src="images/logo.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  OUR MISSION
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  OUR CAUSES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  OUR IMPACT
                </a>
              </li>
            </ul>
            <div>
              <button className="contact-us-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
