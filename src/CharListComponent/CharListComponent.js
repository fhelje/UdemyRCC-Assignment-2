import React from "react";
import "./CharListComponent.css";

const CharListComponent = ({ charList, clicked }) => {
    return (
        <div className="CharListWrapper">
            <div className="CharContainer">
                {charList.map(char => (
                    <div
                        key={char.id}
                        className={
                            "CharBox" + (char.char === " " ? " blank" : "")
                        }
                        onClick={() => clicked(char.id)}
                    >
                        {char.char}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CharListComponent;
