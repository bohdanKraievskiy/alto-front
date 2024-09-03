import React from 'react';

const RewardItem = ({ text, details }) => {
    return (
        <div className="_item_n07eh_1">
            <div className="_media_n07eh_8">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12L10.2426 16.2426L18.727 7.75732" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div className="_body_n07eh_28">
                <div className="_text_n07eh_42">{text}</div>
            </div>
            <div className="_details_n07eh_51" style={{color:" rgb(247, 198, 5)"}}>{details}</div>
        </div>
    );
};

export default RewardItem;
