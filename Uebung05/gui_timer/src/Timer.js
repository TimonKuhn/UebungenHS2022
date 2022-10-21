import React, {Component} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";


class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {timer: 10, render: true};
        this.started = false
        this.eingabefeld = <Grid style={ {margin: 24} }>
                            <TextField id="123" label="Wie lang soll der Timer sein?" variant="outlined" onChange={this.changeTimer} />
                            </Grid>

        // alle events müssen registriert werden über das bind
        this.updateTimer = this.updateTimer.bind(this);
        this.start = this.start.bind(this)
        this.changeTimer = this.changeTimer.bind(this);
    }

    start() {
        if (!this.started) {
        this.interval = setInterval(this.updateTimer, 200);
        this.started = true;
        this.setState({render: false})
        }
        else {
            this.setState({timer: 10});
            this.started = false;
            this.setState({render: true})
            clearInterval(this.interval);
        }
    }

    updateTimer() {
        if (this.state.timer>0) {
        var minuseins = this.state.timer -1;
        this.setState({timer: minuseins});
        }
        else {
            this.setState({timer: "Fertig"});
           }
    }
    changeTimer(event) {
        const neuwert = event.target.value;
        this.setState({timer: neuwert});
    }

    render() {
        return(<>
            <h1>{this.state.timer}</h1>
            <Button onClick={this.start} variant="outlined">starten / zurücksetzen</Button>
            {this.state.render && this.eingabefeld}
        </>)
    }
}

export default Timer;