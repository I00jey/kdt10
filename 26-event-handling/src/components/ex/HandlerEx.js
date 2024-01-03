import React, { Component } from "react";

class HandlerEx extends Component {
    state = { text: "Hello World!" };
    changeText = (text) => {
        this.setState(text);
    };
    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <button
                    onClick={() => this.changeText({ text: "Goodbye World!" })}
                >
                    실습 1 글씨바꾸기
                </button>
            </div>
        );
    }
}

export default HandlerEx;
