import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer>
        <h2>Made by Carlos Martinez©</h2>
            <ul>
            <a href="https://github.com/ch4r1i3">
                <li className="logo">
                <VscGithubAlt />
                </li>
            </a>
            <a href="https://twitter.com/thegr8carli">
                <li className="logo">
                <FaTwitter />
                </li>
            </a>
            <a href="https://www.instagram.com/sono_carli/">
                <li className="logo">
                <FaInstagram />
                </li>
            </a>
            </ul>
        </footer>
    );
}

export default Footer;