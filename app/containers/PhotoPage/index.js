/*
 *
 * PhotoPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import makeSelectPhotoPage from './selectors';
const Halogen = require('halogen');
// import messages from './messages';
import CameraFile from '../../components/CameraFile';
import CameraInput from '../../components/CameraInput';
import { actUploadPicture } from './actions';

export class PhotoPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { files: [] };
  }

  FileDropped = (acceptedFiles) => {
    this.props.UploadIdCard(acceptedFiles);

    this.setState({
      files: this.state.files[0],
    });
  };

  render() {
    console.log(this.props.PhotoPage);
    return (
      <div>
        {this.props.PhotoPage.loading &&
          <div style={styles.loader}>
            <Halogen.PacmanLoader color={'#4DAF7C'} />
          </div>}

        {!this.props.PhotoPage.loading &&
          <div className="mainphoto" style={styles.mainphoto}>
            {/* <Card style={styles.pitchCard}>
            <CardTitle title="Marty" />
            <CardText>Le text de Rita ! </CardText>
          </Card>*/}
            <div style={styles.photoButton} className="photoButton">
              <CameraFile FileDropped={(file) => this.FileDropped(file)} />
            </div>
            <div style={styles.cameraInput} className="cameraInput">
              <CameraInput />
            </div>
          </div>}
      </div>
    );
  }
}

PhotoPage.propTypes = {
  UploadIdCard: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  PhotoPage: makeSelectPhotoPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    UploadIdCard: (file) => dispatch(actUploadPicture(file)),
  };
}
const styles = {
  mainphoto: {
    position: 'relative',
  },
  photoButton: {
    position: 'absolute',
    textAlign: 'center',
    left: '42%',
    top: '375px',
  },
  pitchCard: {
    marginTop: '70px',
  },
  loader: {
    width: '70px',
    margin: '50% auto',
  },
  cameraInput: {
    position: 'absolute',
    top: '0px',
  },
};
export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);
