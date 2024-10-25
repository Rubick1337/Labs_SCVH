import React from 'react';
import { Table } from 'react-bootstrap';

const furnitureData = [
  { id: 1, name: 'Кресло', description: 'Удобное мягкое кресло для офиса', price: '5000 руб.', availability: 'В наличии' },
  { id: 2, name: 'Стол', description: 'Большой деревянный стол для кухни', price: '10000 руб.', availability: 'В наличии' },
  { id: 3, name: 'Шкаф', description: 'Просторный шкаф с зеркальными дверями', price: '15000 руб.', availability: 'Нет в наличии' },
  { id: 4, name: 'Диван', description: 'Угловой диван с раскладным механизмом', price: '20000 руб.', availability: 'В наличии' },
];

function FurnitureTable() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 className="text-center mb-4">Мебель в нашем ассортименте</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Описание</th>
            <th>Цена</th>
            <th>Наличие</th>
          </tr>
        </thead>
        <tbody>
          {furnitureData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.availability}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default FurnitureTable;
