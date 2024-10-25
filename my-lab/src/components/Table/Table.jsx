import React from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function FurnitureTable() {
  const { t } = useTranslation();

  const furnitureData = [
    { id: 1, name: t('furniture.items.0.name'), description: t('furniture.items.0.description'), price: '5000 руб.', availability: t('furniture.items.0.availability') },
    { id: 2, name: t('furniture.items.1.name'), description: t('furniture.items.1.description'), price: '10000 руб.', availability: t('furniture.items.1.availability') },
    { id: 3, name: t('furniture.items.2.name'), description: t('furniture.items.2.description'), price: '15000 руб.', availability: t('furniture.items.2.availability') },
    { id: 4, name: t('furniture.items.3.name'), description: t('furniture.items.3.description'), price: '20000 руб.', availability: t('furniture.items.3.availability') },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 className="text-center mb-4">{t('furniture.title')}</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>{t('furniture.columns.id')}</th>
            <th>{t('furniture.columns.name')}</th>
            <th>{t('furniture.columns.description')}</th>
            <th>{t('furniture.columns.price')}</th>
            <th>{t('furniture.columns.availability')}</th>
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
