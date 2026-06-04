import { useEffect, useRef, useState } from "react";
import { useLogo } from "../../../context/ApiProvider";
import { useDispatch } from "react-redux";
import {
  useForgotPasswordMutation,
  useGetOtpMutation,
} from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import {
  setShowForgotPasswordModal,
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import { Settings } from "../../../api";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";

const ForgotPassword = () => {
  const ref = useRef();
  const { logo } = useLogo();
  const [timer, setTimer] = useState(null);
  const dispatch = useDispatch();
  const [getOTP] = useGetOtpMutation();
  const [handleForgotPassword] = useForgotPasswordMutation();
  const { register, handleSubmit } = useForm();
  const [order, setOrder] = useState({
    orderId: null,
    otpMethod: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [mobile, setMobile] = useState("");

  const closeModal = () => {
    dispatch(setShowForgotPasswordModal(false));
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
    const forgotPasswordData = {
      username: mobile,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      otp: data?.otp,
      isOtpAvailable: Settings.otp,
      orderId: order.orderId,
      otpMethod: order.otpMethod,
    };

    const result = await handleForgotPassword(forgotPasswordData).unwrap();

    if (result.success) {
      toast.success("Password updated successfully");
      closeForgotPasswordModal();
      dispatch(setShowLoginModal(true));
    } else {
      toast.error(result?.error?.loginName?.[0]?.description);
    }
  };

  const handleMobileNo = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
    }
  };
  const closeForgotPasswordModal = () => {
    dispatch(setShowForgotPasswordModal(false));
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
                            className=" absolute text-white top-2 right-0 px-4  py-1 bg-red-500 rounded-md"
                            type="button"
                          >
                            Retry in {timer}
                          </button>
                        ) : (
                          <button
                            onClick={handleOTP}
                            disabled={Settings.otp && mobile?.length < 10}
                            className=" absolute text-white top-2 right-0 px-4  py-1 bg-red-500 rounded-md cursor-pointer z-50"
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
                          placeholder="Confirm Password"
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

                    <div className="col-12 p-0 text-center">
                      <div className="loginbtn mt-2 mb-0">
                        <button type="submit" className="btn-lg btn btn-light">
                          Change Password
                        </button>
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

export default ForgotPassword;
