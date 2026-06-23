import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useBalance from "../../../hooks/balance";
import { logout } from "../../../redux/features/auth/authSlice";
import { useLanguage } from "../../../context/LanguageProvider";
import { LanguageKey } from "../../../const";
import { languageValue } from "../../../utils/language";

const Dropdown = ({ showDropdown, setShowDropdown }) => {
  const { valueByLanguage } = useLanguage();
  const dispatch = useDispatch();
  const { data } = useBalance();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleNavigate = (link) => {
    navigate(link);
    setShowDropdown(false);
  };

  return (
    <div
      className={`profileRow scale-up-ver-top ${showDropdown ? "active-box" : ""}`}
    >
      <div className="userName">
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

      <div className="accBtn">
        <button
          className="btn btnDeposit"
          onClick={() => handleNavigate("/deposit")}
        >
          {languageValue(valueByLanguage, LanguageKey.DEPOSIT)}
        </button>
        <button
          className="btn btnWithdrow"
          onClick={() => handleNavigate("/withdraw")}
        >
          {languageValue(valueByLanguage, LanguageKey.WITHDRAW)}
        </button>
      </div>
      <ul className="accountDetail">
        <li>
          {" "}
          Available Balance{" "}
          <span className="numText"> {data?.availBalance}</span>
        </li>

        <li>
          Exposure{" "}
          <span
            className={`numText  ${data?.deductedExposure > 0 ? "positiveValue" : "negativeValue"}`}
          >
            {data?.deductedExposure}
          </span>
        </li>
      </ul>
      <ul className="accountTabs">
        <li onClick={() => handleNavigate("/deposit-withdraw-report")}>
          {" "}
          Deposit Withdraw Report
        </li>

        <li onClick={() => handleNavigate("/betting-profit-loss")}>
          {" "}
          Betting Profit Loss{" "}
        </li>

        <li onClick={() => handleNavigate("/my-bank-details")}>
          {" "}
          {languageValue(valueByLanguage, LanguageKey.MY_BANK_DETAILS)}
        </li>

        <li onClick={() => handleNavigate("/bonus-statement")}>
          {" "}
          {languageValue(valueByLanguage, LanguageKey.BONUS_STATEMENT)}
        </li>

        <li onClick={() => handleNavigate("/affiliate")}> Affiliate </li>

        <li onClick={() => handleNavigate("/promotions")}> Promos & Bonus </li>

        <li
          className="accountsettingtab"
          onClick={() => handleNavigate("/lossback-bonus")}
        >
          Lossback Bonus
        </li>
        <li
          className="accountsettingtab"
          onClick={() => handleNavigate("/app-only-bonus")}
        >
          App Only Bonus
        </li>

        <li onClick={() => dispatch(logout())} className="logoutBtn">
          {languageValue(valueByLanguage, LanguageKey.LOGOUT)}
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
