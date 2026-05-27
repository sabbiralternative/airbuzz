import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import toast from "react-hot-toast";
import Ladder from "../../modals/Ladder/Ladder";
import images from "../../../assets/images";
import BetSlip from "./BetSLip";

const Fancy = ({ data }) => {
  const fancyData = data?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true,
  );

  const [ladderData, setLadderData] = useState([]);
  const { eventId } = useParams();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { runnerId } = useSelector((state) => state.event);
  const { data: exposure } = useExposure(eventId);
  const [getLadder] = useGetLadderMutation();

  const handleBetSlip = (betType, games, runner, price, bottomValue) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
      if (games?.status !== "OPEN") return;
      if (!price) {
        return;
      }

      let pnlBySelection;
      const updatedPnl = [];

      if (exposure?.pnlBySelection) {
        const obj = exposure?.pnlBySelection;
        pnlBySelection = Object?.values(obj);
      }

      if (games?.btype == "FANCY") {
        selectionId = games?.id;
        runnerId = games?.id;
        eventTypeId = games?.eventTypeId;
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      } else {
        selectionId = runner?.selectionId;
        eventTypeId = games?.marketId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find(
            (p) => p?.RunnerId === runner?.selectionId,
          );
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      }

      const betData = {
        price,
        side: betType === "back" ? 0 : 1,
        selectionId,
        btype: games?.btype,
        eventTypeId,
        betDelay: games?.betDelay,
        marketId: games?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.name,
        name: games.runners.map((runner) => runner.name),
        runnerId,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        pnl: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
        bottomValue,
      };

      if (games?.btype == "FANCY") {
        dispatch(setRunnerId(games?.id));
      } else if (games?.btype && games?.btype !== "FANCY") {
        dispatch(setRunnerId(runner?.id));
      } else {
        dispatch(setRunnerId(runner?.selectionId));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      toast.error("Please login to place a bet.");
    }
  };

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const handleGetLadder = async (pnl) => {
    if (!pnl?.MarketId) {
      return;
    }

    const res = await getLadder({ marketId: pnl?.MarketId }).unwrap();

    if (res.success) {
      setLadderData(res.result);
    }
  };

  return (
    <Fragment>
      {ladderData?.length > 0 && (
        <Ladder ladderData={ladderData} setLadderData={setLadderData} />
      )}
      {fancyData?.length > 0 && (
        <div className="sportscardRow fancyRow">
          <div className="withtabs ">
            <div className="fancyaTabs" id="all">
              <ul id="all_tabs">
                <li className="active ">
                  <a> Fancy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="marketData ">
            <div className="matchList p-0 border-0 ">
              <div className="tab-pane active" id="all_popular">
                <div className="backlayHead">
                  <div className="minMax d-flex align-items-center">
                    <span className="d-inline">
                      <span className="minText ">Min: 0</span>|
                      <span className="maxText ">Max: 0</span>
                    </span>
                  </div>
                  <div className="backlayText fancyYesNo">
                    <span className="BackText ">No</span>
                    <span className="layText">Yes</span>
                  </div>
                </div>

                {fancyData?.map((game) => {
                  const pnl = pnlBySelection?.find(
                    (pnl) => pnl?.MarketId === game?.id,
                  );

                  return (
                    <Fragment key={game?.id}>
                      <div className="marketOdd mkt_TypeFancy_Market ">
                        <div className="fancyList ">
                          <div className="oddsList fancyOdds ">
                            <div className="runnerName ">
                              <h3 className="vsName">{game?.name}</h3>
                              {pnl && (
                                <span
                                  className={`${
                                    pnl?.pnl > 0
                                      ? "text-success"
                                      : "text-danger"
                                  }`}
                                >
                                  {pnl?.pnl}
                                </span>
                              )}
                              {pnl?.pnl && (
                                <span
                                  onClick={() => handleGetLadder(pnl)}
                                  className="starIconCol"
                                >
                                  <img
                                    style={{ height: "15px", width: "15px" }}
                                    src={images.ladder}
                                    alt=""
                                  />
                                </span>
                              )}
                            </div>
                            <ul className="oddsRow runnerOdds ">
                              <li
                                onClick={() =>
                                  handleBetSlip(
                                    "lay",
                                    game,
                                    game?.runners?.[0],
                                    game?.runners?.[0]?.lay?.[0]?.line,
                                    game?.runners?.[0]?.lay?.[0]?.price,
                                  )
                                }
                                className="lay laybe name "
                              >
                                <small>
                                  {game?.runners?.[0]?.lay?.[0]?.line}
                                </small>
                              </li>
                              <li
                                onClick={() =>
                                  handleBetSlip(
                                    "back",
                                    game,
                                    game?.runners?.[0],
                                    game?.runners?.[0]?.back?.[0]?.line,
                                    game?.runners?.[0]?.back?.[0]?.price,
                                  )
                                }
                                className="back cardbackkkk userSelect"
                              >
                                <small>
                                  {" "}
                                  {game?.runners?.[0]?.back?.[0]?.line}
                                </small>
                              </li>
                              {game?.status === "SUSPENDED" && (
                                <div className="suspended spSmall ">
                                  <p>Suspended</p>
                                </div>
                              )}
                            </ul>
                            <div className="oddMin mobile-hide">
                              <span>Min / Max</span>
                              <span id="minMax">
                                {game?.minLiabilityPerBet} /{" "}
                                {game?.maxLiabilityPerBet}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {game?.id === runnerId && (
                        <div className="betSlipModal">
                          {" "}
                          <BetSlip currentPlaceBetEvent={game} />
                        </div>
                      )}
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Fancy;
