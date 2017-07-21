import React, {Component} from 'react';

class Timer extends Component {
    state = {
        clock: 0, // keeps track of timer in milliseconds
        countDown: 50, // keeps track of countdown in seconds
        input: '',
        error: '',
    };

    componentDidMount() {
      this.timer = setInterval(this.ticker, 1000);
    }

    ticker = () => {

        let newCount = this.state.countDown;

        if(this.state.countDown > 0)
            newCount = this.state.countDown - 1;

        this.setState({clock: new Date() - this.props.start,
            countDown: newCount});

    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        if(this.state.input === ''){
            this.setState({error: 'The field "New countdown" is required'});
        } else {
            this.setState({error: '', countDown: this.state.input, input: ''})
        }

    };

    handleChange = (e) => {
        this.setState({input: e.target.value});
    };

    add30Sec = (e) => {
        e.preventDefault();
        this.setState({countDown: this.state.countDown + 30})
    };

    render() {
        const clock = Math.round(this.state.clock / 1000);
        const countdown = Math.round(this.state.countDown);
        return(
            <div>
                <p>You have been on this site since:</p> <br/>
                <span>{clock}</span>
                <p>Seconds</p>
                <button onClick={this.props.onResetTimer}>Reset Timer</button>
                <p>Countdown from:</p>
                <p><span>{countdown}</span></p>
                <p>Seconds</p>
                <form onSubmit={this.onSubmitHandler}>
                    <label htmlFor="countdown">New countdown: </label>
                    <input
                        id="countdown"
                        type="text"
                        value={this.state.input}
                        onChange={this.handleChange}
                        placeholder="Enter new countdown"
                        required
                    />
                    <button onClick={this.onSubmitHandler}>Submit</button>

                    <button onClick={this.add30Sec}>+30 sec</button>
                    <p>{this.state.error}</p>
                </form>
            </div>
        );
    }
}

export default Timer;