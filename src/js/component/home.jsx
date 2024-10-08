import React, { useState } from "react";

//create your first component
const Home = () => {
    const [selectedDiv, setSelectedDiv] = useState(""); 
    return (
        <>
            <div className="rectanguloSmall"></div>
            <div className="rectanguloBig">
                <div
                    className={`circleGreen bg-success ${
                        selectedDiv === "green" ? "selected" : ""
                    }`}
                    onClick={() => {
                        setSelectedDiv(selectedDiv === "green" ? "" : "green");
                    }}
                ></div>
                <div
                    className={`circleYellow bg-warning ${
                        selectedDiv === "yellow" ? "selected" : ""
                    }`}
                    onClick={() => {
                        setSelectedDiv(selectedDiv === "yellow" ? "" : "yellow");
                    }}
                ></div>
                <div
                    className={`circleRed bg-danger ${
                        selectedDiv === "red" ? "selected" : ""
                    }`}
                    onClick={() => {
                        setSelectedDiv(selectedDiv === "red" ? "" : "red");
                    }}
                ></div>
            </div>
        </>
    );
};

export default Home;
