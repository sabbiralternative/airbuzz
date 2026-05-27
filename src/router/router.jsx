import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import APK from "../pages/APK/APK";
import Sports from "../pages/Sports/Sports";
import EventDetails from "../pages/EventDetails/EventDetails";
import Deposit from "../pages/Deposit/Deposit";
import Withdraw from "../pages/Withdraw/Withdraw";
import DepositWithdrawReport from "../pages/DepositWithdrawReport/DepositWithdrawReport";
import MyBankDetails from "../pages/MyBankDetails/MyBankDetails";
import SingleProfitLoss from "../pages/BettingProfitLoss/SingleProfitLoss";
import BettingProfitLoss from "../pages/BettingProfitLoss/BettingProfitLoss";
import BonusStatement from "../pages/BonusStatement/BonusStatement";
import Affiliate from "../pages/Affiliate/Affiliate";
import Promotions from "../pages/Promotions/Promotions";
import LossBackBonus from "../pages/LossBackBonus/LossBackBonus";
import AppOnlyBonus from "../pages/AppOnlyBonus/AppOnlyBonus";
import LiveCasino from "../pages/LiveCasino/LiveCasino";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/event-details/:eventTypeId/:eventId",
          element: <EventDetails />,
        },
        {
          path: "/apk",
          element: <APK />,
        },
        {
          path: "/sports",
          element: <Sports />,
        },

        {
          path: "/deposit",
          element: <Deposit />,
        },
        {
          path: "/withdraw",
          element: <Withdraw />,
        },
        {
          path: "/deposit-withdraw-report",
          element: <DepositWithdrawReport />,
        },
        {
          path: "/my-bank-details",
          element: <MyBankDetails />,
        },
        {
          path: "/betting-profit-loss",
          element: <BettingProfitLoss />,
        },
        {
          path: "/betting-profit-loss/:marketId",
          element: <SingleProfitLoss />,
        },
        {
          path: "/bonus-statement",
          element: <BonusStatement />,
        },
        {
          path: "/affiliate",
          element: <Affiliate />,
        },
        {
          path: "/promotions",
          element: <Promotions />,
        },
        {
          path: "/lossback-bonus",
          element: <LossBackBonus />,
        },
        {
          path: "/app-only-bonus",
          element: <AppOnlyBonus />,
        },
        {
          path: "/live-casino",
          element: <LiveCasino />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  },
);
