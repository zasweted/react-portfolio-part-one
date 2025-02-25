import React from 'react';
import './Projects.css';
import { FiArrowUpRight } from "react-icons/fi";
import projectsData from '../../db/projects.json';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <>
            <div className="projects-section__headding-mobile">
                <h2>
                    Projects
                </h2>
            </div>
            <div>
                <ol className='projects-section__list'>
                    {
                        projectsData
                            .sort((a, b) => b.year - a.year)
                            .slice(0, 10)
                            .map((project) => (
                                <li key={project.id}>
                                    <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                                        <div className="projects-section__list-item-container">
                                            <header>
                                                <img className='projects-section__image' loading="lazy" width="200" height="48" decoding="async" src={project.project_img} alt={project.title} />
                                            </header>
                                            <div className="projects-section__list-item-content">
                                                <h3>
                                                    <div>
                                                        {(() => {
                                                            const titleWords = project.title.trim().split(" ");
                                                            const lastWord = titleWords.pop(); // Extract the last word
                                                            const mainTitle = titleWords.join(" "); // Join remaining words
                                                            return (
                                                                <>
                                                                    {mainTitle}{" "}
                                                                    <span className="last-word-icon">
                                                                        {lastWord} <FiArrowUpRight className="projects-section__icon" />
                                                                    </span>
                                                                </>
                                                            );
                                                        })()}
                                                    </div>
                                                </h3>
                                                <div className='projects-section__description'>
                                                    <p>
                                                        {project.short_description}
                                                    </p>
                                                    <ul>
                                                        {
                                                            project.build_with.map((tech, index) => (
                                                                <li key={index}>
                                                                    <div>{tech}</div>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))
                    }
                </ol>
                <div className="projects-section__archive">
                    <Link to="/archive" className="projects-section__link">
                        View Full Project Archive <FiArrowUpRight className="projects-section__icon" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Projects