import React, { Component } from 'react';
import './style.css'; // Подключите стили, если они есть

// Импортируйте изображения
import freeShipping from './images/IMAGE3.png';
import productDesign from './images/IMAGE4.png';
import ecoFriendly from './images/IMAGE5.png';
import craftedInSpain from './images/6IMAGE.png';
import starReviews from './images/le-livret-daccueil-du-copropriйtaire-transformed1.png';

const informationItems = [
  { src: freeShipping, alt: 'shipping', width: 60, height: 30, text: 'Free Shipping', dataI18n: 'shipping-text' },
  { src: productDesign, alt: 'design', width: 50, height: 49, text: 'Awarded Product Design', dataI18n: 'design-text-design' },
  { src: ecoFriendly, alt: 'approach', width: 34, height: 42, text: 'Ecofriendly Approach', dataI18n: 'approach-text-approach' },
  { src: craftedInSpain, alt: 'crafted', width: 47, height: 47, text: 'Crafted in Spain', dataI18n: 'crafted-text' },
  { src: starReviews, alt: 'stars', width: 47, height: 47, text: '4.8 Star Reviews', dataI18n: 'stars-text' }
];

class AboutSection extends Component {
  render() {
    return (
      <section id="About" className="about">
        <div className="information">
          <div className="information-container">
            {informationItems.map((item, index) => (
              <div key={index} className={item.alt}>
                <img alt={item.alt} src={item.src} width={item.width} height={item.height} />
                <h3 data-i18n={item.dataI18n}>{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSection;
