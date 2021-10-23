import React, { useState } from "react"
import { Col, Card, Button } from "react-bootstrap"
import { FaTimes } from "react-icons/fa"
import DataService from "../services/ApiRequest"

// interface CardProp { name: string ; review: string ; image: string ; id: number ; index: number ; idRoot: number }
interface CardProp {
  item: {name: string; review: string ; image: string ; id: number}
  index: number
  idRoot: number
}

export const UserCardReview = (props: CardProp) => {

  // Delete review
  const deleteReview = (index: any) => {
    DataService.removeReview(props.idRoot, index)
      .then(response => {
        console.log(response.data)
        setOpacity("0.4")
      })
      .catch(e => {
        console.log(e)
      })
  }

  const [opacity, setOpacity] = useState<string>("1")
  
    return (
      <Col style={{opacity:opacity}}>
        <Card>
          <Card.Img variant="top" src={props.item.image} />
          <Card.Body>
            <Card.Title>{props.item.name}</Card.Title>
            <Card.Text>
            {props.item.review}
            </Card.Text>
            <Button size="sm" variant="danger" onClick={() => deleteReview(props.index)}>Delete Review <FaTimes /></Button>
          </Card.Body>
        </Card>
      </Col>
    )
}
