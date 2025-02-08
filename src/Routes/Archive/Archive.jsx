import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import './Archive.css'
import projectsData from '../../db/projects.json';


const Archive = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='archive__container'>
      <div className='archive__content'>
        <Link to="/" className="archive__link">
          <FiArrowLeft className="archive__back-to-home-icon" /> Aleksandr Vasiljev
        </Link>
        <h1>All Projects</h1>
        <table className='archive__table'>
          <thead className='archive__table-head-sticky'>
            <tr>
              <th>Year</th>
              <th>Project</th>
              <th>Made at</th>
              <th>Built with</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {
              projectsData
                .sort((a, b) => b.year - a.year)
                .map((project) => (
                  <tr key={project.id}>
                    <td className='archive__table-year'>
                      {project.year}
                    </td>
                    <td className='archive__table-title'>
                      {isMobile ? (
                        <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="archive__project-link">
                          {(() => {
                            const titleWords = project.title.trim().split(" ");
                            const lastWord = titleWords.pop(); // Extract the last word
                            const mainTitle = titleWords.join(" "); // Join remaining words
                            return (
                              <>
                                {mainTitle}{" "}
                                <span className="last-word-icon">
                                  {lastWord} <FiArrowUpRight className="archive__project-link-icon" />
                                </span>
                              </>
                            );
                          })()}
                        </a>
                      ) : (
                        project.title
                      )}
                    </td>
                    <td className='archive__table-made-at'>
                      {project.made_at}
                    </td>
                    <td className='archive__table-built-with'>
                      <ul>
                        {
                          project.build_with.map((tech, index) => (

                            <li key={index}>
                              <div>{tech}</div>
                            </li>

                          ))
                        }
                      </ul>
                    </td>
                    <td className='archive__table-link'>
                      <a href={project.project_url} target="_blank" rel="noopener noreferrer">{project.project_url_title} <FiArrowUpRight className="archive__table-link-icon" /></a>
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Archive