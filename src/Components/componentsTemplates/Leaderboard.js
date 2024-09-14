// src/components/Leaderboard.js
import React, { useContext } from 'react';
import { LeaderboardContext } from '../../Context/LeaderboardContext';

const Leaderboard = () => {
    const { leaderboard } = useContext(LeaderboardContext);

    // Limit to top 500 participants
    const topLeaderboard = leaderboard.slice(0, 500);

    return (
        <>
            {topLeaderboard.map((user, index) => (
                <div key={index} className="_item_iud9y_1">
                    <div className="_media_iud9y_8">
                        <img className="_avatar_iud9y_19"
                             src={`https://ui-avatars.com/api/?name=${user.username}&background=random&color=fff`}
                             loading="lazy" alt="Avatar"/>
                    </div>
                    <div className="_body_iud9y_25">
                        <div className="_text_iud9y_47">{user.username}</div>
                        <div className="_footer_iud9y_32">{user.score} WAP</div>
                    </div>
                    <div className="_details_iud9y_56"><span className="_medal_iud9y_66">#{index + 1}</span></div>
                </div>
            ))}
        </>
    );
};

export default Leaderboard;
