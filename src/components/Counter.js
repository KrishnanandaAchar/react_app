import { useState } from "react";

// 3rd Party Libraries
import { Button } from "react-bootstrap";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [error, setError] = useState("");

    const handleCount = (countDirection) => {
        if (countDirection === "reset") {
            setCount(0);
            setError("");
        } else if (countDirection === "up") {
            if (count === 10) {
                setError("Count can't be more that 10!");
            } else {
                setError("");
                setCount((prevCount) => prevCount + 1);
            }
        } else if (count === 0) {
            setError("Count can't be less that 0!");
        } else {
            setError("");
            setCount((prevCount) => prevCount - 1);
        }
    };

    return (
        <div className="counter-block mb-3 p-3 rounded">
            <h3>0 to 10 Counter</h3>
            <div className="counter d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center decrementBtn" onClick={() => handleCount("down")}>
                    -
                </div>
                <div className="d-flex justify-content-center align-items-center shadow count">{count}</div>
                <div className="d-flex justify-content-center align-items-center incrementBtn" onClick={() => handleCount("up")}>
                    +
                </div>
            </div>
            <p className="text-center mt-2 mb-0">{error}</p>
            <Button variant="info" size="sm" className="d-block mx-auto mt-3" onClick={() => handleCount("reset")}>
                Reset
            </Button>
        </div>
    );
};

export default Counter;
