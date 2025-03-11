import React from 'react';
import './Experience.css';
import { FiArrowUpRight } from "react-icons/fi";
import experienceData from '../../db/experience.json';


const Experience = () => {



    return (
        <>
            <div className="experience-section__headding-mobile">
                <h2>
                    Experience
                </h2>
            </div>
            <div>
                <ol className='experience-section__list'>
                    {
                        experienceData.sort((a, b) => b.id - a.id)
                            .map((experience) => (
                                <li key={experience.id}>
                                    {experience.company_url ? (
                                        <a href={experience.company_url} target="_blank" rel="noopener noreferrer">
                                            <div className="experience-section__list-item-container">
                                                <header>
                                                    {experience.date}
                                                </header>
                                                <div className="experience-section__list-item-content">
                                                    <h3>
                                                        <div >

                                                            {(() => {
                                                                const titleWords = experience.position.trim().split(" ");
                                                                const lastWord = titleWords.pop(); // Extract the last word
                                                                const mainTitle = titleWords.join(" "); // Join remaining words
                                                                return (
                                                                    <>
                                                                        {mainTitle}{" "}
                                                                        <span className="last-word-icon">
                                                                            {lastWord} <FiArrowUpRight className="experience-section__icon" />
                                                                        </span>
                                                                    </>
                                                                );
                                                            })()}
                                                        </div>
                                                    </h3>
                                                    <div className='experience-section__description'>
                                                        <p>
                                                            {experience.description}
                                                        </p>
                                                        <ul>
                                                            {
                                                                experience.skills_acquired.map((skill, index) => (
                                                                    <li key={index}>
                                                                        <div>{skill}</div>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                    ) : (
                                        <div className='experience__section-wrapper'>
                                            <div className="experience-section__list-item-container">
                                                <header>
                                                    {experience.date}
                                                </header>
                                                <div className="experience-section__list-item-content">
                                                    <h3>
                                                        <div >

                                                            {(() => {
                                                                const titleWords = experience.position.trim().split(" ");
                                                                const lastWord = titleWords.pop(); // Extract the last word
                                                                const mainTitle = titleWords.join(" "); // Join remaining words
                                                                return (
                                                                    <>
                                                                        {mainTitle}{" "}
                                                                        <span className="last-word-icon">
                                                                            {lastWord} <FiArrowUpRight className="experience-section__icon" />
                                                                        </span>
                                                                    </>
                                                                );
                                                            })()}
                                                        </div>
                                                    </h3>
                                                    <div className='experience-section__description'>
                                                        <p>
                                                            {experience.description}
                                                        </p>
                                                        <ul>
                                                            {
                                                                experience.skills_acquired.map((skill, index) => (
                                                                    <li key={index}>
                                                                        <div>{skill}</div>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))
                    }
                </ol>
                <div className="experience-section__download-resume">
                    <a href="/Profile.pdf" download="Profile.pdf">
                        View Full <span className="last-word-icon">Résumé <FiArrowUpRight className="experience-section__icon" /></span>
                    </a>
                </div>
            </div>
        </>

    )
}

export default Experience