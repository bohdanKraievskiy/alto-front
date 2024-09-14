// src/Helpers/dataFetchers.js
import axios from 'axios';
import { API_BASE_URL } from './api';

export const fetchLeaderboard = async (telegramId, setLeaderboard, setCount, setUserStats, setFriendsStats) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/leaderboard/`, {
            params: { telegram_id: telegramId }
        });
        if (response.status === 200) {
            const leaderboardData = response.data;
            setLeaderboard(leaderboardData.board);
            setCount(leaderboardData.count);
            setUserStats(leaderboardData.me);
            setFriendsStats(leaderboardData.friends_stats);
        }
    } catch (error) {
        console.error("Error fetching leaderboard data:", error);
    }
};

export const fetchUser = async (telegramId, setUser) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/join/`, {
            user_id: telegramId
        });

        if (response.status === 200 && response.data.status === "success") {
            setUser(response.data.user);
        } else {
            console.error("Error fetching user:", response.data.message);
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
        } else {
            console.error("Failed to fetch user:", error);
        }
    }
};

export const fetchUserRewards = async (telegramId, setRewards) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${telegramId}/rewards/`);
        if (response.status === 200 && response.data.status === "success") {
            setRewards(response.data.reward);
        }
    } catch (error) {
        console.error("Failed to fetch user rewards:", error);
    }
};

export const fetchTasks = async (telegramId, setTasks, showRewardPage) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${telegramId}/tasks/`);
        if (response.status === 200 && response.data.status === "success") {
            setTasks(response.data.tasks);
            window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
            if (!showRewardPage) {
            }
        } else {
            console.error('Error fetching tasks:', response.data.message);
        }
    } catch (error) {
        console.error("Failed to fetch tasks:", error);
    }
};

export const fetchDailyReward = async (telegramId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/daily_reward/`, {
            telegram_id: telegramId
        });
        if (response.status === 200 && response.data.status === "success") {
            return response.data;
        } else {
            console.error("Error fetching daily reward:", response.data.message);
            return null;
        }
    } catch (error) {
        console.error("Failed to fetch daily reward:", error);
        return null;
    }
};
