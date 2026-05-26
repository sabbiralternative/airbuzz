const InPlayTab = ({ setTab, tab }) => {
  return (
    <div className="inPlayTab">
      <ul>
        <li
          onClick={() => setTab("inPlay")}
          className="custom-active-gamesliul"
        >
          <a className={`inTab  ${tab === "inPlay" ? "active" : ""}`}>
            In-Play
          </a>
        </li>
        <li onClick={() => setTab("today")} className="games-type-bg">
          <a className={`inTab  ${tab === "today" ? "active" : ""}`}>Today</a>
        </li>
        <li onClick={() => setTab("tomorrow")} className="games-type-bg">
          <a className={`inTab  ${tab === "tomorrow" ? "active" : ""}`}>
            Tomorrow
          </a>
        </li>
      </ul>
    </div>
  );
};

export default InPlayTab;
