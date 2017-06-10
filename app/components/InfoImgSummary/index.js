/**
*
* InfoImgSummary
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function InfoImgSummary({ details }) {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          style={styles.image}
          src={details.imgSrc}
          alt=""
        />
      </div>
      <div style={styles.description}>
        <div>
          <h1 style={styles.title} className="title">{details.title}</h1>
        </div>
        <div>
          <p style={styles.peintre} className="peintre">Black M</p>
          <p style={styles.annee} className="annee">2017</p>
        </div>
      </div>
    </div>
  );
}

InfoImgSummary.propTypes = {};
const styles = {
  container: {
    display: '-webkit-box',
    display: '-moz-box',
    display: '-ms-flexbox',
    display: '-webkit-flex',
    display: 'flex',
    flexFlow: 'row wrap',
  },
  description: {
    width: '60%',
  },
  image: { width: '100%' },
  imageContainer: {
    width: '40%',
    padding: 5,
  },
  title: {
    margin: 0,
    padding: 0,
    paddingRight: '10px',
    fontFamily: 'Roboto, sans-serif',
  },
  peintre: {
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto, sans-serif',
  },
  annee: {
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto, sans-serif',
  },
};
export default InfoImgSummary;
