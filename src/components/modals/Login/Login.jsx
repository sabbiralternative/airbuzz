import { useNavigate } from "react-router-dom";
import { useLogo } from "../../../context/ApiProvider";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { setShowBanner, setShowForgotPasswordModal, setShowLoginModal, setShowRegisterModal } from "../../../redux/features/global/globalSlice";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import { useLoginMutation } from "../../../redux/features/auth/authApi";

const Login = () => {
  const {logo} = useLogo()
   const { closePopupForForever } = useSelector((state) => state.global);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit } = useForm();

  const closeLoginModal = () => {
    dispatch(setShowLoginModal(false));
  };

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
      nonce: crypto.randomUUID(),
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const memberId = result?.result?.memberId;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (result?.result?.changePassword) {
        closeLoginModal();
        localStorage.setItem("changePassword", true);
        navigate("/change-password");
      }
      if (!result?.result?.changePassword && token && user) {
        closeLoginModal();
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  /* handle login demo user */
  const loginWithDemo = async () => {
    /* Random token generator */
    /* Encrypted the post data */
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
      nonce: crypto.randomUUID(),
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);

      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        closeLoginModal();
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const fileUrl = Settings.apk_link;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "site.apk");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  const getWhatsAppId = (link) => {
    window.open(link, "_blank");
  };

  const showRegister = () => {
    closeLoginModal();
    dispatch(setShowRegisterModal(true));
  };
  const showForgotPassword = () => {
    closeLoginModal();
    dispatch(setShowForgotPasswordModal(true));
  };
  return (
    <div>
      <div>
        <div
          aria-labelledby="exampleModalLabel"
          className="modal fade show"
          data-backdrop="static"
          data-keyboard="false"
          id="login"
          role="dialog"
          tabIndex={-1}
          style={{ display: "block", paddingRight: 6 }}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content loginModal">
              <div className="row p-2 m-0">
                <div className="col-6 pl-0">
                  <div className="bonusimg">
                    <img src="/assets/loginweb.jpg" />
                  </div>
                </div>
                <div className="col-6 vrt-center pr-0">
                  <div className="modal-header positino-relative">
                    <button onClick={closeLoginModal}
                      aria-label="Close"
                      className="close"
                      data-dismiss="modal"
                      type="button"
                    >
                      Close <span aria-hidden="true">×</span>
                    </button>

                    <div className="loginLogo">
                      <img src={logo} />
                    </div>
                    <h2 className="welText"> Welcome Back! </h2>
                  </div>
                  <div className="optMsg"></div>
                  <div className="modal-body">
                    <form
                                 onSubmit={handleSubmit(onSubmit)}
                      noValidate=""
                      className="ng-untouched ng-pristine ng-invalid"
                    >
                      <div className="form-group" data-allow-key={1}>
                        <input
                            {...register("username", { required: true })}
                          className="form-control ng-untouched ng-pristine ng-invalid"
                          id="username"
                          type="text"
                          defaultValue=""
                          readOnly=""
                          placeholder="Username"
                        />
                   
                      </div>

                      <div className="form-group">
                        <input
                                   {...register("password", { required: true })}
                          autoComplete="on"
                          className="form-control ng-untouched ng-pristine ng-invalid"
                          defaultValue=""
                          type="password"
                          placeholder="Password"
                        />
                        <span className="toggelPass fa fa-fw fa-eye" />
                 
                        <span>
                          <a className="forgettext" onClick={showForgotPassword}>
                            {" "}
                            Forgot Username/Password?
                          </a>
                        </span>
                      </div>

                      <div className="loginbtn">
                        <button type="submit" className="btn btn-light">
                          LOG IN
                        </button>
                      </div>

                      <div className="loginbtn demeLogin">
                        <button type="button" className="btn btn-outline-light" onClick={loginWithDemo}>
                          Log in With Demo{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
