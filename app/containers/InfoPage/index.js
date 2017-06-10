/*
 *
 * InfoPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectPhotoPage from '../PhotoPage/selectors';
import messages from './messages';
import InfoImgSummary from '../../components/InfoImgSummary';
import InfoReco from '../../components/InfoReco';

export class InfoPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <InfoImgSummary
          details={this.props.InfoPage.details}
        />
        <hr />
        <InfoReco />
      </div>
    );
  }
}

InfoPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  InfoPage: makeSelectPhotoPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);
