import React from "react";
import "./InputComponent.css";

const InputComponent = ({ text, changed }) => {
    console.log(text);
    return (
        <div className={"InputContainer"}>
            <div>Text</div>
            <textarea onChange={changed} value={text} />
        </div>
    );
};

export default InputComponent;
