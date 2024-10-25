import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';
import '../Welcome/welcome.css'; // Подключение стилей, если есть
import Qfa from '../QFA/QFA';
import Task from '../Task/Task';
import Remark from '../Remark/Remark';

const WelcomeSection = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <section className="welcome background-size">
        <div className="text-welcome">
          <h2>
            {t('welcome.title')}
          </h2>
          <button className="button-welcome" id="link-order">
            {t('welcome.discover')}
          </button>
        </div>
        <div className="welcome-board">
          <h3>{t('welcome.decorStyleQuestion')}</h3>
        </div>
      </section>
      <Qfa />
      <Task />
      <Remark />
    </>
  );
}

export default WelcomeSection;
