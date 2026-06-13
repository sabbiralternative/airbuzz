import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../../api";
import { Link, useLocation } from "react-router-dom";
import AppPopup from "./AppPopUp";
import { Fragment, useEffect, useState } from "react";
import {
  setClosePopUpForForever,
  setShowAPKModal,
  setShowAppPopUp,
} from "../../../redux/features/global/globalSlice";
import Error from "../../modals/Error/Error";
import Notification from "./Notification";
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";
import BuildVersion from "../../modals/BuildVersion/BuildVersion";
import Unauthorized from "./Unauthorized";
import Authorized from "./Authorized";
import { latestEvent } from "../../../static/latest-event";

const Header = () => {
  const stored_build_version = localStorage.getItem("build_version");
  const [showBuildVersion, setShowBuildVersion] = useState(false);
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { showAppPopUp, windowWidth, closePopupForForever, showAPKModal } =
    useSelector((state) => state?.global);

  useEffect(() => {
    const apk_modal_shown = sessionStorage.getItem("apk_modal_shown");
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    dispatch(setClosePopUpForForever(closePopupForForever ? true : false));
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      sessionStorage.setItem("apk_modal_shown", true);
      localStorage.setItem("closePopupForForever", true);
      dispatch(setClosePopUpForForever(true));
      localStorage.removeItem("installPromptExpiryTime");
    } else {
      if (!apk_modal_shown) {
        dispatch(setShowAPKModal(true));
      }
      if (!closePopupForForever) {
        const expiryTime = localStorage.getItem("installPromptExpiryTime");
        const currentTime = new Date().getTime();

        if ((!expiryTime || currentTime > expiryTime) && Settings.apk_link) {
          localStorage.removeItem("installPromptExpiryTime");

          dispatch(setShowAppPopUp(true));
        }
      }
    }
  }, [
    dispatch,
    windowWidth,
    showAppPopUp,
    location?.state?.pathname,
    location.pathname,
  ]);

  useEffect(() => {
    const newVersion = Settings?.build_version;
    if (!stored_build_version) {
      if (newVersion) {
        localStorage.setItem("build_version", newVersion);
      }
    }
    if (stored_build_version && newVersion) {
      const parseVersion = JSON.parse(stored_build_version);
      if (newVersion > parseVersion) {
        setShowBuildVersion(true);
      }
    }
  }, [stored_build_version]);

  if (Settings.app_only && !closePopupForForever) {
    return <Error />;
  }

  return (
    <Fragment>
      <Notification />
      {Settings.apk_link && showAppPopUp && windowWidth < 1040 && <AppPopup />}
      {Settings.apk_link && showAPKModal && (
        <DownloadAPK setShowAPKModal={setShowAPKModal} />
      )}
      {showBuildVersion && !showAPKModal && (
        <BuildVersion
          build_version={Settings?.build_version}
          setShowBuildVersion={setShowBuildVersion}
        />
      )}
      <div>
        <div className="topHeader mobile-hide" id="scrollheadr">
          <div className="container-fluid pr-0">
            <div className="row">
              <div className="col-6">
                <div className="headgameNav">
                  <ul>
                    {latestEvent?.map((item) => {
                      return (
                        <li key={item.eventName}>
                          <Link to={item.pathname}>
                            <span className="gmIcon blink-animate">
                              <img src="/assets/cricket.svg" />
                            </span>
                            <span className="gmText">{item.eventName}</span>
                          </Link>
                        </li>
                      );
                    })}
                    <li>
                      <a>
                        <span className="gmIcon blink-animate">
                          <img src="/assets/Welcome156.png" />
                        </span>
                        <span className="gmText">Penalty Shootout</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="gmIcon blink-animate">
                          <img src="/assets/Welcome733.png" />
                        </span>
                        <span className="gmText">Coin Toss</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="gmIcon blink-animate">
                          <img src="/assets/Welcome530.png" />
                        </span>
                        <span className="gmText">Horse Racing</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="gmIcon blink-animate">
                          <img src="/assets/Welcome113.png" />
                        </span>
                        <span className="gmText">Ball by Ball</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="gmIcon blink-animate">
                          <img src="/assets/Welcome767.png" />
                        </span>
                        <span className="gmText">P Badosa v A Sasnovich</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {!token && <Unauthorized />}
              {token && <Authorized />}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
