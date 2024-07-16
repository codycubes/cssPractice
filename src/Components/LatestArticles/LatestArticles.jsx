import React from "react";
import './LatestArticles.css'

export const LatestArticles = () => {
    return (
        <>
            <div className="Container">
                <div className="header">
                    <h1 className="title">LATEST ARTICLES</h1>
                </div>
                <hr className="line" />

                <div className="cardContainer">
                    <div className="Card">
                        <img className="cardIMG" src="./drone1 1.png" alt="Article 1" />
                        <hr className="line" />
                        <p className="paragraph">How to automate surveillance drones</p>
                    </div>

                    <div className="Card">
                        <img className="cardIMG" src="./drone2 1.png" alt="Article 2" />
                        <hr className="line" />
                        <p className="paragraph">Robotics And Artificial Intelligence</p>
                    </div>

                    <div className="Card">
                        <img className="cardIMG" src="./drone4 1.png" alt="Article 3" />
                        <hr className="line" />
                        <p className="paragraph">Improving Lives Through Robotic Prosthetics</p>
                    </div>

                    <div className="Card">
                        <img className="cardIMG" src="./drone6 1.png" alt="Article 4" />
                        <hr className="line" />
                        <p className="paragraph">Power Of Robotics In Agriculture</p>
                    </div>
                </div>
            </div>
        </>
    )
}
