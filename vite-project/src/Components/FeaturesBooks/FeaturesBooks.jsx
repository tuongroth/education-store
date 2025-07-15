import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { featuredBooksData } from '../../Data/Data';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import TitleTypeOne from '../../Ui/TitleTypeOne/TitleTypeOne';
import { BsArrowReturnRight } from 'react-icons/bs';

const FeaturesBooks = () => {
  return (
    <section className="Featured">
      <div className="container features-book-container">
        <TitleTypeOne
          TitleTop="Some quality items"
          Title="Featured Books"
        />

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          grabCursor={true}
          navigation
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {featuredBooksData.map((book, index) => (
            <SwiperSlide key={index}>
              <div className="featurebook-box">
                <Link to={book.imgLink} className="featurebook">
                  <img src={book.img} alt={book.name} />
                </Link>
                <div className="featurebook-info">
                  <Link to={book.nameLink}>
                    <h5>{book.name}</h5>
                  </Link>
                  <h5><span>{book.price}</span></h5>
                  <div><small>{book.writer}</small></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional horizontal border */}
        <div
          className="feature-border container"
          style={{
            marginTop: '56px',
            height: '1px',
            width: '100%',
            backgroundColor: 'var(--color-dark-Ex)',
          }}
        ></div>

        {/* Button to view all products */}
        <div className="feature-btn-container" style={{ textAlign: 'right' }}>
          <Link
            to="/products"
            className="btn feature-btn"
            onClick={(e) => {
              e.currentTarget.style.backgroundColor = 'black';
              e.currentTarget.style.color = 'white';
            }}
          >
            View all products <BsArrowReturnRight style={{ marginLeft: '6px' }} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBooks;
