import { useEffect, useRef, useState } from "react";
import { useLogo } from "../../context/ApiProvider";
import { useDispatch } from "react-redux";
import {
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useGetOtpMutation,
} from "../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import {
  setShowForgotPasswordModal,
  setShowLoginModal,
  setShowRegisterModal,
} from "../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import { Settings } from "../../api";
import useCloseModalClickOutside from "../../hooks/closeModal";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { logo } = useLogo();
  const [handleChangePassword] = useChangePasswordMutation();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ password, newPassword, newPasswordConfirm }) => {
    const payload = {
      oldPassword: password,
      password: newPassword,
      passVerify: newPasswordConfirm,
      nonce: crypto.randomUUID(),
    };

    const res = await handleChangePassword(payload).unwrap();
    if (res.success) {
      localStorage.removeItem("changePassword");
      toast.success(res?.result?.message);
      navigate("/");
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };
  return (
    <div className="profileForm">
      <h5 className="titleBar">Change Password </h5>

      <div className="row m-0">
        <div className="col-12">
          <form
            autoComplete="off"
            noValidate
            className="ng-untouched ng-pristine ng-invalid"
          >
            <div className="form-group relative">
              <label className="col-form-label">New Password</label>
              <input
                autoComplete="nope"
                className="form-control ng-untouched ng-pristine ng-invalid"
                required
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter New Password"
                readOnly
              />
              <span className="absolute top-5 right-3 text-black">
                {showNewPassword ? (
                  <IoEye onClick={() => setShowNewPassword(false)} />
                ) : (
                  <IoMdEyeOff onClick={() => setShowNewPassword(true)} />
                )}
              </span>
            </div>
            <div className="form-group relative">
              <label className="col-form-label">Confirm Password</label>
              <br />
              <input
                autoComplete="nope"
                className="form-control ng-untouched ng-pristine ng-invalid"
                required
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                readOnly
              />
              <span className="absolute top-5 right-3 text-white">
                {showConfirmPassword ? (
                  <IoEye onClick={() => setShowConfirmPassword(false)} />
                ) : (
                  <IoMdEyeOff onClick={() => setShowConfirmPassword(true)} />
                )}
              </span>
            </div>
            <div className="form-group">
              <label className="col-form-label">Old Password</label>
              <input
                autoComplete="false"
                className="form-control ng-untouched ng-pristine ng-invalid"
                id="your_password1"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Old Password"
                readOnly
              />
              <span className="absolute top-5 right-3 text-white">
                {showPassword ? (
                  <IoEye onClick={() => setShowPassword(false)} />
                ) : (
                  <IoMdEyeOff onClick={() => setShowPassword(true)} />
                )}
              </span>
            </div>
            <div className="btnRow">
              <button className="btn btn-success" type="button">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
