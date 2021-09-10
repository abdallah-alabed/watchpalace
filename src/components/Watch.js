import React, { Component } from "react";
import { Card, ListGroup,ListGroupItem } from "react-bootstrap";

class Watch extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.imgSrc} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Brand: {this.props.brand}</ListGroupItem>
          <ListGroupItem>Price: {this.props.price}</ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default Watch;
