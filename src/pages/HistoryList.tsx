import React from "react";
import HistoryCard from "../components/HistoryCard";

import './historyList.css';
import { Link } from "react-router-dom";

const HistoryList = () => {

    const historyMock = [
        {
            firstSentence: 'Lorem ipsum dolor sit amet',
            secondSentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            similarityPercent: '0.2%'
        },
        {
            firstSentence: 'Lorem ipsum dolor sit amet',
            secondSentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            similarityPercent: '0.25%'
        },
        {
            firstSentence: 'Lorem ipsum dolor sit amet',
            secondSentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            similarityPercent: '10.2%'
        },
        {
            firstSentence: 'Lorem ipsum dolor sit amet',
            secondSentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            similarityPercent: '75.2%'
        },
        {
            firstSentence: 'Lorem ipsum dolor sit amet',
            secondSentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            similarityPercent: '75.2%'
        },
        {
            firstSentence: 'Lorem ipsum dolor sit amet',
            secondSentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            similarityPercent: '75.2%'
        },
        {
            firstSentence: 'Lorem ipsum dolor sit amet',
            secondSentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            similarityPercent: '75.2%'
        },
    ];

    return (
        <>
            <div className="link-container">
                <Link className="back" to="/">← Voltar</Link>
            </div>

            <div className="history-list">
                {
                    historyMock.map((item, index) => <HistoryCard {...item} />)
                }
            </div>
        </>
    )
}

export default HistoryList;