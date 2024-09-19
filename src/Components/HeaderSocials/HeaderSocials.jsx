import React from 'react';
import './HeaderSocials.css';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaMobileScreenButton } from "react-icons/fa6";





const HeaderSocials = () => {
    return (
        <ul className="header__socials-list">
            <li>
                <a href="https://github.com/zasweted" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FaGithub className='heaer__socials-icon' />
                </a>
            </li>
            <li>
                <a href="https://github.com/zasweted" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FaLinkedin className='heaer__socials-icon' />
                </a>
            </li>
            <li>
                <a href="https://github.com/zasweted" target="_blank" rel="noopener noreferrer" title="FaceBook">
                    <FaFacebook className='heaer__socials-icon' />
                </a>
            </li>
            <li>
                <a href="https://github.com/zasweted" target="_blank" rel="noopener noreferrer" title="Discord">
                    <FaDiscord className='heaer__socials-icon' />
                </a>
            </li>
            <li>
                <a href="https://github.com/zasweted" target="_blank" rel="noopener noreferrer" title="Email">
                    <FaEnvelope className='heaer__socials-icon' />
                </a>
            </li>
            <li>
                <a href="https://github.com/zasweted" target="_blank" rel="noopener noreferrer" title="Mobile">
                    <FaMobileScreenButton className='heaer__socials-icon' />
                </a>
            </li>
        </ul>
    )
}

export default HeaderSocials