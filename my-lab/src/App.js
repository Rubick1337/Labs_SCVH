import React, { Component } from 'react';
import Header from './header';  // Импортируем Header
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />  {/* Вставляем компонент Header */}
        <main>
          <p>Welcome to my website!</p>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
