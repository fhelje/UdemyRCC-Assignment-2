import React, { Component } from "react";
import "./App.css";

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

const InputComponent = ({ text, changed }) => {
    console.log(text);
    return (
        <div className={"InputContainer"}>
            <div>Text</div>
            <textarea onChange={changed} value={text} />
        </div>
    );
};

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

class App extends Component {
    state = {
        text: "",
        charList: [],
        maxLength: 30,
        minLength: 5
    };

    textChangedHandler = event => {
        const input = event.target.value;
        const arr = input.split("").map((c, i) => {
            return { char: c, id: i };
        });
        this.setState({ charList: arr, text: input });
    };

    removeCharHandler = id => {
        const index = this.state.charList.findIndex(c => c.id === id);
        const list = [...this.state.charList];
        list.splice(index, 1);
        const text = list.reduce((acc, val) => acc + val.char, "");
        this.setState({ charList: list, text: text });
    };

    render() {
        return (
            <div className="App">
                <InputComponent
                    text={this.state.text}
                    changed={this.textChangedHandler}
                />
                <ValidationComponent {...this.state} />
                <CharListComponent
                    charList={this.state.charList}
                    clicked={this.removeCharHandler}
                />
            </div>
        );
    }
}

export default App;
