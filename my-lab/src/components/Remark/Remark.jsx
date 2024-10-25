import React from 'react';
import { Toast } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './remark.css';

function ReviewsSection() {
  const { t } = useTranslation();
  
  // Обновляем массив отзывов, чтобы использовать ключи для перевода
  const reviews = [
    { id: 1, nameKey: 'reviews.review1.name', textKey: 'reviews.review1.text' },
    { id: 2, nameKey: 'reviews.review2.name', textKey: 'reviews.review2.text' },
    { id: 3, nameKey: 'reviews.review3.name', textKey: 'reviews.review3.text' },
  ];

  return (
    <section style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>{t('reviews.title')}</h2>
      <div className="position">
        {reviews.map((item) => (
          <Toast key={item.id} className="mb-3">
            <Toast.Header closeButton={false}>
              {/* Используем функцию t для получения имени отзыва */}
              <strong className="me-auto">{t(item.nameKey)}</strong>
            </Toast.Header>
            <Toast.Body>
              {/* Используем функцию t для получения текста отзыва */}
              {t(item.textKey)}
            </Toast.Body>
          </Toast>
        ))}
      </div>
    </section>
  );
}

export default ReviewsSection;
