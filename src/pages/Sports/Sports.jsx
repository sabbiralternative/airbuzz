import { Fragment, useEffect, useMemo, useState } from "react";
import EventLinkSlider from "../../components/modules/Sports/EventLinkSlider";
import BackButton from "../../components/modules/Sports/BackButton";
import InPlayTab from "../../components/modules/Sports/InPlayTab";
import RightSidebar from "../../components/modules/Sports/RightSidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { useGroupQuery } from "../../hooks/group";
import moment from "moment";

const Sports = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const eventTypeId = params.get("eventTypeId");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { data } = useGroupQuery({ sportsType: Number(eventTypeId) || 0 });
  const [tab, setTab] = useState("inPlay");
  const eventName = {
    1: "Football",
    2: "Tennis",
    4: "Cricket",
    5: "Kabbadi",
    6: "Politics",
  };

  const todayMoment = moment().startOf("day");
  const groupedData = useMemo(() => {
    if (!data) return { inPlay: {}, today: {}, upcoming: {} };

    return Object.entries(data).reduce(
      (acc, [key, value]) => {
        if (!value.visible) return acc;

        const matchDate = moment(value.date, "DD/MM/YYYY HH:mm");

        if (value.inPlay === 1) {
          acc.inPlay[key] = value;
        } else if (matchDate.isSame(todayMoment, "day")) {
          acc.today[key] = value;
        } else {
          acc.upcoming[key] = value;
        }

        return acc;
      },
      { inPlay: {}, today: {}, upcoming: {} },
    );
  }, [data]);

  const finalData =
    tab === "inPlay"
      ? groupedData.inPlay
      : tab === "today"
        ? groupedData.today
        : groupedData.upcoming;
  const navigateGameList = (keys) => {
    navigate(`/event-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  //   const sortedData = Object.entries(finalData)
  //     .filter(([, value]) => value.visible === true)
  //     .sort(([, a], [, b]) => {
  //       return b.inPlay - a.inPlay;
  //     });

  useEffect(() => {
    if (finalData) {
      const categories = Array.from(
        new Set(
          Object.values(finalData)
            .filter((item) => item.visible)
            .map((item) => item.eventTypeId),
        ),
      );
      const sortedCategories = categories.sort((a, b) => {
        const order = { 4: 0, 1: 1, 2: 2 };
        return order[a] - order[b];
      });
      setCategories(sortedCategories);
    }
  }, [finalData]);
  return (
    <Fragment>
      <div className="app-market-dashboard">
        <div className="eventMain">
          <BackButton />
          <InPlayTab setTab={setTab} tab={tab} />
          <EventLinkSlider eventTypeId={eventTypeId} />
          <div className>
            {categories?.map((category) => {
              const filteredData = Object.entries(finalData).filter(
                ([, value]) =>
                  value.eventTypeId === category && value.visible === true,
              );

              return (
                <div key={category} className="sportscardRow">
                  <div className="sportHeading">
                    <span className="sportName"> {eventName[category]}</span>
                    <span className="sportIcon cricket">
                      <img
                        alt="Icons"
                        src={`/assets/${eventName[category]?.toLowerCase()}.svg`}
                      />
                    </span>
                  </div>
                  <div className="marketData">
                    {filteredData.map(([key, value]) => {
                      return (
                        <div
                          onClick={() => navigateGameList(key)}
                          key={key}
                          className="matchList"
                        >
                          <div className="teamNameRow cricketteams">
                            <a className="nameCol">
                              <h3 className="vsName">
                                <span> {value?.eventName}</span>
                              </h3>
                            </a>
                            <div className="iconsRow">
                              {value?.isBookmaker === 1 && (
                                <span className="bookmakerIcon ">
                                  <img src="/assets/bookmakerSymbol.svg" />
                                </span>
                              )}
                              {value?.inPlay === 1 && (
                                <div className="iconLive ">
                                  <svg
                                    id="Layer_2"
                                    viewBox="0 0 67.96 33.08"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="Layer_1-2">
                                      <path d="M0,18.62C.26,11.96,2.45,6.32,6.77,1.57c1.3-1.43,2.83-2.28,4.59-.76,1.79,1.55,1.89,3.31.31,5.13-5.83,6.67-6.6,13.94-2.49,21.73,1.13,2.15.76,3.8-1.31,4.95-2.23,1.24-3.45-.19-4.47-1.92-2.25-3.8-3.1-7.99-3.4-12.07ZM61.18,1.57c-1.28-1.41-2.83-2.3-4.6-.77-1.79,1.55-1.89,3.31-.31,5.13,5.83,6.67,6.6,13.94,2.5,21.73-1.13,2.14-.77,3.8,1.3,4.96,2.22,1.24,3.45-.18,4.47-1.91,2.24-3.8,3.11-7.99,3.41-12.24-.32-6.47-2.45-12.14-6.78-16.89ZM12.71,24.17c.72,1.65,1.85,2.94,3.84,2.23,1.86-.67,2.03-2.3,1.42-3.9-1.32-3.49-.88-6.68,1.21-9.73,1.07-1.57.78-3.04-.8-4.04-1.53-.97-2.86-.24-3.82,1.03-1.93,2.56-3,5.46-2.99,8.7-.01,1.98.35,3.9,1.13,5.71ZM53.31,9.66c-.98-1.26-2.34-1.91-3.84-.87-1.41.97-1.78,2.38-.77,3.82,2.25,3.24,2.57,6.61,1.19,10.28-.53,1.39-.15,2.8,1.36,3.45,1.64.7,2.86-.07,3.65-1.51,1.11-2.01,1.46-4.22,1.48-6.5-.03-3.24-1.1-6.14-3.07-8.67ZM33.93,8.65c-4.86,0-8.79,3.94-8.79,8.79s3.94,8.79,8.79,8.79,8.79-3.94,8.79-8.79-3.94-8.79-8.79-8.79Z"></path>
                                    </g>
                                  </svg>
                                </div>
                              )}
                            </div>
                            <span className="datetime " />
                          </div>
                          <ul className="oddsRow">
                            <li className="back">
                              {" "}
                              {value?.[0]?.ex?.availableToBack?.[0]?.price ||
                                "-"}
                            </li>
                            <li className="lay">
                              {" "}
                              {value?.[0]?.ex?.availableToLay?.[0]?.price ||
                                "-"}
                            </li>
                            <li className="back">
                              {value?.[2]?.ex?.availableToBack?.[0]?.price ||
                                "-"}
                            </li>
                            <li className="lay">
                              {value?.[2]?.ex?.availableToLay?.[0]?.price ||
                                "-"}
                            </li>
                            <li className="back">
                              {" "}
                              {value?.[1]?.ex?.availableToBack?.[0]?.price ||
                                "-"}
                            </li>
                            <li className="lay">
                              {" "}
                              {value?.[1]?.ex?.availableToLay?.[0]?.price ||
                                "-"}
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <RightSidebar />
    </Fragment>
  );
};

export default Sports;
