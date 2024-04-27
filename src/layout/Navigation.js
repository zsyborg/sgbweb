import Link from "next/link";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle } from "../redux/actions/siteSettings";
const Navigation = ({ navigation, navigationToggle }) => {
  const [subMenu, setSubMenu] = useState(null);
  return (
    <Fragment>
      <div
        onClick={() => navigationToggle(false)}
        className={`metaportal_fn_leftnav_closer ${navigation ? "active" : ""}`}
      />
      <div className={`metaportal_fn_leftnav ${navigation ? "active" : ""}`}>
        <a
          href="#"
          className="fn__closer"
          onClick={() => navigationToggle(false)}
        >
          <span />
        </a>
        <div className="navbox">
          <div className="list_holder">
            
          </div>
          <div className="nav_holder">
            {/* For JS */}
            <span className="icon">
              <img src="/svg/down.svg" alt="" className="fn__svg" />
            </span>
            {/* For JS */}
            <ul
              style={{
                transform: `translateX(${subMenu !== null ? "-100" : "0"}%)`,
              }}
            >
              <li>
                <a
                  href="#"
                  
                >
                  <span className="creative_link">
                    Home
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                >
                  <span className="creative_link">
                    About
                   
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                >
                  <span className="creative_link">
                    Whitepaper
                   
                  </span>
                </a>
              </li>
              
            </ul>
          </div>
          <div className="info_holder">
            <div className="copyright">
              <p>
                Designed &amp; Developed by  
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                   &nbsp; PiperShell
                </a>
              </p>
            </div>
            <div className="social_icons">
              <ul>
                <li>
                  <a href="#">
                    <img
                      src="/svg/social/twitter-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});
export default connect(mapStateToProps, { navigationToggle })(Navigation);
