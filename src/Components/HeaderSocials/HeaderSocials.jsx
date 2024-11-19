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
                <a href="https://www.linkedin.com/in/aleksandr-vasiljev-320210247/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FaLinkedin className='heaer__socials-icon' />
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/aleksandr.vasiljev" target="_blank" rel="noopener noreferrer" title="FaceBook">
                    <FaFacebook className='heaer__socials-icon' />
                </a>
            </li>
            <li>
                <a href="https://discordapp.com/users/134624851846627329" target="_blank" rel="noopener noreferrer" title="Discord">
                    <FaDiscord className='heaer__socials-icon' />
                </a>
            </li>
            <li>
                <a href="mailto:zaswet@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                    <FaEnvelope className='heaer__socials-icon' />
                </a>
            </li>
            <li>
                <a href="tel:+37060772868" target="_blank" rel="noopener noreferrer" title="Mobile">
                    <FaMobileScreenButton className='heaer__socials-icon' />
                </a>
            </li>
        </ul>
    )
}

export default HeaderSocials