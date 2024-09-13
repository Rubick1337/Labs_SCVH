import React from 'react';

class ContactsSection extends React.Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default ContactsSection;