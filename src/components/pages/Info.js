import React from 'react'
import MyNavbar from '../MyNavbar'

let id = localStorage.getItem('currentMovieId')
function Info() {
    
    return (
        <>
            <MyNavbar/>
            <div className='info-section'>
                <h1>
                    AAAAAAAAAAAA{id}
                </h1>
            </div>
        </>
    )
}

export default Info
