/**
*
* RecoListItem
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function RecoListItem() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

RecoListItem.propTypes = {

};

export default RecoListItem;
