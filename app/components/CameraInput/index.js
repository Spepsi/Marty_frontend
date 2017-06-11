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
      <Webcam audio={false} />
    </div>
  );
}

CameraInput.propTypes = {};

export default CameraInput;
