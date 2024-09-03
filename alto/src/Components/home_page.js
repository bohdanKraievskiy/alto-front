import React, { useContext, useEffect,useState,useRef } from "react";
import "../Styles/mainStyles.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../Context/UserContext';
import { RewardsContext } from '../Context/RewardsContext';
import CommunitySlide from './componentsTemplates/CommunitySlide';
import TaskItem from './componentsTemplates/TaskItem';
import RewardItem from './componentsTemplates/RewardItem';
import {TasksContext} from "../Context/TasksContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules';
SwiperCore.use([Pagination]);
const HomePage = ({telegramId,username_curently}) => {
    const navigate = useNavigate();
    const { user,fetchUser,updateUserBalance} = useContext(UserContext);
    const { rewards,fetchUserRewards } = useContext(RewardsContext);
    const {tasks,fetchTasks} = useContext(TasksContext);
    const [isLoading, setIsLoading] = useState(false);
    const userFetchedRef = useRef(false);
    const rewardsFetchedRef = useRef(false);
    const tasksFetchedRef = useRef(false);
    const handleGoToScoreTON = () => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        setIsLoading(true);
    };
    const handleGoToScore = () => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        navigate("/last_check");
    };
    const [animated, setAnimated] = useState(false);
    useEffect(() => {
        const loadData = async () => {
            // Check if user data is already fetched
            if (!userFetchedRef.current) {
                await fetchUser(telegramId);
                userFetchedRef.current = true;
            }

            // Check if rewards data is already fetched
            if (!rewardsFetchedRef.current) {
                if (!rewards || Object.keys(rewards).length === 0) {
                    navigate("/preload");
                } else {
                    rewardsFetchedRef.current = true;
                }
            }

            // Check if tasks data is already fetched
            if (!tasksFetchedRef.current) {
                if (!tasks || tasks.length === 0) {
                    navigate("/preload");
                } else {
                    tasksFetchedRef.current = true;
                }
            }
        };

        loadData();
    }, []); // Ensure the effect runs only once
    const handleClose = () => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        setIsLoading(false);
    };
    useEffect(() => {
        if (animated) {
            setAnimated(true)
            const timer = setTimeout(() => setAnimated(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [user.balance]);

    const imageSrc = animated
        ? `${process.env.PUBLIC_URL}/resources_directory/Frame7.webp`
        : `${process.env.PUBLIC_URL}/resources_directory/image_2024-09-01_13-13-46.png`;
    console.log(tasks)
    return (
        <div class="_page_1ulsb_1" style={{zIndex: 100000}}>
            <div className="_gameView_1cr97_1" id="game-view">
                <div className="_view_sf2n5_1 _view_1vo1r_1" style={{opacity: 1}}>
                    <div className="_title_1vo1r_5">
                        <div style={{flexDirection: "row "}}
                             className={`_balance_eubs4_1 balance-text _exclusive_font ${animated ? 'balance-animated' : ''}`}>
                            <span style={{fontSize: "12vw", color: "white"}}>ALTO</span>
                        </div>
                    </div>
                    <div className="_media_iud9y_8 _game_start87">
                        <img
                            className="_avatar_iud9y_19"
                            src={`https://ui-avatars.com/api/?name=${user.username}&background=random&color=fff`}
                            loading="lazy"
                            alt="Avatar"
                        />
                    </div>
                    <div className="_title_1vo1r_5">
                        <div style={{flexDirection: "row "}}
                             className={`_balance_eubs4_1 balance-text _exclusive_font ${animated ? 'balance-animated' : ''}`}>
                            <span style={{fontSize: "12vw", color: "white"}}>${user.balance}</span>
                        </div>
                    </div>
                    <div className="_mascote_94k9d_1 _centered_94k9d_13"
                         style={{marginTop: "5%", alignItems: "center"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1906" height="676" viewBox="0 0 1906 676"
                             fill="none" className="_glass_94k9d_29">
                            <path
                                d="M1883.31 89.9479C1883.31 53.1478 1853.48 23.3154 1816.68 23.3154H1201.73C1162.44 23.3154 1127.14 40.388 1102.85 67.4479H824.909C809.553 41.0733 780.975 23.3154 748.209 23.3154H320.821C156.058 23.3154 22.4922 156.881 22.4922 321.644V509.207C22.4922 588.661 86.9024 653.071 166.357 653.071H483.414C678.643 653.071 836.908 494.807 836.908 299.577V200.713H1068.9V354.743C1068.9 519.505 1202.46 653.071 1367.23 653.071H1397.42C1665.77 653.071 1883.31 435.53 1883.31 167.18V89.9479Z"
                                fill="black" stroke="white" stroke-width="45"></path>
                        </svg>
                        <img id="home-mascote"
                             src={imageSrc}
                             className="_doggy_94k9d_6 _width-82_94k9d_23 _mascote_1vo1r_60 _isRendered_1vo1r_63">

                        </img>
                    </div>
                    <div style={{flexDirection: "row "}}
                         className={`_balance_eubs4_1 balance-text _exclusive_font ${animated ? 'balance-animated' : ''}`}>
                        <span style={{fontSize: "8vw", color: "white"}}>Slot game 🎟️ {user.attempts_left}</span>
                    </div>

                </div>
              


            </div>
        </div>
    );
};

export default HomePage;