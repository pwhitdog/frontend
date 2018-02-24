import * as React from 'react';
import './App.css';
import LoginComponent from './pages/login/LoginComponent';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
          <LoginComponent />
      </div>
    );
  }
}

export default App;
