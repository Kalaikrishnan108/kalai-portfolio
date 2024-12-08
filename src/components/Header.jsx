import React, { useEffect, useRef, useState } from "react";
import "@fontsource/poppins";
import logo from "../assets/images/Kalaiselvan Logo.svg";
import { FaChevronDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

function Header() {
  const [data, setData] = useState(true);

  const [hum, setHum] = useState(false);
  const [menu, setMenu] = useState(false);
  
  function onMenu() {
    setMenu(true);
  }

  function comMenu() {
    setMenu(false);
  }
 
  function useFixed() {
    setHum(true);
  }

  function unuseFixed() {
    setHum(false);
  }

  function toggleClass() {
    setTimeout(() => {
      setData(true);
      setTimeout(() => {
        setData(false);
      }, 2000);
    }, 2000);
  }
  useEffect(() => {
    toggleClass();
  }, []);

  return (
    <>
      <section>
        <div className="animate" id={data ? "active" : "disactive"}>
          <div className="wrapper">
            <div className="data_loading load1">L</div>
            <div className="data_loading load2">o</div>
            <div className="data_loading load3">a</div>
            <div className="data_loading load4">d</div>
            <div className="data_loading load5">i</div>
            <div className="data_loading load6">n</div>
            <div className="data_loading load7">g</div>
          </div>
        </div>
      </section>
      <section className={data ? "disactive" : "active"} id="data-add">
        <div className="mainheader">
          <div className="container">
            <div className="header">
              <div className="logo">
                <a href="">
                  <img src={logo} alt="" />
                  <h1>KALAI</h1>
                </a>
              </div>
              <div className="service">
                <ul>
                  <li>
                    <div className="head-hide">
                      <a href="#home" className="text-hover-animation">
                        <div className="text-menu">
                          <div className="text-line ">H</div>
                          <div className="text-line">O</div>
                          <div className="text-line">M</div>
                          <div className="text-line">E</div>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#about" className="text-hover-animation">
                      <div className="text-menu ">
                        <div className="text-line">A</div>
                        <div className="text-line">B</div>
                        <div className="text-line">O</div>
                        <div className="text-line">U</div>
                        <div className="text-line">T</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#project" className="text-hover-animation">
                      <div className="text-menu ">
                        <div className="text-line">P</div>
                        <div className="text-line">R</div>
                        <div className="text-line">o</div>
                        <div className="text-line">j</div>
                        <div className="text-line">e</div>
                        <div className="text-line">C</div>
                        <div className="text-line">t</div>
                        <div className="text-line">s</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="text-hover-animation">
                      <div className="text-menu ">
                        <div className="text-line">S</div>
                        <div className="text-line">k</div>
                        <div className="text-line">i</div>
                        <div className="text-line">l</div>
                        <div className="text-line">l</div>
                        <div className="text-line">s</div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#contact" className="text-hover-animation">
                      <div className="text-menu ">
                        <div className="text-line">C</div>
                        <div className="text-line">O</div>
                        <div className="text-line">N</div>
                        <div className="text-line">T</div>
                        <div className="text-line">A</div>
                        <div className="text-line">C</div>
                        <div className="text-line">T</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="humburger " onClick={() => useFixed()}>
                <span>
                  <IoMenu />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mobile-view-port">
        <div className="mainheader">
          <div className="container">
            <div className="header row">
              <div className="logo col-6">
                <a href="">
                  <img src={logo} alt="" />
                  <h1>KALAI</h1>
                </a>
              </div>

              <div className="humburger col-6 " onClick={() => onMenu()}>
                <span>
                  <span>
                    <IoMenu />
                  </span>
                </span>
              </div>
              <div
                className="service mobile col-12"
                id={menu ? "mobile-active" : "mobile-unactive"}
              >
                <div
                  className="close row justify-content-center align-items-center"
                  onClick={()=>comMenu()}
                >
                  <p className="col">
                    <VscChromeClose />
                  </p>
                </div>
                <ul>
                  <li>
                    <div className="head-hide">
                      <a href="#home" className="text-hover-animation">
                        <div className="text-menu">
                          <div className="text-line ">H</div>
                          <div className="text-line">O</div>
                          <div className="text-line">M</div>
                          <div className="text-line">E</div>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#about" className="text-hover-animation">
                      <div className="text-menu ">
                        <div className="text-line">A</div>
                        <div className="text-line">B</div>
                        <div className="text-line">O</div>
                        <div className="text-line">U</div>
                        <div className="text-line">T</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#project" className="text-hover-animation">
                      <div className="text-menu ">
                        <div className="text-line">P</div>
                        <div className="text-line">R</div>
                        <div className="text-line">o</div>
                        <div className="text-line">j</div>
                        <div className="text-line">e</div>
                        <div className="text-line">C</div>
                        <div className="text-line">t</div>
                        <div className="text-line">s</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="text-hover-animation">
                      <div className="text-menu ">
                        <div className="text-line">S</div>
                        <div className="text-line">k</div>
                        <div className="text-line">i</div>
                        <div className="text-line">l</div>
                        <div className="text-line">l</div>
                        <div className="text-line">s</div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#contact" className="text-hover-animation">
                      <div className="text-menu ">
                        <div className="text-line">C</div>
                        <div className="text-line">O</div>
                        <div className="text-line">N</div>
                        <div className="text-line">T</div>
                        <div className="text-line">A</div>
                        <div className="text-line">C</div>
                        <div className="text-line">T</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="fixed-sec">
        <div className="fixed-width">
          <div className="fixed-section" id={hum ? "fixed-active" : ""}>
            <div className="top-fixed">
              <div className="logo-fixed">
                <div className="img-fixed  ">
                  <img src={logo} alt="logo" /> <h1>KALAI</h1>
                </div>
                <div className="close" onClick={() => unuseFixed()}>
                  <p>
                    <VscChromeClose />
                  </p>
                </div>
              </div>
            </div>
            <div className="ct-fixed">
              <h4>About Us</h4>
              <p>
                We are a dynamic team of passionate front-end developers
                committed to creating visually stunning, responsive, and
                user-centric web experiences.but a truly engaging digital
                experience. Our expertise spans across HTML, CSS, JavaScript,
                and modern front-end frameworks like React,. We believe in
                clean, efficient code and a seamless integration of design and
                functionality.
              </p>
            </div>
            <div className="input-fixed">
              <div className="input-data">
                <h4>Let's Get in Tough !</h4>
                <form>
                  <div className="input">
                    <input type="text" placeholder="name" />
                  </div>
                  <div className="input">
                    <input type="email" placeholder="email" />
                  </div>
                  <div className="text-area">
                    <textarea name="" id="" placeholder="message"></textarea>
                  </div>
                  <button>Send MSG</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
