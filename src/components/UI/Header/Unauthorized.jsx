import { useDispatch } from "react-redux";
import {
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";

const Unauthorized = () => {
  const dispatch = useDispatch();
  return (
    <div className="col-6 headInfo">
      <div className="notifiIcon" />
      <div className="loginCol">
        <button
          onClick={() => dispatch(setShowLoginModal(true))}
          className="btn btn-sm btn-outline-light"
        >
          LOGIN
        </button>
        <button
          className="btn btn-sm btn-dark"
          onClick={() => dispatch(setShowRegisterModal(true))}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
