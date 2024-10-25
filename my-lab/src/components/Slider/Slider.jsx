import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ocean from '../../images/alada.png';

export default function Slider() {
  const { t } = useTranslation();

  return (
    <Carousel>
      <Carousel.Item style={{ height: 'auto' }}>
        <img className="d-block w-100" src={ocean} alt="First slide" />
        <Carousel.Caption>
          <h3>{t('slider.firstSlide.title')}</h3>
          <p>{t('slider.firstSlide.description')}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: 'auto' }}>
        <img className="d-block w-100" src={ocean} alt="Second slide" />
        <Carousel.Caption>
          <h3>{t('slider.secondSlide.title')}</h3>
          <p>{t('slider.secondSlide.description')}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: 'auto' }}>
        <img className="d-block w-100" src={ocean} alt="Third slide" />
        <Carousel.Caption>
          <h3>{t('slider.thirdSlide.title')}</h3>
          <p>{t('slider.thirdSlide.description')}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
