import React from "react";
import food1 from "../images/mainlogo.png";
import "../App.css";

const Header = ({ onReserveClick }) => {
    return (
        <header className="header">
            <section className="content">
                <div className="text">
                    <h1 className="restaurant-name">Little Lemon</h1>
                    <h2 className="location">Proudly Serving The Chicago Area</h2>
                    <p className="description">
                        A cozy, family-run Mediterranean restaurant blending timeless flavors with a contemporary flair.
                    </p>
                    <button onClick={onReserveClick} className="reserve-btn">Reserve a Table</button>
                </div>
                <div className="image">
                    <img src={food1} alt="Delicious food" />
                </div>
            </section>
        </header>
    );
};

export default Header;
