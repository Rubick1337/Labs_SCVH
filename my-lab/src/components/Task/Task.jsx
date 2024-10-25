import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function CompanyGoal() {
  const { t } = useTranslation();
  const goalCompletion = 75; 

  return (
    <section style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{t('welcome.ourGoal')}</h2>
      <p>
        {t('welcome.goalDescription')}
      </p>
      <h4>{t('welcome.goalProgress', { percentage: goalCompletion })}</h4>
      <ProgressBar now={goalCompletion} label={`${goalCompletion}%`} style={{ height: '25px', width: '70%', margin: '0 auto' }} />
    </section>
  );
}

export default CompanyGoal;
