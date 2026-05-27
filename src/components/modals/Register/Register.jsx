import { useEffect, useRef, useState } from "react";
import { useLogo } from "../../../context/ApiProvider";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  useGetOtpMutation,
  useRegisterMutation,
} from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import {
  setShowBanner,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";

const Register = () => {
  const affnook_token = localStorage.getItem("affnook_token");
  const ref = useRef();
  const referralCode = localStorage.getItem("referralCode");
  const { logo } = useLogo();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [getOTP] = useGetOtpMutation();
  const [handleRegister] = useRegisterMutation();
  const { register, handleSubmit } = useForm();
  const [timer, setTimer] = useState(null);
  const [order, setOrder] = useState({
    orderId: null,
    otpMethod: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [mobile, setMobile] = useState("");

  const closeModal = () => {
    dispatch(setShowRegisterModal(false));
  };

  useCloseModalClickOutside(ref, () => dispatch(setShowRegisterModal(false)));

  const handleOTP = async () => {
    const res = await getOTP({ mobile }).unwrap();
    if (res?.success) {
      setTimer(60);
      setOrder({
        orderId: res?.result?.orderId,
        otpMethod: "sms",
      });
      toast.success(res?.result?.message);
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };

  const onSubmit = async (data) => {
    const registerData = {
      username: "",
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      mobile: mobile,
      otp: data?.otp,
      isOtpAvailable: Settings.otp,
      referralCode: referralCode || data?.referralCode,
      orderId: order.orderId,
      otpMethod: order.otpMethod,
      affnook_token: affnook_token || null,
    };

    const result = await handleRegister(registerData).unwrap();

    if (result.success) {
      if (window?.fbq) {
        window.fbq("track", "CompleteRegistration", {
          content_name: "User Signup",
          status: "success",
        });
      }
      localStorage.removeItem("referralCode");
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const memberId = result?.result?.memberId;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;
      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("bonusToken", bonusToken);
      localStorage.setItem("token", token);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        dispatch(setShowRegisterModal(false));
        toast.success("Register successful");
      }
    } else {
      toast.error(result?.error?.description);
    }
  };

  const handleMobileNo = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
    }
  };

  useEffect(() => {
    let interval = null;
    if (timer) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) return prevTimer - 1;
          clearInterval(interval);
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);
  return (
    <div
      aria-labelledby="admin-add-user"
      className="modal fade show"
      id="player-signup"
      role="dialog"
      style={{ paddingRight: "5px", display: "block" }}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content loginModal" ref={ref}>
          <div className="row p-2 m-0">
            <div className="col-6 pl-0 d-flex align-items-center">
              <div className="bonusimg">
                <img src="/assets/loginweb.jpg" />
              </div>
            </div>
            <div className="col-6 vrt-center pr-0">
              <div className="modal-header">
                <div className="loginLogo mb-0">
                  <img src={logo} />
                </div>

                <button
                  onClick={closeModal}
                  aria-hidden="true"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                >
                  {" "}
                  Close <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="ng-untouched ng-pristine ng-invalid"
                >
                  <div className="row m-0">
                    <div className="col-12 pl-0 pr-0">
                      <div className="form-group relative">
                        <input
                          onChange={(e) => handleMobileNo(e)}
                          value={mobile}
                          autoComplete="off"
                          className="form-control ng-untouched ng-pristine ng-invalid"
                          type="text"
                          placeholder="Phone no."
                          maxLength={10}
                        />
                        {timer > 0 ? (
                          <button
                            className=" absolute text-white top-0 right-0 px-4  py-3 bg-red-500 rounded-md"
                            type="button"
                          >
                            Retry in {timer}
                          </button>
                        ) : (
                          <button
                            onClick={handleOTP}
                            disabled={Settings.otp && mobile?.length < 10}
                            className=" absolute text-white top-0 right-0 px-4  py-3 bg-red-500 rounded-md cursor-pointer z-50"
                            type="button"
                          >
                            Get OTP
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="col-12 p-0">
                      <div className="form-group">
                        <input
                          {...register("otp", { required: true })}
                          className="form-control ng-untouched ng-pristine ng-invalid"
                          id="usernames"
                          type="text"
                          placeholder="Enter OTP"
                        />
                      </div>
                    </div>
                    <div className="col-12 p-0">
                      <div className="form-group relative">
                        <input
                          {...register("password", { required: true })}
                          type={showPassword ? "text" : "password"}
                          autoComplete="off"
                          className="form-control ng-untouched ng-pristine ng-invalid"
                          placeholder="Password"
                        />
                        <span className="absolute top-5 right-3 text-white">
                          {showPassword ? (
                            <IoEye onClick={() => setShowPassword(false)} />
                          ) : (
                            <IoMdEyeOff onClick={() => setShowPassword(true)} />
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="col-12 p-0">
                      <div className="form-group relative">
                        <input
                          {...register("password", { required: true })}
                          type={showConfirmPassword ? "text" : "password"}
                          autoComplete="off"
                          className="form-control ng-untouched ng-pristine ng-invalid"
                          placeholder="Password"
                        />
                        <span className="absolute top-5 right-3 text-white">
                          {showConfirmPassword ? (
                            <IoEye
                              onClick={() => setShowConfirmPassword(false)}
                            />
                          ) : (
                            <IoMdEyeOff onClick={() => setShowPassword(true)} />
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="col-12 p-0">
                      <div className="form-group relative">
                        <input
                          type="text"
                          readOnly={referralCode}
                          {...register("referralCode")}
                          autoComplete="off"
                          className="form-control ng-untouched ng-pristine ng-invalid"
                          defaultValue={referralCode}
                          placeholder="Enter referral code(Optional)"
                        />
                      </div>
                    </div>

                    <div className="col-12 p-0 text-center">
                      <p className="ptext">
                        By clicking the Sign up button, you confirm that you
                        have attained the age of majority in your country of
                        residence and accept the Terms of Airbuzz.{" "}
                      </p>
                      <div className="loginbtn mt-2 mb-0">
                        <button type="submit" className="btn-lg btn btn-light">
                          Sign Up
                        </button>
                      </div>

                      <div className="whatsappCol">
                        <span className="or-text">OR</span>
                        <a
                          className="whatsappBtn"
                          target="_blank"
                          title="whatsapp"
                          href="https://wa.me/+917290886245?text=Hi, I want to signup on Airbuzz."
                        >
                          <i className="fa fa-whatsapp" />
                          <span>WHATSAPP FOR YOUR ID</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
