import { useNavigate } from "react-router-dom";

const EventLinkSlider = ({ eventTypeId }) => {
  const navigate = useNavigate();

  const getActiveClass = (id) => {
    if (id == eventTypeId) {
      return "active";
    }
  };
  return (
    <div className="inPlayFilter">
      <a className="arrow-tabs arrow-left mobile-hide">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 256 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path>
        </svg>
      </a>
      <ul className="nav nav-tabs">
        <li onClick={() => navigate(`/sports?eventTypeId=4`)}>
          <a className={getActiveClass(4)}>
            <span className="inSportsIcon">
              <img alt="CRICKET" src="/assets/cricket.svg" />
            </span>
            <span className="sprotsName">CRICKET</span>
          </a>
        </li>
        <li onClick={() => navigate(`/sports?eventTypeId=1`)}>
          <a className={getActiveClass(1)}>
            <span className="inSportsIcon">
              <img alt="SOCCER" src="/assets/football.svg" />
            </span>
            <span className="sprotsName">SOCCER</span>
          </a>
        </li>
        <li onClick={() => navigate(`/sports?eventTypeId=2`)}>
          <a className={getActiveClass(2)}>
            <span className="inSportsIcon">
              <img alt="TENNIS" src="/assets/tennis.svg" />
            </span>
            <span className="sprotsName">TENNIS</span>
          </a>
        </li>
        <li onClick={() => navigate(`/sports?eventTypeId=5`)}>
          <a className={getActiveClass(5)}>
            <span className="inSportsIcon">
              <img alt="KABADDI" src="/assets/Kabaddi.svg" />
            </span>
            <span className="sprotsName">KABADDI</span>
          </a>
        </li>
        <li>
          <a className>
            <span className="inSportsIcon">
              <img alt="KABADDI" src="/assets/Kabaddi.svg" />
            </span>
            <span className="sprotsName">Horse Racing</span>
          </a>
        </li>
        <li>
          <a className>
            <span className="inSportsIcon">
              <img alt="KABADDI" src="/assets/Kabaddi.svg" />
            </span>
            <span className="sprotsName">Greyhound Racing</span>
          </a>
        </li>
        <li onClick={() => navigate(`/sports?eventTypeId=6`)}>
          <a className={getActiveClass(6)}>
            <span className="inSportsIcon">
              <img alt="KABADDI" src="/assets/Kabaddi.svg" />
            </span>
            <span className="sprotsName">Politics</span>
          </a>
        </li>
      </ul>
      <a className="arrow-tabs arrow-right mobile-hide">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 256 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
        </svg>
      </a>
    </div>
  );
};

export default EventLinkSlider;
