import OneTimeForm from "./forms/OnetimeForm";

export default function Tabs() {
  return (
    <div id="formSection" className="carousel slide">
      <div className="main-form">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#formSection"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            One Time
          </button>
          <button
            type="button"
            data-bs-target="#formSection"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            Regular
          </button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <OneTimeForm />
          </div>
          <div className="carousel-item">
            <OneTimeForm />
          </div>
        </div>
      </div>
    </div>
  );
}
