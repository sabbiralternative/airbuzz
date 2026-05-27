import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import toast from "react-hot-toast";
import { Settings } from "../../../api";
import BetSlip from "./BetSlip";
import { handleCashOutPlaceBet } from "../../../utils/handleCashoutPlaceBet";
import SpeedCashOut from "../../modals/SpeedCashOut/SpeedCashOut";

const MatchOdds = ({ data }) => {
  const [speedCashOut, setSpeedCashOut] = useState(null);
  const { eventId } = useParams();
  const [teamProfit, setTeamProfit] = useState([]);
  const dispatch = useDispatch();
  const { runnerId, stake, predictOdd } = useSelector((state) => state.event);
  const { token } = useSelector((state) => state.auth);
  const { data: exposure } = useExposure(eventId);

  const handleBetSlip = (betType, games, runner, price) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
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
        games?.runners?.forEach((rnr) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === rnr?.id);
          if (pnl) {
            updatedPnl.push({
              exposure: pnl?.pnl,
              id: pnl?.RunnerId,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
          } else {
            updatedPnl.push({
              exposure: 0,
              id: rnr?.id,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
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
        exposure: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
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

  const computeExposureAndStake = (
    exposureA,
    exposureB,
    runner1,
    runner2,
    gameId,
  ) => {
    let runner,
      largerExposure,
      layValue,
      oppositeLayValue,
      lowerExposure,
      speedCashOut;

    const pnlArr = [exposureA, exposureB];
    const isOnePositiveExposure = onlyOnePositive(pnlArr);

    if (exposureA > exposureB) {
      // Team A has a larger exposure.
      runner = runner1;
      largerExposure = exposureA;
      layValue = runner1?.lay?.[0]?.price;
      oppositeLayValue = runner2?.lay?.[0]?.price;
      lowerExposure = exposureB;
    } else {
      // Team B has a larger exposure.
      runner = runner2;
      largerExposure = exposureB;
      layValue = runner2?.lay?.[0]?.price;
      oppositeLayValue = runner1?.lay?.[0]?.price;
      lowerExposure = exposureA;
    }
    if (exposureA > 0 && exposureB > 0) {
      const difference = Math.abs(exposureA - exposureB);
      if (difference <= 10) {
        speedCashOut = true;
      }
    }
    // Compute the absolute value of the lower exposure.
    let absLowerExposure = Math.abs(lowerExposure);

    // Compute the liability for the team with the initially larger exposure.
    let liability = absLowerExposure * (layValue - 1);

    // Compute the new exposure of the team with the initially larger exposure.
    let newExposure = largerExposure - liability;

    // Compute the profit using the new exposure and the lay odds of the opposite team.
    let profit = newExposure / layValue;

    // Calculate the new stake value for the opposite team by adding profit to the absolute value of its exposure.
    let newStakeValue = absLowerExposure + profit;

    // Return the results.
    return {
      runner,
      newExposure,
      profit,
      newStakeValue,
      oppositeLayValue,
      gameId,
      isOnePositiveExposure,
      exposureA,
      exposureB,
      runner1,
      runner2,
      speedCashOut,
    };
  };
  function onlyOnePositive(arr) {
    let positiveCount = arr?.filter((num) => num > 0).length;
    return positiveCount === 1;
  }
  useEffect(() => {
    let results = [];
    if (
      data?.length > 0 &&
      exposure?.pnlBySelection &&
      Object.keys(exposure?.pnlBySelection)?.length > 0
    ) {
      data.forEach((game) => {
        const runners = game?.runners || [];
        if (runners?.length === 2) {
          const runner1 = runners[0];
          const runner2 = runners[1];
          const pnl1 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner1?.id,
          )?.pnl;
          const pnl2 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner2?.id,
          )?.pnl;

          if (pnl1 && pnl2 && runner1 && runner2) {
            const result = computeExposureAndStake(
              pnl1,
              pnl2,
              runner1,
              runner2,
              game?.id,
            );
            results.push(result);
          }
        }
      });
      setTeamProfit(results);
    } else {
      setTeamProfit([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventId, data]);

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  return (
    <Fragment>
      {speedCashOut && (
        <SpeedCashOut
          speedCashOut={speedCashOut}
          setSpeedCashOut={setSpeedCashOut}
        />
      )}
      {data?.length > 0 &&
        data?.map((game) => {
          const teamProfitForGame = teamProfit?.find(
            (profit) =>
              profit?.gameId === game?.id && profit?.isOnePositiveExposure,
          );
          const speedCashOut = teamProfit?.find(
            (profit) => profit?.gameId === game?.id && profit?.speedCashOut,
          );

          return (
            <div key={game?.id} className="sportscardRow">
              <div className="d-flex justify-content-between align-items-center ">
                <div className="sportHeading ">
                  <span className="sportName">
                    {" "}
                    {game?.name?.toUpperCase()}
                  </span>
                  <span className="sportIcon">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                    </svg>
                  </span>
                </div>
                <span className="d-flex justify-content-between align-items-end">
                  {Settings.cashout &&
                    game?.runners?.length !== 3 &&
                    game?.status === "OPEN" &&
                    !speedCashOut && (
                      <button
                        onClick={() =>
                          handleCashOutPlaceBet(
                            game,
                            "lay",
                            dispatch,
                            pnlBySelection,
                            token,
                            teamProfitForGame,
                          )
                        }
                        style={{
                          cursor: `${
                            !teamProfitForGame ? "not-allowed" : "pointer"
                          }`,
                          opacity: `${!teamProfitForGame ? "0.6" : "1"}`,
                        }}
                        className="btn btn-secondary cashout-button "
                      >
                        CASHOUT{" "}
                        {teamProfitForGame?.profit &&
                          `(${teamProfitForGame.profit.toFixed(0)})`}
                      </button>
                    )}
                  {Settings.cashout &&
                    game?.runners?.length !== 3 &&
                    game?.status === "OPEN" &&
                    game?.name !== "toss" &&
                    speedCashOut && (
                      <button
                        onClick={() =>
                          setSpeedCashOut({
                            ...speedCashOut,
                            market_name: game?.name,
                            event_name: game?.eventName,
                          })
                        }
                        className="btn btn-secondary cashout-button "
                      >
                        Speed Cashout
                      </button>
                    )}

                  <span className="mpIcon">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z"></path>
                    </svg>
                  </span>
                </span>
              </div>
              <div className="marketData mb-3 ">
                <div className="backlayHead">
                  <div className="minMax">
                    <span className="minText">
                      Min: {game?.minLiabilityPerBet}
                    </span>
                    |
                    <span className="maxText">
                      Max: {game?.maxLiabilityPerBet}
                    </span>
                  </div>
                  <div className="backlayText">
                    <span className="BackText">BACK</span>
                    <span className="layText">LAY</span>
                  </div>
                </div>
                <div className="marketOdd">
                  {game?.runners?.map((runner) => {
                    const pnl = pnlBySelection?.find(
                      (pnl) => pnl?.RunnerId === runner?.id,
                    );
                    const predictOddValues = predictOdd?.find(
                      (val) => val?.id === runner?.id,
                    );
                    return (
                      <Fragment key={runner?.id}>
                        <div className="oddsList ">
                          <div
                            className="runnerName"
                            style={{ display: "flex", gap: "4px" }}
                          >
                            <h3 className="vsName">{runner?.name}</h3>
                            {pnl && (
                              <span
                                className={`${
                                  pnl?.pnl > 0 ? "text-success" : "text-danger"
                                }`}
                              >
                                {pnl?.pnl}
                              </span>
                            )}
                            {stake && runnerId && predictOddValues && (
                              <span
                                className={` ${
                                  predictOddValues?.exposure > 0
                                    ? "text-success"
                                    : "text-danger"
                                } `}
                              >
                                &nbsp;({predictOddValues?.exposure})
                              </span>
                            )}
                          </div>
                          <ul className="oddsRow runnerOdds">
                            <li
                              onClick={() =>
                                handleBetSlip(
                                  "back",
                                  game,
                                  runner,
                                  runner?.back?.[2]?.price,
                                )
                              }
                              className="back mobile-hide"
                            >
                              {runner?.back?.[2]?.price}{" "}
                              <small> {runner?.back?.[2]?.size} </small>
                            </li>
                            <li
                              onClick={() =>
                                handleBetSlip(
                                  "back",
                                  game,
                                  runner,
                                  runner?.back?.[1]?.price,
                                )
                              }
                              className="back mobile-hide"
                            >
                              {runner?.back?.[1]?.price}{" "}
                              <small> {runner?.back?.[1]?.size} </small>
                            </li>
                            <li
                              onClick={() =>
                                handleBetSlip(
                                  "back",
                                  game,
                                  runner,
                                  runner?.back?.[0]?.price,
                                )
                              }
                              className="back"
                            >
                              {runner?.back?.[0]?.price}{" "}
                              <small> {runner?.back?.[0]?.size} </small>
                            </li>
                            <li
                              onClick={() =>
                                handleBetSlip(
                                  "lay",
                                  game,
                                  runner,
                                  runner?.lay?.[0]?.price,
                                )
                              }
                              className="lay"
                            >
                              {runner?.lay?.[0]?.price}{" "}
                              <small> {runner?.lay?.[0]?.size} </small>
                            </li>
                            <li
                              onClick={() =>
                                handleBetSlip(
                                  "lay",
                                  game,
                                  runner,
                                  runner?.lay?.[1]?.price,
                                )
                              }
                              className="lay mobile-hide"
                            >
                              {runner?.lay?.[1]?.price}{" "}
                              <small> {runner?.lay?.[1]?.size} </small>
                            </li>
                            <li
                              onClick={() =>
                                handleBetSlip(
                                  "lay",
                                  game,
                                  runner,
                                  runner?.lay?.[2]?.price,
                                )
                              }
                              className="lay mobile-hide"
                            >
                              {runner?.lay?.[2]?.price}{" "}
                              <small>{runner?.lay?.[2]?.size} </small>
                            </li>
                            {runner?.status === "SUSPENDED" && (
                              <div className="suspended ">Suspended</div>
                            )}
                          </ul>
                        </div>
                        {runner?.id === runnerId && (
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
          );
        })}
    </Fragment>
  );
};

export default MatchOdds;
