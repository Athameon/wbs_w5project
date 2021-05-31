import React from 'react';
import Loader from "react-loader-spinner";
export default class LoadingComponent extends React.Component {
  //other logic
  render() {
    return (
      <div style={{textAlign: 'center', marginTop: '50px'}}>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={200}
          width={200}
        />
      </div>
    );
  }
}