import { useDispatch } from "react-redux";
import {
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import { Settings } from "../../../api";
import { useLanguage } from "../../../context/LanguageProvider";
import { useState } from "react";
import images from "../../../assets/images";
import Language from "../../modals/Language";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const Unauthorized = () => {
  const dispatch = useDispatch();
  const { language, valueByLanguage } = useLanguage();
  const [showLanguage, setShowLanguage] = useState(false);
  return (
    <div className="col-6 headInfo">
      <div className="notifiIcon" />
      <div className="loginCol">
        <button
          onClick={() => dispatch(setShowLoginModal(true))}
          className="btn btn-sm btn-outline-light"
        >
          {languageValue(valueByLanguage, LanguageKey.LOGIN)}
        </button>
        <button
          className="btn btn-sm btn-dark"
          onClick={() => dispatch(setShowRegisterModal(true))}
        >
          {languageValue(valueByLanguage, LanguageKey.REGISTER)}
        </button>
        <div
          className="btn btn-sm btn-outline-light"
          style={{
            position: "relative",
            padding: "1px 4px",
            background: "transparent",
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
    </div>
  );
};

export default Unauthorized;
