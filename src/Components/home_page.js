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
    const handleGoToBoosts = () => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        navigate("/boosts");
    };
    const handleGoToSlotMachine = () => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        navigate("/game");
    };
    const [animated, setAnimated] = useState(false);
    useEffect(() => {
        const loadData = async () => {
            // Check if user data is already fetched
            if (!userFetchedRef.current) {
                if (!user) {
                    await fetchUser(telegramId);
                    userFetchedRef.current = true;
                } else {
                    userFetchedRef.current = true;
                }
            }

            // Check if rewards data is already fetched
            if (!rewardsFetchedRef.current ) {
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
                    <div className="_header_home_menu_icon" onClick={handleGoToBoosts}>
                        <svg width="30" height="30" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_50_324)">
                                <rect x="2.5" y="2.5" width="40" height="40" rx="20" fill="white"/>
                                <g clip-path="url(#clip1_50_324)">
                                    <path
                                        d="M22.5 12.5L25.59 18.76L32.5 19.77L27.5 24.64L28.68 31.52L22.5 28.27L16.32 31.52L17.5 24.64L12.5 19.77L19.41 18.76L22.5 12.5Z"
                                        stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_50_324">
                                    <rect x="2.5" y="2.5" width="40" height="40" rx="20" fill="white"/>
                                </clipPath>
                                <clipPath id="clip1_50_324">
                                    <rect width="24" height="24" fill="white" transform="translate(10.5 10.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="_title_1vo1r_5">
                        <div style={{flexDirection: "row "}}
                             className={`_balance_eubs4_1 balance-text _exclusive_font ${animated ? 'balance-animated' : ''}`}>
                            <span style={{fontSize: "16vw", color: "white", marginTop: "10%"}}>ALTO</span>
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
                    <div className="_title_1vo1r_5" style={{margin:30}}>
                        <div style={{flexDirection: "row "}}
                             className={`_balance_eubs4_1 balance-text _exclusive_font ${animated ? 'balance-animated' : ''}`}>
                            <span style={{fontSize: "14vw", color: "white"}}>${user.balance}</span>
                        </div>
                    </div>
                    <div className="_mascote_94k9d_1 _centered_94k9d_13"
                         style={{marginTop: "-5%", alignItems: "center"}}>

                        <img id="home-mascote"
                             src={imageSrc}
                             className="_doggy_94k9d_6 _width-82_94k9d_23 _mascote_1vo1r_60 _isRendered_1vo1r_63">

                        </img>
                    </div>
                    <div className="_upper_home_menu_text">
                        <div style={{flexDirection: "row "}}
                             className={`_balance_eubs4_1 balance-text _margin_flexible _exclusive_font ${animated ? 'balance-animated' : ''}`}>
                            <span style={{fontSize: "6vw", color: "white"}}>Slot game 🎟️ {user.attempts_left}</span>
                        </div>
                        <div className="_root_oar9p_1 _type-white_oar9p_43" onClick={handleGoToSlotMachine}><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.17676 12.9229C0.908203 12.9229 0.693359 12.8252 0.532227 12.6299C0.375977 12.4395 0.297852 12.1855 0.297852 11.8682V1.57031C0.297852 1.25293 0.375977 0.999023 0.532227 0.808594C0.693359 0.618164 0.908203 0.522949 1.17676 0.522949C1.32324 0.522949 1.4624 0.549805 1.59424 0.603516C1.72607 0.652344 1.86523 0.718262 2.01172 0.80127L10.5518 5.74512C10.8594 5.9209 11.0718 6.07959 11.189 6.22119C11.311 6.35791 11.3721 6.52393 11.3721 6.71924C11.3721 6.91455 11.311 7.08301 11.189 7.22461C11.0718 7.36133 10.8594 7.52002 10.5518 7.70068L2.01172 12.6372C1.86523 12.7251 1.72607 12.7935 1.59424 12.8423C1.4624 12.896 1.32324 12.9229 1.17676 12.9229Z" fill="black"/>
                        </svg>
                            Play
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HomePage;