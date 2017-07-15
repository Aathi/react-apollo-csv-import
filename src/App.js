import React from 'react';

const App = props => ({
  render() {
    return (
      <div >
        <main style={{marginTop: 60}}>{props.children}</main>
      </div>
    );
  }
});

export default App;
