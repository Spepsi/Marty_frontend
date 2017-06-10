/**
*
* RecoTitle
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function RecoTitle() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

RecoTitle.propTypes = {

};

export default RecoTitle;
