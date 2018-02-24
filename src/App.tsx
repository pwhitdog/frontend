import * as React from 'react';
import './App.css';
import LoginComponent from './pages/login/LoginComponent';

const logo = require('./logo.svg');

export interface Props {
    username: string;
    password: string;
    onChangeUsername: (event: React.FormEvent<HTMLInputElement>) => void;
    onChangePassword: (event: React.FormEvent<HTMLInputElement>) => void;
}

export interface State {
    username: string;
    password: string;
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
          <LoginComponent
              username={this.props.username}
              password={this.props.password}
              onChangeUsername={this.props.onChangeUsername}
              onChangePassword={this.props.onChangePassword}
          />

      </div>
    );
  }
}

export default App;
