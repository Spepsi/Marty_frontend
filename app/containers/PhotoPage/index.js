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
// import messages from './messages';
import CameraFile from '../../components/CameraFile';
import {
  actUploadIdCard,
} from './actions';


export class PhotoPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { files: [] };
  }

  FileDropped = (acceptedFiles) => {
    this.props.UploadIdCard(acceptedFiles);

    this.setState({
      files: this.state.files[0],
    });
  }

  render() {
    console.log(this.props.PhotoPage);
    return (
      <div>
        {this.props.PhotoPage.loading &&
          <div>loading</div>
        }

        {!this.props.PhotoPage.loading &&
        <div>
          <Card style={styles.pitchCard}>
            <CardTitle title="Marty" />
            <CardText>Le text de Rita ! </CardText>
          </Card>
          <div style={styles.photoButton} >
            <CameraFile FileDropped={(file) => this.FileDropped(file)} />
          </div>
        </div>
      }
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
    UploadIdCard: (file) => (dispatch(actUploadIdCard(file))),
  };
}
const styles = {
  photoButton: {
    textAlign: 'center',
    margin: '50% auto',
  },
  pitchCard: {
    marginTop: '70px',
  },
  // backGround: {
  //   backgroundImage: `url(${Background})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'contains',
  //   backgroundPosition: 'center',
  // },
};
export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);
