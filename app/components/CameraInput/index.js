/**
*
* CameraInput
*
*/

import React from 'react';
import Webcam from 'react-webcam';
// import styled from 'styled-components';

function CameraInput() {
  return (
    <div>
      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        width={'100%'}
        height={450}
      />
    </div>
  );
}

CameraInput.propTypes = {};

export default CameraInput;
