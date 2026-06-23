import { useSelector } from "react-redux";
import useBalance from "../../../hooks/balance";
import Dropdown from "./Dropdown";
import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useLanguage } from "../../../context/LanguageProvider";
import Language from "../../modals/Language";
import images from "../../../assets/images";
import { Settings } from "../../../api";

const Authorized = () => {
  const { language } = useLanguage();
  const [showLanguage, setShowLanguage] = useState(false);
  const ref = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  const { data } = useBalance();
  const { user } = useSelector((state) => state.auth);
  useCloseModalClickOutside(ref, () => {
    setShowDropdown(false);
  });
  return (
    <div className="col-6 headInfo">
      <div className="searchIcon">
        <span className="searchSvg">
          <svg
            id="Layer_2"
            viewBox="0 0 59.68 59.32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_1-2">
              <path d="M22.3,0c.97,0,1.95,0,2.92,0,.41.04.83.07,1.24.12,1.97.22,3.89.68,5.75,1.39,3.59,1.37,6.68,3.48,9.25,6.34,2.45,2.73,4.19,5.86,5.2,9.38.68,2.4.98,4.84.89,7.33-.03.86-.09,1.71-.22,2.55-.56,3.83-1.96,7.34-4.22,10.49-.26.37-.31.32.05.68,5.37,5.37,9.3,8.93,14.66,14.3.31.31.62.62.92.93.41.42.69.92.83,1.49.04.16.06.33.09.5v.72s-.03.1-.03.14c-.11,1.22-1.15,2.55-2.67,2.86-.12.02-.23.07-.34.1h-.72c-.06-.02-.11-.04-.17-.05-.87-.15-1.55-.6-2.17-1.22-3.59-3.61-5.76-5.41-9.37-9.01-1.99-1.99-3.98-3.98-5.97-5.96-.25-.25-.25-.25-.54-.04-.69.51-1.41.96-2.15,1.39-3.36,1.92-6.98,2.93-10.84,3.11-1.21.05-2.42,0-3.63-.14-2.1-.24-4.12-.75-6.08-1.52-2.97-1.17-5.59-2.89-7.87-5.12-1.59-1.55-2.93-3.29-4.03-5.22-1.61-2.85-2.61-5.89-2.97-9.15-.04-.34-.01-.7-.15-1.03v-3.22c.07-.14.09-.28.1-.43.05-.69.14-1.38.27-2.07,1.04-5.63,3.73-10.33,8.09-14.04C12.19,2.42,16.52.61,21.39.09,21.69.06,22,.08,22.3,0ZM23.76,40.66c8.96.06,16.68-7.08,16.94-16.45.26-9.42-7.21-17.35-16.87-17.38-9.39-.03-16.72,7.41-16.95,16.46-.25,9.66,7.53,17.38,16.88,17.36Z" />
            </g>
          </svg>
        </span>
      </div>

      <span className="badge badge-secondary expBalBtn">
        {" "}
        EXP <span>{data?.deductedExposure}</span>
      </span>

      <span className="badge badge-secondary avlBalBtn">
        <svg
          id="Layer_2"
          viewBox="0 0 25.44 26.32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_1-2">
            <path d="M11.63,26.31c-3.32,0-6.63,0-9.95,0-1.36,0-1.6-.25-1.63-1.66C-.04,19.68.02,14.71.01,9.74c0-.29.02-.59.05-.88.05-.54.34-.87.86-.98.17-.04.35-.05.52-.05,6.81,0,13.61,0,20.42,0,.21,0,.42.01.62.07.47.14.75.46.76,1.06.03,1.32.01,2.63.02,3.95,0,.22-.12.3-.31.3-.37,0-.75.02-1.12,0-1.08-.07-2.16.01-3.25,0-1.64-.02-2.33.93-2.4,2.38-.05,1.05-.04,2.11,0,3.17.05,1.34.94,2.19,2.24,2.21,1.46.02,2.91,0,4.37,0,.45,0,.46.01.46.48,0,1.18,0,2.36,0,3.54,0,.93-.41,1.34-1.32,1.33-3.34,0-6.67,0-10.01,0-.1,0-.2,0-.3,0Z" />
            <path d="M21.18,19.87c-.94,0-1.89,0-2.83,0-.97,0-1.38-.4-1.39-1.37-.01-.98-.01-1.96,0-2.93.01-.96.36-1.34,1.32-1.35,1.95-.02,3.89-.02,5.84,0,.9,0,1.32.47,1.32,1.38,0,.93,0,1.86,0,2.8,0,.12,0,.25-.03.37-.11.77-.47,1.1-1.25,1.1-.99.01-1.98,0-2.97,0ZM19.56,15.84c-.7,0-1.22.51-1.23,1.19,0,.67.56,1.25,1.23,1.25.64,0,1.21-.59,1.21-1.24,0-.68-.53-1.2-1.22-1.2Z" />
            <path d="M2.48,5.87c-.07,0-.15.02-.16-.08-.01-.09.08-.13.14-.17.48-.28.96-.56,1.45-.84C6.43,3.32,8.96,1.87,11.49.41c.24-.14.48-.27.74-.35.46-.15.85-.02,1.13.35.59.8,1.03,1.69,1.51,2.55.16.29-.09.32-.28.36-1.4.3-2.81.59-4.21.89-2.5.53-4.99,1.05-7.49,1.58-.13.03-.27.05-.4.08Z" />
            <path d="M4.64,6.6c.07-.15.21-.13.32-.16,3.85-.82,7.7-1.63,11.56-2.44,1.22-.26,1.62,0,1.92,1.2.09.37.17.75.27,1.13.08.29-.04.38-.3.37-.07,0-.14,0-.2,0-4.37,0-8.74,0-13.11,0-.15,0-.32.06-.44-.09Z" />
          </g>
        </svg>{" "}
        {data?.availBalance}
      </span>
      <div className="notifiIcon">
        <div className="notificationCol d8-notification">
          <a
            aria-expanded="false"
            aria-haspopup="true"
            className="bellIcon"
            data-toggle="dropdown"
            id="dropdownMenuButton"
          >
            <i aria-hidden="true" className="fa fa-bell" />
          </a>
          <div aria-labelledby="dropdownMenuButton" className="dropdown-menu">
            <h3>Notifications</h3>
            <ul></ul>
            <button className="viewAll">View All Notifications</button>
          </div>
        </div>
      </div>

      <div ref={ref}>
        {" "}
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className="proName"
          id="profileMenu"
          profile=""
        >
          <span className="uName">{user}</span>
          <svg
            className="usericon"
            viewBox="0 0 101 101"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M50.5 0C22.6533 0 0 22.6533 0 50.5C0 78.3467 22.6533 101 50.5 101C78.3467 101 101 78.3467 101 50.5C101 22.6533 78.3467 0 50.5 0ZM50.5 14.2547C61.2113 14.2547 69.921 22.9644 69.921 33.6757C69.921 44.387 61.2113 53.0967 50.5 53.0967C39.7887 53.0967 31.079 44.387 31.079 33.6757C31.079 22.9644 39.7887 14.2547 50.5 14.2547ZM78.5631 81.8901C76.7779 83.0802 74.3706 82.5933 73.1804 80.8081C68.1223 73.1939 59.6425 68.6497 50.5135 68.6497C40.8436 68.6497 31.8093 73.8566 26.954 82.2552C26.2372 83.4995 24.9254 84.1892 23.5864 84.1892C22.9237 84.1892 22.2611 84.0269 21.639 83.6618C19.7862 82.5933 19.1505 80.213 20.2189 78.3467C26.4536 67.5678 38.0576 60.8732 50.5 60.8732C62.2392 60.8732 73.1263 66.7157 79.6316 76.5074C80.8217 78.2926 80.3348 80.6999 78.5496 81.8901H78.5631Z" />
            <path d="M50.4999 45.3337C56.9385 45.3337 62.1579 40.1142 62.1579 33.6757C62.1579 27.2371 56.9385 22.0177 50.4999 22.0177C44.0614 22.0177 38.8419 27.2371 38.8419 33.6757C38.8419 40.1142 44.0614 45.3337 50.4999 45.3337Z" />
          </svg>
        </div>
        <Dropdown
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      </div>
      <div
        className="btn btn-sm btn-outline-light"
        style={{
          position: "relative",
          padding: "1px 4px",
          background: "transparent",
          marginLeft: "10px",
        }}
      >
        {Settings.language && (
          <button onClick={() => setShowLanguage((prev) => !prev)}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "end",
                background: "transparent",
                border: "none",
              }}
            >
              <img
                style={{
                  height: "20px",
                  width: "20px",
                }}
                src={images.globe}
                alt=""
              />
              <b
                style={{
                  margin: "0px",
                  fontSize: "10px",
                  textTransform: "capitalize",
                  color: "white",
                }}
              >
                {language || "EN"}
              </b>
            </div>
          </button>
        )}
        {showLanguage && <Language setShowLanguage={setShowLanguage} />}
      </div>
    </div>
  );
};

export default Authorized;
