import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "../styles/styles.css"

interface Painting {
    id: number;
    picture: string;
    title: string;
    price: string;
    status: string;
}


const PaintingCard: React.FC<{paintingData: Painting}> = ({paintingData}) => {
  return (
<div className="card">
    <div className="background-img-white">
      <div className="background-img" style={{backgroundImage: `url(${paintingData.picture})`}}>
        <div className="background-img-black">
          <div className="box">
            <div className="content">
              <h2>{paintingData.price}₽</h2>
              <h3>{paintingData.title}</h3>
              <Link to={`/paintings/${paintingData.id}/`}>
                <Button variant="primary" className="full-red-button">Подробнее</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

  )
}

export default PaintingCard