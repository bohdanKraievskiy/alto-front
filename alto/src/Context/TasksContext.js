import React, { createContext, useState,useEffect } from 'react';
import axios from "axios";
import {API_BASE_URL} from "../Helpers/api";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        {"title": "Subscribe to PRIME channel", "url": "https://t.me/WeArePrimeNews", "reward": "+1000",
            "completed": false},
        {"title": "Subscribe to PRIME X", "url": "https://x.com/WeArePrimeOnly",
            "reward": "+1000", "completed": false},
        {"title": "Invite 5 friends", "url": "", "reward": "+5000", "completed": false,
        },
        {"title": "Invite 10 friends", "url": "", "reward": "+10000", "completed": false,
        },
        {"title": "Add 🐵 in Telegram name", "url": "",
            "reward": "+1000", "completed": false}
    ]);
    const completeTask = (index) => {
        setTasks(tasks.map((task, i) => i === index ? { ...task, completed: true } : task));
    };

    const fetchTasks = async (telegramId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/users/${telegramId}/tasks/`);
            if (response.status === 200 && response.data.status === "success") {
                setTasks(response.data.tasks);
                window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
                localStorage.setItem("tasks", JSON.stringify(response.data.tasks));

            } else {
                console.error('Error fetching tasks:', response.data.message);
            }
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
        }
    };


    return (
        <TasksContext.Provider value={{ tasks, setTasks, completeTask,fetchTasks }}>
            {children}
        </TasksContext.Provider>
    );
};
