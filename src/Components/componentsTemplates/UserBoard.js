// src/components/UserBoard.js
import React, {useContext, useEffect} from 'react';
import { LeaderboardContext } from '../../Context/LeaderboardContext';
import {UserContext} from "../../Context/UserContext";
import {useNavigate} from "react-router-dom";

const UserBoard = ({telegramId}) => {
    const { leaderboard,fetchLeaderboard } = useContext(LeaderboardContext);
    const { userStats } = useContext(LeaderboardContext);
    const { user, setUser, fetchUser } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if(!user || Object.keys(user).length === 0) {
            navigate("/preload")
        }
    }, []);

    if (!userStats) return null;
    const userPosition = leaderboard.findIndex(leaderboardUser => leaderboardUser.username === user.username) + 1;

    return (
        <div className="_me_zhpdf_13">
            <div className="_item_iud9y_1">
                <div className="_media_iud9y_8">
                    <img className="_avatar_iud9y_19"
                         src={`https://ui-avatars.com/api/?name=${user?.username}&background=random&color=fff`}
                         loading="lazy" alt="Avatar"/>
                </div>
                <div className="_body_iud9y_25">
                    <div className="_text_iud9y_47">{user?.username}</div>
                    <div className="_footer_iud9y_32">{user?.balance} WAP</div>
                </div>
                <div className="_details_iud9y_56">#{userStats.position}</div>
            </div>
        </div>
    );
};

export default UserBoard;
