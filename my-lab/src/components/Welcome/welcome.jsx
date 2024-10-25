import React, { Component } from 'react';
import '../Welcome/welcome.css'; // Подключение стилей, если есть
import Qfa from '../QFA/QFA'
import Task from '../Task/Task'
import Reamrk from '../Remark/Remark'
class WelcomeSection extends Component {
  render() {
    return (
      <>
      <section className="welcome background-size">
        <div className="text-welcome">
          <h2>
            Furniture designed to live in harmony, creating distinctive and
            <br />
            timeless spaces
          </h2>
          <button className="button-welcome" id="link-order">
            Discover now
          </button>
        </div>
        <div className="welcome-board">
          <h3>Do you know what is your decor style?</h3>
        </div>
      </section>
      <Qfa/>
      <Task/>
      <Reamrk/>
      </>
    );
  }
}

export default WelcomeSection;
