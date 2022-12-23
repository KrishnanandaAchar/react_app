/* eslint-disable react/require-default-props */
/* eslint-disable import/prefer-default-export */

// Props Type Check
import PropTypes from "prop-types";

// 3rd Party Libraries
import { Button } from "react-bootstrap";

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
