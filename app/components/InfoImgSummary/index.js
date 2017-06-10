/**
*
* InfoImgSummary
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function InfoImgSummary() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

InfoImgSummary.propTypes = {

};

export default InfoImgSummary;
