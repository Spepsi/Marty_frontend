/**
*
* CameraCapture
*
*/

import React from 'react';
// import styled from 'styled-components';

import Webcam from 'react-webcam';

class CameraCapture extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  capture = () => {
    console.log('capture');
    const imageSrc = this.refs.child.getScreenshot();
    console.log('imageSrc');
  };

  render() {
    return (
      <div>
        <Webcam
          ref="child"
          audio={false}
          screenshotFormat="image/jpeg"
          width={'100%'}
          height={450}
        />
        <button onClick={() => this.capture()}>Capture photo</button>
      </div>
    );
  }
}

CameraCapture.propTypes = {

};

export default CameraCapture;
