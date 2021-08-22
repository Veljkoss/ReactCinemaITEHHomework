import React from 'react'
import './HeroSection.css'
import MyCard from './MyCard.js';
let movies = JSON.parse(localStorage.getItem('movies'));

function HeroSection(){
    return (
        <div className='hero-container'>
            <h1>CHOOSE A MOVIE</h1>
            <div className="cards-section">
                {movies.map((value, index) => {
                    console.log(value.title)
                    return <MyCard movie={value} />
                })}
            </div>
        </div>
    )
}

export default HeroSection
