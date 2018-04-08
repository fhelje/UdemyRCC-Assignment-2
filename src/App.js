import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import InputComponent from "./InputComponent/InputComponent";
import CharListComponent from "./CharListComponent/CharListComponent";

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
