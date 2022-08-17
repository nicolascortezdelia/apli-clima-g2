import React from 'react';

const Card = ({clima}) => {
  return (
    {clima.map((item) => (
        <div className="card container" >
        <p>{item.name}</p>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
        </div>
        </div>
    ))}
    
  );
};

export default Card;
