import React from 'react';
import { ProgressBar } from 'react-bootstrap';

function CompanyGoal() {
  const goalCompletion = 75; 

  return (
    <section style={{ padding: '20px', textAlign: 'center',}}>
      <h2>Наша цель</h2>
      <p>
        Мы стремимся к тому, чтобы наши клиенты были полностью удовлетворены качеством нашей мебели и услуг.
        Наша цель — достичь 100% удовлетворенности клиентов, предлагая лучшие решения для современного интерьера.
      </p>
      <h4>Прогресс выполнения цели: {goalCompletion}%</h4>
      <ProgressBar now={goalCompletion} label={`${goalCompletion}%`} style={{ height: '25px', width: '70%', margin: '0 auto' }} />
    </section>
  );
}

export default CompanyGoal;
