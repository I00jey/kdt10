import React, { Component } from 'react';

class Prac1 extends Component {
    state = { number: 0 };
    render() {
        const { number } = this.state;
        return (
            <div>
                <button onClick={() => this.setState({ number: number + 2 })}>
                    +2
                </button>
                <button onClick={() => this.setState({ number: number - 1 })}>
                    -1
                </button>
                <h1>{number}</h1>
            </div>
        );
    }
}
export default Prac1;
