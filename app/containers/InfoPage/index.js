/*
 *
 * InfoPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { makeSelectPhotoPage, makeSelectInfoPage } from './selectors';
import messages from './messages';
import InfoImgSummary from '../../components/InfoImgSummary';
import InfoReco from '../../components/InfoReco';

export class InfoPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { openDetails: false };
  }

  render() {
    return (
      <div style={{ marginBottom: '40px' }}>
        <InfoImgSummary
          Details={this.props.InfoPage.tableau}
          openToggle={() => {
            this.setState({
              openDetails: !this.state.openDetails,
            });
          }}
          openDetails={this.state.openDetails}
        />

        <hr />

        <InfoReco />
      </div>
    );
  }
}

InfoPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // InfoPage: makeSelectPhotoPage(),
  InfoPage: makeSelectInfoPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);
