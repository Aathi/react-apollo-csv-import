import React from 'react';
import NavBar from './components/nav';

const App = props => ({
  render() {
    return (
      <div >
        <NavBar />
        <main style={{marginTop: 60}}>{props.children}</main>
      </div>
    );
  }
});

export default App;
