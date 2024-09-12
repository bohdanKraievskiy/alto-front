import React, { ReactDOM } from "react";

// Variables
const domContainer = document.getElementById("root");
const fruits = ["🍒", "🍋", "🍇"];
const prizes = [
    "💰",
    "🥧",
    "🍔",
    "🍩",
    "🍨",
    "🍕",
    "🥞",
    "🌹",
    "🐵",
    "🐶",
    "🎮",
    "🎹",
    "🎻",
    "🎸",
    "🎷",
    "🧦",
    "👑",
    "🚲",
    "🛸"
];

// functions
function getRandom(arr) {
    let item = arr[Math.floor(Math.random() * arr.length)];
    return item;
}

// Alarm component
class Alarm extends React.Component {
    render() {
        return (
            <div className="Alarm-container">
                <div className={`Alarm ${this.props.hasWon ? "alert" : ""}`}>
                    <div className="Alarm-bulb" />
                </div>
            </div>
        );
    }
}

// Lights component
class Lights extends React.Component {
    static defaultProps = {
        numBulbs: 9
    };
    render() {
        const bulbs = Array.from({ length: this.props.numBulbs }).map(
            (bulb, index) => (
                <div key={index} className="Light-bulb">
                    {/* */}
                </div>
            )
        );
        return <div className="Lights">{bulbs}</div>;
    }
}

class Reel extends React.Component {
    render() {
        return (
            <div key={this.props.index} className="Reel">
                <div
                    className={`Reel-plate Reel-plate-${this.props.index} ${
                        this.props.playing ? "spin" : ""
                    }`}
                >
                    <span>{this.props.fruit}</span>
                    <span>{getRandom(fruits)}</span>
                    <span>{getRandom(fruits)}</span>
                </div>
            </div>
        );
    }
}

// Slot Component
class Slot extends React.Component {
    render() {
        return (
            <div className="Slot">
                <div className="Slot-inner" />
            </div>
        );
    }
}



class Machine extends React.Component {
    state = {
        reels: [{ fruit: "💲" }, { fruit: "💲" }, { fruit: "💲" }],
        message: "Try your luck and win some mad prizes!",
        playing: false,
        hasWon: false
    };
    getResults = () => {
        this.setState(
            prevState => ({
                reels: prevState.reels.map(reel => {
                    return { ...reel, fruit: getRandom(fruits) };
                }),
                playing: false
            }),
            () => this.checkIfWon()
        );
    };
    play = () => {
        this.setState({ playing: true, hasWon: false });
        setTimeout(this.getResults, 2000);
    };
    handleClick = () => {
        this.play();
    };
    checkIfWon = () => {
        this.setState(prevState => ({
            hasWon: this.state.reels.every(
                reel => reel.fruit === this.state.reels[0].fruit
            ),
            message: this.state.reels.every(
                reel => reel.fruit === this.state.reels[0].fruit
            )
                ? `Congratulations! You win this awesome prize of ${getRandom(prizes)}`
                : "Sorry, try again!"
        }));
    };
    render() {
        const reels = this.state.reels.map((reel, index) => (
            <Reel
                key={index}
                fruit={reel.fruit}
                index={index + 1}
                playing={this.state.playing}
            />
        ));
        return (
            <div className="Machine">
                <Alarm hasWon={this.state.hasWon} />
                <Lights />
                <div className="Reels">{reels}</div>
                <button onClick={this.handleClick} disabled={this.state.playing}>
                    Play
                </button>
                <Slot />
                <div className="Machine-bottom">{/* */}</div>
            </div>
        );
    }
} export default Machine;



