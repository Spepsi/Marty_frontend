/**
*
* CameraInput
*
*/

import React from 'react';
// import styled from 'styled-components';


function CameraInput() {
  return (
    <div>
    Camera Input
      <video autoPlay className="hidden"></video>
      <img />
      <canvas className="hidden"></canvas>
    </div>
  );
}

CameraInput.propTypes = {

};

export default CameraInput;
