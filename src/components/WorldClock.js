import { useState } from "react";

// 3rd Party Libraries
import "moment-timezone";
import moment from "moment";
import { Row, Col } from "react-bootstrap";

// Utils
import { worldClockData, showTimeData, flagData } from "../utils/worldClockHelpers";

const WorldClock = () => {
    const [timeZone, setTimeZone] = useState("Asia/Kolkata");
    const [dateTime, setDateTime] = useState(moment().tz(timeZone));

    setInterval(() => {
        setDateTime(moment().tz(timeZone));
    }, 1000);
    const handleTimeZoneSelection = (selectedimeZone) => {
        if (selectedimeZone !== timeZone) {
            setTimeZone(selectedimeZone, dateTime);
        }
    };

    return (
        <div className="world-clock-block my-3 p-3 rounded">
            <h1>World Clock</h1>
            <div className="d-flex flex-column flex-md-row">
                <div className="d-flex justify-content-start">
                    <Row>
                        {worldClockData?.map((clockData) => (
                            <Col xs={3} key={clockData.key}>
                                <div
                                    className={`clock-control-block text-center overflow-hidden shadow rounded ${timeZone === clockData.key && "active"}`}
                                    onClick={() => handleTimeZoneSelection(clockData.key)}>
                                    <img src={flagData[clockData.img]} alt="Flag" className="w-100" />
                                    <p className="font-weight-bold m-0">{clockData.name}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="d-flex flex-column flex-grow-1">
                    <div className="d-flex justify-content-end time-block">
                        {showTimeData(moment(dateTime).tz(timeZone).format("ddd").toUpperCase())}
                        {showTimeData(moment(dateTime).tz(timeZone).format("hh"))}
                        {showTimeData(":")}
                        {showTimeData(moment(dateTime).tz(timeZone).format("mm"))}
                        {showTimeData(":")}
                        {showTimeData(moment(dateTime).tz(timeZone).format("ss"))}
                        {showTimeData(moment(dateTime).tz(timeZone).format("a"))}
                    </div>
                    <div className="d-flex justify-content-end date-block">
                        <div>{moment(dateTime).tz(timeZone).format("DD")}</div>
                        <div>/</div>
                        <div>{moment(dateTime).tz(timeZone).format("MMM")}</div>
                        <div>/</div>
                        <div>{moment(dateTime).tz(timeZone).format("YYYY")}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorldClock;
