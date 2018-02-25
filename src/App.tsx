import * as React from 'react';
import './App.css';
import LoginComponent from './pages/login/LoginComponent';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <LoginComponent />
      </div>
    );
  }
}

export default App;
