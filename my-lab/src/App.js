import React, { Component } from 'react';
import Header from './components/header';  // Импортируем Header
import Footer from './components/footer';
import Welcome from './components/welcome'
import Information from './components/informationus'
import image from './images/IMAGE.png';
class App extends Component {
  render() {
    return (
      <div>
        <Header logo = {image}/>
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
