/* eslint-disable react/require-default-props */
/* eslint-disable import/prefer-default-export */

// Props Type Check
import PropTypes from "prop-types";

// 3rd Party Libraries
import { Button } from "react-bootstrap";

// Images
import loader from "../images/loader.gif";

// Loader
export const Loader = () => (
    <div className="w-100 vh-100 position-fixed d-flex justify-content-center align-items-center loader">
        <img className="d-block loaderImage" src={loader} alt="Loading..." />
    </div>
);

// Button
export const RenderButton = (props) => {
    const { variant, type, className, buttonTitle, onClick } = props;

    return (
        <Button variant={variant} type={type} className={className} onClick={onClick}>
            {buttonTitle}
        </Button>
    );
};

RenderButton.propTypes = {
    variant: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    buttonTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
