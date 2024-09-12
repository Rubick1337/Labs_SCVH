import React, { Component } from 'react';
import Header from './header';  // Импортируем Header
import Footer from './footer';
import Welcome from './welcome'
import Information from './informationus'
class App extends Component {
  render() {
    return (
      <div>
        <Header />  {/* Вставляем компонент Header */}
        <main>
          <Welcome/>
          <Information/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
