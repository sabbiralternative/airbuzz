import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <div className="bannerWrapper pb-2 pr-5" style={{ overflow: "hidden" }}>
        <div className="swiper swiper-initialized swiper-horizontal bannerSwiper swiper-backface-hidden">
          <div
            className="swiper-wrapper"
            style={{
              transitionDuration: "0ms",
              transform: "translate3d(-10080px, 0px, 0px)",
              transitionDelay: "0ms",
            }}
          >
            <div
              className="swiper-slide swiper-slide-next"
              data-swiper-slide-index={5}
              style={{ width: "1260px" }}
            >
              <img
                className="bannerImg"
                loading="lazy"
                alt="Banner"
                src="/assets/339.jpg"
              />
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={6}
              style={{ width: "1260px" }}
            >
              <img
                className="bannerImg"
                loading="lazy"
                alt="Banner"
                src="/assets/463.png"
              />
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={7}
              style={{ width: "1260px" }}
            >
              <img
                className="bannerImg"
                loading="lazy"
                alt="Banner"
                src="/assets/469.png"
              />
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={8}
              style={{ width: "1260px" }}
            >
              <img
                className="bannerImg"
                loading="lazy"
                alt="Banner"
                src="/assets/457.png"
              />
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={0}
              style={{ width: "1260px" }}
            >
              <img
                className="bannerImg"
                loading="lazy"
                alt="Banner"
                src="/assets/38.png"
              />
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={1}
              style={{ width: "1260px" }}
            >
              <img
                className="bannerImg"
                loading="lazy"
                alt="Banner"
                src="/assets/211.png"
              />
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={2}
              style={{ width: "1260px" }}
            >
              <img
                className="bannerImg"
                loading="lazy"
                alt="Banner"
                src="/assets/851.png"
              />
            </div>
            <div
              className="swiper-slide swiper-slide-prev"
              data-swiper-slide-index={3}
              style={{ width: "1260px" }}
            >
              <img
                className="bannerImg"
                loading="lazy"
                alt="Banner"
                src="/assets/476.png"
              />
            </div>
            <div
              className="swiper-slide swiper-slide-active"
              data-swiper-slide-index={4}
              style={{ width: "1260px" }}
            >
              <img
                className="bannerImg"
                loading="lazy"
                alt="Banner"
                src="/assets/348.png"
              />
            </div>
          </div>
        </div>
        <div className="custom-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
          <span className="swiper-pagination-bullet" />
          <span className="swiper-pagination-bullet" />
          <span className="swiper-pagination-bullet" />
          <span className="swiper-pagination-bullet" />
          <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
          <span className="swiper-pagination-bullet" />
          <span className="swiper-pagination-bullet" />
          <span className="swiper-pagination-bullet" />
          <span className="swiper-pagination-bullet" />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row game-carousel justify-content-center carouselAera mt-3">
          <div className="col-9 col-lg-12 d-flex align-items-center">
            <h2 className="secTitle">
              Trending
              <svg viewBox="0 0 14.01 14.77" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                            .cls-1 {\n                              fill: #fecb4e;\n                            }\n\n                            .cls-2 {\n                              fill: #ffd473;\n                            }\n\n                            .cls-3 {\n                              fill: #f19020;\n                            }\n\n                            .cls-4 {\n                              fill: #f9ddb9;\n                            }\n                          ",
                    }}
                  />
                </defs>
                <g data-name="Layer 2" id="Layer_2">
                  <g data-name="Layer 1" id="Layer_1-2">
                    <path
                      className="cls-1"
                      d="M6.31,14.77a.88.88,0,0,0-.39-.08A6.92,6.92,0,0,1,2.31,13a1.54,1.54,0,0,1-.26-.25A4.3,4.3,0,0,1,2.2,11,4.92,4.92,0,0,1,3.29,9c.06-.07.12-.19.22-.16s.05.16.06.24a2.46,2.46,0,0,0,.32,1,.93.93,0,0,0,.87.41A2,2,0,0,0,6.65,8.67a4.1,4.1,0,0,0-.19-1.74.14.14,0,0,1,0-.06s-.05-.1,0-.15.11,0,.16,0A3.12,3.12,0,0,1,8.82,9.24c.06.37.09.74.13,1.11a1.12,1.12,0,0,0,.29.71,1.08,1.08,0,0,0,1.53,0,1.49,1.49,0,0,0,.48-1V10c0-.05,0-.1.05-.12s.08,0,.1.09a4.22,4.22,0,0,1,.35.82A5.47,5.47,0,0,1,12,12.18a2,2,0,0,1,0,.54,6.43,6.43,0,0,1-1.4,1.09,6.81,6.81,0,0,1-2.72.92c-.06,0-.12,0-.16,0H7.44a.19.19,0,0,0-.15,0H6.71a.25.25,0,0,0-.17,0Z"
                    />
                    <path
                      className="cls-2"
                      d="M6.54,14.77a.14.14,0,0,1,.17,0Z"
                    />
                    <path
                      className="cls-2"
                      d="M7.29,14.77a.11.11,0,0,1,.15,0Z"
                    />
                    <path
                      className="cls-3"
                      d="M12,12.72s0-.07,0-.11a4.66,4.66,0,0,0-.21-1.78,4.25,4.25,0,0,0-.42-1,2,2,0,0,1-.16.76,1.24,1.24,0,0,1-1.79.6,1.16,1.16,0,0,1-.44-.88,7.29,7.29,0,0,0-.28-1.67A3,3,0,0,0,7.37,7.12a3.82,3.82,0,0,0-.94-.41c.06.19.11.36.15.54a3.05,3.05,0,0,1,0,1.89,2,2,0,0,1-1.72,1.35c-.68.07-1-.29-1.23-1a3.2,3.2,0,0,1-.1-.71A2.7,2.7,0,0,0,3,9.35a4.75,4.75,0,0,0-.92,2.18,3.37,3.37,0,0,0-.05,1.05.14.14,0,0,1,0,.14A6.63,6.63,0,0,1,.22,9.49,6.87,6.87,0,0,1,1.56,3.37l.05-.07h0c-.06.27-.12.54-.16.81a4,4,0,0,0,.05,1.46,2.64,2.64,0,0,0,.1.3A1.18,1.18,0,0,0,3,6.65,1.26,1.26,0,0,0,4.11,5.38a2.36,2.36,0,0,0-.17-.87,3.37,3.37,0,0,1,.13-2.73A2.52,2.52,0,0,1,4.89.85c0,.12,0,.23,0,.35A2.38,2.38,0,0,0,5.29,3a1.67,1.67,0,0,0,2.36.34A1.91,1.91,0,0,0,8.31,2,3.79,3.79,0,0,0,7.92.22L7.82,0s0,0,0,0A5.9,5.9,0,0,1,9.92,1.67a3.91,3.91,0,0,1,.74,2.07,8.51,8.51,0,0,1-.22,2.31,3.63,3.63,0,0,0-.08,1.23,1.14,1.14,0,0,0,1.38,1,1.65,1.65,0,0,0,1-.65,3.82,3.82,0,0,0,.73-1.82l0-.29s0-.11,0-.12A6.71,6.71,0,0,1,14,7.89a6.89,6.89,0,0,1-2,4.76l-.08.07"
                    />
                    <path
                      className="cls-4"
                      d="M13.6,5.42s0,.09,0,.12a.17.17,0,0,1,0-.14s0,0,0,0"
                    />
                  </g>
                </g>
              </svg>
            </h2>
          </div>
        </div>
        <div className="caninoRow">
          <div className="game-carousel casinoList">
            <div className="gameBox" style={{ width: "12%" }}>
              <div className="imgWarp">
                <img loading="lazy" src="/assets/982.jpeg" />
              </div>
              <h6 className="gameName">Penalty Shootout</h6>
            </div>
            <div className="gameBox" style={{ width: "12%" }}>
              <div className="imgWarp">
                <img loading="lazy" src="/assets/976.png" />
              </div>
              <h6 className="gameName">Zhandu</h6>
            </div>
            <div className="gameBox" style={{ width: "12%" }}>
              <div className="imgWarp">
                <img loading="lazy" src="/assets/947.jpg" />
              </div>
              <h6 className="gameName">Chicken Dash 10000</h6>
            </div>
            <div className="gameBox" style={{ width: "12%" }}>
              <div className="imgWarp">
                <img loading="lazy" src="/assets/382.png" />
              </div>
              <h6 className="gameName">Frog Dash</h6>
            </div>
            <div className="gameBox" style={{ width: "12%" }}>
              <div className="imgWarp">
                <img loading="lazy" src="/assets/870.png" />
              </div>
              <h6 className="gameName">Mega Wheel</h6>
            </div>
            <div className="gameBox" style={{ width: "12%" }}>
              <div className="imgWarp">
                <img loading="lazy" src="/assets/12.png" />
              </div>
              <h6 className="gameName">Coin Toss</h6>
            </div>
            <div className="gameBox" style={{ width: "12%" }}>
              <div className="imgWarp">
                <img loading="lazy" src="/assets/687.png" />
              </div>
              <h6 className="gameName">7 Coin Toss</h6>
            </div>
          </div>
        </div>
        <div className="mobile-hide">
          <div className="marketoddRow">
            <div className="container-fluid">
              <div className="row justify-content-center carouselAera">
                <div className="col-9 d-flex align-items-center">
                  <h2 className="secTitle mb-0">
                    Live Now <span className="iconLive" />
                  </h2>
                </div>
                <div className="col-3 arrowCol">
                  <div className="swiper-button-prev active swiper-button-disabled">
                    <svg
                      className="swiper-navigation-icon"
                      width={11}
                      height={20}
                      viewBox="0 0 11 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="swiper-button-next active">
                    <svg
                      className="swiper-navigation-icon"
                      width={11}
                      height={20}
                      viewBox="0 0 11 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper swiper-initialized swiper-horizontal marketSwiper swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide swiper-slide-active marketList"
                  style={{ width: "409.333px", marginRight: "22px" }}
                >
                  <div className="iconRow">
                    <span className="iconLive">
                      <svg
                        id="Layer_2"
                        viewBox="0 0 67.96 33.08"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Layer_1-2">
                          <path d="M0,18.62C.26,11.96,2.45,6.32,6.77,1.57c1.3-1.43,2.83-2.28,4.59-.76,1.79,1.55,1.89,3.31.31,5.13-5.83,6.67-6.6,13.94-2.49,21.73,1.13,2.15.76,3.8-1.31,4.95-2.23,1.24-3.45-.19-4.47-1.92-2.25-3.8-3.1-7.99-3.4-12.07ZM61.18,1.57c-1.28-1.41-2.83-2.3-4.6-.77-1.79,1.55-1.89,3.31-.31,5.13,5.83,6.67,6.6,13.94,2.5,21.73-1.13,2.14-.77,3.8,1.3,4.96,2.22,1.24,3.45-.18,4.47-1.91,2.24-3.8,3.11-7.99,3.41-12.24-.32-6.47-2.45-12.14-6.78-16.89ZM12.71,24.17c.72,1.65,1.85,2.94,3.84,2.23,1.86-.67,2.03-2.3,1.42-3.9-1.32-3.49-.88-6.68,1.21-9.73,1.07-1.57.78-3.04-.8-4.04-1.53-.97-2.86-.24-3.82,1.03-1.93,2.56-3,5.46-2.99,8.7-.01,1.98.35,3.9,1.13,5.71ZM53.31,9.66c-.98-1.26-2.34-1.91-3.84-.87-1.41.97-1.78,2.38-.77,3.82,2.25,3.24,2.57,6.61,1.19,10.28-.53,1.39-.15,2.8,1.36,3.45,1.64.7,2.86-.07,3.65-1.51,1.11-2.01,1.46-4.22,1.48-6.5-.03-3.24-1.1-6.14-3.07-8.67ZM33.93,8.65c-4.86,0-8.79,3.94-8.79,8.79s3.94,8.79,8.79,8.79,8.79-3.94,8.79-8.79-3.94-8.79-8.79-8.79Z" />
                        </g>
                      </svg>
                      <span>CSA Four-Day Series Division One 2025-26</span>
                    </span>
                    <span className="sportIcon cricket">
                      <img src="/assets/cricket.svg" />
                    </span>
                  </div>
                  <div className="oddBox">
                    <div className="marketNameBox">
                      <span className="eName">1. Warriors</span>
                      <span className="eName">2. Lions</span>
                    </div>
                    <span className="winText">Bookmaker 0%</span>
                    <div className="marketOdds">
                      <button className="btn">
                        <span className="noText">1</span>
                        <span className="oddText">1.03</span>
                      </button>
                      <button className="btn">
                        <span className="noText">2</span>
                        <span className="oddText">26</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-next marketList"
                  style={{ width: "409.333px", marginRight: "22px" }}
                >
                  <div className="iconRow">
                    <span className="iconLive">
                      <svg
                        id="Layer_2"
                        viewBox="0 0 67.96 33.08"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Layer_1-2">
                          <path d="M0,18.62C.26,11.96,2.45,6.32,6.77,1.57c1.3-1.43,2.83-2.28,4.59-.76,1.79,1.55,1.89,3.31.31,5.13-5.83,6.67-6.6,13.94-2.49,21.73,1.13,2.15.76,3.8-1.31,4.95-2.23,1.24-3.45-.19-4.47-1.92-2.25-3.8-3.1-7.99-3.4-12.07ZM61.18,1.57c-1.28-1.41-2.83-2.3-4.6-.77-1.79,1.55-1.89,3.31-.31,5.13,5.83,6.67,6.6,13.94,2.5,21.73-1.13,2.14-.77,3.8,1.3,4.96,2.22,1.24,3.45-.18,4.47-1.91,2.24-3.8,3.11-7.99,3.41-12.24-.32-6.47-2.45-12.14-6.78-16.89ZM12.71,24.17c.72,1.65,1.85,2.94,3.84,2.23,1.86-.67,2.03-2.3,1.42-3.9-1.32-3.49-.88-6.68,1.21-9.73,1.07-1.57.78-3.04-.8-4.04-1.53-.97-2.86-.24-3.82,1.03-1.93,2.56-3,5.46-2.99,8.7-.01,1.98.35,3.9,1.13,5.71ZM53.31,9.66c-.98-1.26-2.34-1.91-3.84-.87-1.41.97-1.78,2.38-.77,3.82,2.25,3.24,2.57,6.61,1.19,10.28-.53,1.39-.15,2.8,1.36,3.45,1.64.7,2.86-.07,3.65-1.51,1.11-2.01,1.46-4.22,1.48-6.5-.03-3.24-1.1-6.14-3.07-8.67ZM33.93,8.65c-4.86,0-8.79,3.94-8.79,8.79s3.94,8.79,8.79,8.79,8.79-3.94,8.79-8.79-3.94-8.79-8.79-8.79Z" />
                        </g>
                      </svg>
                      <span>Jagran Cricket League</span>
                    </span>
                    <span className="sportIcon cricket">
                      <img alt="Icons" src="/assets/cricket.svg" />
                    </span>
                  </div>
                  <div className="oddBox">
                    <div className="marketNameBox">
                      <span className="eName">1. Jdca Jhansi</span>
                      <span className="eName">2. Nagpur</span>
                    </div>
                    <span className="winText">Winner (incl. super over)</span>
                    <div className="marketOdds">
                      <button className="btn">
                        <span className="noText">1</span>
                        <span className="oddText">-</span>
                      </button>
                      <button className="btn">
                        <span className="noText">2</span>
                        <span className="oddText">-</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide marketList"
                  style={{ width: "409.333px", marginRight: "22px" }}
                >
                  <div className="iconRow">
                    <span className="iconLive">
                      <svg
                        id="Layer_2"
                        viewBox="0 0 67.96 33.08"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Layer_1-2">
                          <path d="M0,18.62C.26,11.96,2.45,6.32,6.77,1.57c1.3-1.43,2.83-2.28,4.59-.76,1.79,1.55,1.89,3.31.31,5.13-5.83,6.67-6.6,13.94-2.49,21.73,1.13,2.15.76,3.8-1.31,4.95-2.23,1.24-3.45-.19-4.47-1.92-2.25-3.8-3.1-7.99-3.4-12.07ZM61.18,1.57c-1.28-1.41-2.83-2.3-4.6-.77-1.79,1.55-1.89,3.31-.31,5.13,5.83,6.67,6.6,13.94,2.5,21.73-1.13,2.14-.77,3.8,1.3,4.96,2.22,1.24,3.45-.18,4.47-1.91,2.24-3.8,3.11-7.99,3.41-12.24-.32-6.47-2.45-12.14-6.78-16.89ZM12.71,24.17c.72,1.65,1.85,2.94,3.84,2.23,1.86-.67,2.03-2.3,1.42-3.9-1.32-3.49-.88-6.68,1.21-9.73,1.07-1.57.78-3.04-.8-4.04-1.53-.97-2.86-.24-3.82,1.03-1.93,2.56-3,5.46-2.99,8.7-.01,1.98.35,3.9,1.13,5.71ZM53.31,9.66c-.98-1.26-2.34-1.91-3.84-.87-1.41.97-1.78,2.38-.77,3.82,2.25,3.24,2.57,6.61,1.19,10.28-.53,1.39-.15,2.8,1.36,3.45,1.64.7,2.86-.07,3.65-1.51,1.11-2.01,1.46-4.22,1.48-6.5-.03-3.24-1.1-6.14-3.07-8.67ZM33.93,8.65c-4.86,0-8.79,3.94-8.79,8.79s3.94,8.79,8.79,8.79,8.79-3.94,8.79-8.79-3.94-8.79-8.79-8.79Z" />
                        </g>
                      </svg>
                      <span>Premier League SRL</span>
                    </span>
                    <span className="sportIcon cricket">
                      <img alt="Icons" src="/assets/cricket.svg" />
                    </span>
                  </div>
                  <div className="oddBox">
                    <div className="marketNameBox">
                      <span className="eName">1. Royal Challengers ..</span>
                      <span className="eName">2. Chennai Super King..</span>
                    </div>
                    <span className="winText">Winner (incl. super over)</span>
                    <div className="marketOdds">
                      <button className="btn">
                        <span className="noText">1</span>
                        <span className="oddText">-</span>
                      </button>
                      <button className="btn">
                        <span className="noText">2</span>
                        <span className="oddText">-</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide marketList"
                  style={{ width: "409.333px", marginRight: "22px" }}
                >
                  <div className="iconRow">
                    <span className="iconLive">
                      <span>Caribbean Premier League SRL</span>
                    </span>
                    <span className="sportIcon cricket">
                      <img alt="Icons" src="/assets/cricket.svg" />
                    </span>
                  </div>
                  <div className="oddBox">
                    <div className="marketNameBox">
                      <span className="eName">1. Trinbago Knight Ri..</span>
                      <span className="eName">2. Antigua And Barbud..</span>
                    </div>
                    <span className="winText">Winner (incl. super over)</span>
                    <div className="marketOdds">
                      <button className="btn">
                        <span className="noText">1</span>
                        <span className="oddText">-</span>
                      </button>
                      <button className="btn">
                        <span className="noText">2</span>
                        <span className="oddText">-</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide marketList"
                  style={{ width: "409.333px", marginRight: "22px" }}
                >
                  <div className="iconRow">
                    <span className="iconLive">
                      <svg
                        id="Layer_2"
                        viewBox="0 0 67.96 33.08"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Layer_1-2">
                          <path d="M0,18.62C.26,11.96,2.45,6.32,6.77,1.57c1.3-1.43,2.83-2.28,4.59-.76,1.79,1.55,1.89,3.31.31,5.13-5.83,6.67-6.6,13.94-2.49,21.73,1.13,2.15.76,3.8-1.31,4.95-2.23,1.24-3.45-.19-4.47-1.92-2.25-3.8-3.1-7.99-3.4-12.07ZM61.18,1.57c-1.28-1.41-2.83-2.3-4.6-.77-1.79,1.55-1.89,3.31-.31,5.13,5.83,6.67,6.6,13.94,2.5,21.73-1.13,2.14-.77,3.8,1.3,4.96,2.22,1.24,3.45-.18,4.47-1.91,2.24-3.8,3.11-7.99,3.41-12.24-.32-6.47-2.45-12.14-6.78-16.89ZM12.71,24.17c.72,1.65,1.85,2.94,3.84,2.23,1.86-.67,2.03-2.3,1.42-3.9-1.32-3.49-.88-6.68,1.21-9.73,1.07-1.57.78-3.04-.8-4.04-1.53-.97-2.86-.24-3.82,1.03-1.93,2.56-3,5.46-2.99,8.7-.01,1.98.35,3.9,1.13,5.71ZM53.31,9.66c-.98-1.26-2.34-1.91-3.84-.87-1.41.97-1.78,2.38-.77,3.82,2.25,3.24,2.57,6.61,1.19,10.28-.53,1.39-.15,2.8,1.36,3.45,1.64.7,2.86-.07,3.65-1.51,1.11-2.01,1.46-4.22,1.48-6.5-.03-3.24-1.1-6.14-3.07-8.67ZM33.93,8.65c-4.86,0-8.79,3.94-8.79,8.79s3.94,8.79,8.79,8.79,8.79-3.94,8.79-8.79-3.94-8.79-8.79-8.79Z" />
                        </g>
                      </svg>
                      <span>Indonesian Super League</span>
                    </span>
                    <span className="sportIcon soccer">
                      <img alt="Icons" src="/assets/soccer.svg" />
                    </span>
                  </div>
                  <div className="oddBox">
                    <div className="marketNameBox">
                      <span className="eName">1. Arema Cronus</span>
                      <span className="eName">2. Persijap Jepara</span>
                    </div>
                    <span className="winText">Match_odds</span>
                    <div className="marketOdds">
                      <button className="btn">
                        <span className="noText">1</span>
                        <span className="oddText">1.95</span>
                      </button>
                      <button className="btn">
                        <span className="noText">2</span>
                        <span className="oddText">5.3</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide marketList"
                  style={{ width: "409.333px", marginRight: "22px" }}
                >
                  <div className="iconRow">
                    <span className="iconLive">
                      <span>LaLiga SRL</span>
                    </span>
                    <span className="sportIcon soccer">
                      <img alt="Icons" src="/assets/soccer.svg" />
                    </span>
                  </div>
                  <div className="oddBox">
                    <div className="marketNameBox">
                      <span className="eName">1. RCD Mallorca SRL</span>
                      <span className="eName">2. Sevilla FC SRL</span>
                    </div>
                    <span className="winText">1x2</span>
                    <div className="marketOdds">
                      <button className="btn">
                        <span className="noText">1</span>
                        <span className="oddText">-</span>
                      </button>
                      <button className="btn">
                        <span className="noText">2</span>
                        <span className="oddText">-</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide marketList"
                  style={{ width: "409.333px", marginRight: "22px" }}
                >
                  <div className="iconRow">
                    <span className="iconLive">
                      <span>Serie A SRL</span>
                    </span>
                    <span className="sportIcon soccer">
                      <img alt="Icons" src="/assets/soccer.svg" />
                    </span>
                  </div>
                  <div className="oddBox">
                    <div className="marketNameBox">
                      <span className="eName">1. Udinese Calcio SRL..</span>
                      <span className="eName">2. AS Roma SRL</span>
                    </div>
                    <span className="winText">1x2</span>
                    <div className="marketOdds">
                      <button className="btn">
                        <span className="noText">1</span>
                        <span className="oddText">-</span>
                      </button>
                      <button className="btn">
                        <span className="noText">2</span>
                        <span className="oddText">-</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="game-carousel slider-1">
          <div className="row justify-content-center carouselAera py-4">
            <div className="col-9 d-flex align-items-center">
              <h2 className="secTitle mb-0">Roulette</h2>
            </div>
            <div className="col-3 arrowCol">
              <div className="swiper-button-prev active swiper-button-disabled">
                <svg
                  className="swiper-navigation-icon"
                  width={11}
                  height={20}
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="swiper-button-next active">
                <svg
                  className="swiper-navigation-icon"
                  width={11}
                  height={20}
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="swiper swiper-initialized swiper-horizontal gameSwiper">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide swiper-slide-active gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/916667.jpg" />
                <h6 className="gameName">Las Vegas Roulette</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide swiper-slide-next gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/140966.jpg" />
                <h6 className="gameName">Galactic VIP Roulette</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/245689.jpg" />
                <h6 className="gameName">Blaze Roulette</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/32024.jpg" />
                <h6 className="gameName">European Portomaso Auto Roulette</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/877375.jpg" />
                <h6 className="gameName">European Portomaso Auto Roulette 2</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/33482.jpg" />
                <h6 className="gameName">American Auto Roulette</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/878891.png" />
                <h6 className="gameName">Oracle Twister Roulette</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/287020.jpg" />
                <h6 className="gameName">American Portomaso Auto Roulette 2</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/139548.jpg" />
                <h6 className="gameName">Portomaso Roulette</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/722499.jpg" />
                <h6 className="gameName">Majestic Roulette</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox moreImg"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <button className="viewMore">View More Games</button>
                <img
                  className="provider-logo"
                  src="/assets/Imperial-Dragon-Tiger.jpg"
                />
              </div>
            </div>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="game-carousel tGmaeRow">
          <div className="row justify-content-center carouselAera py-4">
            <div className="col-9 d-flex align-items-center">
              <h2 className="secTitle mb-0">Teen Patti</h2>
            </div>
            <div className="col-3 arrowCol">
              <div className="swiper-button-prev active swiper-button-disabled">
                <svg
                  className="swiper-navigation-icon"
                  width={11}
                  height={20}
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="swiper-button-next active">
                <svg
                  className="swiper-navigation-icon"
                  width={11}
                  height={20}
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="swiper swiper-initialized swiper-horizontal gameSwiper">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide swiper-slide-active gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/kingmaker_KM-TABLE-046" />
                <h6 className="gameName">Teen Patti</h6>
                <img className="provider-logo" src="/assets/KINGMAKER.png" />
              </div>
              <div
                className="swiper-slide swiper-slide-next gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/creedroomz_550027" />
                <h6 className="gameName">TeenPatti A</h6>
                <img className="provider-logo" src="/assets/Creedroomz.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/evolution3_evo_teenpatti" />
                <h6 className="gameName">Teen Patti</h6>
                <img className="provider-logo" src="/assets/Evolution3.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/aura_56767_1" />
                <h6 className="gameName">Live Teenpatti</h6>
                <img className="provider-logo" src="/assets/Aura.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/aura_56768_1" />
                <h6 className="gameName">Teenpatti T20</h6>
                <img className="provider-logo" src="/assets/Aura.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/aura_56769_3" />
                <h6 className="gameName">Teenpatti T20 (V)</h6>
                <img className="provider-logo" src="/assets/Aura.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/aura_67660_1" />
                <h6 className="gameName">2 Cards Teenpatti</h6>
                <img className="provider-logo" src="/assets/Aura.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/aura_67630_1" />
                <h6 className="gameName">Teenpatti Test</h6>
                <img className="provider-logo" src="/assets/Aura.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/placeholder.jpg" />
                <h6 className="gameName">Teenpatti One Day</h6>
                <img className="provider-logo" src="/assets/MAC_88.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/placeholder.jpg" />
                <h6 className="gameName">Muflis Teenpatti</h6>
                <img className="provider-logo" src="/assets/MAC_88.png" />
              </div>
              <div
                className="swiper-slide gameBox moreImg"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <button className="viewMore">View More Games</button>
                <img
                  className="provider-logo"
                  src="/assets/Imperial-Dragon-Tiger.jpg"
                />
              </div>
            </div>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
        <div className="game-carousel tGmaeRow">
          <div className="row justify-content-center carouselAera py-4">
            <div className="col-9 d-flex align-items-center">
              <h2 className="secTitle mb-0">Dragon Tiger</h2>
            </div>
            <div className="col-3 arrowCol">
              <div className="swiper-button-prev active swiper-button-disabled">
                <svg
                  className="swiper-navigation-icon"
                  width={11}
                  height={20}
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="swiper-button-next active">
                <svg
                  className="swiper-navigation-icon"
                  width={11}
                  height={20}
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="swiper swiper-initialized swiper-horizontal gameSwiper">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide swiper-slide-active gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/kingmaker_KM-TABLE-011" />
                <h6 className="gameName">dragon-tiger2</h6>
                <img className="provider-logo" src="/assets/KINGMAKER.png" />
              </div>
              <div
                className="swiper-slide swiper-slide-next gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/688160.png" />
                <h6 className="gameName">DragonTiger</h6>
                <img className="provider-logo" src="/assets/AE Sexy.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/creedroomz_40003097" />
                <h6 className="gameName">Dragon Tiger A</h6>
                <img className="provider-logo" src="/assets/Creedroomz.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/evolution3_evo_dragontiger" />
                <h6 className="gameName">Dragon Tiger</h6>
                <img className="provider-logo" src="/assets/Evolution3.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/aura_98790_1" />
                <h6 className="gameName">Dragon Tiger</h6>
                <img className="provider-logo" src="/assets/Aura.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/895794.png" />
                <h6 className="gameName">Dragon Tiger Fast</h6>
                <img className="provider-logo" src="/assets/Aura.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/599701.png" />
                <h6 className="gameName">Dragon Tiger</h6>
                <img className="provider-logo" src="/assets/MAC_88.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/211351.png" />
                <h6 className="gameName">6 Player Poker</h6>
                <img className="provider-logo" src="/assets/MAC_88.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/placeholder.jpg" />
                <h6 className="gameName">Dragon Tiger</h6>
                <img className="provider-logo" src="/assets/Superspade.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/placeholder.jpg" />
                <h6 className="gameName">RNG Dragon Tiger 2020</h6>
                <img className="provider-logo" src="/assets/Supernowa.png" />
              </div>
              <div
                className="swiper-slide gameBox moreImg"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <button className="viewMore">View More Games</button>
                <img
                  className="provider-logo"
                  src="/assets/Imperial-Dragon-Tiger.jpg"
                />
              </div>
            </div>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
        <div className="game-carousel tGmaeRow">
          <div className="row justify-content-center carouselAera py-4">
            <div className="col-9 d-flex align-items-center">
              <h2 className="secTitle mb-0">Baccarat</h2>
            </div>
            <div className="col-3 arrowCol">
              <div className="swiper-button-prev active swiper-button-disabled">
                <svg
                  className="swiper-navigation-icon"
                  width={11}
                  height={20}
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="swiper-button-next active">
                <svg
                  className="swiper-navigation-icon"
                  width={11}
                  height={20}
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="swiper swiper-initialized swiper-horizontal gameSwiper">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide swiper-slide-active gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/88745.jpg" />
                <h6 className="gameName">Baccarat Dance</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide swiper-slide-next gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/399649.jpg" />
                <h6 className="gameName">Caribbean Baccarat</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/14570.jpg" />
                <h6 className="gameName">Copa Cabana Baccarat</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/589790.jpg" />
                <h6 className="gameName">Macau Baccarat</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/502998.png" />
                <h6 className="gameName">Baccarat VIP</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/805660.jpg" />
                <h6 className="gameName">Miami Beach Baccarat</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/252090.jpg" />
                <h6 className="gameName">Marina Bay Baccarat</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/761050.jpg" />
                <h6 className="gameName">Singapore Baccarat</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/imageNotAvailable.jpg" />
                <h6 className="gameName">Red Dragon Baccarat</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/imageNotAvailable.jpg" />
                <h6 className="gameName">Dancing Baccarat</h6>
                <img className="provider-logo" src="/assets/Vivo.png" />
              </div>
              <div
                className="swiper-slide gameBox moreImg"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <button className="viewMore">View More Games</button>
                <img
                  className="provider-logo"
                  src="/assets/Imperial-Dragon-Tiger.jpg"
                />
              </div>
            </div>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
        <div className="game-carousel tGmaeRow">
          <div className="row justify-content-center carouselAera py-4">
            <div className="col-9 d-flex align-items-center">
              <h2 className="secTitle mb-0">Poker</h2>
            </div>
            <div className="col-3 arrowCol">
              <div className="swiper-button-prev active swiper-button-disabled">
                <svg
                  className="swiper-navigation-icon"
                  width={11}
                  height={20}
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="swiper-button-next active">
                <svg
                  className="swiper-navigation-icon"
                  width={11}
                  height={20}
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="swiper swiper-initialized swiper-horizontal gameSwiper">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide swiper-slide-active gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/imageNotAvailable(1).jpg" />
                <h6 className="gameName">Crystal Poker</h6>
                <img className="provider-logo" src="/assets/Turbo.png" />
              </div>
              <div
                className="swiper-slide swiper-slide-next gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/imageNotAvailable(1).jpg" />
                <h6 className="gameName">CallBreak</h6>
                <img className="provider-logo" src="/assets/Jili.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/imageNotAvailable(1).jpg" />
                <h6 className="gameName">Pool Rummy</h6>
                <img className="provider-logo" src="/assets/Jili.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/710251.png" />
                <h6 className="gameName">TeenPatti Joker</h6>
                <img className="provider-logo" src="/assets/Jili.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/imageNotAvailable(1).jpg" />
                <h6 className="gameName">CallbreakQuick</h6>
                <img className="provider-logo" src="/assets/Jili.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/imageNotAvailable(1).jpg" />
                <h6 className="gameName">Teenpatti 20-20</h6>
                <img className="provider-logo" src="/assets/Jili.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/imageNotAvailable(1).jpg" />
                <h6 className="gameName">Ludo Quick</h6>
                <img className="provider-logo" src="/assets/Jili.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/imageNotAvailable(1).jpg" />
                <h6 className="gameName">Tongits Go</h6>
                <img className="provider-logo" src="/assets/Jili.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/imageNotAvailable(1).jpg" />
                <h6 className="gameName">Pusoy Go</h6>
                <img className="provider-logo" src="/assets/Jili.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/imageNotAvailable(1).jpg" />
                <h6 className="gameName">Blackjack</h6>
                <img className="provider-logo" src="/assets/Jili.png" />
              </div>
              <div
                className="swiper-slide gameBox moreImg"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <button className="viewMore">View More Games</button>
                <img loading="lazy" src="/assets/710251.png" />
              </div>
            </div>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
        <div className="game-carousel tGmaeRow">
          <div className="row justify-content-center carouselAera py-4">
            <div className="col-9 d-flex align-items-center">
              <h2 className="secTitle mb-0">Arcade Games</h2>
            </div>
            <div className="col-3 arrowCol">
              <div className="swiper-button-prev active swiper-button-disabled swiper-button-lock">
                <svg
                  className="swiper-navigation-icon"
                  width={11}
                  height={20}
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="swiper-button-next active swiper-button-lock swiper-button-disabled">
                <svg
                  className="swiper-navigation-icon"
                  width={11}
                  height={20}
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="swiper swiper-initialized swiper-horizontal gameSwiper swiper-backface-hidden">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide swiper-slide-active gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/aura_70001_8" />
                <h6 className="gameName">Fortune Wheel</h6>
                <img className="provider-logo" src="/assets/Aura.png" />
              </div>
              <div
                className="swiper-slide swiper-slide-next gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/aura_70003_8" />
                <h6 className="gameName">Coin Toss</h6>
                <img className="provider-logo" src="/assets/Aura.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/aura_70004_8" />
                <h6 className="gameName">Limbo</h6>
                <img className="provider-logo" src="/assets/Aura.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/aura_70005_8" />
                <h6 className="gameName">Slot Game</h6>
                <img className="provider-logo" src="/assets/Aura.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/aura_70006_8" />
                <h6 className="gameName">Rock Paper Scissors</h6>
                <img className="provider-logo" src="/assets/Aura.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/aura_70009_8" />
                <h6 className="gameName">Classic Dice</h6>
                <img className="provider-logo" src="/assets/Aura.png" />
              </div>
              <div
                className="swiper-slide gameBox"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <img loading="lazy" src="/assets/aura_70011_8" />
                <h6 className="gameName">Mines</h6>
                <img className="provider-logo" src="/assets/Aura.png" />
              </div>
            </div>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
        <div className="game-carousel tGmaeRow">
          <div className="row justify-content-center carouselAera py-4">
            <div className="col-9 d-flex align-items-center">
              <h2 className="secTitle mb-0">Card Games</h2>
            </div>
            <div className="col-3 arrowCol">
              <div className="swiper-button-prev active swiper-button-disabled">
                <svg
                  className="swiper-navigation-icon"
                  width={11}
                  height={20}
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="swiper-button-next active">
                <svg
                  className="swiper-navigation-icon"
                  width={11}
                  height={20}
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="swiper swiper-initialized swiper-horizontal gameSwiper swiper-backface-hidden">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide swiper-slide-active"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <div className="gameBox">
                  <img title="Rummy" loading="lazy" src="/assets/jili_94" />
                  <h6 className="gameName">Rummy</h6>
                  <img
                    className="provider-logo"
                    loading="lazy"
                    src="/assets/Jili.png"
                  />
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <div className="gameBox">
                  <img
                    title="Andar Bahar"
                    loading="lazy"
                    src="/assets/kingmaker_KM-TABLE-032"
                  />
                  <h6 className="gameName">Andar Bahar</h6>
                  <img
                    className="provider-logo"
                    loading="lazy"
                    src="/assets/KINGMAKER.png"
                  />
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <div className="gameBox">
                  <img
                    title="7 Up 7 Down"
                    loading="lazy"
                    src="/assets/kingmaker_KM-TABLE-028"
                  />
                  <h6 className="gameName">7 Up 7 Down</h6>
                  <img
                    className="provider-logo"
                    loading="lazy"
                    src="/assets/KINGMAKER.png"
                  />
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <div className="gameBox">
                  <img
                    title="Blackjack"
                    loading="lazy"
                    src="/assets/kingmaker_KM-TABLE-038"
                  />
                  <h6 className="gameName">Blackjack</h6>
                  <img
                    className="provider-logo"
                    loading="lazy"
                    src="/assets/KINGMAKER.png"
                  />
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <div className="gameBox">
                  <img
                    title="32 Cards"
                    loading="lazy"
                    src="/assets/kingmaker_KM-TABLE-039"
                  />
                  <h6 className="gameName">32 Cards</h6>
                  <img
                    className="provider-logo"
                    loading="lazy"
                    src="/assets/KINGMAKER.png"
                  />
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <div className="gameBox">
                  <img
                    title="OTT Andar Bahar"
                    loading="lazy"
                    src="/assets/ezugi3_ezg_ottab"
                  />
                  <h6 className="gameName">OTT Andar Bahar</h6>
                  <img
                    className="provider-logo"
                    loading="lazy"
                    src="/assets/Ezugi Gaming.png"
                  />
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <div className="gameBox">
                  <img
                    title="Hi Lo"
                    loading="lazy"
                    src="/assets/spribe_hi-lo"
                  />
                  <h6 className="gameName">Hi Lo</h6>
                  <img
                    className="provider-logo"
                    loading="lazy"
                    src="/assets/Spribe.png"
                  />
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{ width: "162.857px", marginRight: "22px" }}
              >
                <div className="gameBox">
                  <img
                    title="Dream Catcher"
                    loading="lazy"
                    src="/assets/evolution3_evo_livedreamcatcher"
                  />
                  <h6 className="gameName">Dream Catcher</h6>
                  <img
                    className="provider-logo"
                    loading="lazy"
                    src="/assets/Evolution3.png"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="aboutRow">
            <p>
              Airbuzz is operated by Airbuzz Info N.V. a limited liability
              company incorporated under the laws of Curacao with company
              Registration number 25678905 is licensed and regulated by the
              Curacao authority as the regulatory body responsible holding.
            </p>
            <p>
              Players are requested not to contact any untrusted sources for
              Airbuzz.com accounts as this is an online site and they can only
              register independently without any agents. Only deposit through
              the account details generated by the system or provided by our
              official support team.
            </p>
          </div>
          <div className="container-fluid mobile-hide">
            <div className="row justify-content-between">
              <div className="col-2 footLogo">
                <a
                  className="logoCol"
                  href="javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
                >
                  <img
                    alt="..."
                    loading="lazy"
                    src="/assets/multicric-logo-whitelable19.png"
                  />
                </a>
                <h4 className="playBigger">Play Big, Win Bigger.</h4>
              </div>
              <div className="col-9">
                <div className="infoNavRow">
                  <a
                    className="infoLink"
                    href="javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
                  >
                    Sports
                  </a>
                  <a
                    className="infoLink"
                    href="javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
                  >
                    Ace Casino
                  </a>
                  <a
                    className="infoLink"
                    href="javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
                  >
                    Live Casino
                  </a>
                  <a
                    className="infoLink"
                    href="javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
                  >
                    Virtual Sports
                  </a>
                  <a
                    className="infoLink"
                    href="javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
                  >
                    Special Market
                  </a>
                  <a
                    className="infoLink"
                    href="javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
                  >
                    Slots
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="copyrightSec">
            <div className="row justify-content-between">
              <div className="col-12 col-6 d-flex align-items-center">
                <p>Gambling can be addictive. Please play responsibly.</p>
              </div>
              <div className="col-12 col-2 text-right mb-5">
                <p>Copyright © 2019 Airbuzz. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
