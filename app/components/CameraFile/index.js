/**
*
* CameraFile
*
*/

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dropzone from 'react-dropzone';
import ActionAndroid from 'material-ui/svg-icons/action/android';

function CameraFile() {
  return (
    <div>
      <Dropzone
        className="button-blue button-large continueButton"
        accept="image/jpeg, image/png"
        onDrop={(acceptedFiles) => this.FileDropped(acceptedFiles)}
      >
        <RaisedButton
          labelPosition="before"
          primary
          icon={<ActionAndroid />}
        />
      </Dropzone>
    </div>
  );
}
// <input type="submit" />

CameraFile.propTypes = {

};

export default CameraFile;
