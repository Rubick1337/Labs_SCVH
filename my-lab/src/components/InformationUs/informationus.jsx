import React from 'react';
import informationItems from '../../data/infromationus.json';
import "./infromtation.css"
export default function AboutSection() {
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
