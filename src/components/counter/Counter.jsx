import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = { counter: 0 };
        this.compute = this.compute.bind(this);
    }
    render() {
        return (
            <div>
                <div className="counter">
                    <CounterButton by={1} computeMethod={this.compute} />
                    <CounterButton by={-1} computeMethod={this.compute} />
                </div>
                <div className="counter">
                    <CounterButton by={5} computeMethod={this.compute} />
                    <CounterButton by={-5} computeMethod={this.compute} />
                </div>
                <div className="counter">
                    <CounterButton by={10} computeMethod={this.compute} />
                    <CounterButton by={-10} computeMethod={this.compute} />
                </div>
                <span className="count">{this.state.counter}</span>

            </div>
        );
    }
    compute(by) {
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            }
        )
    }
    decrement(by) {

    }
}
class CounterButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="counter">
                {
                    this.props.by < 0 ?
                        <button onClick={ () => this.props.computeMethod(this.props.by)}>{this.props.by}</button>
                        :
                        <button onClick={ () => this.props.computeMethod(this.props.by)}>+{this.props.by}</button>
                }
            </div>
        )
    }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter