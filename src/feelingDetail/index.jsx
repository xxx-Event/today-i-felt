import React from 'react';
import './style.css';

class FeelingDetail extends React.Component {
  render() {
    return (
      <div className="feeling-detail">
        <div className="title">
          <h1>
            Today
            <br />
            I
            <br />
            Felt
          </h1>
          <div className="owner_name">
            <span>Name:</span>
            <input type="text" maxLength={5} />
          </div>
        </div>
      </div>
    );
  }
}

export default FeelingDetail;
