import React, { useEffect, useContext,useState, useRef } from "react";
import axios from "axios";
import { UserContext } from "../Context/UserContext";
import { RewardsContext } from "../Context/RewardsContext";
import { TasksContext } from "../Context/TasksContext";
import { LeaderboardContext } from "../Context/LeaderboardContext";
import { useNavigate } from "react-router-dom";
import {API_BASE_URL} from '../Helpers/api';
const PreLoad = ({ telegramId }) => {
    const navigate = useNavigate();
    const { user, setUser, updateUserBalance } = useContext(UserContext);
    const { setRewards } = useContext(RewardsContext);
    const { setTasks } = useContext(TasksContext);
    const { setUserStats, setLeaderboard, setCount,setFriendsStats } = useContext(LeaderboardContext);
    const [rewardData, setRewardData] = useState(null);
    const [showRewardPage, setShowRewardPage] = useState(false);

    const hasFetchedData = useRef(false);
    useEffect(() => {
        if (hasFetchedData.current) return;
        const loadData = async () => {
            try {
                hasFetchedData.current = true;
                const rewardResult = await fetchDailyReward(telegramId);
                if (rewardResult) {
                    setRewardData(rewardResult);
                    setShowRewardPage(true);
                    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
                    // Скрыть RewardPage через 5 секунд и загрузить остальные данные
                    setTimeout(async () => {
                        setShowRewardPage(false);
                        await fetchAllData(telegramId);
                        navigate("/home");
                    }, 3000);

                } else {
                    await fetchAllData(telegramId);
                }
            } catch (error) {
                console.error("Error loading data", error);
            }
        };

        loadData();
    }, [telegramId, navigate]);
    const fetchAllData = async (telegramId) => {
        await fetchUser(telegramId);
        await fetchUserRewards(telegramId);
        await fetchTasks(telegramId);
    };

    const fetchUser = async (telegramId) => {
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
                navigate("/welcome"); // Navigate to WelcomePage if user is not found
            } else {
                console.error("Failed to fetch user:", error);
            }
        }
    };

    const fetchUserRewards = async (telegramId) => {
        try {
            console.log(telegramId)
            const response = await axios.get(`${API_BASE_URL}/users/${telegramId}/rewards/`);
            if (response.status === 200 && response.data.status === "success") {
                setRewards(response.data.reward);

            } else{
                navigate("/welcome");
            }
        } catch (error) {
            console.error("Failed to fetch user rewards:", error);
        }
    };
    const fetchTasks = async (telegramId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/users/${telegramId}/tasks/`);
            if (response.status === 200 && response.data.status === "success") {
                setTasks(response.data.tasks);
                window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');

                if(!showRewardPage) {
                 navigate("/home");
                }
            } else {
                console.error('Error fetching tasks:', response.data.message);
            }
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
        }
    };
    const fetchDailyReward = async (telegramId) => {
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
    return (
        <div>
            {showRewardPage ? (
                <RewardPage rewardData={rewardData} />
            ) : (
                <div className="_view_sf2n5_1 _view_1x19s_1" style={{opacity: 1}}>
                    <div className="_title_1x19s_5">PRIME</div>
                    <div className="_mascote_94k9d_1 _centered_94k9d_13 _loaded_91hw8">
                        <img
                            id="home-mascote"
                            src={`${process.env.PUBLIC_URL}/resources_directory/IMG_2429.webp`}
                            className="_doggy_94k9d_6 louve_t09 _width-82_94k9d_23 _mascote_1vo1r_60 _isRendered_1vo1r_63"
                            alt="Mascote"
                        />
                    </div>
                    <div className="_subtitleEmpty_1x19s_19">Loading...</div>
                </div>
            )}
        </div>
    );
};

const RewardPage = ({rewardData}) => {
    const {streak, reward} = rewardData;

    return (
        <div class="_page_1ulsb_1" style={{zIndex: 100000}}>
            <div className="_gameView_1cr97_1" id="game-view">
                <div className="_view_sf2n5_1 _view_1vo1r_1" style={{opacity: 1}}>
                    <div className="_title_1vo1r_5">
                        <div style={{flexDirection: "row "}}
                             className={`_balance_eubs4_1 balance-text _exclusive_font `}>
                            <span style={{fontSize: "12vw", color: "white"}}>ALTO</span>
                        </div>
                    </div>
                    <div className="_party">
                        <img
                            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Activity/Party%20Popper.webp"
                            alt="Party Popper" />
                    </div>
                    <div className="_title_1vo1r_5">
                        <div style={{flexDirection: "row "}}
                             className={`_balance_eubs4_1 balance-text _exclusive_font `}>
                            <span style={{fontSize: "12vw", color: "white"}}>Your daily rewards</span>
                        </div>
                    </div>
                    <div className="_walletConnectHolder_1vo1r_67">
                        <div className="_walletItem">
                            <div className="_mascote_94k9d_1 _centered_94k9d_13"
                                 style={{marginTop: "5%", alignItems: "center"}}>
                                <img id="home-mascote"
                                     src={`${process.env.PUBLIC_URL}/resources_directory/image_2024-09-01_13-13-46.png`}
                                     className="_doggy_94k9d_6 _width-82_94k9d_23 _mascote_1vo1r_60 _isRendered_1vo1r_63">

                                </img>
                                <div style={{flexDirection: "row "}}
                                     className={`_balance_eubs4_1 balance-text _exclusive_font`}>
                                    <span style={{fontSize: "12vw", color: "white"}}>80</span>
                                </div>
                               
                            </div>
                            <span>Alto Points</span>
                        </div>
                        <div className="_walletItem">
                            <div className="_mascote_94k9d_1 _centered_94k9d_13"
                                 style={{marginTop: "5%", alignItems: "center"}}>
                                <img id="home-mascote"
                                     src={`${process.env.PUBLIC_URL}/resources_directory/image_2024-09-01_21-21-19.png`}
                                     className="_doggy_94k9d_6 _width-82_94k9d_23 _mascote_1vo1r_60 _isRendered_1vo1r_63"/>
                                 
                                <div style={{flexDirection: "row "}}
                                     className={`_balance_eubs4_1 balance-text _exclusive_font `}>
                                    <span style={{fontSize: "12vw", color: "white"}}>8</span>
                                </div>
                               
                            </div>
                            <span>Game Pass</span>
                        </div>
                      
                    </div>
                    <span>Come back tomorrow for check-in day 4 Tip: Skipping a day resets your check-in.</span>
                </div>  
                <div className="_buttonWrap_1x19s_70" style={{justifyContent:"center",width:"100%"}}>
                        <div className="_root_oar9p_1 _type-yellow_oar9p_43" style={{width:"100%"}}
                            >Continue
                        </div>
                    </div>
            </div>
        </div>
    );
};
export default PreLoad;
