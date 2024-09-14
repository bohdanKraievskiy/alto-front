// src/components/LastPage.js
import React, {useContext, useEffect, useRef} from "react";
import "../Styles/mainStyles.css"; // Додайте CSS для стилізації
import UserBoard from "./componentsTemplates/UserBoard";
import Leaderboard from "./componentsTemplates/Leaderboard";
import {LeaderboardContext} from "../Context/LeaderboardContext";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../Context/UserContext";

const LeaderboardPage = ({telegramId}) => {
    const { user,updateUserBalance} = useContext(UserContext);
    const { count,userStats,leaderboard,fetchLeaderboard } = useContext(LeaderboardContext);
    const hasFetchedLeaderboard = useRef(false);
    useEffect(() => {
        const loadData = async () => {
            if (!hasFetchedLeaderboard.current && (!leaderboard || leaderboard.length === 0)) {
                await fetchLeaderboard(telegramId);
                hasFetchedLeaderboard.current = true;
            }

        };

        loadData();
    }, []);

    return (
        <div class="_page_1ulsb_1">
            <div className="_gameView_1cr97_1" id="game-view">
                <div className="_view_sf2n5_1 _view_zhpdf_1" style={{opacity: 1}}>
                    <div className="_title_zhpdf_5 _exclusive_font" style={{fontSize:"11vw"}}>WAP OF FAME</div>
                    <UserBoard telegramId={telegramId}/>
                    <div className="_boardTitle_zhpdf_23">{count?.toString()} holders</div>
                    <Leaderboard/>
                </div>
            </div>
        </div>
    );
};

export default LeaderboardPage;