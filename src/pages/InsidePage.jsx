import Header from '../components/headers/Header'
import InsideBanner from '../components/headers/InsideBanner'
import Section from '../components/Section'
import Tabs from '../components/Tabs'
import SectionHeader from '../components/Section-Header'
import OurCause from '../components/sections/Our-Cause'
import Footer from '../components/Footer'

export default function InsidePage() {
  const questionPoints = [
    { heading: "Why save snow leopards?", count: "510", countPara: "left in Wild", description: "Snowleopards regulates the helth of the himlayas by keeping vermin in check, and himalays give us the fresh water we drink." },
    { heading: "Why WWF-India?", count: "24", countPara: "Conservation Projects", description: "To protect snow leopards, we are working in rugged and high altitude terrains of the Himalayas." },
    { heading: "How can you help?", count: "234", countPara: "Awareness Camps", description: "Snowleopards regulates the helth of the himlayas by keeping vermin in check, and himalays give us the fresh water we drink. " }
  ]

  const threats = [
    { imgUrl: "images/Individual Ask/Habitat Loss.png", text: "Habitat Loss" },
    { imgUrl: "images/Individual Ask/Reactive Killing.png", text: "Reactive Killing" },
    { imgUrl: "images/Individual Ask/Climate Change.png", text: "Climate Change" },
    { imgUrl: "images/Individual Ask/Global Warming.png", text: "Global Warming. " },
    { imgUrl: "images/Individual Ask/Habitat Loss.png", text: "Conducting Surveys and Research" },
    { imgUrl: "images/Individual Ask/Reactive Killing.png", text: "Balancing human-Wildlife Conflict" },
    { imgUrl: "images/Individual Ask/Climate Change.png", text: "Awareness Programmes" },
    { imgUrl: "images/Individual Ask/Global Warming.png", text: "Tracking and Monitoring" }

  ]
  return (
    <div>
      <Header />
      <InsideBanner />
      <Section className='bg-grey inside-first'>
        <div className="row justify-content-between">
          <div className="col-md-6">
            {
              questionPoints.map((el, index) => (
                <div className="question-points" key={index}>
                  <h1>{el.heading}</h1>
                  <div className="bottom-span d-flex align-items-center mt-4">
                    <p className="count flex-grow-1 ">
                      <span>{el.count}</span>
                      <p>{el.countPara}</p>
                    </p>
                    <p className='ps-3'>{el.description}</p>
                  </div>
                </div>
              ))
            }

            <div className="second-section">
              <div className="text-content">
                <h1>Threats to Snow Leopards</h1>
                <p>The following are the major reasons why snow leopard populations is decreasing.</p>
              </div>
              {
                threats.slice(0, 4).map((el, index) => (
                  <div className="threats position-relative" key={index}>
                    <img src={el.imgUrl} alt="" />
                    <span>{el.text}</span>
                  </div>
                ))
              }
              <div className="text-content text-2">
                <h1>How are we mitigating the threats </h1>
                <p>Snowleopards regulates the health of the Himlayas by keeping vermin in check, and himalays give us the fresh water we drink. </p>
              </div>
              <div className="threats position-relative">
                <img src={threats[4].imgUrl} alt="" />
                <span>{threats[4].text}</span>
              </div>

              <div className='d-flex gap-3 align-items-center mt-4'>
                <img src="images/Individual Ask/CONDUCTING SURVEYS AND RESEARCH.png" alt="" />
                <p className='text-secondary'>In the absence of a reliable estimate of snow leopard population in the country, we are using best of science to find out how many snow leopards are there in the wild and where all they are found. It is a challenging task as the high-altitude habitats are rugged and remote with winter temperatures dropping down to -30 degrees.</p>
              </div>


              {
                threats.slice(-3).map((el, index) => (
                  <div className="threats position-relative" key={index}>
                    <img src={el.imgUrl} alt="" />
                    <span>{el.text}</span>
                  </div>
                ))
              }

            </div>
          </div>
          <div className="col-md-5 inside-col">
            <Tabs />
          </div>
        </div>
      </Section>

      <section>
        <img src="images/Individual Ask/video.png" alt="" />
      </section>
      <section className='bg-black py-5 position-relative'>
        <div className="container">
          <SectionHeader customClass='they-need text-white' para='Why save snow leopards?' heading='They need our help' description='The Living Planet Report reveals an average 69% decrease in monitored wildlife populations since 1970. The 2022 LPI analysed almost 32,000 species populations.' />
        </div>
        <img src="images/Individual Ask/graph.png" alt="" />
        <div className="donate-now-sec">
          <p>You have the power to Bend the curve</p>
          <button className='donate-now'>Donate Now</button>
        </div>
      </section>
      <OurCause />


      <section className='mt-5 position-relative'>
        <img src="images/Individual Ask/Get latest updates on our work.png" alt="" />
        <div className='subscribe-container container'>
          <h3>Get latest updates <br />on our work</h3>
          <div className="subscribe">
            <p>Subscribe to our Newsletter</p>
            <button className='donate-now'>Enter your email</button>
          </div>
        </div>

      </section>
      <Footer />
    </div>
  )
}
