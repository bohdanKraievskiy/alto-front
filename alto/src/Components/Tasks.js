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
const Tasks = ({telegramId,username_curently}) => {
    const navigate = useNavigate();
    const { user,fetchUser,updateUserBalance} = useContext(UserContext);
    const { rewards,fetchUserRewards } = useContext(RewardsContext);
    const {tasks,fetchTasks} = useContext(TasksContext);
    const [isLoading, setIsLoading] = useState(false);
    const userFetchedRef = useRef(false);
    const rewardsFetchedRef = useRef(false);
    const tasksFetchedRef = useRef(false);
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
    useEffect(() => {
        if (animated) {
            setAnimated(true)
            const timer = setTimeout(() => setAnimated(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [user.balance]);

    return (
        <div class="_page_1ulsb_1" style={{zIndex:100000}}>
            <div className="_gameView_1cr97_1" id="game-view">
                <div className="_view_sf2n5_1 _view_1vo1r_1" style={{opacity: 1}}>
                    <div className="_taskList_dti3z_1">
                        <div className="_title_dti3z_5">Tasks</div>
                        <div>
                            {tasks.map((task, index) => (
                                !task.completed && (
                                    <TaskItem
                                        key={index}
                                        index={index}
                                        title={task.title}
                                        ton={task.ton}
                                        footerText={task.reward}
                                        url={task.url}
                                        setAnimated={animated}
                                        username_curently={username_curently}
                                    />
                                )
                            ))}
                        </div>
                    </div>
                    <div className="_rewardList_1a8v0_1">
                        <div className="_title_1a8v0_5">Your rewards</div>
                        {rewards.age != null && rewards.age !== 0 &&
                            <RewardItem text="Account age" details={rewards.age.toString()}/>}
                        {rewards.boost !== 0 && <RewardItem text="Boosts reward" details={rewards.boost}/>}
                        {rewards.game !== 0 && <RewardItem text="Game reward" details={rewards.game}/>}
                        {rewards.daily !== 0 && <RewardItem text="Daily reward" details={rewards.daily}/>}
                        {rewards.frens !== 0 && <RewardItem text="Friends reward" details={rewards.frens}/>}
                        {rewards.premium !== 0 && <RewardItem text="Telegram Premium" details={rewards.premium}/>}
                        {rewards.tasks !== 0 && <RewardItem text="Tasks reward" details={rewards.tasks}/>}
                        {rewards.total !== 0 && <RewardItem text="Total reward" details={rewards.total}/>}
                        {tasks.map((task, index) => (
                            task.completed && <RewardItem key={index} text={task.title} details={task.reward}/>
                        ))}
                    </div>
                    <a className="_policyLink_1vo1r_85"
                    >Privacy
                        policy</a></div>
            </div>
        </div>
    )
        ;
};

export default Tasks;