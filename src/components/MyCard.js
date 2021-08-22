import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './MyCard.css'

function MyCard(props) {
    let MyButton = () =><div> <Link to={`/info`} onClick={()=>localStorage.setItem('currentMovieId', props.id)}>
    <Button variant="danger" className="card-button" >More info</Button>
    </Link></div>
    return (
        <div className="myCard">
            <Card style={{ width: '18rem', height: props.showButton === "true" ? '29rem' : '18rem'}}>
            <Card.Img variant="top" src={props.imageUrl} className="card-image"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                
                
                <Card.Text>
                         {props.description}
                </Card.Text>
                {console.log(props.showButton)}
                {props.showButton === "true" ? <MyButton/> : null}
                
            </Card.Body>
            </Card>
        </div>
    )

    
}

export default MyCard
