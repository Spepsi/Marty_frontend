/**
*
* CameraFile
*
*/

import React from 'react';
import Dropzone from 'react-dropzone';
import ImageCamera from 'material-ui/svg-icons/image/camera';
import FloatingActionButton from 'material-ui/FloatingActionButton';

function CameraFile({ FileDropped }) {
  return (
    <div>
      <Dropzone
        className="button-blue button-large continueButton"
        accept="image/jpeg, image/png"
        onDrop={(file) => FileDropped(file)}
      >
        <FloatingActionButton ><ImageCamera /></FloatingActionButton>
      </Dropzone>
    </div>
  );
}
// <input type="submit" />

CameraFile.propTypes = {

};

export default CameraFile;
