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
            <div className="about-skills About-size">
              <div className="title-contacts">
                <h2 data-i18n="footer-about-title">About</h2>
              </div>
              <div className="text-contacts">
                <a href="#" data-i18n="footer-about-us">About Us</a>
                <a href="#" data-i18n="footer-design">Design</a>
                <a href="#" data-i18n="footer-sustainability">Sustainability</a>
                <a href="#" data-i18n="footer-plant-trees">We plant trees</a>
                <a href="#" data-i18n="footer-our-story">Our Story</a>
                <a href="#" data-i18n="footer-awards">Awards</a>
              </div>
            </div>
            <div className="about-skills contacts-size">
              <div className="title-contacts">
                <h2 data-i18n="footer-help-title">Help</h2>
              </div>
              <div className="text-contacts">
                <a href="#" data-i18n="footer-holiday-offers-faq">Holiday Offers FAQ</a>
                <a href="#" data-i18n="footer-faq">FAQ</a>
                <a href="#" data-i18n="footer-warranty">Warranty</a>
                <a href="#" data-i18n="footer-shipments">Shipments</a>
                <a href="#" data-i18n="footer-returns-claims">Returns & Claims</a>
                <a href="#" data-i18n="footer-contact-us">Contact us</a>
              </div>
            </div>
            <div className="about-skills More-size">
              <div className="title-contacts">
                <h2 data-i18n="footer-more-title">More</h2>
              </div>
              <div className="text-contacts">
                <a href="#" data-i18n="footer-where-to-find-us">Where to find us</a>
                <a href="#" data-i18n="footer-family">Woodendot Family</a>
                <a href="#" data-i18n="footer-press">Press</a>
                <a href="#" data-i18n="footer-affiliates">Affiliates</a>
                <a href="#" data-i18n="footer-video-lifestyle">Video Lifestyle</a>
              </div>
            </div>
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
