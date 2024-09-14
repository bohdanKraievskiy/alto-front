import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_BASE_URL} from "../Helpers/api";

export const RewardsContext = createContext();

export const RewardsProvider = ({ children }) => {
    const [rewards, setRewards] = useState([]);

    const fetchUserRewards = async (telegramId) => {
        try {
            console.log(telegramId)
            const response = await axios.get(`${API_BASE_URL}/users/${telegramId}/rewards/`);
            if (response.status === 200 && response.data.status === "success") {
                setRewards(response.data.reward);
            }
        } catch (error) {
            console.error("Failed to fetch user rewards:", error);
        }
    };


    return (
        <RewardsContext.Provider value={{ rewards, setRewards,fetchUserRewards }}>
            {children}
        </RewardsContext.Provider>
    );
};
