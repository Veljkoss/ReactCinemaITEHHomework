import React from 'react'
import HeroSection from '../HeroSection'
import MyCard from '../MyCard'
import MyNavbar from '../MyNavbar'
import './Home.css'

function Home() {
    let movies = JSON.parse(localStorage.getItem('movies'));

    return (
        <>
            <MyNavbar/>
            <HeroSection/>
            {/* <div className="cards-section">
                {movies.map((value, index) => {
                    console.log(value.title)
                    return <MyCard title={value.title} description={value.description} imageUrl={value.imageUrl}/>
                })}
            </div> */}
            
            
        </>
        
    )
}

export default Home
