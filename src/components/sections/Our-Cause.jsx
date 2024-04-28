import SectionHeader from "../Section-Header";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Section from "../Section";
import { Link } from "react-router-dom";

export default function OurCause() {
  const sliderContent = [
    {
      imgUrl: "images/For a Living Planet.png",
      heading: "For a Living PLanet",
      description: "Help and create a grenner and healthier planet for all",
    },
    {
      imgUrl: "images/Restore Our Treasured Mangroves.png",
      heading: "For a Living PLanet",
      description: "Help and create a grenner and healthier planet for all",
    },
    {
      imgUrl: "images/Individual Ask/Protect Our Tigers.png",
      heading: "For a Living PLanet",
      description: "Help and create a grenner and healthier planet for all",
    },
    {
      imgUrl: "images/Preserve Our Precious Wetlands.png",
      heading: "For a Living PLanet",
      description: "Help and create a grenner and healthier planet for all",
    },
  ];
  return (
    <Section>
      <SectionHeader
        customClass={"section-3 text-start"}
        para={"Our Leading Cause"}
        heading={"Support a cause"}
        description={
          "As the world's leading conservation organization, we work in nearly 100 countries to tackle the most critical issues at the intersection of nature, people, and climate."
        }
      />
      <div className="slider-container">
        <OwlCarousel items={4} className="owl-theme" loop nav margin={8}>
          {sliderContent.map((item, index) => (
            <div key={index}>
              <Link to="/InsidePage">
                <div className="card">
                  <div className="card-header">
                    <img src={item.imgUrl} alt={item.heading} />
                  </div>
                  <div className="card-body">
                    <h3>{item.heading}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </Section>
  );
}
