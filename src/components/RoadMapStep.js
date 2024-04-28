import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
const RoadMapSlider = () => {
  return (
    <section id="roadmap">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="RoadMap"
          data-align="center"
        >
          RoadMap
        </h3>
        <div className="fn_cs_roadmap">
          <div className="step_holder">
            <div className="step_in" />
          </div>
          <div className="slider_holder">
            <Swiper {...roadMapProps} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 01</span>
                    <div className="item_in">
                      <p className="date">January 06, 2024</p>
                      <h3 className="title">Initial Development</h3>
                      <p className="desc">
                        Framework & Technology process begins to take birth.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 02</span>
                    <div className="item_in">
                      <p className="date">March 25th, 2024</p>
                      <h3 className="title">Launch of v1 Solana SPL token A.I. signals</h3>
                      {/* <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 03</span>
                    <div className="item_in">
                      <p className="date">April 04, 2024</p>
                      <h3 className="title">Launch of v1 A.I. Soccer predictive models</h3>
                      {/* <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 04</span>
                    <div className="item_in">
                      <p className="date">April 08, 2024</p>
                      <h3 className="title">Launch of v2 Solana SPL token A.I. signals</h3>
                      {/* <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 05</span>
                    <div className="item_in">
                      <p className="date">April 11, 2024</p>
                      <h3 className="title">Launch of A.I. MLB predictive models</h3>
                      {/* <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 06</span>
                    <div className="item_in">
                      <p className="date">April 25, 2024</p>
                      <h3 className="title"> Launch of v1. A.I. new pairs signals</h3>
                      {/* <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Future Phase</span>
                    <div className="item_in">
                      <p className="date">The Future</p>
                      {/* <h3 className="title">Mini Game Lounch For Community</h3> */}
                      <p className="desc">
                      -Launch of v1 Grid Bot and AFK mode<br/>
                      -NFT mint<br/>
                      -Deployment of Market Making technology<br/>
                      -NFT rental/renewal program<br/>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RoadMapSlider;
