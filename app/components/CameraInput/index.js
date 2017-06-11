/**
*
* CameraInput
*
*/

import React from 'react';
import Webcam from 'react-webcam';
// import styled from 'styled-components';

function CameraInput() {
  // const setRef = (webcam) => {
  //   this.webcam = webcam;
  // };
  //
  const capture = () => {
    console.log('capture');
    const imageSrc = this.refs.child.getScreenshot();
    console.log('imageSrc');
  };

  return (
    <div>
      <Webcam
        ref="child"
        audio={false}
        screenshotFormat="image/jpeg"
        width={'100%'}
        height={450}
      />
      <button onClick={() => capture()}>Capture photo</button>
    </div>
  );
}

CameraInput.propTypes = {};

export default CameraInput;


// <Webcam
//          audio={false}
//          height={350}
//          ref={this.setRef}
//          screenshotFormat="image/jpeg"
//          width={350}
//        />
