import React from "react";
import './styles.css';

interface HistoryCardProps {
    firstSentence: string;
    secondSentence: string;
    similarityPercent: string;
}

const HistoryCard = ({firstSentence, secondSentence, similarityPercent}: HistoryCardProps) => {
    return (
        <>
           <div className="history-card">
                <div className="history-card-container">
                    <p className="sentence">{firstSentence}</p>
                    <p className="sentence">{secondSentence}</p>
                    <p className="similarity">{similarityPercent}</p>
                </div>
           </div>
        </>
    )
}

export default HistoryCard;