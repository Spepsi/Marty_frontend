/*
 *
 * PhotoPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectPhotoPage from './selectors';
import messages from './messages';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import CameraFile from '../../components/CameraFile';
import backGround from './assets/vermeer.jpg';

export class PhotoPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Card style={styles.pitchCard}>
          <CardTitle title="Marty" />
          <CardText>Le text de Rita ! </CardText>
        </Card>
        <div style={styles.photoButton} >
          <CameraFile />
        </div>
      </div>
    );
  }
}

PhotoPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  PhotoPage: makeSelectPhotoPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
  backGround: {
    backgroundImage: `url(${backGround})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};
export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);
