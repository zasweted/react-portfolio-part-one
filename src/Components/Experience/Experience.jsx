import React from 'react';
import './Experience.css';
import { FiArrowUpRight } from "react-icons/fi";


const Experience = () => {
    return (
        <section id="experience" aria-label="Experience">
            <div className="experience-section__headding-mobile">
                <h2>
                    Experience
                </h2>
                <div>
                    <ol className='experience-section__list'>
                        <li>
                            <div class="experience-section__list-item-container">
                                <header>
                                    2022 — Present
                                </header>
                                <div class="experience-section__list-item-content">
                                    <h3>
                                        <a href="https://www.artix.lt" target="_blank" rel="noopener noreferrer">
                                            Junior Fullstack Engineer, <span>Artix.lt <FiArrowUpRight class="experience-section__icon" />
                                            </span>
                                        </a>
                                    </h3>
                                    <div>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt beatae fugit saepe quasi deleniti illum facere veniam delectus voluptatem itaque quibusdam amet nam architecto dolorum magni voluptate impedit reprehenderit modi error necessitatibus a, rerum quas. Voluptas, quisquam laborum perferendis tempore ex ullam inventore nisi ipsa quod doloremque vero quas distinctio fugit optio! Officia labore doloribus dolore sed earum accusamus, dolorem quas ipsum tempore placeat at possimus temporibus sit praesentium dolor soluta minus harum unde, in quis tenetur magnam. Nam quis numquam reprehenderit necessitatibus distinctio vero delectus quam possimus, culpa dicta nobis doloremque optio eos id consequuntur quas cum soluta.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Experience