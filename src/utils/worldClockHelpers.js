/* eslint-disable import/prefer-default-export */
// Images
import ukFlag from "../images/uk.png";
import usaFlag from "../images/usa.png";
import indiaFlag from "../images/india.png";
import japanFlag from "../images/japan.png";

export const flagData = {
    india: indiaFlag,
    usa: usaFlag,
    uk: ukFlag,
    japan: japanFlag,
};

export const worldClockData = [
    {
        name: "India",
        key: "Asia/Kolkata",
        img: "india",
    },
    {
        name: "USA",
        key: "America/Los_Angeles",
        img: "usa",
    },
    {
        name: "London",
        key: "Europe/Berlin",
        img: "uk",
    },
    {
        name: "Japan",
        key: "Asia/Tokyo",
        img: "japan",
    },
];

export const showTimeData = (timeData) => <div className="m-1 px-2 py-1 rounded">{timeData}</div>;
