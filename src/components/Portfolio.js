import React from "react";
import textEditorImage from "../img/text_editor.png";
import gryndFitnImage from "../img/grynd.png";
import passGenImage from "../img/passwordGenerator.png";

function Portfolio() {
    return (
        <div>
        <section id="work" className="jobs">
            <div className="flex-row">
            <h2 className="section-title secondary-border">Work</h2>
            </div>

            <div className="job">
            <div className="job-info">
                <div className="job-img">
                <a href="https://ch4r1i3.github.io/Password-Generator/">
                    {" "}
                    <img
                    src={passGenImage}
                    className="my-2"
                    style={{ width: "100%" }}
                    alt="Password-Generator"
                    />
                </a>
                </div>
                <div className="job-text">
                <h4>Password Generator</h4>
                <p>
                We are in a modern technological era where almost everyone has various high-tech gadgets.
                The sophisticated devices are used in connecting and sharing information with other computing
                devices.At times these devices connect with banks and help in completing financial transactions
                and some others responsible and serious tasks that society requires; sometimes these actions 
                lead to loss of valuable data or money. Furthermore, unauthorized users may use other's logins 
                to commit a cybercrime leaving them in trouble with the authorities. This website is designed 
                with the primary objective of generate strong and unpredictable passwords for all of its users 
                accounts.
                </p>
                </div>
            </div>
            </div>

            <div className="job">
            <div className="job-info">
                <div className="job-img">
                <a href="https://jon-dev092.github.io/grynd-app/">
                    {" "}
                    <img
                    src={gryndFitnImage}
                    className="my-2"
                    style={{ width: "100%" }}
                    alt="Grynd-Fitness"
                    />
                </a>
                </div>
                <div className="job-text">
                <h4>Grynd-Fitness</h4>
                <p>
                The fitness app is a web-based application that helps users track their fitness goals, 
                workouts, and progress. The app is designed with a clean and modern user interface that 
                is easy to navigate. It is built using HTML, CSS, JavaScript, and the Bootstrap framework 
                for responsive design.The app allows users to create an account and log in to access their 
                personalized dashboard. From there, users can set fitness goals, track their daily activities, 
                and view their progress over time. The app also provides a library of pre-made workouts, or users 
                can create their own custom workout plans.{" "}
                </p>
                </div>
            </div>
            </div>

            <div className="job">
            <div className="job-info">
                <div className="job-img">
                <a href="https://pwa4texteditor.herokuapp.com/">
                    {" "}
                    <img
                    src={textEditorImage}
                    className="my-2"
                    style={{ width: "100%" }}
                    alt="Text-Editor"
                    />
                </a>
                </div>
                <div className="job-text">
                <h4>Text-Editor</h4>
                <p>
                This text editor is a Progressive Web App that can be installed and run offline. 
                It provides a range of features for editing text, such as syntax highlighting, 
                code folding, and auto-completion. It is designed to be lightweight and fast, 
                with a minimalistic user interface that focuses on functionality. The editor 
                is built using HTML, CSS, and JavaScript, and it uses popular libraries like 
                Bootstrap to ensure a responsive design. Overall, this text editor is a convenient 
                and reliable tool for developers who need to write or edit code while working offline.{" "}
                </p>
                </div>
            </div>
            </div>

        </section>
        </div>
    );
}

export default Portfolio;