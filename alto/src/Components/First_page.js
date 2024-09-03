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
            <img
                src={`${process.env.PUBLIC_URL}/resources_directory/IMG_2429.webp`}
                alt="Character"
                className="welcome-image"
            />
            <h1 className="welcome-text">👋Hey!</h1>
            <p className="welcome-subtext">Lets go $PRIME together!</p>
            <div className="_root_oar9p_1 _type-blue_oar9p_88 _fixedBottom_oar9p_110" onClick={handleButtonClick}>Wow, let's go!</div>
        </div>
    );
};

export default WelcomePage;
