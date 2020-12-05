import React from 'react';
import { RankStyled } from './RankStyled.js';

export const Rank = props => {
  const {name, entries} = props.currentUser;
  return (
      <RankStyled>
        <p>{`${name}, your current rank is ...`}</p>
        <p>{`#${entries}`}</p>
      </RankStyled>
  );
}
