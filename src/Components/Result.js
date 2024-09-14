import React, { useState, useContext } from "react";
import "../Styles/mainStyles.css";
import { useNavigate } from "react-router-dom";
const Result = ({user,score,onStart}) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [copyMessage, setCopyMessage] = useState(false);
    const handleGoToScore = () => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        setIsLoading(true);
    };

    const handleClose = () => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        setIsLoading(false);
    };
    const isIPhone = () => {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    };
    const handleCopyInviteLink = () => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        const inviteLink = `https://t.me/WeArePrime_Bot/app`;
        navigator.clipboard.writeText(inviteLink).then(() => {}).catch(err => {
            console.error('Failed to copy: ', err);
        });

        if (isIPhone()) {
            alert('Link was copied to the clipboard!!');
        } else {
            setCopyMessage(true);
            setTimeout(() => setCopyMessage(false), 5000);
        }
    };

    const handleShareInviteLink = () => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        const shareLink = `https://t.me/share/url?url=https://t.me/WeArePrime_Bot/app`;
        window.open(shareLink, '_blank');
    };

    return (
        <div className="_page_1ulsb_1">
            <div className="_gameView_1cr97_1" id="game-view" style={{overflow:"hidden"}}>
                <div className="_view_sf2n5_1 _view_1x19s_1" style={{opacity: 1}}>
                    <div className={`_backdrop_wo9zh_1  ${isLoading ? '_opened_wo9zh_16' : ''}`}></div>
                    <div className={`_content_wo9zh_21 ${isLoading ? '_opened_wo9zh_16' : ''}`} style={{height:"65%"}}>
                        <div className={`_cross_wo9zh_61 ${isLoading ? '_opened_wo9zh_16' : ''}`}
                             onClick={handleClose}></div>
                        <div className={`_contentInner_wo9zh_44 ${isLoading ? '_opened_wo9zh_16' : ''}`}>
                            <div className="_sheetTitle_1x19s_93">Referral Rules</div>
                            <div className="_separator_1x19s_86"></div>
                            <div className="_mascote_94k9d_1 _centered_94k9d_13"
                                 style={{marginLeft: "25%", marginTop: "5%", width: "40vw", height: "auto"}}>
                                <img
                                    id="home-mascote" style={{width: "60vw"}}
                                    src={`${process.env.PUBLIC_URL}/resources_directory/image_2024-08-17_19-39-30.webp`}
                                    className="_doggy_94k9d_6 _width-82_94k9d_23 _mascote_1vo1r_60 _isRendered_1vo1r_63"
                                    alt="Mascote"
                                />
                            </div>
                            <div className="_title_zhpdf_5" style={{fontSize: "45px", marginTop: "10%"}}>+{score}
                                    <svg width="40" height="39" viewBox="0 0 38 39" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M22.7347 36.0173V35.0137H25.6689V33.9696H26.6803V32.9931H27.6569V31.877H28.738V30.7959H29.8889V29.4357H30.9564V28.263H32.0678V27.1176H33.2371V26.0527H34.3182V26.0178H34.3531V25.4947H34.3182V23.0882H35.3645V19.0426H36.3062V19.0077H36.4108V9.97479H35.3645V8.82387H34.2833V7.70783H33.2022V6.5918H32.121V7.70783H32.0861V8.82387H33.2022V9.97479H34.2833V16.0432H33.1673V19.0426H32.0513V21.0654H30.9003V23.0534H29.7843V24.0648H28.738V26.0527H27.6917V27.0641H26.7152V28.0755H25.6689V29.0521H25.634V29.0869H24.5529V30.0286H23.4717V31.0749H20.7514V31.9817H18.6937V32.9931H16.636V34.0742H10.6722V33.028H5.68487V32.9931H5.64999V31.9119H4.63858V30.8656H3.4179V29.7496H1.11609V30.6912H1.15097V30.7959H2.33675V31.8422L3.45279 31.877V32.9085H4.64506V33.9347H5.68487V34.9113H5.71973V34.981H7.6728V36.0622H7.70768V36.0273H10.6722V37.0736H19.74V37.1085H19.7646V36.0173H22.7347Z"
                                              fill="#BE8103"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M26.6803 12.9741V16.0083H25.634V18.1358H24.518V19.3564H24.4831V19.3913H23.3322V20.4376H22.0767V21.728H20.9606V23.0533H19.9143V24.0647H18.7634V25.0761H16.6011V26.0876H13.6715V27.1339H10.6722V28.1453H4.6037V27.1687H3.4179V27.2036H3.38302V28.4243H2.23212V29.7496H2.26699V28.4591H3.4179V29.7844H4.1503V29.1567H4.63858V30.0634H5.64999V31.04H5.7895V31.0749H10.6024V31.04H10.6373V30.0634H13.2879V30.0983H16.6709V29.052H17.7171V28.1104H20.9606V27.1339H21.972V27.0641H22.0069V26.0876H23.4717V26.0527H23.5066V25.111H23.5415V25.0761H24.5878V24.832H24.5529V24.0647H25.4248V24.0996H25.6689V23.0882H26.6803V22.0419H27.6917V19.0774H28.7031V18.066H29.7843V13.9855H30.9003V7.74268H29.8192V8.82384H28.8078V9.97477H27.7615V12.9741H26.6803Z"
                                              fill="#F9ED0E"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M30.9003 4.04575V3.90624H30.9352V3.03434H32.0861V1.98805H33.237V1.04639H29.8192V4.04575H30.9003Z"
                                              fill="#A6BA04"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M33.237 4.04599V1.98828H32.0861V3.03457H30.9352V3.90648H30.9003V6.55706H32.0861V4.04599H33.237Z"
                                              fill="#698506"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M1.11609 28.3891H2.19726V27.2033H1.11609V28.3891ZM3.41792 29.7842V30.8653H4.63858V31.9116H5.64999V32.9928H5.68487V33.0276H10.6722V34.0739H16.636V32.9928H18.6937V31.9814H20.7514V31.0746H23.4717V30.0283H24.5529V29.0866H25.634V29.0517H25.6689V28.0752H26.7152V27.0638H27.6917V26.0524H28.738V24.0645H29.7843V23.0531H30.9003V21.0651H32.0513V19.0423H33.1673V16.0429H34.2833V9.97449H33.2022V8.82356H32.0861V7.70752H29.8192V7.7424H30.9003V13.9852H29.7843V18.0658H28.7031V19.0772H27.6917V22.0416H26.6803V23.0879H25.6689V24.0993H25.4248V24.0645H24.5529V24.8317H24.5878V25.0759H23.5415V25.1107H23.5066V26.0524H23.4717V26.0873H22.0069V27.0638H21.972V27.1336H20.9606V28.1101H17.7172V29.0517H16.6709V30.098H13.2879V30.0632H10.6373V31.0397H10.6024V31.0746H5.7895V31.0397H5.64999V30.0632H4.63858V29.1564H4.15032V29.7841H3.41792V29.7842ZM3.41792 29.7493V28.4589H2.267V29.7493H3.41792Z"
                                              fill="#F7C605"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M33.237 4.04566H32.0861V6.55675H30.9003V4.04566H29.8192V1.04631H33.237V4.04566H33.237ZM26.6803 12.974H27.7615V9.97462H28.8078V8.8237H29.8192V7.70765H29.854H32.121V6.59161H33.2022V7.70765H34.2833V8.8237H35.3645V9.97462H36.4108V19.0075H36.3061V19.0424H35.3645V23.0881H34.3182V25.4945H34.3531V26.0177H34.3182V26.0525H33.237V27.1337H33.2022V27.1686H32.0861V28.2846H33.237V27.1686H34.3879V26.1223H34.4228V26.0874H35.4342V23.1229H36.4456V19.0424H37.4571V9.93974H36.4108V8.8237H35.3645V7.70765H34.3182V6.55673H33.237V4.04564H34.3182V0.976537H33.3068V0H29.7843V1.01141H28.7729V4.08052H29.7843V6.31259H29.8192V7.67276H28.7729V8.82368H27.7615V9.93973H27.7266V9.9746H26.7152V12.9391H26.6803V12.974H25.634V16.0082H24.518H24.4831V18.1356H23.3322V19.3563H22.0767V20.4375H23.3322V19.3912H24.4831V19.3563H24.518V18.1357H25.634V16.0082H26.6803V12.974H26.6803ZM30.9701 29.4355H32.0513V28.2846H30.9701V29.4355H29.8889V30.7957H28.738V31.8769H27.6568V32.9929H26.6803V33.9695H25.6689V35.0157H22.7393V36.0271H19.7748V37.0734H22.7393V36.0271H25.634V35.9923H25.6689V35.0506H26.7152V34.0043H27.6917V33.0627H28.7729V31.9466H29.8889V30.8306H30.9701V29.4355ZM7.67278 36.062V37.0386H7.70765V37.0734H10.6372V38.1546H19.7748V37.1083H19.7399V37.0734H10.6721V36.0272H7.70765V36.062H7.67278V36.062ZM1.25555 31.842H2.33672V30.7957H1.25555V31.842ZM5.78946 34.9809H5.7197V34.9111H5.68484V33.9346H4.63855V32.9232H3.48764V33.9346H4.63855V35.0157H5.68484V35.0855V36.0271H7.67278V34.9809H5.78946V34.9809ZM2.33671 31.8769V32.9231H3.45275V31.8769H2.33671ZM1.15092 30.7957V30.6911H1.11604V29.7494H2.19721V28.459H2.23209V28.4241H3.383V27.2034H3.41787V27.1686H4.60367V28.1451H4.63853H10.6721V27.1337H13.6715V26.0874H16.6011V25.076H18.7634V24.0646H19.9143V23.0532H20.9606V21.7279H22.0766V20.4724H20.9606V21.693H19.8794V23.0183H18.7634V24.0646H15.7292V25.0411H13.6366V26.0525H13.532V26.0874H10.6721V27.0988H10.6372V27.1337H4.77804H4.63853V26.1223H0V26.1572V30.7957H1.15092V30.7957ZM1.11604 28.3892V27.2034H2.19721V28.3892H1.11604Z"
                                              fill="#3A1505"/>
                                    </svg>
                            </div>
                            <div className="_subtitleEmpty_1x19s_19 game_sub_title_ms718"
                                 style={{fontSize: "12px", opacity: 0.8}}> Scored {score}
                                <svg width="15" height="14" viewBox="0 0 38 39" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M22.7347 36.0173V35.0137H25.6689V33.9696H26.6803V32.9931H27.6569V31.877H28.738V30.7959H29.8889V29.4357H30.9564V28.263H32.0678V27.1176H33.2371V26.0527H34.3182V26.0178H34.3531V25.4947H34.3182V23.0882H35.3645V19.0426H36.3062V19.0077H36.4108V9.97479H35.3645V8.82387H34.2833V7.70783H33.2022V6.5918H32.121V7.70783H32.0861V8.82387H33.2022V9.97479H34.2833V16.0432H33.1673V19.0426H32.0513V21.0654H30.9003V23.0534H29.7843V24.0648H28.738V26.0527H27.6917V27.0641H26.7152V28.0755H25.6689V29.0521H25.634V29.0869H24.5529V30.0286H23.4717V31.0749H20.7514V31.9817H18.6937V32.9931H16.636V34.0742H10.6722V33.028H5.68487V32.9931H5.64999V31.9119H4.63858V30.8656H3.4179V29.7496H1.11609V30.6912H1.15097V30.7959H2.33675V31.8422L3.45279 31.877V32.9085H4.64506V33.9347H5.68487V34.9113H5.71973V34.981H7.6728V36.0622H7.70768V36.0273H10.6722V37.0736H19.74V37.1085H19.7646V36.0173H22.7347Z"
                                          fill="#BE8103"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M26.6803 12.9741V16.0083H25.634V18.1358H24.518V19.3564H24.4831V19.3913H23.3322V20.4376H22.0767V21.728H20.9606V23.0533H19.9143V24.0647H18.7634V25.0761H16.6011V26.0876H13.6715V27.1339H10.6722V28.1453H4.6037V27.1687H3.4179V27.2036H3.38302V28.4243H2.23212V29.7496H2.26699V28.4591H3.4179V29.7844H4.1503V29.1567H4.63858V30.0634H5.64999V31.04H5.7895V31.0749H10.6024V31.04H10.6373V30.0634H13.2879V30.0983H16.6709V29.052H17.7171V28.1104H20.9606V27.1339H21.972V27.0641H22.0069V26.0876H23.4717V26.0527H23.5066V25.111H23.5415V25.0761H24.5878V24.832H24.5529V24.0647H25.4248V24.0996H25.6689V23.0882H26.6803V22.0419H27.6917V19.0774H28.7031V18.066H29.7843V13.9855H30.9003V7.74268H29.8192V8.82384H28.8078V9.97477H27.7615V12.9741H26.6803Z"
                                          fill="#F9ED0E"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M30.9003 4.04575V3.90624H30.9352V3.03434H32.0861V1.98805H33.237V1.04639H29.8192V4.04575H30.9003Z"
                                          fill="#A6BA04"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M33.237 4.04599V1.98828H32.0861V3.03457H30.9352V3.90648H30.9003V6.55706H32.0861V4.04599H33.237Z"
                                          fill="#698506"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M1.11609 28.3891H2.19726V27.2033H1.11609V28.3891ZM3.41792 29.7842V30.8653H4.63858V31.9116H5.64999V32.9928H5.68487V33.0276H10.6722V34.0739H16.636V32.9928H18.6937V31.9814H20.7514V31.0746H23.4717V30.0283H24.5529V29.0866H25.634V29.0517H25.6689V28.0752H26.7152V27.0638H27.6917V26.0524H28.738V24.0645H29.7843V23.0531H30.9003V21.0651H32.0513V19.0423H33.1673V16.0429H34.2833V9.97449H33.2022V8.82356H32.0861V7.70752H29.8192V7.7424H30.9003V13.9852H29.7843V18.0658H28.7031V19.0772H27.6917V22.0416H26.6803V23.0879H25.6689V24.0993H25.4248V24.0645H24.5529V24.8317H24.5878V25.0759H23.5415V25.1107H23.5066V26.0524H23.4717V26.0873H22.0069V27.0638H21.972V27.1336H20.9606V28.1101H17.7172V29.0517H16.6709V30.098H13.2879V30.0632H10.6373V31.0397H10.6024V31.0746H5.7895V31.0397H5.64999V30.0632H4.63858V29.1564H4.15032V29.7841H3.41792V29.7842ZM3.41792 29.7493V28.4589H2.267V29.7493H3.41792Z"
                                          fill="#F7C605"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M33.237 4.04566H32.0861V6.55675H30.9003V4.04566H29.8192V1.04631H33.237V4.04566H33.237ZM26.6803 12.974H27.7615V9.97462H28.8078V8.8237H29.8192V7.70765H29.854H32.121V6.59161H33.2022V7.70765H34.2833V8.8237H35.3645V9.97462H36.4108V19.0075H36.3061V19.0424H35.3645V23.0881H34.3182V25.4945H34.3531V26.0177H34.3182V26.0525H33.237V27.1337H33.2022V27.1686H32.0861V28.2846H33.237V27.1686H34.3879V26.1223H34.4228V26.0874H35.4342V23.1229H36.4456V19.0424H37.4571V9.93974H36.4108V8.8237H35.3645V7.70765H34.3182V6.55673H33.237V4.04564H34.3182V0.976537H33.3068V0H29.7843V1.01141H28.7729V4.08052H29.7843V6.31259H29.8192V7.67276H28.7729V8.82368H27.7615V9.93973H27.7266V9.9746H26.7152V12.9391H26.6803V12.974H25.634V16.0082H24.518H24.4831V18.1356H23.3322V19.3563H22.0767V20.4375H23.3322V19.3912H24.4831V19.3563H24.518V18.1357H25.634V16.0082H26.6803V12.974H26.6803ZM30.9701 29.4355H32.0513V28.2846H30.9701V29.4355H29.8889V30.7957H28.738V31.8769H27.6568V32.9929H26.6803V33.9695H25.6689V35.0157H22.7393V36.0271H19.7748V37.0734H22.7393V36.0271H25.634V35.9923H25.6689V35.0506H26.7152V34.0043H27.6917V33.0627H28.7729V31.9466H29.8889V30.8306H30.9701V29.4355ZM7.67278 36.062V37.0386H7.70765V37.0734H10.6372V38.1546H19.7748V37.1083H19.7399V37.0734H10.6721V36.0272H7.70765V36.062H7.67278V36.062ZM1.25555 31.842H2.33672V30.7957H1.25555V31.842ZM5.78946 34.9809H5.7197V34.9111H5.68484V33.9346H4.63855V32.9232H3.48764V33.9346H4.63855V35.0157H5.68484V35.0855V36.0271H7.67278V34.9809H5.78946V34.9809ZM2.33671 31.8769V32.9231H3.45275V31.8769H2.33671ZM1.15092 30.7957V30.6911H1.11604V29.7494H2.19721V28.459H2.23209V28.4241H3.383V27.2034H3.41787V27.1686H4.60367V28.1451H4.63853H10.6721V27.1337H13.6715V26.0874H16.6011V25.076H18.7634V24.0646H19.9143V23.0532H20.9606V21.7279H22.0766V20.4724H20.9606V21.693H19.8794V23.0183H18.7634V24.0646H15.7292V25.0411H13.6366V26.0525H13.532V26.0874H10.6721V27.0988H10.6372V27.1337H4.77804H4.63853V26.1223H0V26.1572V30.7957H1.15092V30.7957ZM1.11604 28.3892V27.2034H2.19721V28.3892H1.11604Z"
                                          fill="#3A1505"/>
                                </svg>
                                points in WAP GAME!
                                dare vou to challende me!
                            </div>
                            <div className="_buttonWrap_1x19s_70" style={{position: "initial"}}>
                                <div className="_root_oar9p_1 _type-white_oar9p_43 _copy-white_pa08af"
                                     onClick={handleCopyInviteLink} style={{width: "100%", position: "relative"}}>
                                    Copy Link

                                </div>
                            </div>
                            <div className="_root_oar9p_1 _type-white_ip8lu_54" onClick={handleShareInviteLink}
                                 style={{background: "#1B1B1B", color: "white"}}>
                                Send
                            </div>
                        </div>
                    </div>
                    <div className="_mascote_94k9d_1 _centered_94k9d_13" style={{marginTop: "5%"}}>
                        <img
                            id="home-mascote" style={{width: "60vw", marginTop:-30}}
                            src={`${process.env.PUBLIC_URL}/resources_directory/animation_mascoe.png`}
                            className="_doggy_94k9d_6 _width-82_94k9d_23 _mascote_1vo1r_60 _isRendered_1vo1r_63"
                            alt="Mascote"
                        />
                    </div>
                    <div className="_title_1x19s_5">Congrats!
                        bountiful harvest
                    </div>
                    <div className="_title_zhpdf_5 _exclusive_font" style={{fontSize: "54px", marginTop: "10%",display:"flex",flexDirection:"row",textAlign:"center",alignItems:"center",flex: "auto",placeContent:"center"}}><div style={{alignItems:"center",textAlign:"center",placeItems:"center"}}>+ {score}</div>&nbsp;<div  style={{color:"#F7C605",alignItems:"center",textAlign:"center"}}> WAP
                    </div></div>
                    <div className="_root_oar9p_1 _type-white_ip8lu_54"
                         style={{background: "#F7C605", gap: 40, marginTop: "20%"}} onClick={handleGoToScore}>
                        <img style={{width: "90px",marginTop:-50,marginRight:-40,marginLeft:-40}}
                             src={`${process.env.PUBLIC_URL}/resources_directory/TEAM (12).webp`}/>

                        Share Your Result +{score}

                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="3" height="13" fill="#242424"/>
                            <rect x="3" y="2" width="3" height="9" fill="#242424"/>
                            <rect x="6" y="5" width="3" height="3" fill="#242424"/>
                        </svg>

                    </div>
                    <div className="_root_oar9p_1 _type-white_ip8lu_54" onClick={onStart}
                         style={{background: "white", marginTop: "5%"}}>
                        Play ({user.attempts_left} Attempts Left)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;
