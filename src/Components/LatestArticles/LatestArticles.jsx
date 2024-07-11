import React from "react";
import './LatestArticles.css'
import { Card } from "../Card/Card";

export const LatestArticles = () => {
    return(
        <>
        <div className="Container">
            <div className="title">
            <h1>LATEST ARTICLES</h1>
            </div>
            <hr className="line"></hr>
            <div className="cardContainer">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>




           
        </div>
        
        </>
    )
}