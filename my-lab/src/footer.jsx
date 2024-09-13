import React, { Component } from 'react';
import './style.css'; // Подключение стилей
import visa from './images/visa.png';
import paypal from './images/paypal.png';
import master from './images/master.png';
import american from './images/american.png';
import klama from './images/klama.png'; 
import fsc from '../src/images/fsc.png';
import oneTree from '../src/images/one-tree.png';
import trustpilot from '../src/images/trustpilot.png';
import LinkSection from './links-footer';
const paymentImages = [
    { src: visa, alt: 'visa', width: 66, height: 28 },
    { src: paypal, alt: 'paypal', width: 66, height: 28 },
    { src: master, alt: 'master', width: 66, height: 28 },
    { src: american, alt: 'american', width: 66, height: 28 },
    { src: klama, alt: 'klama', width: 66, height: 28 }
  ];

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-footer">
          <div className="contatcs">
            <LinkSection/>
            <div className="raiting-company">
              <div className="text-raiting">
                <h3 data-i18n="footer-news-title">Don’t miss any news and exclusive offers!</h3>
              </div>
              <button className="button-newsletter" data-i18n="footer-newsletter-button">Newsletter subscription</button>
              <div className="Newsletter-img">
                <img src={fsc} alt="fsc" width="66" height="66" />
                <img src={oneTree} alt="one-tree" width="66" height="66" />
              </div>
              <div className="trustpilot-img">
                <img src={trustpilot} alt="trustpilot" width="239" height="45" />
              </div>
            </div>
          </div>
          <div className="payment">
            <div className="tm-company">
              <h3 data-i18n="footer-copyright">© Copyright – WOODENDOT 2021</h3>
            </div>
<div className="payment-img">
  {paymentImages.map((image, index) => (
    <img
      key={index}
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
    />
  ))}
</div>
            <div className="text-payment">
              <h3 data-i18n="footer-terms">Terms & Conditions | Privacy Policy & Cookies</h3>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
