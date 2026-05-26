
import { useDispatch } from 'react-redux';
import { setShowLoginModal } from '../../../redux/features/global/globalSlice';

const Unauthorized = () => {
    const dispatch = useDispatch();
    return (
       <div className="col-6 headInfo">
                <div className="langHeader logout-lng">
                  <select className="form-control select-arrow">
                    <option value="English">English</option>
                    <option value="Hindi">हिन्दी</option>
                    <option value="Tamil">தமிழ்</option>
                    <option value="Telugu">తెలుగు</option>
                    <option value="Kannada">ಕನ್ನಡ</option>
                    <option value="Marathi">मराठी</option>
                    <option value="Gujarati">ગુજરાતી</option>
                    <option value="Bengali">বাংলা</option>
                    <option value="Nepali">नेपाली</option>
                  </select>
                </div>
                <div className="notifiIcon" />
                <div className="loginCol">
                  <button
                    onClick={() => dispatch(setShowLoginModal(true))}
                    className="btn btn-sm btn-outline-light"
                  >
                    LOGIN
                  </button>
                  <button className="btn btn-sm btn-dark">Signup</button>
                </div>
            
              </div>
    );
};

export default Unauthorized;