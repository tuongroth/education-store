# education-store

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { featuredBooksData } from '../../Data/Data'; // adjust this path as needed
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FeaturesBooks = () => {
  return (
    <section className="features-books-section">
      
        <TitleTypeOne
          TitleTop="Some quality items"
          Title="Featured Books"
        />
       

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          grabCursor={true}
        >
          {featuredBooksData.map((book, index) => (
            <SwiperSlide key={index}>
              <div className="featurebook-box">
                <Link to={book.imgLink}>
                  <img src={book.img} alt={book.name} />
                </Link>
                <div className="featurebook-info">
                  <Link to={book.nameLink}>{book.name}</Link>
                  <h5><span>{book.price}</span></h5>
                  <div><small>{book.writer}</small></div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Swiper Pagination */}
          <div className="swiper-pagination"></div>
        </Swiper>

        {/* Optional border or styling divider */}
        <div className="feature-border container"></div>

        {/* View all products button */}
        <div className="feature-btn-container">
          <Link to="/products" className="btn feature-btn">
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBooks;
