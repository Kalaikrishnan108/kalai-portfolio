import React from "react";
// import "../sass/home.scss";
import { BiSolidDownload } from "react-icons/bi";
import bgimg from "../assets/images/banner-scaled.jpg";
import imganimate from "../assets/images/banner_img_1.png";
import animateimgbg from '../assets/images/banner_shape.png'

function Home() {
  return (
    <div className="main_home  " id="home"> 
      <div className="img-div">
        <img src={bgimg} alt="b-img" />
      </div>
      <div className="home" data-aos="fade-up">
        <div className="container">
          <div className="ft-home-pg  ">
            <div className="ft-content-home row  ">
              <div className="home-content pic-animate col-lg-8">
                <h1>
                  HI,I'M <span> KALAISELVAN !</span>
                </h1>
                <h1 className="front">FRONT-END DEVELOPER</h1>
                <p>
                  I specialize in using HTML, CSS, and JavaScript to build
                  interactive and responsive websites. I have advanced skills in
                  front-end frameworks like React and enjoy leveraging tools
                  such as Webpack and Git for a smooth development workflow. I’m
                  also experienced in creating pixel-perfect designs using CSS
                  frameworks like Bootstrap and Tailwind CSS.
                </p>
                <a href="" download>
                  {" "}
                  Download Cv{" "}
                  <span>
                    <BiSolidDownload />
                  </span>{" "}
                </a>
              </div>
              <div className="data-animate pic-animate col-lg-4"  >
                <img src={imganimate} alt="" />
                <div className="back-img">
                    <img src={animateimgbg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
