import React from "react";
import Nav from "./Navigation";

function Header(props) {
    const { currentTab, handleTabChange } = props;

    return (
        <div>
        <section>
            <header className="flex-row px-1">
                <div>
                    <h1>My Portfolio</h1>
                </div>
                <div>
                    <Nav
                    currentTab={currentTab}
                    handleTabChange={handleTabChange}
                    ></Nav>
                </div>
                </header>
            </section>
            <section className="hero">
            <div className="hero-cta">
                <h2>Welcome</h2>
                    <p>
                    Welcome to my React portfolio! Here you will find some of my latest projects, 
                    showcasing my skills in web development using React. Feel free to explore each 
                    project in detail and learn more about the technologies I used and the design 
                    decisions I made. If you have any questions or are interested in collaborating
                    on a project, please don't hesitate to contact me. Thank you for visiting and 
                    I hope you enjoy my portfolio!
                    </p>
            </div>
        </section>
        </div>
    );
}

export default Header;