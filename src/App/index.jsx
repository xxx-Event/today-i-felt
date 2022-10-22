import React from 'react';
import './style.css';
import FeelingList from '../feelingList';
import FeelingDetail from '../feelingDetail';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FeelingList />
        <FeelingDetail />
      </div>
    );
  }
}

export default App;
