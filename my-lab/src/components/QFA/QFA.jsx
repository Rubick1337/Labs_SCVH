import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';

function Qfa() {
  const { t } = useTranslation();

  return (
    <section style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>{t('qfa.title')}</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{t('qfa.materialQuestion')}</Accordion.Header>
          <Accordion.Body>
            {t('qfa.materialDescription')}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>{t('qfa.warrantyQuestion')}</Accordion.Header>
          <Accordion.Body>
            {t('qfa.warrantyDescription')}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>{t('qfa.deliveryQuestion')}</Accordion.Header>
          <Accordion.Body>
            {t('qfa.deliveryDescription')}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>{t('qfa.customOrderQuestion')}</Accordion.Header>
          <Accordion.Body>
            {t('qfa.customOrderDescription')}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default Qfa;
