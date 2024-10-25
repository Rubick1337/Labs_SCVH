import React, { useState } from 'react';
import { Card, Button, Container, Alert, OverlayTrigger, Tooltip } from 'react-bootstrap';
import dataFurniture from '../../data/dataFurniture.json';
import './furnitureStyles.css';
import Table from '../Table/Table'

function FurnitureCards() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
    <Container>
      {/* Уведомление об успешной загрузке товаров */}
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Мебель успешно загружена!
        </Alert>
      )}

      <div className="furniture-flex-container">
        {dataFurniture.map((item, index) => (
          <Card key={index} className="furniture-card">
            <Card.Img src={item.imageSrc} alt={item.name} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>

              {/* Подсказка при наведении на кнопку */}
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id={`tooltip-top`}>Подробнее о {item.name}</Tooltip>}
              >
                <Button variant="primary" onClick={() => setShowAlert(true)}>
                  More details
                </Button>
              </OverlayTrigger>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
    <Table/>

</>
  );
}

export default FurnitureCards;
