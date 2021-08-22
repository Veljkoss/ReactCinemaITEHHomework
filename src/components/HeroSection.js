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
                    return <MyCard title={value.title} imageUrl={value.imageUrl} description={value.description} id={value.id} showButton="true" />
                })}
            </div>
        </div>
    )
}

export default HeroSection
