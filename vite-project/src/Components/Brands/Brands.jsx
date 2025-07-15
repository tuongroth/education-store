import React from 'react';
import './Brands.css';
import { brandsData } from '../../Data/Data';

export default function Brands() {
  return (
    <section className="Brands">
      <div className="container brands-container">
        {
          brandsData.map(({ img }, index) => (
            <div className="brand" key={index}>
              <img src={img} alt={`brand-${index}`} />
            </div>
          ))
        }
      </div>
    </section>
  );
}
