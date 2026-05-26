const RightSidebar = () => {
  return (
    <div className="bet-slip mobile-hide tab-hide">
      <div className>
        <div className="betSlipBox">
          <div id="live-bet">
            <div className="headSlip">
              <span className="headText">Bet Slip</span>
            </div>
            <div />
            <div className="empty_message text-black">
              <img src="/assets/empty-cart.png" />
              Click on the odds to add selections to the betslip
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
