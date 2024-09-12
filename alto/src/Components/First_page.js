import React, { useEffect } from "react";
import "../Styles/First_page.css"; // Додайте CSS для стилізації
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/second");
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    };
    return (
        <div className="welcome-page">
            <div className="_title_1vo1r_5">
                <div style={{flexDirection: "row "}}
                     className={`_balance_eubs4_1 balance-text _exclusive_font `}>
                    <span style={{fontSize: "20vw", color: "white",marginBottom:'90%'}}>ALTO</span>
                </div>
            </div>
            <h1 className="welcome-text _exclusive_font">👋Hey!</h1>
            <p className="welcome-subtext _exclusive_font">Lets go ALTO together!</p>
            <div className="_root_oar9p_1 _type-blue_oar9p_88 _fixedBottom_oar9p_110" onClick={handleButtonClick}>Wow,
                let's go!
            </div>
        </div>
    );
};

export default WelcomePage;
