import React, { useState, useContext, useEffect } from "react";
import "../Styles/mainStyles.css";
import { useNavigate } from "react-router-dom";
import { LeaderboardContext } from "../Context/LeaderboardContext";

const InvitePage = ({ telegramId }) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [copyMessage, setCopyMessage] = useState(false);
    const { friends_stats,fetchLeaderboard } = useContext(LeaderboardContext);
    const [activeTab, setActiveTab] = useState('Frens');
    useEffect(() => {
        const loadData = async () => {
            fetchLeaderboard(telegramId)
        };

        loadData();
    }, []);
    // Determine if the device is an iPhone
    const isIPhone = () => /iPhone|iPad|iPod/i.test(navigator.userAgent);

    const handleGoToScore = () => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        setIsLoading(true);
        // You may want to navigate or perform another action here.
    };

    const handleClose = () => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        setIsLoading(false);
    };

    const handleCopyInviteLink = () => {
        const inviteLink = `https://t.me/WeArePrime_Bot/app?startapp=${telegramId}`;
        navigator.clipboard.writeText(inviteLink).then(() => {
            if (isIPhone()) {
                alert('Link was copied to the clipboard!!');
            } else {
                setCopyMessage(true);
                setTimeout(() => setCopyMessage(false), 5000);
            }
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    const handleShareInviteLink = () => {
        const shareLink = `https://t.me/share/url?url=https://t.me/WeArePrime_Bot/app?startapp=${telegramId}\n`;
        window.open(shareLink, '_blank');
    };

    const renderFriendsList = () => {
        return friends_stats?.map((friend, index) => (

            <div key={index} className="_item_iud9y_1">
                <div className="_media_iud9y_8">
                    <img
                        className="_avatar_iud9y_19"
                        src={`https://ui-avatars.com/api/?name=${friend.username}&background=random&color=fff`}
                        loading="lazy"
                        alt="Avatar"
                    />
                </div>
                <div className="_body_iud9y_25">
                    <div className="_text_iud9y_47">{friend.username}</div>
                    <div className="_footer_iud9y_32">{friend.score} $WAP</div>
                </div>

            </div>

        ));
    };

    const handleTabChange = (tab) => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('medium');
        setActiveTab(tab);
    };

    const renderPrimeList = () => {
        return friends_stats.map((friend, index) => {
            // Преобразуем дату в нужный формат
            const date = new Date(friend.date_added);
            const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

            return (
                <div key={index} className="_item_iud9y_1">
                    <div className="_body_iud9y_25">
                        <div className="_text_iud9y_47 " style={{
                            display: "flex",
                            flexDirection: "row",
                            textAlign: "start",
                            alignItems: "start",
                            placeItems: "start",
                            justifyContent: "start"
                        }}>
                            <div
                                style={{color: "white"}}>+ {(friend?.friend_bonus ?? 0) + (friend?.balance_increment ?? 0)}</div>
                            &nbsp;
                            <div style={{color: "#F7C605"}}> $WAP</div>
                        </div>

                        <div className="_footer_iud9y_32">{formattedDate}</div>
                    </div>
                    <div className="_details_iud9y_56">
                        <span className="_medal_iud9y_66">by 🐵 {friend.username}</span>
                        <div className="_footer_iud9y_32">
                            {friend.checked_id ? 'Authorized' : 'Checking in'}
                        </div>
                    </div>
                </div>
            );
        });
    };


    return (
        <div className="_page_1ulsb_1">
            <div className="_gameView_1cr97_1" id="game-view">
                <div className="_view_sf2n5_1 _view_1x19s_1" style={{opacity: 1, alignItems: "center"}}>
                    <div className={`_backdrop_wo9zh_1  ${isLoading ? '_opened_wo9zh_16' : ''}`}></div>
                    <div className={`_content_wo9zh_21 ${isLoading ? '_opened_wo9zh_16' : ''}`}>
                        <div className={`_cross_wo9zh_61 ${isLoading ? '_opened_wo9zh_16' : ''}`}
                             onClick={handleClose}></div>
                        <div className={`_contentInner_wo9zh_44 ${isLoading ? '_opened_wo9zh_16' : ''}`}>
                            <div className="_sheetTitle_1x19s_93">Referral Rules</div>
                            <div className="_separator_1x19s_86"></div>
                            <div className="_buttons_1x19s_79">
                                <div className="_body_iud9y_25">
                                    <div className="_rullers_o1nm32">Invite a Friend</div>
                                    <div className="_footer_ruller_7yda">You will both get 2,000 WAP and 1 <svg
                                        width="15" height="20" viewBox="0 0 40 27" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M15.9546 12.5738V17.901H14.2751V12.5738H15.9546ZM15.9546 12.5738V10.8915H17.634V17.901H16.0945V12.5738H15.9546ZM8.95695 9.06908H14.1352V10.7513H12.4558V17.901H10.7764V10.7513H8.95699V9.06908H8.95695ZM19.5934 17.901H17.774V10.7513H16.0946V9.06908H15.9546V10.7513H14.2752V7.24659H17.774V5.5643H12.4558V3.74182H10.6364V2.05962H28.2705V23.2282H23.0922V21.4057H19.5934V19.7235H17.774V18.0412H19.5934V17.901V17.901ZM7.13754 12.5738H8.95695V16.2188H7.27749V17.901H5.45817V19.7234H1.95931V24.9104H28.4104V1.91943H1.81931V9.06908H5.45813V10.7513H7.13754V12.5738V12.5738Z"
                                              fill="#E9E8E6"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M28.4104 7.24659V9.06908H30.2299V14.3962H28.4104V16.0785H30.2299V21.5459H28.5504V23.2282H30.2299V25.0506H42.5456V19.7234H38.9069V17.901H37.3674V17.7608H37.2274V16.0785H35.5481V12.714H37.2274V10.7513H39.0468V9.06908H42.5456V1.91943H30.2299V7.1064H30.0899V7.24659H28.4104Z"
                                              fill="#FF4392"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M24.9116 10.893H26.591V12.5753H24.9116V10.893ZM23.0923 12.5753H24.7716V14.2575H23.0923V16.2202H24.9116V14.3977H26.591V17.9025H21.2728V9.07058H24.7716V10.7528H23.0923V12.5753ZM10.6364 3.74328H12.4558V5.56576H17.7741V7.24805H14.2752V10.7527H15.9547V9.07053H19.5934V18.0426H17.7741V19.7249H19.5934V21.4071H23.0923V23.2296H28.2705V2.06104H10.6365V3.74323L10.6364 3.74328Z"
                                              fill="#FEFDFE"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M42.5456 1.92057V0.238281H1.81931V1.92057H42.5456Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M42.5456 25.0518H1.81931V26.734H42.5456V25.0518Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M21.2729 17.9012H26.5911V14.3965H24.9116V16.219H23.0923V14.2564H24.7716V12.5741H23.0923V10.7515H24.7716V9.06934H21.2729V17.9012Z"
                                              fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M8.95689 10.7515H10.7764V17.9012H12.4558V10.7515H14.1352V9.06934H8.95689V10.7515Z"
                                              fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M19.5934 17.9012V9.06934H16.0946V10.7515H17.7741V17.9012H19.5934Z"
                                              fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M42.6856 19.7235H44.2251V24.9105L42.7226 25.0489L42.6856 19.7235ZM37.3674 17.7608V16.2188H38.9069V17.7608H37.3674ZM37.2274 16.0786V17.7608H37.3674V17.901H38.9069V19.7235H42.5456V25.0506H30.2298V23.2283H28.5504V21.546H30.2298V16.0786H28.4104V25.0507H44.365V19.5833H39.0468V16.0786H37.2274H37.2274Z"
                                              fill="#EE2460"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M1.81932 9.06908V1.91943H0V9.06908H1.81932Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M42.5456 9.06908V1.91943H28.4104V7.24659H30.0899V7.1064H30.2299V1.91943H42.5456V9.06908Z"
                                              fill="#EE2460"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M42.5455 1.91943V9.06908H44.225V1.91943H42.5455Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M15.9547 12.5749H16.0946V17.9021H17.6341V10.8926H15.9547V12.5749Z"
                                              fill="#FEFDFE"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M28.4104 9.06934V14.3965H30.2299V9.06934H28.4104Z" fill="#EE2460"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M37.2273 12.5741H39.0467V10.8917H42.5455V9.06934H39.0467V10.7515H37.2273V12.5741Z"
                                              fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M15.9546 12.5747H14.2751V17.9019H15.9546V12.5747Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M0.139938 24.9126H1.8193V19.7256H0.139938V24.9126Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M42.5455 25.0513H44.365V19.584H42.5455V25.0513Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M8.95691 16.0794V12.5747H7.13754V16.0794H8.95691Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M42.5456 19.7249V17.9023H38.9068V19.7249H42.5456Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M5.31817 9.06934H1.81931V10.7515H5.31817V9.06934Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M1.9593 19.5846H5.31822V17.9023H1.9593V19.5846Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M37.2273 16.0799V12.7153H35.548V16.0799H37.2273Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M24.9115 12.5749H26.591V10.8926H24.9115V12.5749Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M7.13759 12.5749V10.8926H5.45818V12.5749H7.13759Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M7.13759 16.0786H6.99758V16.2188H5.45818V17.7609H7.13759V16.0786Z"
                                              fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M37.2275 17.901H39.0469V16.0786H37.2275V17.901Z" fill="#3A1505"/>
                                    </svg>
                                    </div>
                                </div>
                                <div className="_body_iud9y_25">
                                    <div className="_rullers_o1nm32">Invite a Friend with a Telegram Premium Account
                                    </div>
                                    <div className="_footer_ruller_7yda">You will both get 20,000 WAP and 5 <svg
                                        width="15" height="20" viewBox="0 0 40 27" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M15.9546 12.5738V17.901H14.2751V12.5738H15.9546ZM15.9546 12.5738V10.8915H17.634V17.901H16.0945V12.5738H15.9546ZM8.95695 9.06908H14.1352V10.7513H12.4558V17.901H10.7764V10.7513H8.95699V9.06908H8.95695ZM19.5934 17.901H17.774V10.7513H16.0946V9.06908H15.9546V10.7513H14.2752V7.24659H17.774V5.5643H12.4558V3.74182H10.6364V2.05962H28.2705V23.2282H23.0922V21.4057H19.5934V19.7235H17.774V18.0412H19.5934V17.901V17.901ZM7.13754 12.5738H8.95695V16.2188H7.27749V17.901H5.45817V19.7234H1.95931V24.9104H28.4104V1.91943H1.81931V9.06908H5.45813V10.7513H7.13754V12.5738V12.5738Z"
                                              fill="#E9E8E6"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M28.4104 7.24659V9.06908H30.2299V14.3962H28.4104V16.0785H30.2299V21.5459H28.5504V23.2282H30.2299V25.0506H42.5456V19.7234H38.9069V17.901H37.3674V17.7608H37.2274V16.0785H35.5481V12.714H37.2274V10.7513H39.0468V9.06908H42.5456V1.91943H30.2299V7.1064H30.0899V7.24659H28.4104Z"
                                              fill="#FF4392"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M24.9116 10.893H26.591V12.5753H24.9116V10.893ZM23.0923 12.5753H24.7716V14.2575H23.0923V16.2202H24.9116V14.3977H26.591V17.9025H21.2728V9.07058H24.7716V10.7528H23.0923V12.5753ZM10.6364 3.74328H12.4558V5.56576H17.7741V7.24805H14.2752V10.7527H15.9547V9.07053H19.5934V18.0426H17.7741V19.7249H19.5934V21.4071H23.0923V23.2296H28.2705V2.06104H10.6365V3.74323L10.6364 3.74328Z"
                                              fill="#FEFDFE"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M42.5456 1.92057V0.238281H1.81931V1.92057H42.5456Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M42.5456 25.0518H1.81931V26.734H42.5456V25.0518Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M21.2729 17.9012H26.5911V14.3965H24.9116V16.219H23.0923V14.2564H24.7716V12.5741H23.0923V10.7515H24.7716V9.06934H21.2729V17.9012Z"
                                              fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M8.95689 10.7515H10.7764V17.9012H12.4558V10.7515H14.1352V9.06934H8.95689V10.7515Z"
                                              fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M19.5934 17.9012V9.06934H16.0946V10.7515H17.7741V17.9012H19.5934Z"
                                              fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M42.6856 19.7235H44.2251V24.9105L42.7226 25.0489L42.6856 19.7235ZM37.3674 17.7608V16.2188H38.9069V17.7608H37.3674ZM37.2274 16.0786V17.7608H37.3674V17.901H38.9069V19.7235H42.5456V25.0506H30.2298V23.2283H28.5504V21.546H30.2298V16.0786H28.4104V25.0507H44.365V19.5833H39.0468V16.0786H37.2274H37.2274Z"
                                              fill="#EE2460"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M1.81932 9.06908V1.91943H0V9.06908H1.81932Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M42.5456 9.06908V1.91943H28.4104V7.24659H30.0899V7.1064H30.2299V1.91943H42.5456V9.06908Z"
                                              fill="#EE2460"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M42.5455 1.91943V9.06908H44.225V1.91943H42.5455Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M15.9547 12.5749H16.0946V17.9021H17.6341V10.8926H15.9547V12.5749Z"
                                              fill="#FEFDFE"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M28.4104 9.06934V14.3965H30.2299V9.06934H28.4104Z" fill="#EE2460"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M37.2273 12.5741H39.0467V10.8917H42.5455V9.06934H39.0467V10.7515H37.2273V12.5741Z"
                                              fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M15.9546 12.5747H14.2751V17.9019H15.9546V12.5747Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M0.139938 24.9126H1.8193V19.7256H0.139938V24.9126Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M42.5455 25.0513H44.365V19.584H42.5455V25.0513Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M8.95691 16.0794V12.5747H7.13754V16.0794H8.95691Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M42.5456 19.7249V17.9023H38.9068V19.7249H42.5456Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M5.31817 9.06934H1.81931V10.7515H5.31817V9.06934Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M1.9593 19.5846H5.31822V17.9023H1.9593V19.5846Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M37.2273 16.0799V12.7153H35.548V16.0799H37.2273Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M24.9115 12.5749H26.591V10.8926H24.9115V12.5749Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M7.13759 12.5749V10.8926H5.45818V12.5749H7.13759Z" fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M7.13759 16.0786H6.99758V16.2188H5.45818V17.7609H7.13759V16.0786Z"
                                              fill="#3A1505"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M37.2275 17.901H39.0469V16.0786H37.2275V17.901Z" fill="#3A1505"/>
                                    </svg></div>
                                </div>
                                <div className="_body_iud9y_25">
                                    <div className="_rullers_o1nm32">Additional Incentives</div>
                                    <div className="_footer_ruller_7yda">Get 10% of Your Fren’s farming
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="_mascote_94k9d_1 _centered_94k9d_13">
                    </div>
                    <div style={{flexDirection: "row "}}
                         className={`_balance_eubs4_1 balance-text _exclusive_font `}>
                        <span style={{fontSize: "12vw", color: "white"}}>ALTO</span>
                    </div>
                    <img style={{width: "26vw",height:"24vw"}}
                         id="home-mascote"
                         src={`${process.env.PUBLIC_URL}/resources_directory/image_2024-09-01_20-57-01.png`}
                         className="_doggy_94k9d_6 _width-82_94k9d_23 _mascote_1vo1r_60 _isRendered_1vo1r_63"
                         alt="Mascote"
                    />
                    <div className="_title_1x19s_5 _exclusive_font" style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "5%",
                        textAlign: "center",
                        alignItems: "center",
                        fontSize: "4vw",
                        placeItems: "center",
                        justifyContent: "center"
                    }}>
                        <div>Score 10% from buddies +Get a 🎟️ play pass for each friend.</div>
                    </div>
                    <div className="box_rectangle10">

                        <div className="box_text970">{friends_stats?.length}</div>
                        <div className="box_text920">Frens</div>
                        <div className="box_text860" onClick={handleGoToScore}>View referral rules ></div>
                    </div>

                    <div className="box_rectangle10 slider-bar">
                        <div
                            className={`slider_if819 ${activeTab === 'Frens' ? 'slider_if819-active' : ''}`}
                            onClick={() => handleTabChange('Frens')}
                        >
                            Frens
                        </div>
                        <div
                            className={`slider_if819 ${activeTab === 'Prime' ? 'slider_if819-active' : ''}`}
                            onClick={() => handleTabChange('Prime')}
                        >
                            $ WAP
                        </div>
                    </div>
                    {activeTab === 'Frens' ? <div className="_frends_boxed"> {renderFriendsList()} </div> :
                        <div className="_frends_boxed"> {renderPrimeList()} </div>}

                    <div className="_buttonWrap_1x19s_70" style={{justifyContent:"center"}}>
                        <div className="_root_oar9p_1 _type-yellow_oar9p_43"
                             onClick={handleShareInviteLink}>Invite friends
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InvitePage;
