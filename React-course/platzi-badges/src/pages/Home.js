import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Home.css';
import platziConf from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';

function Home() {
    return (
        <div className="Home">
            <div className="Home__platziConf">
                <img className='Home__platziConf--logo' src={platziConf} alt="Logo Platzi Conferece"/>
                <h2 className='Home__platziConf--title'>Print your badges</h2>
                <Link to='/badges' className='btn btn-primary Home__platziConf--btn '>Start now</Link>
            </div>
            <img src={astronauts} alt="Illustration" className="Home__img"/>
        </div>
    )
}


export default Home;