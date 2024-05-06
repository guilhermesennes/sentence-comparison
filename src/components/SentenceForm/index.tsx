import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

const SentenceForm = () => {
    return (
        <>
            <div className="form-window">
                <h1 className="form-title">Sentence Similarity</h1>
                <div className="form-container">
                    <div className="input-container">
                        <label className="input-label" htmlFor="sentence-01">Frase 01</label>
                        <input id="sentence-01" type="text" className="form-sentence" />

                        <label className="input-label" htmlFor="sentence-02">Frase 02</label>
                        <input id="sentence-02" type="text" className="form-sentence" />
                    </div>

                    <div className="buttons-container">

                        <button className="form-sentence-compare">Similaridade</button>
                        <Link className="form-sentence-history" to={"/historico"}>Histórico</Link>

                    </div>
                </div>

            </div>
        </>
    )
}

export default SentenceForm;