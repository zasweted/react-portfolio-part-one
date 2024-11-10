import React from 'react'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import './Archive.css'


const Archive = () => {
  return (
    <div className='container'>
      <div className='archive__content'>
        <Link to="/" className="archive__link">
        <FiArrowLeft className="archive__back-to-home-icon" /> Aleksandr Vasiljev
        </Link>
        <h1>All Projects</h1>
        <table>

        </table>
      </div>
    </div>
  )
}

export default Archive