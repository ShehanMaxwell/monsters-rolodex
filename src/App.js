import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Maxwell',
      company: 'Maxwell Corp',
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Hi {this.state.name}, i own the {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({ name: 'Andrei' });
              console.log(this.state.name);
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
