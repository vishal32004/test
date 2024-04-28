import Tabs from "../components/Tabs";
import NavigationWidget from "../components/NavigationWidget";
import SectionHeader from "../components/Section-Header";
import Section from "../components/Section";
import OurCause from "../components/sections/Our-Cause";
import Header from "../components/headers/Header";
import Footer from "../components/Footer";
import { homePageData } from "../lib/data";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="home-section position-relative">
        <div className="container-fluid custom-container">
          <div className="text-header">
            <h1>
              HELP CREATE A GREENER AND <br /> HEALTHIER PLANET FOR ALL
            </h1>
          </div>
          <Tabs />
          <NavigationWidget />
        </div>
      </section>
      <Section className="bg-grey">
        <div className="row">
          <div className="col-6">
            <div className="text-start">
              <SectionHeader
                customclassName={"section-2"}
                para={"Our Mission"}
                heading={"What we do"}
                description={
                  "WWF-India is working to sustain the natural world for the benefit of people and wildlife. By donating to WWF-India, you can help us conserve the environment, protect our rich biodiversity, and curb illegal wildlife trade."
                }
              />
              <p>
                Your Donation strengthens our myriad field work around the
                country
              </p>
              <div className="key-features">
                {homePageData.content.map((item, index) => (
                  <div key={index} className="our-mission-content">
                    <img src={item.imgSrc} alt={item.heading} />
                    <div className="text-mission">
                      <h2>{item.heading}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      <OurCause />
      <Section className="bg-grey">
        <SectionHeader
          customClass={"section-4 text-start"}
          para={"Our Impact"}
          heading={"What you have helped us acheive"}
          description={
            "As the world's leading conservation organization, we work in nearly 100 countries to tackle the most critical issues at the intersection of nature, people, and climate."
          }
        />
        <div className="row">
          <div className="col-6">
            <iframe
              src="https://www.youtube.com/embed/UmFjsPCBt64?si=Y6W6EpcZScUQFhJm"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col">
            <div className="impact-points">
              {homePageData.impactContent.map((el, index) => (
                <div key={index} className="impact-list">
                  <img src="images/bullet-arrow.png" alt="" />
                  <p>{el}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeader
          customClass="across-country"
          heading="Across The Country"
          description="As the world's leading conservation organization, we work in nearly 100 countries to tackle the most critical issues at the intersection of nature,people,and climate"
        />
        <div className="row">
          <div className="col-md-7"></div>
          <div className="col-md-5">
            {homePageData.countryData.map((el, index) => (
              <div className="across-card" key={index}>
                <img src={el.imgUrl} alt="" />
                <div className="main-across-content">
                  <h4>{el.title}</h4>
                  <p>{el.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section className="bg-grey">
        <div className="row">
          <div className="col-md-6 first-column">
            <SectionHeader
              customClass={"faq-section text-start"}
              para={"Frequently Asked Question"}
              heading={"Everything You Need To Know"}
            />
            <div className="accordion accordion-flush" id="fag-accordion">
              {homePageData.accordionContent.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse-${index}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse-${index}`}
                    >
                      <span>{item.title}</span>
                      <i className="fa-plus fa-solid"></i>
                      <i className="fas fa-minus"></i>
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse-${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#fag-accordion"
                  >
                    <div className="accordion-body">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <form action="" className="ask-form">
              <input type="text" placeholder="Ask a question" />
            </form>
          </div>
          <div className="col-md-6">
            <img
              src="images/Everything You Need To Know.png"
              alt=""
              className="h-100"
            />
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeader para={"Proud Supporters"} heading={"Donor Wall"} />
        <div className="row donor-row">
          <div className="col-md-6 first-donor-column">
            <div className="card big-card">
              <div className="card-header position-relative">
                <img src="images/_WW1195099 7.png" alt="" className="w-100" />
                <img src="images/1.png" alt="" className="user-image" />
              </div>
              <div className="card-body">
                <img src="images/quote.png" alt="" />
                <p className="comment">
                  WWF-India has been working tirelessly to conserve India's
                  wildlife. I am grateful to be a part of their journey and hope
                  the team will scale up their excellent work.
                </p>
                <div className="d-flex w-100 justify-content-between">
                  <span></span>
                  <p className="user-name">-Atharv Saxena</p>
                  <img src="images/quote-1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="card small-card">
              <div className="card-header position-relative">
                <img src="images/_WW1195099 7.png" alt="" className="w-100" />
                <img
                  src="images/testimonial-icon.png"
                  alt=""
                  className="user-image"
                />
              </div>
              <div className="card-body">
                <img src="images/quote.png" alt="" />
                <p className="comment">
                  WWF-India has been working tirelessly to conserve India's
                  wildlife. I am grateful to be a part of their journey and hope
                  the team will scale up their excellent work.
                </p>
                <div className="d-flex w-100 justify-content-between">
                  <span></span>
                  <p className="user-name">-Atharv Saxena</p>
                  <img src="images/quote-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 second-column">
            <div className="card small-card">
              <div className="card-header position-relative">
                <img src="images/_WW1195099 7.png" alt="" className="w-100" />
                <img
                  src="images/testimonial-icon.png"
                  alt=""
                  className="user-image"
                />
              </div>
              <div className="card-body">
                <img src="images/quote.png" alt="" />
                <p className="comment">
                  WWF-India has been working tirelessly to conserve India's
                  wildlife. I am grateful to be a part of their journey and hope
                  the team will scale up their excellent work.
                </p>
                <div className="d-flex w-100 justify-content-between">
                  <span></span>
                  <p className="user-name">-Atharv Saxena</p>
                  <img src="images/quote-1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="card big-card">
              <div className="card-header position-relative">
                <img src="images/_WW1195099 7.png" alt="" className="w-100" />
                <img src="images/2.png" alt="" className="user-image" />
              </div>
              <div className="card-body">
                <img src="images/quote.png" alt="" />
                <p className="comment">
                  WWF-India has been working tirelessly to conserve India's
                  wildlife. I am grateful to be a part of their journey and hope
                  the team will scale up their excellent work.
                </p>
                <div className="d-flex w-100 justify-content-between">
                  <span></span>
                  <p className="user-name">-Atharv Saxena</p>
                  <img src="images/quote-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeader
          customclassName="News-media"
          heading="News & Media"
          description="As the world's leading conservation organization, we work in nearly 100 countries to tackle the most critical issues at the intersection of nature,people,and climate"
        />
        <div className="row news-and-media">
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <img src="images/news-1.png" alt="" />
              </div>
              <div className="card-body">
                <div className="text-content">
                  <h1>Reducing Footprint</h1>
                  <p>
                    As the world's leading conservation organization, we work in
                    nearly 100 countries to tackle the most critical issues at
                    the intersection of nature, people, and climate.
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <a href="#">
                    Read More <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <img src="images/Reducing Footprint-1.png" alt="" />
              </div>
              <div className="card-body">
                <div className="text-content">
                  <h1>Reducing Footprint</h1>
                  <p>
                    As the world's leading conservation organization, we work in
                    ...
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <a href="#">
                    Read More <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <img src="images/Reducing Footprint-2.png" alt="" />
              </div>
              <div className="card-body">
                <div className="text-content">
                  <h1>Reducing Footprint</h1>
                  <p>
                    As the world's leading conservation organization, we work in
                    ...
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <a href="#">
                    Read More <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
