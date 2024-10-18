import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import dataFurniture from '../../data/dataFurniture.json';
import './furnitureStyles.css';
function FurnitureCards () {
  return (
    <Container>
      <div className="furniture-flex-container">
        {dataFurniture.map((item, index) => (
          <Card key={index} className="furniture-card">
            <Card.Img variant="top" src={item.imageSrc} alt={item.name} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary">More details</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};
export default FurnitureCards;
