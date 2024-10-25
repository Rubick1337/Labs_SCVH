import Accordion from 'react-bootstrap/Accordion';

function Qfa() {
  return (
    <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Какие материалы используются для изготовления мебели?</Accordion.Header>
    <Accordion.Body>
      Наша мебель изготавливается из высококачественных материалов, таких как натуральное дерево, металл, закаленное стекло и экокожа. Мы тщательно подбираем материалы, чтобы обеспечить долговечность и стильную отделку.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Есть ли гарантия на вашу мебель?</Accordion.Header>
    <Accordion.Body>
      Да, на всю нашу мебель предоставляется гарантия сроком от 1 до 5 лет, в зависимости от категории товара. В течение гарантийного срока мы предлагаем бесплатное сервисное обслуживание.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Как осуществляется доставка мебели?</Accordion.Header>
    <Accordion.Body>
      Мы предоставляем доставку по всей стране. В зависимости от вашего региона, сроки доставки могут варьироваться от 3 до 14 дней. Все крупногабаритные товары доставляются с возможностью сборки на месте.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Могу ли я заказать мебель по индивидуальным размерам?</Accordion.Header>
    <Accordion.Body>
      Да, мы предлагаем услуги изготовления мебели на заказ. Вы можете выбрать материалы, цвета и размеры, которые идеально подойдут для вашего интерьера. Свяжитесь с нами для консультации и расчета стоимости.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

  );
}

export default Qfa;