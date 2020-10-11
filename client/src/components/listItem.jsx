import React from 'react';
import { ListItemStyle } from './style/modal';

const ListItem =  (props) => {
  const { savedName, imgList, handleSaveToClick } = props;

  return (
    <ListItemStyle onClick={() => { handleSaveToClick(); }}>
      <img src={imgList[1].url} alt="pic" />
      <div>
        <p className="top">Any time</p>
        <p className="mid">{savedName}</p>
        <p className="bottom">1 Stays</p>
      </div>
    </ListItemStyle>
  )
}

export default ListItem;