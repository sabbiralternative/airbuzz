import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";
import useBalance from "../../../hooks/balance";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setPrice,
  setRunnerId,
  setStake,
} from "../../../redux/features/events/eventSlice";
import { API, Settings } from "../../../api";
import { v4 as uuidv4 } from "uuid";
import { isBetDelay, isDelay } from "../../../utils/isBetDelay";
import { AxiosJSEncrypt } from "../../../lib/AxiosJSEncrypt";
import toast from "react-hot-toast";
import {
  handleDecreasePrice,
  handleIncreasePrice,
} from "../../../utils/editBetSlipPrice";

const BetSlip = ({ currentPlaceBetEvent }) => {
  const { closePopupForForever } = useSelector((state) => state.global);
  const [isCashOut, setIsCashOut] = useState(false);
  const [profit, setProfit] = useState(0);
  const { eventTypeId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { eventId } = useParams();

  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchExposure } = useExposure(eventId);
  const { placeBetValues, price, stake } = useSelector((state) => state?.event);

  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  useEffect(() => {
    dispatch(setPrice(parseFloat(placeBetValues?.price)));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize?.toFixed(2)
          : null,
      ),
    );
    setIsCashOut(placeBetValues?.cashout || false);
  }, [placeBetValues, dispatch]);

  let payload = {};
  if (price) {
    if (placeBetValues?.btype === "SPORTSBOOK") {
      payload = {
        price: price,
        side: placeBetValues?.side,
        selectionId: placeBetValues?.selectionId,
        btype: placeBetValues?.btype,
        placeName: placeBetValues?.placeName,
        eventTypeId: placeBetValues?.eventTypeId,
        betDelay: currentPlaceBetEvent?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    } else {
      payload = {
        betDelay: currentPlaceBetEvent?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: stake,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */

  const handleOrderBets = async () => {
    setLoading(true);
    const payloadData = [
      {
        ...payload,

        nounce: uuidv4(),

        apk: closePopupForForever ? true : false,
        isbetDelay: isBetDelay(placeBetValues),
      },
    ];

    let delay = 0;

    if (isDelay(placeBetValues)) {
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 3 &&
        placeBetValues?.name?.length === 2
      ) {
        delay = 9000;
      }
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 7 &&
        placeBetValues?.name?.length === 3
      ) {
        delay = 9000;
      } else {
        delay = Settings?.bet_delay ? currentPlaceBetEvent?.betDelay * 1000 : 0;
      }
    }

    // Introduce a delay before calling the API
    setTimeout(async () => {
      try {
        // const res = await createOrder(payloadData).unwrap();
        const { data } = await AxiosJSEncrypt.post(API.order, payloadData);

        if (data?.success) {
          setLoading(false);
          refetchExposure();
          refetchBalance();
          dispatch(setRunnerId(null));
          dispatch(setPlaceBetValues(null));
          refetchCurrentBets();

          dispatch(setStake(null));
          toast.success(data?.result?.result?.placed?.[0]?.message);
        } else {
          setLoading(false);
          toast.error(
            data?.error?.status?.[0]?.description || data?.error?.errorMessage,
          );
        }
      } catch {
        toast.error("Something went wrong. Please try again.");
      }
    }, delay);
  };

  useEffect(() => {
    if (
      price &&
      stake &&
      placeBetValues?.back &&
      placeBetValues?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * stake;
      setProfit(formatNumber(multiply - stake));
    } else if (
      price &&
      stake &&
      placeBetValues?.back &&
      (placeBetValues?.btype === "BOOKMAKER" ||
        placeBetValues?.btype === "BOOKMAKER2")
    ) {
      const bookmaker = 1 + price / 100;
      const total = bookmaker * stake - stake;

      setProfit(formatNumber(total));
    } else if (price && stake && placeBetValues?.btype === "FANCY") {
      const profit =
        (parseFloat(placeBetValues?.bottomValue) * parseFloat(stake)) /
        parseFloat(stake);
      setProfit(profit);
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const handleCancelBet = () => {
    dispatch(setRunnerId(null));
    dispatch(setPlaceBetValues(null));
    dispatch(setStake(null));
  };

  const handleButtonValue = (value) => {
    setIsCashOut(false);
    const buttonValue = Number(value);
    const prevStake = !stake ? null : Number(stake);

    if (prevStake === null) {
      dispatch(setStake(buttonValue));
    }
    if (prevStake >= 0) {
      dispatch(setStake(buttonValue + prevStake));
    }
  };

  return (
    <div className="betBox swing-in-top-bck ng-star-inserted relative">
      {loading && (
        <div className="absolute top-0 left-0 flex flex-col gap-1 items-center justify-center w-full h-full z-20 bg-black/30 backdrop-blur-[2px]">
          <div className="relative h-[70px] w-[70px] flex items-center justify-center">
            <div className="absolute text-lg text-white"></div>
            <div className="h-[80%] w-[80%] border-4 border-white rounded-full border-dotted border-t-white border-b-oneClickLoadingSpinner border-x-oneClickLoadingSpinner animate-oneClickLoadingSpinnerAnimation" />
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <div className="text-sm font-semibold">
              Your bet is being processed...
            </div>
            <div className="text-xs text-suspendedBg">Please wait</div>
          </div>
        </div>
      )}
      <div
        className={`slipHead   ${placeBetValues?.back ? "bg-blue" : "bg-pink"}`}
        id="slip-0"
      >
        <h3 className="titleBG ng-star-inserted">
          {placeBetValues?.back ? "Back" : "Lay"}
        </h3>

        <h3 className="runerText ng-star-inserted">
          <span className="runerName">{placeBetValues?.selectedBetName}</span>
        </h3>
        <h3 className="runerText ng-star-inserted">
          <span className="runerName ng-star-inserted">
            {placeBetValues?.marketName}
          </span>
        </h3>
        <h3 className="runerText"></h3>

        <div className="profitsCol ng-star-inserted">
          Profit:
          <span className="tgreen">{profit}</span>
        </div>
      </div>

      <div className="maxminbet ng-star-inserted">
        <span className="maxminT">
          {" "}
          Maximum Bet : {placeBetValues?.maxLiabilityPerBet}
        </span>
        {/* <span className="maxminT hide-Maxstake">
          Maximum Bet : {placeBetValues?.maxLiabilityPerBet}
        </span> */}
      </div>
      <div className="oddStakeRow">
        <div className="oddCol">
          <label className="col-form-label">Odds</label>
          <div className="inputCell">
            {!placeBetValues?.isWeak && (
              <input
                onClick={() => {
                  handleDecreasePrice(
                    price,
                    placeBetValues,
                    dispatch,
                    setPrice,
                  );
                  setIsCashOut(false);
                }}
                className="inputBTN leftBtn"
                type="button"
                defaultValue="-"
              />
            )}

            <input
              className="form-control ng-untouched ng-pristine ng-valid ng-star-inserted"
              onChange={(e) => {
                dispatch(setPrice(e.target.value));
                setIsCashOut(false);
              }}
              value={price}
              type="text"
              id="bet-slip-0"
            />
            {!placeBetValues?.isWeak && (
              <input
                onClick={() => {
                  handleIncreasePrice(
                    price,
                    placeBetValues,
                    dispatch,
                    setPrice,
                  );
                  setIsCashOut(false);
                }}
                className="inputBTN rightBtn"
                type="button"
                defaultValue="+"
              />
            )}
          </div>
        </div>
        <div className="stakeCol">
          <label className="col-form-label">Stake</label>
          <input
            autoComplete="off"
            className="form-control ng-untouched ng-pristine"
            maxLength={8}
            type="text"
            id="bet-stake-0"
            onChange={(e) => {
              dispatch(setStake(e.target.value));
              setIsCashOut(false);
            }}
            placeholder={`Max bet: ${placeBetValues?.maxLiabilityPerBet}`}
            value={stake || ""}
          />
          {/* <button className="btn btn-sm stakeleftAr">
            <i aria-hidden="true" className="fa fa-angle-left" />
          </button> */}
          <div className="dropdown">
            <div className="dropdown-content" id="myDropdown"></div>
          </div>
        </div>
      </div>
      <div className="betPriceVal">
        <ul>
          {parseButtonValues?.slice(0, 6)?.map((button, i) => (
            <li
              key={i}
              onClick={() => handleButtonValue(button?.value)}
              className="proceboxblue ng-star-inserted"
            >
              +{button?.value}
            </li>
          ))}

          <li
            onClick={() =>
              dispatch(
                setStake(
                  parseButtonValues?.[parseButtonValues?.length - 1]?.value,
                ),
              )
            }
            className="maxBet"
          >
            Max
          </li>
        </ul>
      </div>

      <div className="slipbtnRow">
        <div className="cancelCol">
          <input
            onClick={handleCancelBet}
            className="btn btn-danger text-deng"
            type="button"
            defaultValue="Cancel"
          />
        </div>

        <div className="placeBetCol ng-star-inserted">
          <input
            onClick={handleOrderBets}
            className="btn btn-success ng-star-inserted"
            id="oddBets"
            type="button"
            defaultValue="PLACE BET ✓"
          />
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
