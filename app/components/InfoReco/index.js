/**
*
* InfoReco
*
*/

import React from 'react';
// import styled from 'styled-components';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '95%',
    height: 450,
    overflowY: 'auto',
    margin: 'auto',
  },
};

function InfoReco({ RecoArray }) {
  return (
    <div>
      <h3>Recommandations</h3>
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        {RecoArray.map((tile, key) => (
          <GridTile
            key={key}
            title={tile.title}
            subtitle={<span>by <b>{tile.author}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img src={tile.src} alt="" />
          </GridTile>
      ))}
      </GridList>
    </div>
  );
}

InfoReco.propTypes = {

};

export default InfoReco;
