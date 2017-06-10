/*
 *
 * PhotoPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectPhotoPage from './selectors';
import messages from './messages';

import CameraFile from '../../components/CameraFile';

export class PhotoPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);
