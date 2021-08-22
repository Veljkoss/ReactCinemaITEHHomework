import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './MyCard.css'

function MyCard(props) {
    return (
        <div className="myCard">
            <Card style={{ width: '18rem', height: '29rem'}}>
            <Card.Img variant="top" src={props.movie.imageUrl} className="card-image"/>
            <Card.Body>
                <Card.Title>{props.movie.title}</Card.Title>
                <Card.Text>
                         {props.movie.description}
                </Card.Text>
                <Link to={`/info`} onClick={localStorage.setItem('currentMovieId', props.movie.id)}>
                    <Button variant="primary" className="card-button" >More info</Button>
                 </Link>
                
            </Card.Body>
            </Card>
        </div>
    )
}

export default MyCard
