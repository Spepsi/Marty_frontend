/**
*
* ImgListItem
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ImgListItem() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ImgListItem.propTypes = {

};

export default ImgListItem;
