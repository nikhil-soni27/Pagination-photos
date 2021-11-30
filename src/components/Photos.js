import React from 'react';

const Photos = ({ photos}) => {
  
  return (
    <div className="cards">
    {photos.map((photo) => {
      const { title, url } = photo;
      return (
          <div className="data">
          <h2 className="title"> {title} </h2>
          <img alt="fake-thumbnail" className="image" src={url}></img>
        </div>
      );
    })}
  </div>
  );
};

export default Photos;
