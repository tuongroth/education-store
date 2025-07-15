import React from 'react';
import './Quotes.css';
import { quoteData } from '../../Data/Data';
import victor from '../../assets/victor.png';

const Quote = () => {
  return (
    <section className='Quote'>
      <div className="container quote-container">

        {/* Tiêu đề + ảnh victor căn giữa */}
        <div className="titleTypeTwo Quote-title" style={{ textAlign: 'center' }}>
          <h2>Quote of the day</h2>
          <img
            src={victor}
            alt="Victor"
            className="victor"
            style={{ display: 'block', margin: '12px auto', width: '80px' }}
          />
        </div>

        {/* Danh sách quotes */}
        {quoteData.map(({ quote, speaker }, index) => (
          <article key={index}>
            <p>{quote}</p>
            <h5>{speaker}</h5>
          </article>
        ))}

      </div>
    </section>
  );
};

export default Quote;
