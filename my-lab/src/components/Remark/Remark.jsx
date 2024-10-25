import React from 'react';
import { Toast} from 'react-bootstrap';
import "../Remark/remark.css"
function ReviewsSection() {
  const reviews = [
    { id: 1, name: "Алексей", review: "Отличная мебель! Качество на высшем уровне, буду рекомендовать друзьям!" },
    { id: 2, name: "Марина", review: "Быстрая доставка и отличный сервис! Спасибо за отличную работу!" },
    { id: 3, name: "Иван", review: "Хорошие цены и большой выбор. Очень доволен покупкой." },
  ];

  return (
    <section style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Отзывы наших клиентов</h2>
      <div className="postion">
        {reviews.map((item) => (
          <Toast key={item.id} className="mb-3">
            <Toast.Header closeButton={false}>
              <strong className="me-auto">{item.name}</strong>
            </Toast.Header>
            <Toast.Body>{item.review}</Toast.Body>
          </Toast>
          
        ))}
        </div>
    </section>
  );
}

export default ReviewsSection;
