import { useEffect } from "react";
import { About2 } from "../src/components/About";
import Collection from "../src/components/Collection";
import Contact from "../src/components/Contact";
import Faq from "../src/components/Faq";
import News from "../src/components/News";
import RoadMapSlider from "../src/components/RoadMapStep";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import { heroSlider2 } from "../src/utilits";
const Index3 = () => {
  useEffect(() => {
    return () => {
      heroSlider2();
    };
  }, []);
  return (
    <Layout pageTitle={"Sports Redefined"}>
      {/* Home Section #2 */}
      <section id="home2" style={{height:"100vh"}}>
        {/* BG */}
        <div className="video_bg">
          <video src="/logo.mp4" autoPlay loop muted />
        </div>
        {/* !BG */}
        <div className="container">
          {/* <h3
            className="fn__maintitle big"
            data-text="SOL GRID BOT"
            data-align="center"
          >
            SOL GRID BOT
          </h3> */}
          {/* <img src="/Concept3.jpg" width={100} /> */}
          <div className="fn_cs_desc" style={{backgroundColor:"rgba(0,0,0,0.8)", padding: "20px"}}>
          <p className="job">-At SGB we utilize AI in order to bet and trade with an advantage. 
            <br/><br/>
            -Our winning technology  predicts winning sports bets and Solana token alpha for your benefit. 
            <br/><br/>
            -We strive to offer the best tools to assist in automated trading, market making, and betting. 
            
          </p>
          </div>
        </div>
        {/* Card Slider */}
        {/* <div
          className="frenify_cards_gallery"
          data-initial-width={540}
          data-ratio="0.925"
        >
          <ul>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/10.jpg" />
                  <img src="http://localhost:3000/nft/IMG_4573.png" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/11.jpg" />
                  <img src="http://localhost:3000/nft/IMG_4451.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/1.jpg" />
                  <img src="http://localhost:3000/nft/IMG_4741.png" alt="" />
                </div>
              </div>
            </li>
          </ul>
        </div> */}
        {/* !Card Slider */}
      </section>
      {/* !Home Section #2 */}
      {/* Section About #2 */}
      <About2 />
      {/* !Section About #2 */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Collection Section */}
      {/* <Collection /> */}
      {/* !Collection Section */}
      {/* Section Divider */}
      {/* <SectionDivider /> */}
      {/* !Section Divider */}
      {/* Section FAQ */}
      {/* <Faq /> */}
      {/* !Section FAQ */}
      {/* Section Divider */}
      {/* <SectionDivider /> */}
      {/* !Section Divider */}
      {/* Section RoadMap */}
      <RoadMapSlider />
      {/* !Section RoadMap */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section News */}
      {/* <News /> */}
      {/* !Section News */}
      {/* Section Divider */}
      {/* <SectionDivider /> */}
      {/* !Section Divider */}
      {/* Section */}
      {/* <Contact /> */}
    </Layout>
  );
};
export default Index3;
