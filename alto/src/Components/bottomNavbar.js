// src/components/BottomNavbar.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/BottomNavbar.css"; // Подключение CSS файла для стилей

const BottomNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Получаем текущий путь

    // Функция для проверки, активна ли вкладка
    const isActive = (path) => location.pathname === path;

    return (
        <div className="_navbar_1cr97_7" id="navDiv">
            <div
                className={`_navbarItem_1cr97_20 ${isActive("/home") ? "_isActive_1cr97_41" : ""}`}
                onClick={() => {
                    navigate("/home")
                    window.Telegram.WebApp.HapticFeedback.impactOccurred('soft');
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                        stroke="#757575" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>


                <div className="_navbarItemTitle_1cr97_29">Home</div>
            </div>

            <div
                className={`_navbarItem_1cr97_20 ${isActive("/tasks") ? "_isActive_1cr97_41" : ""}`}
                onClick={() => {
                    navigate("/tasks")
                    window.Telegram.WebApp.HapticFeedback.impactOccurred('soft');
                }}
            >
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_61_135)">
                        <path
                            d="M12 3V21M8 3H22C23.1046 3 24 3.89543 24 5V19C24 20.1046 23.1046 21 22 21H8C6.89543 21 6 20.1046 6 19V5C6 3.89543 6.89543 3 8 3Z"
                            stroke="#767676" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_61_135" x="-1" y="0" width="32" height="32" filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_61_135"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_61_135" result="shape"/>
                        </filter>
                    </defs>
                </svg>

                <div className="_navbarItemTitle_1cr97_29" style={{marginTop: -5}}>Tasks</div>
            </div>

            <div
                className={`_navbarItem_1cr97_20 ${isActive("/leaderboard") ? "_isActive_1cr97_41" : ""}`}
                onClick={() => {
                    navigate("/leaderboard")
                    window.Telegram.WebApp.HapticFeedback.impactOccurred('soft');
                }}
            >
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5 20V10M12.5 20V4M6.5 20V14" stroke="#757575" stroke-width="2.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>

                <div className="_navbarItemTitle_1cr97_29">Leaderboard</div>
            </div>

            <div
                className={`_navbarItem_1cr97_20 ${isActive("/invite") ? "_isActive_1cr97_41" : ""}`}
                onClick={() => {
                    navigate("/invite")
                    window.Telegram.WebApp.HapticFeedback.impactOccurred('soft');
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_61_143)">
                        <path
                            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                            stroke="#757575" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_61_143">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

                <div className="_navbarItemTitle_1cr97_29">Frens</div>
            </div>
            <div
                className={`_navbarItem_1cr97_20 ${isActive("/wallet") ? "_isActive_1cr97_41" : ""}`}
                onClick={() => {
                    navigate("/wallet")
                    window.Telegram.WebApp.HapticFeedback.impactOccurred('soft');
                }}
            >
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_61_147)">
                        <path
                            d="M1.5 10H23.5M3.5 4H21.5C22.6046 4 23.5 4.89543 23.5 6V18C23.5 19.1046 22.6046 20 21.5 20H3.5C2.39543 20 1.5 19.1046 1.5 18V6C1.5 4.89543 2.39543 4 3.5 4Z"
                            stroke="#757575" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_61_147">
                            <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                        </clipPath>
                    </defs>
                </svg>


                <div className="_navbarItemTitle_1cr97_29">Wallet</div>
            </div>
        </div>
    );
};

export default BottomNavbar;
