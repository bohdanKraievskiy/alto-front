import React, { useState, useContext } from "react";
import { UserContext } from '../Context/UserContext';

// Variables
const fruits = ["🍒", "🍋", "🍇", '🍊','🅱️','🔔','💎','7️⃣','🎰⃣'];
const prizes = [
    "💰", "🥧", "🍔", "🍩", "🍨", "🍕", "🥞", "🌹",
    "🐵", "🐶", "🎮", "🎹", "🎻", "🎸", "🎷", "🧦",
    "👑", "🚲", "🛸"
];

// Helper function
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Reel component
const Reel = ({ fruit, index, playing }) => (
    <div key={index} className="Reel">
        <div className={`Reel-plate Reel-plate-${index} ${playing ? "spin" : ""}`}>
            <span>{fruit}</span>
            <span>{getRandom(fruits)}</span>
            <span>{getRandom(fruits)}</span>
        </div>
    </div>
);

// Main Machine component
const Machine = () => {
    const { user } = useContext(UserContext); // Використання useContext для отримання даних
    const [reels, setReels] = useState([{ fruit: "💲" }, { fruit: "💲" }, { fruit: "💲" }]);
    const [message, setMessage] = useState("Try your luck and win some mad prizes!");
    const [playing, setPlaying] = useState(false);
    const [hasWon, setHasWon] = useState(false);

    const getResults = () => {
        setReels(reels.map(reel => ({ ...reel, fruit: getRandom(fruits) })));
        setPlaying(false);
        checkIfWon();
    };

    const play = () => {
        setPlaying(true);
        setHasWon(false);
        setTimeout(getResults, 2000);
    };

    const checkIfWon = () => {
        const won = reels.every(reel => reel.fruit === reels[0].fruit);
        setHasWon(won);
        setMessage(won
            ? `Congratulations! You win this awesome prize of ${getRandom(prizes)}`
            : "Sorry, try again!"
        );
    };

    const handleClick = () => {
        if (!playing) {
            play();
        }
    };

    return (
        <div className="_slot_machine_view">
            <div className="Machine">
                <div className="_title_1vo1r_5" style={{position:"absolute",top:40,margin:0}}>
                    <div style={{flexDirection: "row "}}
                         className={`_balance_eubs4_1 balance-text _exclusive_font `}>
                        <span style={{fontSize: "12vw", color: "black"}}>ALTO</span>
                    </div>
                </div>
                <div className="Reels">
                    {reels.map((reel, index) => (
                        <Reel key={index} fruit={reel.fruit} index={index + 1} playing={playing}/>
                    ))}
                </div>
                <div className="_upper_home_menu_text" style={{bottom: 30, color: "black",height:"auto"}}>
                    <div style={{flexDirection: "row"}}
                         className="_balance_eubs4_1 balance-text _margin_flexible _exclusive_font">
                        <span style={{fontSize: "6vw", color: "black"}}>
                            Slot game 🎟️ {user.attempts_left}
                        </span>
                    </div>
                    <div className="_root_oar9p_1 _type-white_oar9p_43" style={{background: "black", color: "white"}}
                         onClick={handleClick} disabled={playing}>
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.17676 12.9229C0.908203 12.9229 0.693359 12.8252 0.532227 12.6299C0.375977 12.4395 0.297852 12.1855 0.297852 11.8682V1.57031C0.297852 1.25293 0.375977 0.999023 0.532227 0.808594C0.693359 0.618164 0.908203 0.522949 1.17676 0.522949C1.32324 0.522949 1.4624 0.549805 1.59424 0.603516C1.72607 0.652344 1.86523 0.718262 2.01172 0.80127L10.5518 5.74512C10.8594 5.9209 11.0718 6.07959 11.189 6.22119C11.311 6.35791 11.3721 6.52393 11.3721 6.71924C11.3721 6.91455 11.311 7.08301 11.189 7.22461C11.0718 7.36133 10.8594 7.52002 10.5518 7.70068L2.01172 12.6372C1.86523 12.7251 1.72607 12.7935 1.59424 12.8423C1.4624 12.896 1.32324 12.9229 1.17676 12.9229Z"
                                fill="white"
                            />
                        </svg>
                        Play
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Machine;
