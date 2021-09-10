import React, { Component } from "react";
import Watch from "./Watch";
import { Row, Col, Container } from "react-bootstrap";

class Main extends Component {
  render() {
    return (
      <Container>
        <Row>
          <>
            {this.props.data.map((elem) => {
              return (
                <Col xs={4}>
                  <Watch
                    name={elem.name}
                    brand={elem.brand}
                    description={elem.description}
                    price={elem.price}
                    imgSrc={elem.imgSrc}
                  />
                  <br></br>
                </Col>
              );
            })}
            ;
          </>
        </Row>
      </Container>
    );
  }
}

export default Main;
