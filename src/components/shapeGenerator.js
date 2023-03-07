/* eslint-disable react/no-array-index-key */
/* eslint-disable react/self-closing-comp */
import { useState } from "react";

// 3rd Party libraries
import { Container, Row, Col } from "react-bootstrap";

// Utils
import { RenderButton } from "../utils/common";

const ShapeGenerator = () => {
    const [shape, setShape] = useState("circle");
    const [color, setColor] = useState("#0d6efd");
    const [points, setPoints] = useState([]);
    const [pointsHistory, setPointsHistory] = useState([]);

    const generateShape = (e) => setPoints([...points, { x: e.clientX, y: e.clientY }]);
    const handleUndo = () => {
        const tempPoints = [...points];
        const removedPoint = tempPoints.pop();
        setPoints(tempPoints);
        setPointsHistory([...pointsHistory, removedPoint]);
    };
    const handleRedo = () => {
        const tempPointsHistory = [...pointsHistory];
        const historyPoint = tempPointsHistory.pop();
        setPointsHistory(tempPointsHistory);
        setPoints([...points, historyPoint]);
    };
    const changeShape = (selectedShape) => setShape(selectedShape);
    const changeColor = (selectedColor) => setColor(selectedColor);
    const handleClear = () => {
        setShape("circle");
        setColor("#0d6efd");
        setPoints([]);
        setPointsHistory([]);
    };

    return (
        <div className="shape-generator-block my-3">
            <h1 className="p-3 mb-3 w-100 d-flex justify-content-between">
                <div>Shape Generator</div>
            </h1>
            <Container>
                <Row>
                    <Col>
                        <RenderButton type="button" variant="light" buttonTitle="Undo" onClick={handleUndo} disabled={points.length === 0} className="undoBtn mx-1 mb-2" />
                        <RenderButton type="button" variant="light" buttonTitle="Redo" onClick={handleRedo} disabled={pointsHistory.length === 0} className="redoBtn mx-1 mb-2" />

                        <RenderButton type="button" variant="light" buttonTitle="Circle" onClick={() => changeShape("circle")} className={`mx-1 mb-2 ${shape === "circle" && "active"}`} />
                        <RenderButton type="button" variant="light" buttonTitle="Square" onClick={() => changeShape("square")} className={`mx-1 mb-2 ${shape === "square" && "active"}`} />
                        <RenderButton type="button" variant="light" buttonTitle="Rectangle" onClick={() => changeShape("rectangle")} className={`mx-1 mb-2 ${shape === "rectangle" && "active"}`} />
                        <RenderButton
                            type="button"
                            variant="light"
                            buttonTitle="Rounded Square"
                            onClick={() => changeShape("roundedSquare")}
                            className={`mx-1 mb-2 ${shape === "roundedSquare" && "active"}`}
                        />

                        <RenderButton type="button" variant="primary" buttonTitle="Blue" onClick={() => changeColor("#0d6efd")} className="mx-1 mb-2" />
                        <RenderButton type="button" variant="secondary" buttonTitle="Gray" onClick={() => changeColor("#6c757d")} className="mx-1 mb-2" />
                        <RenderButton type="button" variant="success" buttonTitle="Green" onClick={() => changeColor("#198754")} className="mx-1 mb-2" />
                        <RenderButton type="button" variant="danger" buttonTitle="Red" onClick={() => changeColor("#dc3545")} className="mx-1 mb-2" />
                        <RenderButton type="button" variant="warning" buttonTitle="Yellow" onClick={() => changeColor("#ffc107")} className="mx-1 mb-2" />
                        <RenderButton type="button" variant="info" buttonTitle="Sky" onClick={() => changeColor("#0dcaf0")} className="mx-1 mb-2" />

                        <RenderButton type="button" variant="danger" buttonTitle="Clear" onClick={handleClear} className="mx-1 mb-2" />

                        <div className="screen" onClick={generateShape}>
                            {points.map((point, index) => (
                                <span key={index} className={`${shape} point`} style={{ backgroundColor: `${color}`, top: `${point.y - 225}px`, left: `${point.x - 145}px` }} />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ShapeGenerator;
