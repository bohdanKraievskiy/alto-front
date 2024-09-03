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
                    <div className="_party">
                        <img
                            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Activity/Party%20Popper.webp"
                            alt="Party Popper" />
                    </div>
                    <div className="_title_1vo1r_5">
                        <div style={{flexDirection: "row "}}
                             className={`_balance_eubs4_1 balance-text _exclusive_font ${animated ? 'balance-animated' : ''}`}>
                            <span style={{fontSize: "12vw", color: "white"}}>Your daily rewards</span>
                        </div>
                    </div>
                    <div className="_walletConnectHolder_1vo1r_67">
                        <div className="_walletItem">
                            <div className="_mascote_94k9d_1 _centered_94k9d_13"
                                 style={{marginTop: "5%", alignItems: "center"}}>
                                <img id="home-mascote"
                                     src={imageSrc}
                                     className="_doggy_94k9d_6 _width-82_94k9d_23 _mascote_1vo1r_60 _isRendered_1vo1r_63">

                                </img>
                                <div style={{flexDirection: "row "}}
                                     className={`_balance_eubs4_1 balance-text _exclusive_font ${animated ? 'balance-animated' : ''}`}>
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
                                     className={`_balance_eubs4_1 balance-text _exclusive_font ${animated ? 'balance-animated' : ''}`}>
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

export default HomePage;