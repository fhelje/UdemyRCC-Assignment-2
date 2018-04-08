import React from "react";
import "./ValidationComponent.css";

const ValidationComponent = ({ charList, maxLength, minLength }) => {
    let validation = null;
    if (charList.length < minLength) {
        validation = (
            <div className={"ValidationText"}>
                Text is to short (Min length: {minLength})
            </div>
        );
    } else if (charList.length > maxLength) {
        validation = (
            <div className={"ValidationText"}>
                Text is to long (Max length: {maxLength})
            </div>
        );
    }
    return validation;
};

export default ValidationComponent;
