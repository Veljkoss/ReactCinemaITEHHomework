import React from 'react'
import { Button } from 'react-bootstrap'
import MyCard from '../MyCard';
import MyNavbar from '../MyNavbar'
import './Info.css'

function Info() {
    const [show, setshow] = React.useState(false);

    let id = JSON.parse(localStorage.getItem('currentMovieId'))
    let movie = JSON.parse(localStorage.getItem('movies')).find(o => o.id === id)
    let actorIds = movie.actorIDs;
    let actors = JSON.parse(localStorage.getItem('actors')).filter(o => actorIds.includes(o.id) )

    const showHideActors= ()=>{
        setshow(!show);
    }

    const Actors = () => <div className="actors">
        <div className="cards-section">
                {actors.map((value, index) => {
                    return <MyCard title={value.name} imageUrl={value.imageUrl} description="" showButton="false" />
                })}
            </div>
    </div>
    
    
    return (
        <>
            
            <MyNavbar/>
            <div className='info-section'>
                <h1>
                    {movie.title}
                </h1>
                <h2>
                    {movie.description}
                </h2>
                <Button onClick={()=>showHideActors()}>
                   {show ? "Hide actors" : "Show actors"}
                </Button>
                {show ? <Actors/> : null}
                
            </div>
        </>
    )
}



export default Info
