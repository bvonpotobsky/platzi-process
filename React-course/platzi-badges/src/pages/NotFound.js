import React from 'react'
import { Link } from 'react-router-dom';

import './styles/NotFound.css';
import NotFoundImg from '../images/404-error.png';


function NotFound() {
    return (
    <div className='NotFound'>
        <div className='NotFound__container'>
        <h1 className='NotFound__container--title'>404: Page Not Found</h1>

        <Link to='/badges' className="btn btn-primary NotFound__container--button">Homepage</Link>
        </div>
        <img className='NotFound__img' src={NotFoundImg} alt="Imagen 404 Error"/>
    </div>
    );
}

export default NotFound;