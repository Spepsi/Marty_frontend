/**
*
* CameraFile
*
*/

import React from 'react';
import Dropzone from 'react-dropzone';
import ImageCamera from 'material-ui/svg-icons/image/camera';
import FloatingActionButton from 'material-ui/FloatingActionButton';

function CameraFile() {
  return (
    <div>
      <Dropzone
        className="button-blue button-large continueButton"
        accept="image/jpeg, image/png"
        onDrop={(acceptedFiles) => this.FileDropped(acceptedFiles)}
      >
        <FloatingActionButton ><ImageCamera /></FloatingActionButton>
      </Dropzone>
    </div>
  );
}

CameraFile.propTypes = {

};

export default CameraFile;
