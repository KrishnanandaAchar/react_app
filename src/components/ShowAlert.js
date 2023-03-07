/* eslint-disable no-nested-ternary */
import { useEffect, useState } from "react";

// 3rd Party Libraries
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

// Icons
import { FaTimesCircle, FaRegCheckCircle, FaInfoCircle } from "react-icons/fa";

export const ShowAlert = () => {
    const [show, setShow] = useState(false);
    const alertDataObject = useSelector((state) => state.AlertData);
    const { alertType, alertData, alertStatus } = alertDataObject;

    useEffect(() => {
        setShow(alertStatus);
    }, [alertStatus]);

    const getAlertIcon = () => {
        if (alertType === "error") {
            return <FaTimesCircle />;
        }
        if (alertType === "success") {
            return <FaRegCheckCircle />;
        }
        return <FaInfoCircle />;
    };

    return (
        show && (
            <Alert className="mt-3 mb-0 mx-4" variant={alertType === "error" ? "danger" : alertType === "success" ? "success" : "info"} onClose={() => setShow(false)} dismissible>
                <p className="m-0">
                    {getAlertIcon()} {alertData}
                </p>
            </Alert>
        )
    );
};

export default ShowAlert;
