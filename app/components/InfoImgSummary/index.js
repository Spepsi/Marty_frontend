/**
*
* InfoImgSummary
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FlatButton from 'material-ui/FlatButton';

function InfoImgSummary({ Details, openToggle, openDetails }) {
  const getButtonString = () => openDetails ? 'refermer' : "Plus d'Infos";
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          style={styles.image}
          src={Details.src}
          alt=""
        />
      </div>
      <div style={styles.description}>
        <div>
          <h1 style={styles.title} className="title">{Details.title}</h1>
        </div>
        <div>
          <p style={styles.peintre} className="peintre">{Details.author}</p>
          <p style={styles.annee} className="annee">{Details.date}</p>
        </div>
      </div>
      <FlatButton label={getButtonString()} onTouchTap={() => openToggle()} />
      {openDetails &&
      <div>
        <p>Artiste : {Details.author} ({Details.borndied})</p>
        <p>Titre : {Details.title}</p>
        <p>Date : {Details.date}</p>
        <p>Technique : {Details.technique}</p>
        <p>Musée : {Details.location}</p>
        <p>Type : {Details.form}</p>
        <p>Genre : {Details.type}</p>
        <p>Ecole : {Details.school}</p>
        <p>Période : {Details.timeline}</p>
      </div>
    }
    </div>
  );
}

InfoImgSummary.propTypes = {};
const styles = {
  container: {
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
